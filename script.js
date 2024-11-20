const formElement = document.querySelector("form");
let fontSize = document.getElementById("fontsize");
let fontColor = document.getElementById("fontcolor");

// Save font size and color in cookies when form is submitted
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const fontSized = fontSize.value;
  const fontColored = fontColor.value;

  // Save preferences in cookies with proper expiration (1 year)
  document.cookie = `fontSize=${fontSized}; path=/; max-age=31536000`;
  document.cookie = `fontColor=${fontColored}; path=/; max-age=31536000`;

  // Apply the selected font size and color to the body
  document.body.style.fontSize = `${fontSized}px`;
  document.body.style.color = fontColored;
});

// Load saved font size and color from cookies on page load
document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.cookie.split("; ");
  
  // Check if fontSize and fontColor cookies exist
  const fontSizeCookie = cookies.find(cookie => cookie.startsWith("fontSize="));
  const fontColorCookie = cookies.find(cookie => cookie.startsWith("fontColor="));

  if (fontSizeCookie) {
    const savedFontSize = fontSizeCookie.split("=")[1];
    document.body.style.fontSize = `${savedFontSize}px`; // Apply saved font size to body
    fontSize.value = savedFontSize; // Update the font size input field
  }

  if (fontColorCookie) {
    const savedFontColor = fontColorCookie.split("=")[1];
    document.body.style.color = savedFontColor; // Apply saved font color to body
    fontColor.value = savedFontColor; // Update the font color input field
  }
});


