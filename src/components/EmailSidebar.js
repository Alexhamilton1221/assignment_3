import React from "react";
import "./EmailSidebar.css";

function EmailSidebar({ emails, onEmailClick, activeEmailId }) {
  return (
    <div className="EmailSidebar">
      <h2 className="sidebar-title">Emails</h2>
      <ul>
        {emails.map((email) => (
          <li
            key={email.id}
            className={`email-item ${email.read ? "read" : "unread"} ${
              email.id === activeEmailId ? "active" : ""
            }`}
            onClick={() => onEmailClick(email)}
          >
            <div>{email.from}</div>
            <div>{email.subject}</div>
            <div>{email.address}</div>
            <div>{email.timestamp}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmailSidebar;
