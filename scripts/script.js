document.addEventListener("DOMContentLoaded", function () {
  // Get DOM elements
  let loginButton = document.querySelector(".login-button");
  let usernameInput = document.querySelector(".username");
  let passwordInput = document.querySelector(".password");
  let showPasswordButton = document.querySelector(".password-button");
  let face = document.querySelector(".face");

  // Dummy credentials (replace these with your actual credentials)
  const validUsername = "Bayu";
  const validPassword = "Bayu123";

  // Event listener for the login button
  loginButton.addEventListener("click", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Event listeners related to password input
    passwordInput.addEventListener("focus", () => {
      document.querySelectorAll(".hand").forEach((hand) => {
        hand.classList.add("hide");
      });
      document.querySelector(".tongue").classList.remove("breath");
    });

    passwordInput.addEventListener("blur", () => {
      document.querySelectorAll(".hand").forEach((hand) => {
        hand.classList.remove("hide");
        hand.classList.remove("peek");
      });
      document.querySelector(".tongue").classList.add("breath");
    });

    // Event listeners related to username input
    usernameInput.addEventListener("focus", () => {
      let length = Math.min(usernameInput.value.length - 16, 19);
      document.querySelectorAll(".hand").forEach((hand) => {
        hand.classList.remove("hide");
        hand.classList.remove("peek");
      });
      face.style.setProperty("--rotate-head", `${-length}deg`);
    });

    usernameInput.addEventListener("blur", () => {
      face.style.setProperty("--rotate-head", "0deg");
    });

    usernameInput.addEventListener(
      "input",
      _.throttle((event) => {
        let length = Math.min(event.target.value.length - 16, 19);
        face.style.setProperty("--rotate-head", `${-length}deg`);
      }, 100)
    );

    // Event listener for the show password button
    showPasswordButton.addEventListener("click", () => {
      if (passwordInput.type === "text") {
        passwordInput.type = "password";
        document.querySelectorAll(".hand").forEach((hand) => {
          hand.classList.remove("peek");
          hand.classList.add("hide");
        });
      } else {
        passwordInput.type = "text";
        document.querySelectorAll(".hand").forEach((hand) => {
          hand.classList.remove("hide");
          hand.classList.add("peek");
        });
      }
    });

    // Retrieve entered credentials
    const enteredUsername = usernameInput.value;
    const enteredPassword = passwordInput.value;

    // Check if the entered credentials are valid
    if (
      enteredUsername === validUsername &&
      enteredPassword === validPassword
    ) {
      // Redirect to the index page or perform any other action
      window.location.href = "index.html";
    } else {
      // Display an error message (you can customize this part)
      alert("Invalid username or password. Please try again.");
    }
  });
});
