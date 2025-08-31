document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("modeToggle");
  const htmlElement = document.documentElement;

  // Set default or saved theme
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", savedTheme);
  toggleBtn.textContent = savedTheme === "dark" ? "☀️" : "🌙";

  // Toggle theme on button click
  toggleBtn.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    toggleBtn.textContent = newTheme === "dark" ? "☀️" : "🌙";
  });
});
document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector(".typewriter");
    const lines = [
        "Hi, I am Yashi Gupta",
        "I am a Front-End Developer",
        "I am a Computer Engineering Student",
        "I am an aspiring Data Scientist"
    ];

    let lineIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100; // typing speed

    function typeEffect() {
        const currentLine = lines[lineIndex];

        if (isDeleting) {
            // delete characters
            element.textContent = currentLine.substring(0, charIndex - 1);
            charIndex--;
        } else {
            // add characters
            element.textContent = currentLine.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentLine.length) {
            // pause after typing full line
            if (lineIndex === 0) {
                setTimeout(() => isDeleting = true, 1000); // delete name after 1 sec
            } else {
                setTimeout(() => isDeleting = true, 1500); // delete others after 1.5 sec
            }
        } 
        else if (isDeleting && charIndex === 0) {
            // move to next line after deletion
            isDeleting = false;
            lineIndex = (lineIndex + 1) % lines.length;
        }

        setTimeout(typeEffect, isDeleting ? typingSpeed / 2 : typingSpeed);
    }

    typeEffect();
});
