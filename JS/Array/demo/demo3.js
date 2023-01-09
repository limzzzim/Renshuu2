function buildArray(size, min, max) {
    let arr = [];
    for (let i=0; i < size; i++) {
      arr[i]=(Math.floor(Math.random()*(max-min+1)+min));
    }
    return arr;
}

function isPrime(numbers){
    let start = 2;
    if(numbers<=1){
        return false;
    }
    while (start <= numbers-1) {
        if (numbers % start == 0) {
            return false; 
        } 
        start++;
    } 
    return true;
}
    
function countPrime(numbers){
    let count = 0;
    for (let i=0; i<numbers.length; i++){
        if (isPrime(numbers[i])==true){
            count++;
        }
    }
    return count;
}

function sumArray(){
    let total=0;
    for (let i=0; i<numbers.length; i++){
        total += numbers[i];
    } 
    return total;
}

function alternate_Sums() {
    let result = [0, 0];
    for (let i=0; i < numbers.length; i++) {
      if ((numbers[i]%2==0)) {
        result[0] += numbers[i];
      } else { 
        result[1] += numbers[i];
      }
    }
    return result;
}

function arrange() {
    for (let i=0; i < numbers.length; i++) {
        let sapxep = numbers[i];
        numbers[i].sort(function(a, b){return a-b});
        return sapxep;
    }
}

let numbers;

function process(){
    let size = +document.getElementById('size').value;
    let min = +document.getElementById('min').value;
    let max = +document.getElementById('max').value;
    numbers = buildArray(size, min, max);
    document.getElementById('showArray').innerText = `1. Array: ${numbers}`;
    document.getElementById('countPrime').innerText = `2. Total prime number in Array: ${countPrime(numbers)}`;
    document.getElementById('sumArray').innerText = `3. Sum Array: ${sumArray(numbers)}`;
    document.getElementById('alternate_Sums').innerText = `4. Sum Even Number and Odd Number in Array: ${alternate_Sums(numbers)}`;
    document.getElemetnById('arrangeArray').intetText = `5. Sort Array: ${arrange(numbers)}`
}

function find(){
    let values = +document.getElementById('value').value;
    for (let i=0; i<numbers.length; i++){
        if (numbers.includes(values)){
            document.getElementById('findValue').innerText = 'FindValue is exist';
            } else {
            document.getElementById('findValue').innerText = 'FindValue is not exist';
            }
        }
}

