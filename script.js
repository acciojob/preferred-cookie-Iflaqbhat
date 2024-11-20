// Check if preferences are already saved in cookies
window.onload = () => {
  const savedFontSize = getCookie("fontsize");
  const savedFontColor = getCookie("fontcolor");

  // Apply saved preferences if they exist
  if (savedFontSize) {
    document.documentElement.style.setProperty("--fontsize", savedFontSize);
    document.getElementById("fontsize").value = savedFontSize;
  }

  if (savedFontColor) {
    document.documentElement.style.setProperty("--fontcolor", savedFontColor);
    document.getElementById("fontcolor").value = savedFontColor;
  }
};

// Function to get a cookie by name
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

// Save preferences to cookies when the form is submitted
document.querySelector("form").onsubmit = (e) => {
  e.preventDefault(); // Prevent form submission
  
  const fontSize = document.getElementById("fontsize").value;
  const fontColor = document.getElementById("fontcolor").value;
  
  // Set cookies with the preferences
  document.cookie = `fontsize=${fontSize}; max-age=31536000; path=/`;
  document.cookie = `fontcolor=${fontColor}; max-age=31536000; path=/`;

  // Apply preferences
  document.documentElement.style.setProperty("--fontsize", fontSize);
  document.documentElement.style.setProperty("--fontcolor", fontColor);
  
  // Delay page reload to ensure styles are applied
  setTimeout(() => {
    location.reload(); // Reload the page to apply the saved preferences
  }, 100); // Delay reload by 100ms
};


