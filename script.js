
const formElement = document.querySelector("form");
let fontSize = document.getElementById("fontsize");
let fontColor = document.getElementById("fontcolor");
// Save font size and color in cookies
formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const fontSized = fontSize.value;
  const fontColored = fontColor.value;

  formElement.style.fontSize = `${fontSized}px`;
  formElement.style.color = fontColored;

  document.cookie = `fontSize=${fontSized}; path=/; max-age=31536000`; // 1 year expiry
  document.cookie = `fontColor=${fontColored}; path=/; max-age=31536000`;
});

// Load saved font size and color from cookies
document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.cookie.split("; ");
  const fontSizeCookie = cookies.find(cookie => cookie.startsWith("fontSize="));
  const fontColorCookie = cookies.find(cookie => cookie.startsWith("fontColor="));

  if (fontSizeCookie) {
    const savedFontSize = fontSizeCookie.split("=")[1];
    formElement.style.fontSize = `${savedFontSize}px`;
    fontSize.value = savedFontSize;
  }

  if (fontColorCookie) {
    const savedFontColor = fontColorCookie.split("=")[1];
    formElement.style.color = savedFontColor;
    fontColor.value = savedFontColor;
  }
});

