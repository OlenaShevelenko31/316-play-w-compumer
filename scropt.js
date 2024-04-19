const input = document.querySelector ('.input');
const button = document.querySelector ('.btnPlay');
const answer = Math.floor(Math.random()*10+1);
console.log(answer);

input.addEventListener('keypress', function(e){
    if (e.keyCode === 13)
        game();
    
})

button.addEventListener ('click', game);

function game(){
    const number = document.querySelector ('.input').value;
    if( number < 1  || number > 10){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter the number from 0 to 50!',
        })
    }
    else if ( isNaN(number)){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter the number!',
        })
    }

    else {
            if(number < answer){
                Swal.fire('Try bigger numer!',
                'Computer is winning!')
            }
            else if( number > answer){
                Swal.fire('Try smaller numer',
                'Computer is winning!')
            }
            else {
                Swal.fire({
                    title: 'Victory!',
                    imageUrl: 'https://images.unsplash.com/photo-1501743411739-de52ea0ce6a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                    imageWidth: 600,
                    imageHeight: 400,
                    imageAlt: 'Victory!',
                  })
                }
        }
    }




// ===================== FIRST TRY withou addeventListeren =====================
// let usersNum;

// do {
//     usersNum = window.prompt('Enter your number from 0-50: ');

//     if (usersNum === null || usersNum < 0 || usersNum > 50) {
//         window.alert('It is not a valid number');
//         break;
//     } 

//     if (isNaN(usersNum)) {
//         window.alert('Try again! Enter a number from 0 to 50 ...');
//     } else if (usersNum > computerNum) {
//         window.alert(`Try a smaller number than ${usersNum}`);
//     } else if (usersNum < computerNum) {
//         window.alert(`Try a bigger number than ${usersNum}`);
//     } else {
//         setTimeout(()=>{
//             window.alert("Victory!");
//         }, 1000);
//         break;
//     }
// } while (usersNum !== null && usersNum !== computerNum);
