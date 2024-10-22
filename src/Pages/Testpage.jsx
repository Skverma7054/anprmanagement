// src/App.js
import React, { useEffect, useState } from "react";

const App = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const eventSource = new EventSource("http://localhost:5000/api/alerts");

    eventSource.onmessage = (event) => {
      const alert = JSON.parse(event.data);
      setAlerts((prevAlerts) => [...prevAlerts, alert]);
    };

    return () => {
      eventSource.close();
    };
  }, []);

  return (
    <div>
      <h1>Hikvision Motion Detected Alerts</h1>
      <ul>
        {alerts.map((alert, index) => (
          <li key={index}>{JSON.stringify(alert)}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
