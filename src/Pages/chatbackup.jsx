import React from "react";
import "./assets/style.css";
import send from "./assets/send.svg";
import bot from "./assets/bot.svg";
import user from "./assets/user.svg";
import { useState } from "react";
import { useEffect } from "react";

function Chat() {
  const [form, setForm] = useState();
  const [chatContainer, setChatContainer] = useState();
  const [loadInterval, setLoadInterval] = useState();
  const [messageDiv, setMessageDiv] = useState();

  const loader = (element) => {
    element.textContent = "";

    setLoadInterval(
      setInterval(() => {
        // update the text content of the loading indicator
        element.textContent += ".";

        // if the loading indicator has reached three dots, reset it
        if (element.textContent === "....") {
          element.textContent = "";
        }
      }, 300)
    );
  };

  const typeText = (element, text) => {
    var index = 0;

    var interval = setInterval(() => {
      if (index < text.length) {
        element.innerHTML += text.chatAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20);
  };

  // generate unique id for each message div of bot
  // necessary for typing text effect for that specific reply
  // without unique id, typing text will work on every element
  const generateUniqueId = () => {
    var timestamp = Date.now();
    var randomNumber = Math.random();
    var hexadecimalString = randomNumber.toString(16);
    return `id-${timestamp}-${hexadecimalString}`;
  };

  const chatStripe = (isAi, value, uniqueId) => {
    return `<div className="wrapper ${isAi && "ai"}">
      <div className="chat">
      <div className="profile">
      <img
      src=${isAi ? bot : user}
      alt="${isAi ? "bot" : "user"}"
      />
      </div>
      </div>
      </div>`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(form);

    // user's chatstripe
    chatContainer.innerHTML += chatStripe(false, data.get("prompt"));

    // to clear the textarea input
    setForm(document.querySelector("form").reset());

    // bot's chatstripe
    var uniqueid = generateUniqueId();
    chatContainer.innerHTML += chatStripe(true, " ", uniqueid);

    // to focus scroll to the bottom
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // specific message div
    var messageDiv = document.getElementById(uniqueid);

    // messageDiv.innnerHTML = "..."
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
      let data = await response.json();
      // trims any trailing spaces/ '\n'
      var parsedData = data.bot.trim();
      console.log(data);
      typeText(messageDiv, parsedData);
    } else {
      var err = await response.text();
      messageDiv.innerHTML = "Something went wrong";
      alert(err);
    }
  };

  useEffect(() => {
    setForm(document.querySelector("form"));
    setChatContainer(document.querySelector("#chat_container"));
  }, []);

  return (
    <div id="app">
      <div id="chat_container"></div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <textarea
          name="prompt"
          id="prompt"
          cols="1"
          rows="1"
          placeholder="Ask Me Something..."
        ></textarea>
        <button type="submit">
          <img src={send} alt="send button" />
        </button>
      </form>
    </div>
  );
}

export default Chat;
