import { NextApiRequest, NextApiResponse } from 'next';

import { firebaseAdmin } from 'lib/firebaseAdmin';

export default async function handler(req:NextApiRequest, res: NextApiResponse) {
  const firebase = firebaseAdmin.firestore();

  return new Promise<void>((resolve, reject) => {
    firebase
    .collection('users')
    .get()
    .then((users) => {
      res.status(200).json({ users: users.docs.map((doc) => doc.data()) });
      res.end();
      resolve();
    })
    .catch((e) => {
      res.status(405).json(e);
      res.end();
      resolve();
    });
  });
}