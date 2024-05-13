function pattern_count(text, pattern) {
    if (pattern === "") {
        // Jika pola kosong, kembalikan 0
        return 0;
    }

    let count = 0;
    let patternLength = pattern.length;
    let textLength = text.length;

    for (let i = 0; i <= textLength - patternLength; i++) {
        let match = true;
        for (let j = 0; j < patternLength; j++) {
            if (text[i + j] !== pattern[j]) {
                match = false;
                break;
            }
        }
        if (match) {
            count++;
        }
    }

    return count;
}

// Contoh penggunaan:
console.log(pattern_count("palindrom", "ind")); // Output: 1
console.log(pattern_count("abakadabra", "ab")); // Output: 2
console.log(pattern_count("hello", "")); // Output: 0
console.log(pattern_count("ababab", "aba")); // Output: 2
console.log(pattern_count("aaaaaa", "aa")); // Output: 5
console.log(pattern_count("hell", "hello")); // Output: 0