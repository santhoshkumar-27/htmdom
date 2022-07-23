// const fullNameEl = document.querySelector('.fullName');
// console.log('fullNameEl', fullNameEl); //don't use this method
// const formEl = document.forms[0]; //by index
// document.form // is htmlcollection
const formEl = document.forms.feedbackform; //by name
// console.log(formEl)
// const nameEl = formEl.elements[0] //don't take like this by index
// const generalEl = formEl.elements[1] //don't take like this by index
// const techanicalEl = formEl.elements[2] //don't take like this by index
// const contributionEl = formEl.elements[3] //don't take like this by index
// const emailEl = formEl.elements[4] //don't take like this by index
// const yourSuggestionEl = formEl.elements[5] //don't take like this by index
// const termsEl = formEl.elements[6]  //don't take like this by index

// instead by name
// const nameEl = formEl.elements.Name //don't take like this by index
// const suggestions = formEl.elements.suggestions //don't take like this by index
// const emailEl = formEl.elements.Email //don't take like this by index
// const yourSuggestionEl = formEl.elements.sugggestionDetail //don't take like this by index
// const termsEl = formEl.elements.terms //don't take like this by index
// const nameEl = formEl.Name //we can also do this
// console.log(nameEl)
// we can also use object destructuring
// const { Name, suggestions, Email, sugggestionDetail, terms } = formEl.elements;
// console.log(nameEl, suggestions, emailEl, yourSuggestionEl, termsEl)
// console.log(Name, suggestions, Email, sugggestionDetail, terms)

// formEl.addEventListener('submit', (event) => {
//     // console.log('event', event);
//     // console.log('name', Name.value);
//     // console.log('suggestions', suggestions.value);
//     // console.log('Email', Email.value);
//     // console.log('sugggestionDetail', sugggestionDetail.value);
//     // console.log('terms', terms.checked);  //Lets look another method

//     console.log([...new FormData(formEl)]);
//     event.preventDefault();
// });

// input tag
// const nameEl = formEl.elements.Name
// console.log('formEl', nameEl);
// // nameEl.readOnly = true;
// // nameEl.disabled = true;
// nameEl.addEventListener('focus', () => console.log('focused'));
// nameEl.addEventListener('blur', () => console.log('blured'));
// nameEl.addEventListener('input', (e) => console.log('inputed', e.target.value)); // it triggers every time when user enter values
// nameEl.addEventListener('change', (e) => console.log('changed', e.target.value)); //it triggers when user entered the values and click outside the input field

// nameEl.focus(); // it will focus the input field when page loads has default
// nameEl.blur();

// nameEl.addEventListener('cut', () => console.log('cut'));
// nameEl.addEventListener('copy', () => console.log('copy'));
// nameEl.addEventListener('paste', () => console.log('paste'));

// const radioEl = formEl.elements.suggestions;
// console.log('readioEl', radioEl);
// const radioElArr = [...radioEl];
// console.log(radioElArr);
// // const
// const handleRadioEvent = (event) => {
//     // console.log('event', event.target.value)
//     setTimeout(() => {
//         alert('Thanks for contirbuting' + ' ' + event.target.value);
//     }, 1000);
// }
// radioElArr.forEach((radio) => {
//     // console.log(radio.checked)
//     radio.addEventListener('change', handleRadioEvent);
// });
// radioElArr[1].select();
// radioElArr[1].checked = true;

const nameValue = document.getElementById('nameValue')
    //one way binding
    // nameEl.addEventListener('input', (event) => {
    //     nameValue.innerText = event.target.value;
    // })
    // nameEl.addEventListener('change', (event) => {
    //     nameValue.innerText = event.target.value;
    // })
const handleSubmit = function(event) {
    // console.log('event', event);
    // console.log('name', Name.value);
    // console.log('suggestions', suggestions.value);
    // console.log('Email', Email.value);
    // console.log('sugggestionDetail', sugggestionDetail.value);
    // console.log('terms', terms.checked);  //Lets look another method
    event.preventDefault();
    // using formData
    // const formdata = new FormData(formEl);
    // const data = [...formdata.entries()];
    // console.log(data);
    // const datastring = data.map((arr) => `${arr[0]}=${arr[1].replace(/\s/g,'+')}`)
    // const datastring = data.map((arr) => `${encodeURIComponent(arr[0])}=${encodeURIComponent(arr[1])}`)
    // const datastring = data.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    // const datastring = data.map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join('&') //old way of doing
    // console.log(datastring);

    // const datastring2 = new URLSearchParams(data) //new way of doing
    // console.log(datastring2.toString());
    //object.fromEntries converts 2d array to objects

    //1) query strings content-type: application-x-www-form-urlencoded
    //?Name=Pascale+Arnold&suggestions=technical&Email=xafi%40mailinator.com&sugggestionDetail=Minima+ut+molestias+&terms=on

    //2 string format JSON
    // const formJsonData = Object.fromEntries(data);
    // const jsondata = JSON.stringify(formJsonData);
    // console.log('formJsonData', formJsonData);
    // console.log('jsondata', jsondata);


    //1. send data to backend old method
    // const resp = document.getElementById('resp');
    // const xhr = new XMLHttpRequest();
    // xhr.open('get', 'https://reqres.in/api/users?page=1');
    // xhr.send();
    // xhr.onload = function() {
    //     resp.innerText = xhr.responseText;
    //     // console.dir('response', resp);
    //     // console.log('response', xhr.responseText);
    // }
    //2. using the fetch api NEW METHOD
    // fetch('https://reqres.in/api/users?page=2', {
    //         method: 'GET'
    //             // method: 'POST',
    //             // body: jsondata
    //     }).then((res) => res.json())
    //     .then((data) => {
    //         const data1 = data.data
    //         resp.innerText = JSON.stringify(data1);
    //     })
};

// console.log('response', resp);
// const handleFormData = (event) => {
//   const formData1 = event.formData;
//   formData1.set('key1', 'value1');
//   console.log('formData values', [...formData1.values()]); // contains valuess
//   console.log('formData entries', [...formData1.entries()]); //contain keys and values
//   console.log('formData get', formData1.get('Name')); //contain only value by get method
//   console.log('formData get', formData1.getAll('suggestions')); //contain value method
//   console.log('formData get', formData1.has('suggestions')); //check the form has a property
//   console.log('formData get', [...formData1.keys()]); //check the form has a property
// };
formEl.addEventListener('submit', handleSubmit);

// formEl.addEventListener('formdata', handleFormData); //this is will call only if the mention formData in our code