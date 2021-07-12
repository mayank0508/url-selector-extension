let myUrl = [];
const buttonClicked = document.getElementById('button-el');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');

buttonClicked.addEventListener('click', function () {
  myUrl.push(inputEl.value);
  renderUrl();
  inputEl.value = '';
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
