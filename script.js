const pwEl = document.getElementById('pw');
const copyEl = document.getElementById('copy');
const lenEl = document.getElementById('pass_length');
const upperEl = document.getElementById('upper');
const lowerEl = document.getElementById('lower');
const numberEl = document.getElementById('number');
const symbolEl = document.getElementById('symbol');
const generateEl = document.getElementById('generate');

const upperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%^&*()+=';

function getLowercase() {
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getUppercase() {
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getNumbers() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function generatePassword() {
  const length = lenEl.value;

  let password = '';

  if(upperEl.checked) {
    password += getUppercase();
  }
  if(lowerEl.checked) {
    password += getLowercase();
  }
  if(numberEl.checked) {
    password += getNumbers();
  }
  if(symbolEl.checked) {
    password += getSymbols();
  }

  for(let i=password.length; i<length; i++) {
    const x = generateX();
    
    password += x;
  }

  pwEl.innerText = password;
}

function generateX() {
  const xs = [];
  if(upperEl.checked) {
    xs.push(getUppercase());
  }
  if(lowerEl.checked) {
    xs.push(getLowercase());
  }
  if(numberEl.checked) {
    xs.push(getNumbers());
  }
  if(symbolEl.checked) {
    xs.push(getSymbols());
  }

  if (xs.length === 0) return '';

  return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', generatePassword);

copyEl.addEventListener('click', () => {
  const password = pwEl.innerText;

  if(!password) return;

  navigator.clipboard.writeText(password);
  alert("Password copied to clipboard");
})