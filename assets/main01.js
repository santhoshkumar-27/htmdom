function printValue() {
    let textFieldValue = document.getElementById('text-value');
    let ul = document.getElementById('answershow')
    let li = document.createElement('li');
    // li.appendChild(document.createTextNode(textFieldValue.value))
    li.innerText = textFieldValue.value;
    ul.appendChild(li);
    textFieldValue.value = '';
}