import React, { useEffect, useState } from "react";
import "../Pages/assets/style.css";
import send from "./assets/send.svg";
// import "./assets/script.js";
// importing script
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";

// form.addEventListener("submit", handleSubmit);
// form.addEventListener("keyup", (e) => {
//   if (e.keyCode === 13) {
//     handleSubmit(e);
//   }
// });

// const formed = document.getElementById("fr");
// const chatContainer = document.getElementById("chat_container");

let loadInterval;

function loader(element) {
  element.textContent = "";

  loadInterval = setInterval(() => {
    // Update the text content of the loading indicator
    element.textContent += ".";

    // If the loading indicator has reached three dots, reset it
    if (element.textContent === "....") {
      element.textContent = "";
    }
  }, 300);
}

function typeText(element, text) {
  let index = 0;

  let interval = setInterval(() => {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, 20);
}

// generate unique ID for each message div of bot
// necessary for typing text effect for that specific reply
// without unique ID, typing text will work on every element
function generateUniqueId() {
  const timestamp = Date.now();
  const randomNumber = Math.random();
  const hexadecimalString = randomNumber.toString(16);

  return `id-${timestamp}-${hexadecimalString}`;
}

function chatStripe(isAi, value, uniqueId) {
  return `
          <div class="wrapper ${isAi && "ai"}">
              <div class="chat">
                  <div class="profile">
                      <img 
                        src=${isAi ? bot : user} 
                        alt="${isAi ? "bot" : "user"}" 
                      />
                  </div>
                  <div class="message" id=${uniqueId}>${value}</div>
              </div>
          </div>
      `;
}

function Chat() {
  const [formed, setFormed] = useState(null);
  const [chatContainer, setChatContainer] = useState(null);

  useEffect(() => {
    setFormed(document.getElementById("fr"));
    setChatContainer(document.getElementById("chat_container"));
  }, []);

  const handleSubmit = async (e) => {
    console.log(formed);
    e.preventDefault();

    // const data = new FormData(document.querySelector("form"));
    // const data = new FormData(form);
    const data = new FormData(formed);
    // console.log(data.get("prompt"));

    // user's chatstripe
    chatContainer.innerHTML += chatStripe(false, data.get("prompt"));

    // to clear the textarea input
    // formed.reset();
    setFormed(document.getElementById("fr").reset());

    // bot's chatstripe
    const uniqueId = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, " ", uniqueId);

    // to focus scroll to the bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // specific message div
    const messageDiv = document.getElementById(uniqueId);

    // messageDiv.innerHTML = "..."
    loader(messageDiv);

    const response = await fetch("http://127.0.0.1:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: data.get("prompt"),
      }),
    });

    clearInterval(loadInterval);
    messageDiv.innerHTML = " ";

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim(); // trims any trailing spaces/'\n'
      console.log(data);
      typeText(messageDiv, parsedData);
    } else {
      const err = await response.text();

      messageDiv.innerHTML = "Something went wrong";
      alert(err);
    }
  };

  const enter = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event);
    }
  };

  return (
    <div id="app">
      <div id="chat_container"></div>
      <form id="fr" onSubmit={handleSubmit} onKeyDown={(e) => enter(e)}>
        <textarea
          name="prompt"
          rows="1"
          cols="1"
          placeholder="Ask Me Something..."
        ></textarea>
        <button type="submit">
          <img src={send} />
        </button>
      </form>
    </div>
  );
}

export default Chat;
