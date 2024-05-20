function reverseWords(s) {
    const words = s.split(' ');
    const reversedWords = words.map(word => word.split('').reverse().join(''));
    return reversedWords.join(' ');
}

const inputStr = "Switch off Moyin's phone";
const outputStr = reverseWords(inputStr);
console.log(outputStr);
