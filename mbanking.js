function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode", true);
  body.classList.remove("light-mode");
  saveModePreference("dark-mode");
}

// Function to toggle light mode
function toggleLightMode() {
  const body = document.body;
  body.classList.toggle("light-mode", true);
  body.classList.remove("dark-mode");
  saveModePreference("light-mode");
}

function togglePinkMode() {
  const body = document.body;
  body.classList.toggle("pink-mode", true);
  body.classList.remove("dark-mode");
  body.classList.remove("light-mode");
  saveModePreference("pink-mode");
}

// Function to save the user's mode preference
function saveModePreference(mode) {
  localStorage.setItem("modePreference", mode);
}

// Check for the user's mode preference in local storage
const modePreference = localStorage.getItem("modePreference");

// Apply the user's mode preference
if (modePreference === "dark-mode") {
  toggleDarkMode();
} 
else if (modePreference === "light-mode") {
  toggleLightMode();
} 
else if (modePreference === "pink-mode") {
  togglePinkMode();
}

const editButton = document.getElementById("editButton");
const userInfo = document.getElementById("userInfo");
const editProfile = document.querySelector(".edit-profile");
const nameSpan = document.getElementById("name");
const emailSpan = document.getElementById("email");
const phoneSpan = document.getElementById("phone");
const avatarSpan = document.getElementById("avatar");
const avatarPreview = document.getElementById("avatarPreview");
const userAvatarInput = document.getElementById("userAvatar");

// Initially, hide the edit profile section
editProfile.style.display = "none";

// Handle the "Edit Profile" button click
editButton.addEventListener("click", () => {
    userInfo.style.display = "none";
    editProfile.style.display = "block";
});

// When the user selects an image, display a preview
userAvatarInput.addEventListener("change", () => {
    const file = userAvatarInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            avatarPreview.src = e.target.result;
            avatarPreview.style.display = "block";
        };
        reader.readAsDataURL(file);
    } else {
        avatarPreview.src = "";
        avatarPreview.style.display = "none";
    }
});

document.getElementById("profileForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const userName = document.getElementById("userName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPhone = document.getElementById("userPhone").value;
    const userAvatar = userAvatarInput.files[0];

    // Update the user information and the avatar on the page
    nameSpan.textContent = userName;
    emailSpan.textContent = userEmail;
    phoneSpan.textContent = userPhone;
    avatarSpan.textContent = userAvatar ? userAvatar.name : "No file selected";

    // Toggle back to the user information view
    userInfo.style.display = "block";
    editProfile.style.display = "none";
});

document.getElementById("billForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const billName = document.getElementById("billName").value;
  const billAmount = document.getElementById("billAmount").value;

  if (billName && billAmount) {
      const billList = document.getElementById("billList");
      const newBill = document.createElement("li");
      newBill.textContent = `${billName}: $${billAmount}`;
      billList.appendChild(newBill);

      // Clear input fields
      document.getElementById("billName").value = "";
      document.getElementById("billAmount").value = "";
  }
});
function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value;
  const toCurrency = document.getElementById("toCurrency").value;
  const exchangeRate = getExchangeRate(toCurrency) / getExchangeRate(fromCurrency);
  const convertedAmount = amount * exchangeRate;
  document.getElementById("result").textContent = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

function getExchangeRate(currency) {
  switch (currency) {
      case "USD": return 1.00;
      case "EUR": return 0.85;
      case "GBP": return 0.74;
      case "JPY": return 111.04;
      case "AUD": return 1.33;
      case "CAD": return 1.27;
      case "CNY": return 6.47;
      case "INR": return 74.45;
      case "IDR": return 14484.20;
      // Add exchange rates for other currencies
      default: return 1.00; // Default to 1 for unknown currencies
  }
}

// JavaScript code in mbanking.js

// Function to change font size and save the preference
function changeFontSize() {
    const fontSizeSelect = document.getElementById('fontSize');
    const selectedFontSize = fontSizeSelect.value;

    document.body.style.fontSize = selectedFontSize;

    // Save the font size preference to local storage
    localStorage.setItem('fontSizePreference', selectedFontSize);
}

// Apply saved font size preference on page load
window.onload = function () {
    const savedFontSize = localStorage.getItem('fontSizePreference');
    if (savedFontSize) {
        document.body.style.fontSize = savedFontSize;
    }
};

// Event listener for the "Save Preferences" button
const saveFontSizeButton = document.getElementById('saveFontSizePreference');
saveFontSizeButton.addEventListener('click', changeFontSize);

