import React from 'react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const LoadingScreen = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#00BFFF"
      height={50}
      width={50}
      timeout={1000}
    />
  );
};

export default LoadingScreen;
