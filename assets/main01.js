let values = [];
let textFieldValue = document.getElementById('text-value');
let ul = document.getElementById('answershow')
let foodItems = ul.getElementsByClassName('food-item')
function printValue() {
    if (textFieldValue.value) {
        let li = document.createElement('li');
        // li.appendChild(document.createTextNode(textFieldValue.value))
        li.innerText = textFieldValue.value;
        li.classList = 'food-item'
        ul.appendChild(li);
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
    }
}

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
console.log('query', query)
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
    setTimeout(()=> {
        alertBox.removeChild(document.getElementById('alert-success'))
    }, 2000)
}