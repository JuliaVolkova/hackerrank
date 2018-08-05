function vowelsAndConsonants(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    string.split('')
        .filter((char) => vowels.includes(char))
        .forEach((char) => console.log(char));
    string.split('')
        .filter((char) => !vowels.includes(char) && char !== ' ')
        .forEach((char) => console.log(char));
}

// ---------------------------------------------------------------------------------------------------------------------

function vowelsAndConsonants2(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let char of string) {
        let isVowel = false;
        for (let vowel of vowels) {
            if(char === vowel) {
                isVowel = true;
                break;
            }
        }
        if (isVowel) console.log(char);
    }
    for (let char of string) {
        let isVowel = false;
        for (let vowel of vowels) {
            if(char === vowel) {
                isVowel = true;
                break;
            }
        }
        if (!isVowel) console.log(char);
    }
}

// ---------------------------------------------------------------------------------------------------------------------

/**
 * Check if the {@code array} includes the {@code element}
 *
 * @param element
 * @param array
 * @returns {boolean}
 */
function includes (element, array) {
    let result = false;
    for (let i = 0; i < array.length; i++) {
        result = element === array[i];
        if (result) break;
    }
    return result;
}

function vowelsAndConsonants3(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let char of string) {
        if(includes(char, vowels)) {
            console.log(char);
        }
    }
    for (let char of string) {
        if(!includes(char, vowels)) {
            console.log(char);
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------------

function includesRecursive (needle, array) {
    function iterate (needle, i) {
        if(i === array.length) return false;
        if(needle === array[i]) return true;
        return iterate(needle, i + 1);
    }
    return iterate(needle, 0);
}

/**
 *
 * @param {Array} array
 * @param {Function} consumer - function that just receives element and performs some action
 */
function forEach (array, consumer) {
    function iterate (i) {
        if(i === array.length) return;
        consumer(array[i]);
        iterate(i + 1);
    }
    iterate(0);
}

/**
 *
 * @param {Array} array
 * @param {Function} predicate - function receives element and returns if it matches some condition
 * @returns {Array.<Array>} 2 arrays, first - array filtered by predicate, second - the rest of elements
 */
function partition (array, predicate) {
    const truly = [];
    const falsy = [];
    forEach(array, (item) => {
        const target = predicate(item) ? truly : falsy;
        target.push(item);
    });
    return [truly, falsy];
}

function vowelsAndConsonantsRecursive (string) {
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    const isVowel = (char) => includesRecursive(char, VOWELS);
    const [vowels, consonants] = partition(string, isVowel);
    forEach(vowels, console.log);
    forEach(consonants, console.log)
}

