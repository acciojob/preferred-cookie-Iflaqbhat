// Function to set a cookie with the specified name, value, and expiration time (in days)
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  const expires = "expires=" + date.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

// Function to get the value of a cookie by name
function getCookie(name) {
  const decodedCookies = decodeURIComponent(document.cookie);
  const cookies = decodedCookies.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length + 1);
    }
  }
  return "";
}

// Apply font size and color from cookies if available
function applyUserPreferences() {
  const fontSize = getCookie('fontsize');
  const fontColor = getCookie('fontcolor');

  if (fontSize) {
    document.documentElement.style.setProperty('--fontsize', fontSize + 'px');
    document.getElementById('fontsize').value = fontSize;
  }

  if (fontColor) {
    document.documentElement.style.setProperty('--fontcolor', fontColor);
    document.getElementById('fontcolor').value = fontColor;
  }
}

// Event listener for the form submission
document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();

  const fontSize = document.getElementById('fontsize').value;
  const fontColor = document.getElementById('fontcolor').value;

  // Save the user preferences in cookies
  setCookie('fontsize', fontSize, 365); // Store for 1 year
  setCookie('fontcolor', fontColor, 365); // Store for 1 year
});

// Call the function to apply saved preferences on page load
applyUserPreferences();


