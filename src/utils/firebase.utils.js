import { initializeApp } from 'firebase/app';

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

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object[field].toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
};
