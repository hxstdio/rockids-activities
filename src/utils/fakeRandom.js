export const generateRandomWithMax = (max) => {
    const randomNumber = Math.floor(Math.random() * max);
    return randomNumber;
}

export const removeElementAtIndex = (list = [], index) => {  
    if (index < 0 || index >= list.length) {  
        return list;  
    }  
  
    return list.slice(0, index).concat(list.slice(index + 1));  
}

export const getIndexByElement = (list = [], element) => {
    for(let i = 0, l = list.length; i < l; i++) {
        if (list[i] === element) {
            return i;
        }
    }

    return -1;
}