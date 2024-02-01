import React, { useState, useEffect } from "react";
import "./App.css";
import EmailSidebar from "./components/EmailSidebar";
import EmailBody from "./components/EmailBody";

function App() {
  const [emails, setEmails] = useState([]);
  const [activeEmailId, setActiveEmailId] = useState(null);

  useEffect(() => {
    fetchEmails();
  }, []);

  const fetchEmails = async () => {
    try {
      const response = await fetch(
        "https://gist.githubusercontent.com/mrchenliang/15e1989583fd6e6e04e1c49287934c91/raw/ed03cfea1e2edb0303543d2908cd7429ed75580d/email.json"
      );
      const data = await response.json();
      // Initialize all emails as 'unread' when fetched
      const initialEmails = data.map((email) => ({ ...email, read: false }));
      setEmails(initialEmails);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  const handleEmailClick = (email) => {
    // Mark clicked email as 'active'
    setActiveEmailId(email.id);
    // Mark clicked email as 'read'
    const updatedEmails = emails.map((e) => {
      if (e.id === email.id) {
        return { ...e, read: true };
      }
      return e;
    });
    setEmails(updatedEmails);
  };

  return (
    <div className="App">
      <EmailSidebar
        emails={emails}
        onEmailClick={handleEmailClick}
        activeEmailId={activeEmailId}
      />
      <EmailBody email={emails.find((email) => email.id === activeEmailId)} />
    </div>
  );
}

export default App;
