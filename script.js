const mainCard = document.querySelector(".container")
const secondCard = document.querySelector(".secondcard")
const btnSubmit = document.querySelector(".submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".number")

btnSubmit.addEventListener("click", () => {
    secondCard.classList.remove("hidden")
    mainCard.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})