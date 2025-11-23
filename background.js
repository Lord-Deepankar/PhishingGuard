// background.js - Service worker for PhishingGuard extension
// This runs in the background and handles sensitive configuration

// Firebase configuration - replace with your actual values
const firebaseConfig = {
  apiKey: "AIzaSyApgBPff4E79O5Bzve3KknK-pbMJrRdv2E",
  authDomain: "phishingguard-508b0.firebaseapp.com",
  databaseURL: "https://phishingguard-508b0-default-rtdb.firebaseio.com",
  projectId: "phishingguard-508b0"
};

// Listen for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  // Handle Firebase config requests
  if (request.action === 'getFirebaseConfig') {
    console.log('🔧 Providing Firebase config to content script');
    sendResponse({ config: firebaseConfig });
    return true; // Keep message channel open for async response
  }

  // Handle other future message types here
  if (request.action === 'logPhishingDetection') {
    console.log('⚠️ Phishing detection logged:', request.data);
    // Could add analytics or reporting here
    sendResponse({ success: true });
    return true;
  }
});

