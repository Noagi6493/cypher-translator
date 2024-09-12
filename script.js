// Encryption and decryption mappings
const mapping = {
    'A': 'O9', 'B': 'U6', 'C': 'H1', 'D': '6R', 'E': 'P0',
    'F': 'W8', 'G': '7Z', 'H': '4A', 'I': 'Y2', 'J': 'Q4',
    'K': 'C0', 'L': '1S', 'M': 'Q7', 'N': 'A2', 'O': 'Z4',
    'P': 'X9', 'Q': 'O1', 'R': 'Z6', 'S': 'B1', 'T': 'Q3',
    'U': 'F6', 'V': 'H5', 'W': 'D7', 'X': 'N8', 'Y': 'O3',
    'Z': 'I5', '1': 'S4', '2': '8J', '3': 'U4', '4': '1M',
    '5': 'M0', '6': '1G', '7': '2L', '8': 'N9', '9': 'Q5',
    '0': 'Y0', ' ': ' ' // Space character mapping (unchanged)
};

const reverseMapping = Object.fromEntries(
    Object.entries(mapping).map(([key, value]) => [value, key])
);

function encryptText() {
    const input = document.getElementById('inputText').value.toUpperCase();
    const encrypted = input.split('').map(char => mapping[char] || char).join('');
    document.getElementById('outputText').value = encrypted;
}

function decryptText() {
    const input = document.getElementById('inputText').value.toUpperCase();
    const decrypted = input.match(/.{1,2}/g).map(pair => reverseMapping[pair] || pair).join('');
    document.getElementById('outputText').value = decrypted;
}