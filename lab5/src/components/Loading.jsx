import React from "react";
import "bootstrap/dist/css/bootstrap-grid.rtl.min.css";

const Spinner = () => (
  <div className="spinner-wrapper">
    <div className="custom-spinner" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

const Loading = ({ isLoading, children }) => (
  <>{isLoading ? <Spinner /> : children}</>
);

export default Loading;
