import { initializeApp } from 'firebase/app';

import { 
  getAuth,
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLHp3iawiCeqc8eAIKEvYb6PK8eQXrPjE",
  authDomain: "abode-group-db.firebaseapp.com",
  projectId: "abode-group-db",
  storageBucket: "abode-group-db.appspot.com",
  messagingSenderId: "364097386790",
  appId: "1:364097386790:web:a121d829d9be096b4029e7"
};

const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'title') => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getPropertiesAndDocuments = async () => {
  const collectionRef = collection(db, 'properties');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const propertyMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, units } = docSnapshot.data();
    acc[title.toLowerCase()] = units;
    return acc;
  }, {});
  return propertyMap;
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()) {

    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt, 
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);
