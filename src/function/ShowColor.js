function ShowColor(length) {
    if (typeof (length) === 'number') {
        if (length >= 0 && length <= 2) {
            return "gray"
        } else if (length >= 3 && length <= 6) {
            return "blue"
        } else if (length >= 7 && length <= 10) {
            return "green"
        } else {
            return "red"
        }
    } else {
        return new Error('This is not normal data')
    }

}

export default ShowColor;