// window.addEventListener("load", () => {
export class Widget {
  constructor() {
    this.open = false;
    this.initialise();
    this.createStyles();
    console.log("hello");
  }
  initialise() {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    const chatIcon = document.createElement("p");
    chatIcon.textContent = "Chat";
    chatIcon.classList.add("icon");

    this.chatIcon = chatIcon;

    const closeIcon = document.createElement("p");
    closeIcon.textContent = "X";
    closeIcon.classList.add("icon", "hidden", "close-icon");
    this.closeIcon = closeIcon;

    buttonContainer.appendChild(this.chatIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    this.messageContainer = document.createElement("div");
    this.messageContainer.classList.add("hidden", "message-container");

    this.createMessageContainerContent();

    container.appendChild(this.messageContainer);
    container.appendChild(buttonContainer);
  }

  createMessageContainerContent() {
    this.messageContainer.innerHTML = "";
    const title = document.createElement("h2");
    const url = window.location.href;
    title.textContent = `Welcome to ${url}, We're not here, drop us an email...`;

    const form = document.createElement("form");
    form.classList.add("content");
    const email = document.createElement("input");
    email.required = true;
    email.id = "email";
    email.type = "email";
    email.placeholder = "Enter your email address";

    const message = document.createElement("textarea");
    message.required = true;
    message.id = "message";
    message.placeholder = "Your message";

    const btn = document.createElement("button");
    btn.textContent = "Submit";
    form.appendChild(email);
    form.appendChild(message);
    form.appendChild(btn);
    form.addEventListener("submit", this.submit.bind(this));

    this.messageContainer.appendChild(title);
    this.messageContainer.appendChild(form);
  }

  createStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
          .container{
           position:fixed;
           bottom:50vh;
          right:10px;
         }
      
            .icon {
                cursor: pointer;
                width: 70%;
                position: absolute;
                top: 2px;
                left: 10px;
              color:white;
                transition: transform .3s ease;
                font-family: Helvetica, Arial ,sans-serif;
                // transform-origin: 0 0;
                 transform: rotate(-90deg);
            }
            .close-icon{
              bottom:15px;
              left:0px;
            }
            .hidden {
                transform: scale(0);
            }
            .button-container {
                background-color: #04b73f;
                width: 40px;
                height: 50px;
                border-radius: 10%;
            }
            .message-container {
                box-shadow: 0 0 18px 8px rgba(0, 0, 0, 0.1), 0 0 32px 32px rgba(0, 0, 0, 0.08);
                width: 400px;
                right: 45px;
                bottom: -220px;
                max-height: 400px;
                position: absolute;
                transition: max-height .2s ease;
                font-family: Helvetica, Arial ,sans-serif;
            }
            .message-container.hidden {
                max-height: 0px;
            }
            .message-container h2 {
                margin: 0;
                padding: 20px 20px;
                color: #fff;
                background-color: #04b73f;
            }
            .message-container .content {
                margin: 20px 10px ;
                border: 1px solid #dbdbdb;
                padding: 10px;
                display: flex;
                background-color: #fff;
                flex-direction: column;
            }
            .message-container form * {
                margin: 5px 0;
            }
            .message-container form input {
                padding: 10px;
            }
            .message-container form textarea {
                height: 100px;
                padding: 10px;
            }
            .message-container form textarea::placeholder {
                font-family: Helvetica, Arial ,sans-serif;
            }
            .message-container form button {
                cursor: pointer;
                background-color: #04b73f;
                color: #fff;
                border: 0;
                border-radius: 4px;
                padding: 10px;
            }
            .message-container form button:hover {
                background-color: #16632f;
            }
        `.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.chatIcon.classList.add("hidden");
      this.closeIcon.classList.remove("hidden");
      this.messageContainer.classList.remove("hidden");
    } else {
      this.createMessageContainerContent();
      this.chatIcon.classList.remove("hidden");
      this.closeIcon.classList.add("hidden");
      this.messageContainer.classList.add("hidden");
    }
  }

  submit(event) {
    event.preventDefault();
    const formSubmission = {
      email: event.srcElement.querySelector("#email").value,
      message: event.srcElement.querySelector("#message").value,
    };

    this.messageContainer.innerHTML =
      '<h2>Thanks for your submission.</h2><p class="content">Someone will be in touch with your shortly regarding your enquiry';

    console.log(formSubmission);
  }

  // showUrl() {
  //   alert(`current website is: ${window.location.href}`);
  // }
}
// new Widget();
// });
