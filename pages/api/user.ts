import { NextApiRequest, NextApiResponse } from 'next';

import { firebaseAdmin } from 'lib/firebaseAdmin';

export default async function handler(req: NextApiRequest, res: NextAPIResponse) {
  const auth = firebaseAdmin.auth()
  const store = firebaseAdmin.firestore()
  const { method, cookies } = req
  const token = cookies.token

  let uid;
  try {
    const verifiedToken = await auth.verifyIdToken(token)
    uid = verifiedToken.uid
  } catch(e) {
    res.status(405).json(e)
    return
  }

  switch(method) {
    case 'GET':
      const userdata = store.collection('users').doc(uid).get().data()
      res.status(200).json(userdata) // TODO: Only send what is necessary
      break
  }
}