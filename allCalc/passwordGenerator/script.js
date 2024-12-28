function generatePassword() {
  const lowercase = document.getElementById("lowercaseCb").checked
    ? "qwertyuiopasdfghjklzxcvbnm"
    : "";
  const uppercase = document.getElementById("uppercaseCb").checked
    ? "QWERTYUIOPASDFGHJKLZXCVBNM"
    : "";
  const digits = document.getElementById("digitsCb").checked
    ? "1234567890"
    : "";
  const specials = document.getElementById("specialsCb").checked
    ? "!@#$%^&*()_+-={}[];<>:`~/\\|"
    : "";

  const dictionary = lowercase + uppercase + digits + specials;
  const length = document.querySelector('input[type="range"]').value;

  if (!dictionary || length < 1) return;

  const password = Array.from(
    { length },
    () => dictionary[Math.floor(Math.random() * dictionary.length)]
  ).join("");

  console.log("password generated: ", password);
  document.querySelector('input[type="text"]').value = password;
}

function updateRange(e) {
  document.querySelector("div.range span").textContent = e.target.value;
  console.log("range updated: ", e.target.value);
  generatePassword();
}

function copyPassword() {
  const password = document.querySelector('input[type="text"]').value;
  navigator.clipboard.writeText(password).then(() => {
    const copyButton = document.querySelector("div.password button");
    console.log("password copied: ", password);
    copyButton.textContent = "Copied!";
    setTimeout(() => (copyButton.textContent = "Copy"), 800);
  });
}

document
  .querySelectorAll('input[type="checkbox"], button.generate')
  .forEach((el) => el.addEventListener("click", generatePassword));
document
  .querySelector('input[type="range"]')
  .addEventListener("input", updateRange);
document
  .querySelector("div.password button")
  .addEventListener("click", copyPassword);

generatePassword();
