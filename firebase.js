import firebase from 'react-native-firebase';

const database = firebase.database();

export const homesRef = database.ref('homes');
export const patrolsRef = database.ref('patrols');

export default firebase;