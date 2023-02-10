import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {

    const styles={
        loader:{
            position:"absolute",
            display:"flex",
            margin:"auto",
            top:"50%",
            left:"50%"
        }
    }
  return (
    <div className="m-4 " style={styles.loader}   >
      <Spinner   animation="border" variant="success"  />
    </div>
  );
};
export default Loading;
