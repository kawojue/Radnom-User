import getRandomUser from "./getUser.js";
import showData from "./displayUser.js";

const image = document.querySelector('.image')
const description = document.querySelector('#content p')
const info = document.querySelector('#content h1')
const btns = document.querySelectorAll('.btn')
const randomBtn = document.getElementById('random')

const LoadedData = {
    username: "Always Appear",
    address: "11, Agboro-Ode str. Okeposun.",
    age: 19,
    email: "alwaysappear@gmail.com",
    phone: "+234 (813)-191-1964",
    password: "pswd1234"
}

window.addEventListener('DOMContentLoaded', showData(LoadedData, btns, info, description))

randomBtn.addEventListener('click', () => {
    getRandomUser()
        .then(message => {
            showData(message, btns, info, description)
            image.src = message.large
            info.innerHTML = message.username
            description.innerHTML = "My username is"
            btns.forEach(btn => {
                btn.classList.remove('active')
            })
        })
        .catch(err => console.warn(err.message));
})