export const sortByDate = (a, b) => {
    return new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
}

export const sortByNickname = (a, b) => {
    if (a.nickname > b.nickname) {
        return 1
    }
    if (a.nickname < b.nickname) {
        return -1
    }
}

export const sortByTitle = (a, b) => {
    if (a.title > b.title) {
        return 1
    }
    if (a.title < b.title) {
        return -1
    }
}

export const sortForEthnicsMdx = (a, b) => {
    if (a.frontmatter.title == 'Татары') {
        return -1
    }
    if (b.frontmatter.title == 'Башкиры') {
        return 1
    }
}

export const sortForEthnics = (a, b) => {
    if (a.title == 'Татары') {
        return -1
    }
}

export const sortForRaces = (a) => {
    if (a.title == 'Европеоидная') {
        return -1
    } else {
        return -1
    }
}

export const shuffle = (array) => {
    let currentIndex = array.length,
        randomIndex

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    return array
}
