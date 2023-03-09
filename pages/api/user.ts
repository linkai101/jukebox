import { NextApiRequest, NextApiResponse } from 'next';

import { firebaseAdmin } from 'lib/firebaseAdmin';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const auth = firebaseAdmin.auth();
  const firebase = firebaseAdmin.firestore();
  const { method, headers } = req;
  const token = headers.token;

  if (!token) {
    res.status(405).json({ error: 'No token provided' });
    return;
  }

  switch (method) {
    case 'GET':
      try {
        // only user can read their own data
        const decodedToken = await auth.verifyIdToken(token as string);
        const { uid } = decodedToken;
        const authData = await auth.getUser(uid);

        // const profile = await firebase.collection('users').doc(uid).get();
        res.status(200).json({
          // profile: profile.data(),
          ...authData
        });
      }
      catch (e) {
        // token didn't exist or verification failed
        res.status(405).json(e);
      }
      break;
    // case 'POST':
    //   try {
    //     const { token, user } = req.query;
    //     // only user can update their own data
    //     const decodedToken = await firebaseAdmin.auth().verifyIdToken(token as string);
    //     const { uid } = decodedToken;

    //     await firebase.collection('users').doc(uid).set(user);
    //     res.status(200).json({ user });
    //   }
    //   catch (e) {
    //     // token didn't exist or verification failed
    //     res.status(405).json(e);
    //   }
    //   break;
    default:
      res.setHeader("Allow", ["GET"/*, "POST"*/]);
      res.status(405).end(`Method ${method} Not Allowed`);
      break;
  }
}