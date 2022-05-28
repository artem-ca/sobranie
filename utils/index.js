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
