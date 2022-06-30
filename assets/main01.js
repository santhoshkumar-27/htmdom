let values = [];
let textFieldValue = document.getElementById('text-value');
let ul = document.getElementById('answershow')
let foodItems = ul.getElementsByClassName('food-item')
// console.log('ul', ul.parentNode.insertBefore(li, ul))
function printValue() {
    if (textFieldValue.value) {
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

// https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array


// let liEl = document.getElementsByTagName('li');
// liEl = [...liEl];
// console.log('liEl', liEl);
// let nameEl = document.getElementsByName('inputValue')
// console.log('nameEl', nameEl);

// htmlcollectio are live collection
// HTMLCollection is not a Array it has specific feature of live collection, if the dom nodes added the update the htmlcollection
// https://stackoverflow.com/questions/12770147/is-htmlcollection-an-array

// console.log(document.getElementsByClassName('food-item'))
// console.log(document.getElementsByClassName('food-item veg')) this get the html of class have both food-item and veg

// querySelector and querySelectorAll
// const query = document.querySelector('section:last-child');
// const query = document.querySelector('section > div > input') //first occarance
// like css selector
const query = document.querySelectorAll('li')
// console.log('query', query)
// query selector takes 1st element

// getelement it returns the html element in collection

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

//insertAdjacentElement
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


// Deleting the remove ele
function removeItem(event) {
    // console.log('event', event.target.parentNode);
    var removeElRef = event.target.parentNode;
    removeElRef.remove();
}

const accessParent = document.querySelector('#answershow');
//html collection
// console.log('accessParent', accessParent.children);

// //querySelector node list
// const accessChild = document.querySelectorAll('#answershow > li');
// console.log('accessChild',accessChild);


// // childNode
// // node list can be anything like text, space, html, attributes, comments but htmlcollection is live collection is update the collection box but not that is javascript array
// console.log('childnodes', accessParent.childNodes);


// firstchild return the text node because of space we added
// firstChild/firstElementChild
// console.log(accessParent.firstChild)
// console.log(accessParent.firstElementChild);


// // lastChild/lastElementChild
// console.log(accessParent.lastChild);
// console.log(accessParent.lastElementChild);
// const fc = document.querySelector('.fc');
// // console.log(fc.children) //empty
// // console.log(fc.children) //empty
// console.log(fc.firstChild); //returns a text node
// console.log(fc.firstElementChild);//returns null

// Parent access container
const liSingleEl = document.querySelector('#answershow > li');

// console.log(liSingleEl.parentElement.parentElement.parentElement.parentElement) // go for the main element
// console.log(liSingleEl.closest('.content')); //Return the same main element

// console.log(liSingleEl.parentElement);
// console.log(liSingleEl.parentNode);

// console.log(document.body.parentNode);
// console.log(document.body.parentElement);

// console.log(document.documentElement.parentNode);
// console.log(document.nodeType);
// console.log(document.documentElement.parentElement);


console.log(liSingleEl.nextSibling);//returns a node
console.log(liSingleEl.nextElementSibling);//returns a html element


console.log(liSingleEl.previousSibling); //returns a node
console.log(liSingleEl.previousElementSibling); //returns a html element