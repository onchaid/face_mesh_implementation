// FaceDataProvider.js
import React, { useState } from 'react';
import FaceDataContext from './FaceDataContext';

const FaceDataProvider = ({ children }) => {
  const [faceData, setFaceData] = useState([]); // Initial state for face data

  // You can provide methods to update the context data here

  return (
    <FaceDataContext.Provider value={{ faceData, setFaceData }}>
      {children}
    </FaceDataContext.Provider>
  );
};

export default FaceDataProvider;