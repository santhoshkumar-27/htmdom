// const fullNameEl = document.querySelector('.fullName');
// console.log('fullNameEl', fullNameEl); //don't use this method
// const formEl = document.forms[0]; //by index
// document.form // is htmlcollection
const formEl = document.forms.feedbackform //by name
console.log(formEl)
// const nameEl = formEl.elements[0] //don't take like this by index
// const generalEl = formEl.elements[1] //don't take like this by index
// const techanicalEl = formEl.elements[2] //don't take like this by index
// const contributionEl = formEl.elements[3] //don't take like this by index
// const emailEl = formEl.elements[4] //don't take like this by index
// const yourSuggestionEl = formEl.elements[5] //don't take like this by index
// const termsEl = formEl.elements[6]  //don't take like this by index


// instead by name
const nameEl = formEl.elements.name //don't take like this by index
const suggestions = formEl.elements.suggestions //don't take like this by index
const emailEl = formEl.elements.Email //don't take like this by index
const yourSuggestionEl = formEl.elements.sugggestionDetail //don't take like this by index
const termsEl = formEl.elements.terms  //don't take like this by index

console.log(nameEl, suggestions, emailEl, yourSuggestionEl, )