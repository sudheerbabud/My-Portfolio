// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    })
  })
})

// Typing effect
const typedTextSpan = document.querySelector("#typed-text")
const textArray = ["Frontend Developer", "Java Developer", "Web Developer"]
const typingDelay = 200
const erasingDelay = 100
const newTextDelay = 2000
let textArrayIndex = 0
let charIndex = 0

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex)
    charIndex++
    setTimeout(type, typingDelay)
  } else {
    setTimeout(erase, newTextDelay)
  }
}

function erase() {
  if (charIndex > 0) {
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1)
    charIndex--
    setTimeout(erase, erasingDelay)
  } else {
    textArrayIndex++
    if (textArrayIndex >= textArray.length) textArrayIndex = 0
    setTimeout(type, typingDelay + 1100)
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(type, newTextDelay + 250)
})

// Navbar color change on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.querySelector(".navbar").classList.add("bg-dark")
  } else {
    document.querySelector(".navbar").classList.remove("bg-dark")
  }
})

// Radial progress bars
document.addEventListener("DOMContentLoaded", () => {
  const radialProgressBars = document.querySelectorAll(".radial-progress")
  radialProgressBars.forEach((bar) => {
    const progress = bar.getAttribute("data-progress")
    bar.style.background = `conic-gradient(var(--primary-color) ${progress * 3.6}deg, #e9ecef 0deg)`
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm")

  form.addEventListener("submit", (event) => {
    event.preventDefault()

    const name = document.getElementById("name").value.trim()
    const email = document.getElementById("email").value.trim()
    const message = document.getElementById("message").value.trim()

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields")
      return
    }

    if (!isValidEmail(email)) {
      alert("Please enter a valid email address")
      return
    }

    // If all validations pass, you can submit the form or send the data to a server
    alert("Form submitted successfully!")
    form.reset()
  })

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
})

