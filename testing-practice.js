function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

const calculator = {
    add : function(a, b) {
        return a + b;
    },
    subtract : function(a, b) {
        return a - b;
    },
    divide : function(a, b) {
        if(b === 0) {
            return null;
        } else {
            return a / b;
        }
    },
    multiply : function(a, b) {
        return a * b;
    }
};

function caesarCipher(string) {
    let cipher = [];
    for(let i = 0; i < string.length; i++) {
        if(!(string[i].toLowerCase().charCodeAt(0) > 122 || string[i].toLowerCase().charCodeAt(0) < 97)) {
            cipher.push(shift(string[i],1));
        } else {
            cipher.push(string[i])
        }
    }
    return cipher.join('');
}

function shift(character, cipher) {
    const copy = character.slice().toLowerCase();
    let charCode = copy.charCodeAt(0)
    let newCipher = cipher;
    while(newCipher > 25) {
        newCipher %= 25;
    }
    console.log(newCipher);
    if((charCode + newCipher) > 122) {
        if(character.toUpperCase() === character) {
            return String.fromCharCode((charCode + newCipher) - 26).toUpperCase();
        } else {
            return String.fromCharCode((charCode + newCipher) - 26)
        }
    } else {
        if(character.toUpperCase() === character) {
            return String.fromCharCode(charCode + newCipher).toUpperCase();
        } else {
            return String.fromCharCode(charCode + newCipher)
        }
    }
}

function analyzeArray(array) {
    const sorted = mergSort(array);
    const object = {
        average : (sorted.reduce((prev, cur) => prev + cur)) / sorted.length,
        min : sorted[0],
        max : sorted[sorted.length - 1],
        length : sorted.length
    }
    return object;    
}

function mergSort(array) {
    if(array.length < 2) {
        return array;
    } else {
        const lSide = mergSort(array.slice(0, Math.floor(array.length / 2)));
        const rSide = mergSort(array.slice(Math.floor(array.length / 2)));
        let rPointer = 0;
        let lPointer = 0;
        let counter = 0;
        let newArray = [];
        while(counter != (lSide.length + rSide.length)) {
            if(rSide[rPointer] > lSide[lPointer] || rSide[rPointer] === undefined) {
                newArray.push(lSide[lPointer]);
                lPointer += 1;
            } else if (rSide[rPointer] < lSide[lPointer] || lSide[lPointer] === undefined) {
                newArray.push(rSide[rPointer]);
                rPointer += 1;
            } 
            counter += 1;
        }
        return newArray;
    }
}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };