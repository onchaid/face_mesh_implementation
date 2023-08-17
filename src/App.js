/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState, useContext } from "react";
import "@tensorflow/tfjs";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/face_mesh";
import Webcam from "react-webcam";
import { RunDetector } from "./utils/detector";
import FaceDataContext from "./context/FaceDataContext";

function App() {
  const inputResolution = {
    width: 1080,
    height: 900,
  };
  const videoConstraints = {
    width: inputResolution.width,
    height: inputResolution.height,
    facingMode: "user",
  };
  const { faceData, setFaceData } = useContext(FaceDataContext);
  const canvasRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [flag, setFlag] = useState(false);
  const [faceDataArraysMatrix, setFaceDataArraysMatrix] = useState([])

  const handleVideoLoad = (videoNode) => {
    const video = videoNode.target;
    if (video.readyState !== 4) return;
    if (loaded) return;
    RunDetector(video, canvasRef.current, faceData, setFaceData);
    setLoaded(true);
  };

  const validateFaceData = () => {
    let faceDataArrays = []

    if(faceData.length !== 0 ) {
      for (let i = 0; faceDataArrays.length < 1024; i++) {
        faceDataArrays.push(...faceData[0].keypoints);
      
        if (i >= 1024 / faceData.length) {
          break;
        }
      }
    }
    return faceDataArrays
  }

  useEffect(() => {    
    if(faceData && faceData[0] && loaded && !flag) {
      const validated = validateFaceData();
      setFaceDataArraysMatrix(validated)
      setFlag(true)
    }
  }, [faceData, loaded, flag]);

  useEffect(() => {
    if(faceDataArraysMatrix.length >= 0 && flag && loaded) {
      console.log('*** faceDataArraysMatrix', faceDataArraysMatrix)
      setFlag(false)
    }
  },[loaded, flag, faceDataArraysMatrix])

  return (
    <div>
      <Webcam
        width={inputResolution.width}
        height={inputResolution.height}
        style={{ visibility: "hidden", position: "absolute" }}
        videoConstraints={videoConstraints}
        onLoadedData={handleVideoLoad}
      />
      <canvas
        ref={canvasRef}
        width={inputResolution.width}
        height={inputResolution.height}
        style={{ position: "absolute" }}
      />
      {loaded ? <></> : <header>Loading...</header>}
    </div>
  );
}

export default App;
