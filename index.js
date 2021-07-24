let myUrl = [];
let oldUrl = [];
const buttonClicked = document.getElementById('button-el');
const inputEl = document.getElementById('input-el');
const ulEl = document.getElementById('ul-el');
const deleteBtnEl = document.getElementById('delete-el');
urlFromLocalStorage = localStorage.getItem('myUrl');
urlConverted = JSON.parse(urlFromLocalStorage);
let tabBtnEl = document.getElementById('save-el');
// here we learn how to convert arrays into strings, using the JSON format

// localStorage.setItem('myUrl', 'www.google.com');  // this a way to save a link in the local storage
// console.log(localStorage.getItem('myUrl'));
// localStorage.clear();

tabBtnEl.addEventListener('click', function () {
  /// this is the way we make a save btn feature

  chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {   //this code allows us to get the hold of the 
    myUrl.push(tabs[0].url);                                                  //Chrome API that allows us to interacr from the tabs !!!!
    localStorage.setItem('myUrl', JSON.stringify(myUrl));
    render(myUrl);
  }); 
});

if (urlConverted) {
  myUrl = urlConverted;
  render(myUrl);
}

function render(url) {
  let listItems = '';
  for (let i = 0; i < url.length; i++) {
    listItems += `<li>
    <a target ="_blank" href='${url[i]}'> ${url[i]}</a> 
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

deleteBtnEl.addEventListener('dblclick', function () {
  localStorage.clear();
  myUrl = [];
  render(myUrl);
});

buttonClicked.addEventListener('click', function () {
  /// this the way we push the data put inside the input element to the localStorage 💾
  myUrl.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myUrl', JSON.stringify(myUrl));
  render(myUrl);
});
