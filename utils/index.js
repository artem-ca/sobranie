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
    if (b.title == 'Башкиры') {
        return 1
    }
}
