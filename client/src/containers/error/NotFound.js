import React from "react";

const NotFound = () => {
    return (
        <div>
            <div className="container col-md-8 text-center">
                <h1 className="mt-5" style={{fontSize: 100}}> Oops!</h1>
                <h2 className="mb-4 title">We can't seem to find the page you're looking for.</h2>
            </div>
            <div className="container col-md-8 title">
                <p className=""> Error code: 404</p>
                <p className=""> Here are some helpful links Instead:</p>
                <p className=""> Home</p>
                <p className=""> Project</p>
                <p className=""> Resume</p>
                <p className=""> About</p>
                <p className=""> Contact</p>
            </div>
        </div>
    )
}

export default NotFound;