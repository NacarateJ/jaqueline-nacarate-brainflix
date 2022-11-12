import "./successPage.scss";
import "../../components/header/Header"
import { Link } from "react-router-dom";
import React from "react";


const  SuccessPage = () => {
    return (
      <div className="wrapper__success">
        <h2 className="text__success">Upload Successful!</h2>
          <Link to="/">
            <button className="button__ok" type="button">
              OK</button>
          </Link>
      </div>
    );
}


export default SuccessPage;