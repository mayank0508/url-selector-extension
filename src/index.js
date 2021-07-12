let myUrl = [];
const buttonClicked = document.getElementById('button-el');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
// here we learn how to convert arrays into strings, using the JSON format

// localStorage.setItem('myUrl', 'www.google.com');  // this a way to save a link in the local storage
// console.log(localStorage.getItem('myUrl'));
// localStorage.clear();

buttonClicked.addEventListener('click', function () {
  myUrl.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myUrl', JSON.stringify(myUrl));
  renderUrl();

  console.log(localStorage.getItem('myUrl'));
});

function renderUrl() {
  let listItems = '';
  for (let i = 0; i < myUrl.length; i++) {
    listItems += `<li>
    <a target ="_blank" href='${myUrl[i]}'> ${myUrl[i]}</a> 
    </li>`;
    {
      /* 👆 very imp code*/
    }
    // '<li><a traget ="_black" href =' + 'myLead[i]' + '>' + '</a></li>'; //very complicated string 😱
  }
  ulEl.innerHTML = listItems;
  // ulEl.innerHTML += '<li>' + myLead[i] + '</li>' + ' ';
  // let li = document.createElement('li');
  // li.textContent = myLead[i]
  // ulEl.appendChild(li);
}
