function getDataFromNestedObjects(obj, keys) {
    if (!obj || typeof obj !== 'object') {
        return undefined; // Trả về undefined nếu obj không tồn tại hoặc không phải là một object
    }

    const keyArray = Array.isArray(keys) ? keys : keys.split('.');

    let result = obj;
    for (const key of keyArray) {
        if (result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return undefined; // Trả về undefined nếu key không tồn tại trong obj
        }
    }

    return result;
}
export default getDataFromNestedObjects;