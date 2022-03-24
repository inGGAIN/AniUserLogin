const input = document.querySelector(".pwd input");
const eye = document.querySelector(".pwd .fa-eye-slash");
const lock = document.querySelector(".pwd .fa-lock");
const overlay = document.querySelector(".pwd .overlay");

// Add on click event to the eye icon 
eye.addEventListener("click", () => {
    // If the password is hidden 
    if (input.type === "password"){
        // Show it 
        input.type = "text";
        // Toggle between eye icons 
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
        // Change the color og lock eye in 500ms 
        setTimeout(() => {
            lock.getElementsByClassName.color = "#111625";
        }, 500);
    } else {
        // Hide it 
        input.type = "password";
        // Toggle between eye icons 
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
        // Change The color icons 
        lock.style.color = "#dbdbdb";
    }
    // Change the overlay 
    overlay.classList.toggle("overlay-cover");
});

let tl = gsap.timeline();
console.log('new');

tl.from(".card", {
    stagger: 0.2,
    opacity: 0,
    x: -20,
});

tl.from(".avatar img", {
    stagger: 0.2,
    opacity: 0,
    y: 20,
});

tl.from(".user-on-indicator", {
    stagger: 0.2,
    opacity: 0,
    y: 20,
});

tl.from(".profile-name", {
    stagger: 0.2,
    opacity:0,
    y: 20,
});

tl.from(".profile-role", {
    stagger: 0.2,
    opacity: 0,
    y: 20,
});

tl.from(".social-btn", {
    stagger: 0.2,
    opacity:0,
});