function cn(arrays) {
    if (!arrays) {
        return ''
    }
    let className = '';
    arrays.forEach(element => {
        className = className + ' ' + element;
    });
    return className;
}
export default cn;