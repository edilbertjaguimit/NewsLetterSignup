const txtEmail = document.querySelector("#txtEmail");
const txtEmail1 = document.querySelector("#txtEmail1");
const btnSubscribe = document.querySelector("#btnSubscribe");
const btnSubscribe1 = document.querySelector("#btnSubscribe1");
const invalidMessage = document.querySelector("#invalidMessage");
const invalidMessage1 = document.querySelector("#invalidMessage1");
const confirmationMessageEmail = document.querySelector(
  "#confirmationMessageEmail"
);
const confirmationMessageEmail1 = document.querySelector(
  "#confirmationMessageEmail1"
);
const cardSubscribe = document.querySelector("#cardSubscribe");
const cardMobileSubscribe = document.querySelector("#cardMobileSubscribe");
const btnDismissMessage = document.querySelector("#btnDismissMessage");
const btnDismissMessage1 = document.querySelector("#btnDismissMessage1");
const cardSuccess = document.querySelector("#cardSuccess");
const cardSuccess1 = document.querySelector("#cardSuccess1");

// Desktop
btnSubscribe.addEventListener("click", () => {
  if (txtEmail.value.trim() !== "") {
    if (!isEmail(txtEmail.value)) {
      txtEmail.classList.add("invalid-email");
      invalidMessage.classList.add("invalid-message");
    } else {
      const message = `A confirmation email has been sent to <span class="email-success">${txtEmail.value}</span>. Please open it and click the button inside to confirm your subscription.`;
      txtEmail.classList.remove("invalid-email");
      invalidMessage.classList.remove("invalid-message");
      cardSubscribe.classList.add("card-none");
      cardSuccess.classList.remove("card-none");
      confirmationMessageEmail.innerHTML = message;
      txtEmail.value = "";
    }
  }
});

btnDismissMessage.addEventListener("click", () => {
  cardSuccess.classList.add("card-none");
  cardSubscribe.classList.remove("card-none");
});

const isEmail = (email) => {
  return /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
    email
  );
  // return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

txtEmail.addEventListener("input", () => {
  if (txtEmail.value.trim() !== "") {
    if (!isEmail(txtEmail.value)) {
      txtEmail.classList.add("invalid-email");
      invalidMessage.classList.add("invalid-message");
      // btnSubscribe.classList.remove('success-message');
    } else {
      txtEmail.classList.remove("invalid-email");
      invalidMessage.classList.remove("invalid-message");
      // btnSubscribe.classList.add('success-message');
    }
  } else {
    txtEmail.classList.remove("invalid-email");
    invalidMessage.classList.remove("invalid-message");
  }
});

// Mobile
btnSubscribe1.addEventListener("click", () => {
  if (txtEmail1.value.trim() !== "") {
    if (!isEmail(txtEmail1.value)) {
      txtEmail1.classList.add("invalid-email");
      invalidMessage1.classList.add("invalid-message");
    } else {
      const message = `A confirmation email has been sent to <span class="email-success">${txtEmail1.value}</span>. Please open it and click the button inside to confirm your subscription.`;
      txtEmail1.classList.remove("invalid-email");
      invalidMessage1.classList.remove("invalid-message");
      cardMobileSubscribe.classList.add("card-none");
      cardSuccess1.classList.remove("card-none");
      confirmationMessageEmail1.innerHTML = message;
      txtEmail1.value = "";
    }
  }
});

btnDismissMessage1.addEventListener("click", () => {
  cardSuccess1.classList.add("card-none");
  cardMobileSubscribe.classList.remove("card-none");
});

txtEmail1.addEventListener("input", () => {
  if (txtEmail1.value.trim() !== "") {
    if (!isEmail(txtEmail1.value)) {
      txtEmail1.classList.add("invalid-email");
      invalidMessage1.classList.add("invalid-message");
      // btnSubscribe.classList.remove('success-message');
    } else {
      txtEmail1.classList.remove("invalid-email");
      invalidMessage1.classList.remove("invalid-message");
      // btnSubscribe.classList.add('success-message');
    }
  } else {
    txtEmail1.classList.remove("invalid-email");
    invalidMessage1.classList.remove("invalid-message");
  }
});
