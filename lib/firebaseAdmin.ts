import firebaseAdmin from 'firebase-admin';
// import 'server-only'; // commented out to avoid next 13 bug (https://github.com/vercel/next.js/issues/43700)

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert({
      privateKey: JSON.parse(process.env.FIREBASE_PRIVATE_KEY || ''),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
  });
}

export { firebaseAdmin };