function replace(object, path, value) {
    // Chia đường dẫn thành mảng các phần
    const pathArray = Array.isArray(path) ? path : path.split('.');

    // Tạo một bản sao của object hoặc array
    const newObj = Array.isArray(object) ? [...object] : { ...object };

    // Sử dụng đệ quy để thay đổi giá trị
    function setRecursive(obj, keys, val) {
        const key = keys[0];
        try {
            if (keys.length === 1) {
                obj[key] = val;
            } else {
                if (Array.isArray(obj[key])) {
                    obj[key] = [...obj[key]];
                } else {
                    obj[key] = { ...obj[key] };
                }
                setRecursive(obj[key], keys.slice(1), val);
            }
        } catch (error) {

        }
    }

    setRecursive(newObj, pathArray, value);

    return newObj;
}


export default replace;