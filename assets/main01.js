let values = [];
let textFieldValue = document.getElementById('text-value');
let ul = document.getElementById('answershow')
let foodItems = ul.getElementsByClassName('food-item')
// console.log('ul', ul.parentNode.insertBefore(li, ul))
const clearEl = document.getElementById('clear');

clearEl.addEventListener('click', (event) => {
    clearEl.classList.add('hide1')
    textFieldValue.value='';
})
function printValue() {
    if (textFieldValue.value) {
        clearEl.classList.add('hide1')
        let li = document.createElement('li');
        let span = document.createElement('span');
        let div = document.createElement('div');
        div.innerText = 'X';
        div.className = 'click';
        // div.setAttribute('onclick', 'removeItem(event)'); //for clicking attribure
        span.innerText = textFieldValue.value;
        li.classList = 'food-item';
        li.append(span, div);
        // li.appendChild(document.createTextNode(textFieldValue.value))
        // ul.appendChild(li);
        ul.append(li);// append means adding element to lastchild
        // ul.prepend(li) //prepend means adding element to firstchild
        // ul.before(li) //adding element before the any element
        // ul.after(li) // adding element after the any element
        // ul.parentNode.insertBefore(li, ul) // same like the before()
        // ul.parentNode.insertBefore(li, ul.nextSibling) // same like the after()
        textFieldValue.value = '';
        // console.log(foodItems)
        // foodItems.forEach(element => {
        //         console.log('element',element)
        // });
        // console.log(foodItems[0].innerText)
        // const a = [].map.call(foodItems, (food) => food.textContent);
        // console.log(a)
        // foodItems.map(function(res) {
        //     console.log(res)
        // })
        // console.log(foodItems)
        createAlertViaDom();
        attachItemRemoveListener();
    }
}

textFieldValue.addEventListener('keyup', (event) => {
    if(event.key == "Enter" && textFieldValue.value.length > 0) {
        printValue();
    }
    if(textFieldValue.value && clearEl.classList.contains('hide1')) {
        clearEl.classList.remove('hide1')
    }else if(!(textFieldValue.value.length > 0)) {
        clearEl.classList.add('hide1')
    }
})

function attachItemRemoveListener() {
    const clicks = Array.from(document.querySelectorAll('.click'));
    clicks.map((el) => {
        el.addEventListener('click', function (event) {
            const elRemove = event.target.parentNode;
            elRemove.remove(); //new way;
            // elRemove.parentNode.removeChild(elRemove); //old way
        });
    });
}
attachItemRemoveListener();

// // https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array


// // let liEl = document.getElementsByTagName('li');
// // liEl = [...liEl];
// // console.log('liEl', liEl);
// // let nameEl = document.getElementsByName('inputValue')
// // console.log('nameEl', nameEl);

// // htmlcollectio are live collection
// // HTMLCollection is not a Array it has specific feature of live collection, if the dom nodes added the update the htmlcollection
// // https://stackoverflow.com/questions/12770147/is-htmlcollection-an-array

// // console.log(document.getElementsByClassName('food-item'))
// // console.log(document.getElementsByClassName('food-item veg')) this get the html of class have both food-item and veg

// // querySelector and querySelectorAll
// // const query = document.querySelector('section:last-child');
// // const query = document.querySelector('section > div > input') //first occarance
// // like css selector
// const query = document.querySelectorAll('li')
// // console.log('query', query)
// // query selector takes 1st element

// // getelement it returns the html element in collection

// but in query selector it gives node list

// <section class="alert">
// <h2>Succesfully updated</h2>
// </section>

// const content = document.getElementById('content');
// const alertBox = document.getElementById('alertBox');
// console.log('content', content, alertBox);
// const div = document.createElement('div');
// div.className = "alert-success"
// const textNode = document.createTextNode('successfully updated!')
// div.append(textNode)
// // div.textContent = "successfully  updated!"
// // div.innerText = "successfully updated!"
// // console.log('div', div)
// // content.append(div) //for append to last child
// content.prepend(div)

function createAlertViaDom() {
    const content = document.getElementById('content');
    const alertBox = document.getElementById('alertBox');
    const div = document.createElement('div');
    div.className = "alert-success";
    div.id = "alert-success";
    const textNode = document.createTextNode('successfully updated!')
    div.append(textNode);
    alertBox.prepend(div);
    setTimeout(() => {
        alertBox.removeChild(document.getElementById('alert-success'))
    }, 2000)
}
// console.time('normal way start')
// // for(let i = 1; i < 1001; i++) {
// //     const liel = document.createElement('li');
// //     liel.textContent = `food item ${i}`;
// //     liel.classList.add('food-item')
// //     ul.append(liel);
// // }
// console.timeEnd('normal way start')
// create fragement document
// console.time('fragment way start')
// const fragment = document.createDocumentFragment();
// for(let i = 1; i < 1001; i++) {
//     const liel = document.createElement('li');
//     liel.textContent = `food item ${i}`;
//     liel.classList.add('food-item')
//     fragment.append(liel);
// }
// console.dir(fragment);
// ul.append(fragment)
// console.timeEnd('fragment way start')

// insertAdjacentHTMl
// ul.insertAdjacentHTML('afterbegin', '<li class="food-item">afterbegin</li>');
// ul.insertAdjacentHTML('afterend', '<p>afterend</p>');
// ul.insertAdjacentHTML('beforebegin', '<p>beforeBegin</p>');
// ul.insertAdjacentHTML('beforeend', '<li class="food-item">beforeend</li>');

// let li = document.createElement('li');
// li.textContent = 'contain li of insertAdjacentElement'
// li.classList.add('food-item')

// insertAdjacentElement
// ul.insertAdjacentElement('afterbegin', li);
// ul.insertAdjacentElement('afterend', li);
// ul.insertAdjacentElement('beforebegin', li);
// ul.insertAdjacentElement('beforeend', li);

// insertAdjacentText
// ul.insertAdjacentText('afterbegin', 'hi afterbegin');
// ul.insertAdjacentText('afterend', 'hi afterend');
// ul.insertAdjacentText('beforebegin', 'hi beforebegin');
// ul.insertAdjacentText('beforeend', 'hi beforeend');

// const newLi = document.createElement('li');
// newLi.innerText = 'this from replacement text';
// newLi.className = 'food-item'

// const replaceEl = document.querySelector('#answershow :first-child');
// console.log('replace', replaceEl)
// replaceEl.replaceWith(newLi) //new way
// replaceEl.parentElement.replaceChild(newLi, replaceEl)
// ul.replaceChildren('amount', 'money'); // its still this string not the node.
// if we want the node, we need to create a object
// neali = document.createElement('li');
// neali.innerText = 'node of object';
// ul.replaceChildren(neali); //this node object of element
// ul.replaceWith('amount', 'money') //it replace the current element with another node or el



// cloneNode() default false so they give clone of parent element only
// if we need a children also we need cloneNode(true)
// const cloneNode = ul.cloneNode(true);
// console.log('cloneNode', cloneNode)


// // Deleting the remove ele
// function removeItem(event) {
//     // console.log('event', event.target.parentNode);
//     var removeElRef = event.target.parentNode;
//     removeElRef.remove();
// }

// const accessParent = document.querySelector('#answershow');
// //html collection
// // console.log('accessParent', accessParent.children);

// // //querySelector node list
// // const accessChild = document.querySelectorAll('#answershow > li');
// // console.log('accessChild',accessChild);


// // // childNode
// // // node list can be anything like text, space, html, attributes, comments but htmlcollection is live collection is update the collection box but not that is javascript array
// // console.log('childnodes', accessParent.childNodes);


// // firstchild return the text node because of space we added
// // firstChild/firstElementChild
// // console.log(accessParent.firstChild)
// // console.log(accessParent.firstElementChild);


// // // lastChild/lastElementChild
// // console.log(accessParent.lastChild);
// // console.log(accessParent.lastElementChild);
// // const fc = document.querySelector('.fc');
// // // console.log(fc.children) //empty
// // // console.log(fc.children) //empty
// // console.log(fc.firstChild); //returns a text node
// // console.log(fc.firstElementChild);//returns null

// // Parent access container
// // const liSingleEl = document.querySelector('#answershow > li');

// // console.log(liSingleEl.parentElement.parentElement.parentElement.parentElement) // go for the main element
// // console.log(liSingleEl.closest('.content')); //Return the same main element

// // console.log(liSingleEl.parentElement);
// // console.log(liSingleEl.parentNode);

// // console.log(document.body.parentNode);
// // console.log(document.body.parentElement);

// // console.log(document.documentElement.parentNode);
// // console.log(document.nodeType);
// // console.log(document.documentElement.parentElement);


// // console.log(liSingleEl.nextSibling);//returns a node
// // console.log(liSingleEl.nextElementSibling);//returns a html element


// // console.log(liSingleEl.previousSibling); //returns a node
// // console.log(liSingleEl.previousElementSibling); //returns a html element

// const inputEl = document.querySelector('.sec-1 > div > input');


// //you can get attributes value by Dot Notation
// // console.log('inputEl', inputEl.value);

// // console.log('newValue', inputEl);
// // inputEl.value = 'change from dom' //this is will not affect the index.html only change the DOM.
// // we need to change the html use setAttribute it will change the html

// // inputEl.setAttribute('value', 'from attribute');
// // const isActive = inputEl.getAttribute('isActive');
// // console.log('isActive',typeof isActive);


// // console.log(inputEl.attributes[6].value);
// // console.log(inputEl.attributes[6].name);

// // console.log(inputEl.attributes.isActive);
// // console.log(inputEl.attributes.isActive.value);
// // console.log(inputEl.attributes['isActive'].value);

// // console.log(inputEl.hasAttribute('isActive'));
// // inputEl.removeAttribute('isActive');

// // console.log(inputEl.getAttribute('style'));
// // console.log(inputEl.style)


// // data-* attributes
// // console.log(inputEl.dataset);
// // for(let a in inputEl.dataset) {
// //     console.log(a)
// // }
// // console.dir(inputEl);
// // console.log(inputEl.attributes);
// // // for(let b of inputEl.attributes) { //now in the array format
// // //     console.log(b)
// // //     console.log(`${b.name} ${b.value}`)
// // // }

// // for(let a in inputEl.attributes) {
// //     // console.log(a);
// //     console.log(inputEl.attributes[a]);
// // }

// // const buttonEl = document.querySelector('.sec-3 > div > button');
// // style="padding: 5px 10px;border: none;border-radius: 5px;background: aliceblue;outline: none;";

// // 1.setAttribute
// // buttonEl.setAttribute('style', "padding: 5px 10px;border: none;border-radius: 5px;background: aliceblue;outline: none;");

// // 2.Direct Apply CSS
// // buttonEl.style.padding = '5px 10px';
// // buttonEl.style.border = 'none';
// // buttonEl.style.borderRadius = '5px';
// // buttonEl.style.background = 'aliceblue';
// // buttonEl.style.outline = 'none';

// //3.cssText
// // buttonEl.style.cssText = "padding: 5px 10px;border: none;border-radius: 5px;background: aliceblue;outline: none;";
// // buttonEl.style.cssText += "font-weight:600;letter-spacing: 5px;cursor: pointer;"
// // console.log(buttonEl.style.cssText);

// //getting the styles
// // console.log(buttonEl.style.outline);

// // getting the global style
// // console.log(window.getComputedStyle(buttonEl));
// // console.log(window.getComputedStyle(buttonEl, ':hover'));
// // const inputEle = document.querySelector('.sec-3 > div > input');
// // console.log(inputEle);

// //get class 
// // inputEle.className += ' className1 className2 className3 className4';
// // Array.from(inputEle.classList).forEach((x) => console.log('class name',x))

// const buttonClick = document.querySelector('.sec-3 > div > button:last-child');
// // console.log('buttonClick', buttonClick.textContent)
// buttonClick.addEventListener('click', function () {
//     document.querySelector('.sec-3 > div:nth-child(2)').classList.toggle('hide')
//     if (buttonClick.textContent == 'Hide Div') {
//         buttonClick.textContent = 'Show Div'
//         buttonClick.style.backgroundColor = 'blue';
//     } else {
//         buttonClick.textContent = 'Hide Div';
//         buttonClick.style.backgroundColor = 'grey';
//     }
// })

// const h1 = document.querySelector('header h1');
// function callBack(click) {
//     console.log('click', click);
// }
// // h1.onclick = callBack; // use this
// // h1.onclick = callBack() // don't use this because of the function doesn't return anything to do
// // h1.onclick = function(click) {
// //     console.log('click', click);
// // }
// // h1.setAttribute('onclick', 'console.log("click",event)')
// // console.log('h1', h1);
// // window.addEventListener()
// // document.addEventListener()
// // Element.addEventListener()

// // in javascript we use method name only like click, scrollup, scrolldown,
// // but in html attribute we use a onclick ,onscrollup, onscrolldown 'on' - prefix
// // document.addEventListener('click', function(event){
// //     console.log('clicked')
// // })
// // document.addEventListener('click', callBack()); //do not use this because it will call the method after the this line
// // document.addEventListener('click', callBack);// we need to refer the function once the click event trigger's

// //If every event listener trigger it will recieve the event object
// // document.addEventListener('click', normalFunction)
// //difference between normal function and arrow function
// // function normalFunction() {
// //     console.log('this',this); // in normal function always refer to target
// // }
// // function normalFunction() {
// //     console.log('clicked')
// // }
// //but in arrow function is always refer to window object or global object
// // const normalFunction = () => {
// //     // console.log('clicked');
// // }
// // document.addEventListener('click', normalFunction, {once: true}) //add event listener options it will once is true it will listener for 1time

// // setTimeout(() => {
// //     // document.removeEventListener('click', normalFunction);
// //     //if we want to remove event listener the reference should be same as in addeventlistener;
// // }, 5000);

// // document.getElementById('section1').addEventListener('click', ()=> {
// //     console.log('From section1');
// // })
// // document.getElementById('div1').addEventListener('click', (event)=> {
// //     // event.stopPropagation();
// //     //When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
// //     event.stopImmediatePropagation();
// //     //Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.
// //     console.log('from div1');
// // });
// // document.getElementById('p1').addEventListener('click', ()=> {
// //     console.log('from p1');
// // });
// // document.getElementById('div1').addEventListener('click', ()=> {
// //     console.log('from div1 - 2');
// // });

// // document.getElementById('p1').addEventListener('click',()=> {}, {capture: true});

// // for(let element of document.querySelectorAll('#section1, #section1 *')){
// //     console.log(element)
// //     element.addEventListener('click', ()=> {
// //         console.log('capturing phase',element.tagName)
// //     }, {capture: true});

// //     element.addEventListener('click', () =>  {
// //         console.log('bubbling', element.tagName)
// //     })
// // }
// // const submitBtn = document.querySelector("[type='submit']")
// // // console.log('submitBtn', submitBtn);
// // submitBtn.addEventListener('click', (event) => {
// //     // event.preventDefault(); //prevents default from false value

// //     console.log('prevent Default', event.defaultPrevented);
// // }, { passive: true });


// // For Event Delgation
// /* taking longer time applying a addeventlistener for every child element of li*/
// // const listEl = document.querySelectorAll('form li');
// // console.log('listEl', listEl);
// // listEl.forEach((li) => {
// //     li.addEventListener('click', (event) => {
// //         console.log('event', event.target.id)
// //     })
// // })   //Doing this format it will increase the preformance time
// /* Rather apply addeventlistener for Parent Element that is called Event Delagation*/
// var selectLi;
// const ulEl = document.querySelector('form ul');
// ulEl.addEventListener('click', (event) => {
//     const target = event.target;
//     selectLi && selectLi.classList.remove('active');
//     // if(!!selectLi){
//     //     selectLi.classList.remove('active')
//     // }
//     selectLi = target;
//     target.classList.add('active')

// });

// const supportEl = document.querySelector('#support > button');
// const toggleId = supportEl.dataset.toggleId;
// const toggleElement = document.getElementById(toggleId);

// supportEl.addEventListener('click', (event) => {
//     toggleElement.hidden = !toggleElement.hidden
// })
// console.log('supportEl', supportEl);