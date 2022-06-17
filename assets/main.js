// // console.log('window object',window.innerHeight, window.innerWidth)
// // window.open('https://google.com')
// // setTimeout(()=> {
//     // window.close()
// // }, 3000)
// // window.moveTo()
// // console.log(console)

// // console.log(window) // is the BOM Object
// // console.log(window.document) //is the DOM Object
// // console.log(window.location.href)
// // window.document.title = "happy birthday "
// // // window.history.back();
// // console.log(window.navigator)

// // console.dir(document);
// // document.links
// // document.all

// var data = document
// data.body.children[0].innerText = "hi welcome"
// console.log(window.find("hi"));


// // object construt
// const a = {
//     name: "santhosh",
//     place1: 'pondicherry',
//     age: '12',
//     getUserAndPlace: function () {
//         return `${this.name} ${this.place1}`
//     },
//     getAge () {
//         return `${this.age}`
//     },
// }

// console.log(a.getUserAndPlace())
// console.log(a.getAge())


// // a.name = window.prompt('Enter your name');
// // a.place1 = window.prompt('Enter your place where you live')

// const personOne = a.getUserAndPlace();

// // document.body.innerText = personOne
// // document.body.innerText = `<h1>${personOne}</h1>`;
// document.body.innerHTML = `<h1>${personOne}</h1>`;
// console.log(document.body.children[0].children[1])




// getElementById
// getElementsByName
// getElementsByClassName
// getElementsByTagName
// Finding Elements by css selector
// querySelector and querySelectorAll


// let headingEl = document.getElementById('changeValue');

// console.log('headingEl', headingEl.innerText);
// setTimeout(()=> {
//     headingEl.innerText = 'i have been changed'
// }, 2000)