const formElement = document.querySelector("form");
let fontSize = document.getElementById("fontsize");
let fontColor = document.getElementById("fontcolor");

// Save font size and color in cookies when the form is submitted
formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const fontSized = fontSize.value;
  const fontColored = fontColor.value;

  // Save the font preferences in cookies
  document.cookie = `fontSize=${fontSized}; path=/; max-age=31536000`;  // 1-year expiration
  document.cookie = `fontColor=${fontColored}; path=/; max-age=31536000`;

  // Apply the selected font size and color using CSS variables
  document.documentElement.style.setProperty('--fontsize', `${fontSized}px`);
  document.documentElement.style.setProperty('--fontcolor', fontColored);
});

// Load saved font size and color from cookies when the page loads
document.addEventListener("DOMContentLoaded", () => {
  const cookies = document.cookie.split("; ");
  
  // Look for font size and color cookies
  const fontSizeCookie = cookies.find(cookie => cookie.startsWith("fontSize="));
  const fontColorCookie = cookies.find(cookie => cookie.startsWith("fontColor="));

  if (fontSizeCookie) {
    const savedFontSize = fontSizeCookie.split("=")[1];
    document.documentElement.style.setProperty('--fontsize', `${savedFontSize}px`); // Apply saved font size
    fontSize.value = savedFontSize; // Update font size input field
  }

  if (fontColorCookie) {
    const savedFontColor = fontColorCookie.split("=")[1];
    document.documentElement.style.setProperty('--fontcolor', savedFontColor); // Apply saved font color
    fontColor.value = savedFontColor; // Update font color input field
  }
});


