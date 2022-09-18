export default function showData(data, btns, info, description) {
    btns.forEach(btn => {
        btn.addEventListener('click', e => {
            btns.forEach(btn => {
                if (btn !== e.currentTarget) {
                    btn.classList.remove('active')
                }
            })
            e.currentTarget.classList.add('active')
            info.innerHTML = data[e.currentTarget.title]
            if (e.currentTarget.title === "phone") {
                description.innerHTML = `My ${e.currentTarget.title} number is`
            } else if (e.currentTarget.title === "username") {
                description.innerHTML = `My ${e.currentTarget.title} is`
                info.classList.add('capitalize')
            } else {
                description.innerHTML = `My ${e.currentTarget.title} is`
                info.classList.remove('capitalize')
            }
        })
    })
}