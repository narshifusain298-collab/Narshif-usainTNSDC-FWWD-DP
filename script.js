// Typing Animation for Header
const text = "Narshif Portfolio";
let i = 0;
const speed = 120;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typing-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);

// Contact Form Submit Alert
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});