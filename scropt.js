
const app = document.getElementById('app');



// --------------------- Game Logic ---------------------
const computerNum = Math.floor(Math.random() * 50 + 1);
console.log(computerNum);

let usersNum;

do {
    usersNum = prompt('Enter your number from 0-50: ');

    if (usersNum === null || usersNum < 0 || usersNum > 50) {
        window.alert('It is not a valid number');
        break;
    } 

    if (isNaN(usersNum)) {
        window.alert('Try again! Enter a number from 0 to 50 ...');
    } else if (usersNum > computerNum) {
        window.alert(`Try a smaller number than ${usersNum}`);
    } else if (usersNum < computerNum) {
        window.alert(`Try a bigger number than ${usersNum}`);
    } else {
        window.alert("Victory!");
        break;
    }
} while (usersNum !== null && usersNum !== computerNum);
