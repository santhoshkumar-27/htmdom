// const fullNameEl = document.querySelector('.fullName');
// console.log('fullNameEl', fullNameEl); //don't use this method
// const formEl = document.forms[0]; //by index
// document.form // is htmlcollection
const formEl = document.forms.feedbackform //by name
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
const { Name, suggestions, Email, sugggestionDetail, terms } = formEl.elements;
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

const handleSubmit = (event) => {
    // console.log('event', event);
    // console.log('name', Name.value);
    // console.log('suggestions', suggestions.value);
    // console.log('Email', Email.value);
    // console.log('sugggestionDetail', sugggestionDetail.value);
    // console.log('terms', terms.checked);  //Lets look another method

    console.log([...new FormData(formEl)]);
    event.preventDefault();
}

const handleFormData = (event) => {
    const formData1 = event.formData;
    formData1.set('key1', 'value1');
    console.log('formData values', [...formData1.values()]); // contains valuess
    console.log('formData entries', [...formData1.entries()]); //contain keys and values
    console.log('formData get', formData1.get('Name')); //contain only value by get method
    console.log('formData get', formData1.getAll('suggestions')); //contain value method
    console.log('formData get', formData1.has('suggestions')); //check the form has a property
    console.log('formData get', [...formData1.keys()]); //check the form has a property
}
formEl.addEventListener('submit', handleSubmit);

formEl.addEventListener('formdata', handleFormData); //this is will call only if the mention formData in our code