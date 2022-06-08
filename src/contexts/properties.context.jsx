import { createContext, useEffect, useState } from 'react';

import { addCollectionAndDocuments, getPropertiesAndDocuments } from '../utils/firebase/firebase.utils.js';

// import PROPERTY_DATA from '../property-data.js';

export const PropertiesContext = createContext({
  PropertiesMap: {},
});

export const PropertiesProvider = ({ children }) => {

  const [propertiesMap, setPropertiesMap] = useState({});

  // useEffect(() => {
  //   addCollectionAndDocuments('properties', PROPERTY_DATA);
  // },[]);

  useEffect(() => {
    const getPropertiesMap = async () => {
      const propertyMap = await getPropertiesAndDocuments();
      setPropertiesMap(propertyMap)
    };

    getPropertiesMap();
  },[]);

  const value = { propertiesMap };
  
  return <PropertiesContext.Provider value={value}>{children}</PropertiesContext.Provider>
}