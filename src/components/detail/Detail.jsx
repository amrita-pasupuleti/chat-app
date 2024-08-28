import { useChatStore } from "../../lib/chatStore";
import { auth, db } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import "./detail.css";
import React, { useState } from "react";

const Detail = () => {
  const { chatId, user } = useChatStore();
  const { currentUser } = useUserStore();

  const handleLogout = () => {
    auth.signOut();
  };

  const [isArrowUp, setIsArrowUp] = useState(true);

  return (
    <div className="detail">
      <div className="user">
        <img src={user?.avatar || "./avatar.png"} alt="" />
        <h2>{user?.username}</h2>
        <p>A user of this chat app</p>
      </div>

      <div className="info">
        {/* Chat Settings -------------------------------- */}
        <div className="option">
          <div className="title">
            <span>Chat Settings</span>
            <img
              src={isArrowUp ? "./arrowUp.png" : "./arrowDown.png"}
              alt="Arrow"
              onClick={(e) => {
                const currentSrc = e.target.src;
                const newSrc = currentSrc.includes("arrowUp.png")
                  ? "./arrowDown.png"
                  : "./arrowUp.png";
                e.target.src = newSrc;
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {/* Privacy and help -------------------------------- */}
        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <img
              src={isArrowUp ? "./arrowUp.png" : "./arrowDown.png"}
              alt="Arrow"
              onClick={(e) => {
                const currentSrc = e.target.src;
                const newSrc = currentSrc.includes("arrowUp.png")
                  ? "./arrowDown.png"
                  : "./arrowUp.png";
                e.target.src = newSrc;
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>
        {/* Shared photos -------------------------------- */}
        <div className="option">
          <div className="title">
            <span>Shared photos</span>
            <img
              src={isArrowUp ? "./arrowUp.png" : "./arrowDown.png"}
              alt="Arrow"
              onClick={(e) => {
                const currentSrc = e.target.src;
                const newSrc = currentSrc.includes("arrowUp.png")
                  ? "./arrowDown.png"
                  : "./arrowUp.png";
                e.target.src = newSrc;
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetail">
                <img
                  src="https://images.pexels.com/photos/7381200/pexels-photo-7381200.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
                  alt=""
                />
                <span>photo_2024_2.png</span>
              </div>
              <img src="./download.png" alt="" className="icon" />
            </div>
          </div>
        </div>
        {/* Shared Files -------------------------------- */}
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img
              src={isArrowUp ? "./arrowUp.png" : "./arrowDown.png"}
              alt="Arrow"
              onClick={(e) => {
                const currentSrc = e.target.src;
                const newSrc = currentSrc.includes("arrowUp.png")
                  ? "./arrowDown.png"
                  : "./arrowUp.png";
                e.target.src = newSrc;
              }}
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Detail;
