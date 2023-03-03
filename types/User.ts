import { firebase } from 'lib/firebaseClient';

// extends firebase auth user type -- https://firebase.google.com/docs/reference/js/v8/firebase.User
export default interface User extends firebase.User {
  bio: string;
}