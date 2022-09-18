const getRandomUser = async () => {
    const response = await fetch("https://randomuser.me/api/")
    const data = await response.json()

    const person = data.results[0]
    const {
        name,
        email,
        registered,
        location,
        picture,
        phone,
        login
    } = person
    const username = `${name.first} ${name.last}`
    const {
        age
    } = registered;
    const {
        street
    } = location
    const address = `${street.number}, ${street.name}`
    const {
        large
    } = picture
    const {
        password
    } = login
    return {
        large,
        username,
        email,
        age,
        address,
        phone,
        password
    }
}

export default getRandomUser;