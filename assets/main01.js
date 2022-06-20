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
        console.log(foodItems)
    }
}

// https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array


// console.log(document.getElementsByClassName('food-item'))
// console.log(document.getElementsByClassName('food-item veg')) this get the html of class have both food-item and veg
