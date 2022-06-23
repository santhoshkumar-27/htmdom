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

message.innerText = '<div>Succesfully updated</div>';
message.innerHTML = '<div>Succesfully updated</div>';
message.textContent = '<div>Succesfully updated</div>';