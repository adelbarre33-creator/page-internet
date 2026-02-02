import React, { useState } from "react";

export default function LiveStreamPlatform() {
  const [messages, setMessages] = useState([
    { user: "Admin", text: "Bienvenue sur le live !" },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { user: "Moi", text: newMessage }]);
    setNewMessage("");
  };

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#0f172a",
      color: "white",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      <header style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "30px"
      }}>
        <h1>🎥 LiveStream Platform</h1>
        <button style={{
          padding: "10px 20px",
          borderRadius: "10px",
          border: "none",
          cursor: "pointer",
          backgroundColor: "#2563eb",
          color: "white"
        }}>
          Démarrer un live
        </button>
      </header>

      <div style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        gap: "20px"
      }}>
        {/* Video Section */}
        <div style={{
          backgroundColor: "#1e293b",
          borderRadius: "15px",
          padding: "15px"
        }}>
          <div style={{
            backgroundColor: "black",
            borderRadius: "15px",
            aspectRatio: "16/9",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            <p style={{ color: "#94a3b8" }}>Flux vidéo en direct</p>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
            fontSize: "14px",
            color: "#94a3b8"
          }}>
            <span>👥 1 245 spectateurs</span>
            <span style={{ color: "red", fontWeight: "bold" }}>● EN DIRECT</span>
          </div>
        </div>

        {/* Chat Section */}
        <div style={{
          backgroundColor: "#1e293b",
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
          height: "500px"
        }}>
          <div style={{
            flex: 1,
            overflowY: "auto",
            padding: "15px"
          }}>
            {messages.map((msg, index) => (
              <div key={index} style={{ marginBottom: "10px" }}>
                <strong style={{ color: "#60a5fa" }}>{msg.user}:</strong>{" "}
                <span style={{ color: "#cbd5e1" }}>{msg.text}</span>
              </div>
            ))}
          </div>
          <div style={{
            display: "flex",
            padding: "10px",
            borderTop: "1px solid #334155"
          }}>
            <input
              placeholder="Écrire un message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                border: "none",
                marginRight: "10px"
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "8px 15px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#2563eb",
                color: "white"
              }}
            >
              Envoyer
            </button>
          </div>
        </div>
      </div>

      <footer style={{
        marginTop: "40px",
        textAlign: "center",
        fontSize: "14px",
        color: "#64748b"
      }}>
        © {new Date().getFullYear()} LiveStream Platform — Tous droits réservés.
      </footer>
    </div>
  );
}
