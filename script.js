document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('partnerTestForm');
 
    form.addEventListener('submit', function (event) {
       event.preventDefault();
 
       const userName = document.getElementById('userName').value;
       const partnerName = document.getElementById('partnerName').value;
 
       // Updated array of compatibility scores
       const scores = [0, 50, 69, 92];
 
       // Generate a random index to pick a score from the array
       const randomIndex = Math.floor(Math.random() * scores.length);
       const compatibilityScore = scores[randomIndex];
 
       // Define different outcomes based on the compatibility score
       let outcomeMessage, tipsMessage, musicSrc;
 
       if (compatibilityScore === 0) {
          outcomeMessage = "Uh-oh! It seems there's room for improvement.";
          tipsMessage = "Consider spending more quality time together and communicate openly.";
          musicSrc = "Music/Moye.mp3"; // Replace with the path to your music for score 0
       } else if (compatibilityScore === 50) {
          outcomeMessage = "You're on the right track!";
          tipsMessage = "Keep nurturing your relationship with shared activities and open communication.";
          musicSrc = "Music/Give.mp3"; // Replace with the path to your music for score 50
       } else if (compatibilityScore === 69) {
          outcomeMessage = "Great compatibility!";
          tipsMessage = "Continue to enjoy each other's company and explore new experiences together.";
          musicSrc = "Music/boy.mp3"; // Replace with the path to your music for score 69
       } else if (compatibilityScore === 92) {
          outcomeMessage = "Perfect match!";
          tipsMessage = "Congratulations! Your compatibility is outstanding. Keep cherishing each moment. (9-2=7 :D Thala for a reason)";
          musicSrc = "Music/Thala.mp3"; // Replace with the path to your music for score 92
       }
 
       // Display results, tips, and music
       const resultContainer = document.createElement('div');
       resultContainer.innerHTML = `
          <h2>Compatibility Result</h2>
          <p>${userName} and ${partnerName}, ${outcomeMessage}</p>
          <p>Your compatibility score is: <strong>${compatibilityScore}%</strong></p>
          <p>${tipsMessage}</p>
          <audio autoplay>
             <source src="${musicSrc}" type="audio/mp3">
             Your browser does not support the audio element.
          </audio>
          <p>Share your score with friends or partners:</p>
          <button onclick="shareOnWhatsApp()">Share on WhatsApp</button>
          <button onclick="reloadPage()">Back</button>
       `;
 
       // Replace form with results
       form.replaceWith(resultContainer);
    });
 });
 
 function shareOnWhatsApp() {
    // Implement logic to share the score on WhatsApp
    // You may use the WhatsApp API or create a shareable link
    // Get the compatibility score and user names
   const compatibilityScore = document.querySelector('strong').textContent;
   const userName = document.getElementById('userName').value;
   const partnerName = document.getElementById('partnerName').value;

   // Compose the message with the compatibility score and names
   const message = `Hey, ${partnerName} and ${userName} scored ${compatibilityScore} on the Partner Test! 🚀`;

   // Create the WhatsApp shareable link
   const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;

   // Open the WhatsApp link in a new window
   window.open(whatsappLink, '_blank');
 }
 
 function reloadPage() {
    location.reload();
 }
 