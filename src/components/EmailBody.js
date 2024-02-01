import React from "react";
import "./EmailBody.css";

function EmailBody({ email }) {
  return (
    <div className="EmailBody">
      {email ? (
        <>
          <h2>{email.subject}</h2>

          <div>{email.from}</div>
          <div>{email.subject}</div>
          <div>{email.address}</div>
          <div>{email.time}</div>
          <div>{email.message}</div>
        </>
      ) : (
        <p>No Email Selected</p>
      )}
    </div>
  );
}

export default EmailBody;
