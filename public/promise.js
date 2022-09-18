let p = new Promise((resolve, reject) => {
        let a = 1 + 1
        if (a == 2) {
            resolve('Success!')
        } else {
            reject('Failed!')
        }
    }).then(message => {
        console.log("This is in the then " + message)
    })
    .catch(message => {
        console.log("This is in the catch" + message)
    })

const userLeft = false
const userWatchingCatMeme = false

function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: "User Left",
                message: ":("
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: "User watching cat meme",
                message: "Always Appear < Cat"
            })
        } else {
            resolve("Thumbs up and Subscribe")
        }
    })
}

watchTutorialPromise().then(message => {
    console.log('Success: ' + message)
}).catch(error => {
    console.log(`${error.name} ${error.message}`)
})


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video one recorded')
})

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video two recorded')
})

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video three recorded')
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
})