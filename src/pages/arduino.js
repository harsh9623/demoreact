import React, { useState } from "react";
import "./arduino.css";

const ArduinoControl = () => {
  const [status, setStatus] = useState("Not Connected");
  let port;
  let writer;

  const connectArduino = async () => {
    try {
      port = await navigator.serial.requestPort();
      await port.open({ baudRate: 9600 });
      writer = port.writable.getWriter();
      setStatus("Connected");
    } catch (error) {
      console.error("Connection Error: ", error);
      alert("Failed to connect. Try again.");
    }
  };

  const sendCommand = async (command) => {
    if (port && writer) {
      try {
        const data = new TextEncoder().encode(command);
        await writer.write(data);
        setStatus(`Sprinkler ${command === "1" ? "OFF" : "ON"}`);
      } catch (error) {
        console.error("Error sending command:", error);
        alert("Error sending command. Try again.");
      }
    } else {
      alert("Connect to Arduino first!");
    }
  };

  const disconnect = async () => {
    if (port) {
      await writer.releaseLock();
      await port.close();
      setStatus("Disconnected");
      port = null;
      writer = null;
    }
  };

  window.addEventListener("beforeunload", disconnect);

  return (
    <div className="container">
      <h1>Arduino Sprinkler Control</h1>
      <button className="connect-btn" onClick={connectArduino}>
        Connect to Arduino
      </button>
      <br />
      <button className="off-btn" onClick={() => sendCommand("1")}>Turn OFF</button>
      <button className="on-btn" onClick={() => sendCommand("0")}>Turn ON</button>
      <p id="status">Status: {status}</p>
    </div>
  );
};

export default ArduinoControl;
