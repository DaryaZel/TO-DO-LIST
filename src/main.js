import { ToDoItem } from './toDoItem'
import { StorageManager } from './localStorage'
import { UiToDoItem } from './uiToDoItem'
import './css/main.css'
import './img/cancel.png';
import './img/note.png';
import './img/notebook.svg';
import './img/notebook.jpeg';
import './img/shooting-stars-mirror.svg';
import './img/shooting-stars.svg';

let storageManager = new StorageManager()
let add = document.querySelector('#add')
let text = document.querySelector('#text')
let list = document.querySelector('#list')
let arrayStars = []
let stars = document.querySelectorAll('.star')
stars.forEach(item => arrayStars.push(item.id))


add.onclick = function () {
  newToDoItemFromUserInput()
  refreshToDoList()
}

list.addEventListener('dblclick', function (e) {
  if (e.target.tagName == 'LI') {
    let text = e.target.textContent
    storageManager.toggleImportantByText(text)
    refreshToDoList()
  }
});

text.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    add.click()
  }
});

list.onclick = function (e) {
  if (e.target.className == 'list-item__closeIMG') {
    let uiToDoItem = UiToDoItem.fromCloseElement(e.target)
    let text = uiToDoItem.text
    uiToDoItem.li.remove()
    storageManager.deleteItemByText(text)
  }
  else if (e.target.type == 'checkbox') {
    let listItem = e.target.parentElement
    let text = e.target.parentElement.textContent
    if (listItem.classList != 'note-list__item list-item note-list__item_important note-list__item_checked' && listItem.classList != 'note-list__item list-item note-list__item_checked') {
      starsGlow()
    }
    storageManager.toggleDoneByText(text)
    refreshToDoList()
  }
}

function starsGlow() {
  let glows = document.querySelectorAll('.star__glow')
  let starID = arrayStars[Math.floor(Math.random() * arrayStars.length)]
  removeArrayItem(arrayStars, starID)
  stars.forEach(function (item) {
    if (item.id == starID) {
      item.classList.add('star_active')
    }
  })
  glows.forEach(function (item) {
    if (item.parentElement.parentElement.id == starID) {
      item.classList.add('star__glow_active')
    }
  })
}

function refreshToDoList() {
  let toDoItems = document.querySelectorAll("li")
  toDoItems.forEach(e => e.parentNode.removeChild(e))
  let sortedItems = sortToDoItems()
  sortedItems.forEach(elem => newUIElementFromLocalStorage(elem))
}

function sortToDoItems() {

  let array = storageManager.getAllItems()

  array.sort(function (a, b) {
    let aSortWeight = a.important * 10 + a.done * (-100)
    let bSortWeight = b.important * 10 + b.done * (-100)

    if (aSortWeight == bSortWeight) return 0;
    if (aSortWeight > bSortWeight) return -1;
    if (aSortWeight < bSortWeight) return 1;
  });

  return array;
}

function newUIElementFromLocalStorage(toDoItem) {
  if (toDoItem) {
    let uiToDoItem = UiToDoItem.fromToDoItem(toDoItem)
    list.appendChild(uiToDoItem.li)
  }
}

function newToDoItemFromUserInput() {
  let input = text.value
  if (input == '') {
    alert('Wright something')
  }
  else {
    let toDoItem = new ToDoItem(input.trim(), 0, 0)
    storageManager.addItem(toDoItem)
    text.value = ''
  }
}

function removeArrayItem(arr, value) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    } else {
      ++i;
    }
  }
  return arr;
}

// initial content loading
(function () {
  refreshToDoList()
})()
