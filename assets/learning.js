// const content = document.getElementById('content');
// console.log('content', content);






// how to get/set contents via dom using javascript
// innerText - elements
// innerContent - elements/nodes
// innerHtml

const message = document.querySelector('.alert-success');

// innerText is end user whte they seen in the screen
// console.log(message.innerText);
// // but innerHTML and textContent are html based work
// console.log(message.innerHTML);
// console.log(message.textContent);

// message.innerText = '<div>Succesfully updated</div>';
// message.innerHTML = '<div>Succesfully updated</div>';
// message.textContent = '<div>Succesfully updated</div>';
// const content = document.getElementById('content');
// const innerhtml = `
//     <section>
//         dummy using innerHtml
//     </section>
// `;
// inner html is string type 
// but using the createElement is object type so we have lot of freedom to do rather than in innerHTML
// content.innerHTML += innerhtml;

// const arr = [
//     'chicken briyani',
//     'mutton briyani',
//     'fish briyani'
// ];

// for(let i = 0; i < arr.length; i++) {
//     console.log(`This is form value ${arr[i]}`);
// }

// //for..of 
// for(let i of arr) {
//     console.log(`this is from for of ${i}`);
// }

// const containerEl = document.querySelectorAll('.food-container li');
const containerEl = document.querySelectorAll('.food-container .food-item');
// const containerEl = Array.from(document.querySelectorAll('.food-container .food-item'));

// console.log(containerEl);
let containerValue = [];
for(let container of containerEl) {
    // console.log(container.textContent.replace('x', ''));
    containerValue.push(container.textContent.replace('x', ''));
}
console.log('container value', containerValue);