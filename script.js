const button = document.getElementById("openBtn");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {
    letter.classList.remove("hidden");

    button.innerHTML = "I Love You ❤️";
});

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.animationDuration =
        Math.random() * 3 + 4 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 300);