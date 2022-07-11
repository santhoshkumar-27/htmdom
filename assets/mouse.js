// document.addEventListener('mousedown', (event) => {
//     console.log('mousedown', event)
// })

// document.addEventListener('copy', (event) => {
//     event.preventDefault(); // prevent the copy functionlity
// })

// document.addEventListener('mouseup', (event) => {
//     console.log('mouseup', event)
// })

// document.addEventListener('mouseenter', (event) => {
//     console.log('mouseEnter', event)
// });

// document.addEventListener('mouseleave', (event) => {
//     console.log('mouseLeave', event);
// });

// document.addEventListener('mousemove', (event) => {
//     console.log('mouse move', event)
// });

// document.addEventListener('mouseout', (event) => {
//     console.log('mouse out', event);
// });

// document.addEventListener('mouseover', (event) => {
//     console.log('mouse over', event);
// })

document.addEventListener('mousedown', (event) => {
    switch (event.which) {
        case 1:
            alert('you clicked left mouse button');
            break;
        case 2:
            alert('you clicked middle mouse button');
            break;
        case 3:
            alert('you clicked right mouse button');
            break;
    }
});