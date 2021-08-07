const PROPERTY_INPUT = 'input'
const PROPERTY_IMPORTANT = 'important'
const PROPERTY_DONE = 'done'

let add = document.querySelector('#add')
let text = document.querySelector('#text')
let list = document.querySelector('#list')
let arrayStars = []
let stars = document.querySelectorAll('.star')
stars.forEach(item => arrayStars.push(item.id))



add.onclick = function () {
  //newElement()
  newToDoItemFromUserInput()
  refreshToDoList()
}

list.addEventListener('dblclick', function (e) {
  if (e.target.tagName == 'LI') {
    let text = e.target.textContent
    e.target.classList.toggle('important')
    toggleProperty(text, PROPERTY_IMPORTANT)
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
    let text = e.target.parentElement.parentElement.textContent
    e.target.parentElement.parentElement.remove()
    deleteTaskInLocalStorage(text)
  }
  else if (e.target.type == 'checkbox') {
    let listItem = e.target.parentElement
    let text = e.target.parentElement.textContent
    if (listItem.classList != 'cnote-list__item_checked' && listItem.classList != 'note-list__item_important note-list__item_checked') {
      starsGlow()
    }
    listItem.classList.toggle('note-list__item_checked')
    toggleProperty(text, PROPERTY_DONE)
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

function toggleProperty(text, propertyKey) {
  for (let key in localStorage) {
    let localctorageItem = JSON.parse(localStorage.getItem(key))
    if (localctorageItem) {
      if (localctorageItem[PROPERTY_INPUT] == text && localctorageItem[propertyKey] == 0) {
        localctorageItem[propertyKey] = 1
        localStorage.setItem(key, JSON.stringify(localctorageItem))
      }
      else if (localctorageItem[PROPERTY_INPUT] == text && localctorageItem[propertyKey] == 1) {
        localctorageItem[propertyKey] = 0
        localStorage.setItem(key, JSON.stringify(localctorageItem))
      }
    }
  }
}

function refreshToDoList() {
  let toDoItems = document.querySelectorAll("li")
  toDoItems.forEach(e => e.parentNode.removeChild(e))
  let sortedItems = sortToDoItems()
  sortedItems.forEach(elem => newUIElementFromLocalStorage(elem))
}

function sortToDoItems() {
  let array = []
  for (let key in localStorage) {
    let localctorageItem = JSON.parse(localStorage.getItem(key))
    if (localctorageItem) {
      array.push(localctorageItem)
    }
  }

  array.sort(function (a, b) {
    let aSortWeight = a[PROPERTY_IMPORTANT] * 10 + a[PROPERTY_DONE] * (-100)
    let bSortWeight = b[PROPERTY_IMPORTANT] * 10 + b[PROPERTY_DONE] * (-100)

    if (aSortWeight == bSortWeight) return 0;
    if (aSortWeight > bSortWeight) return -1;
    if (aSortWeight < bSortWeight) return 1;
  });

  return array;
}

function newUIElementFromLocalStorage(itemFromLocalStorage) {
  if (itemFromLocalStorage) {
    let li = createEmptyListItem()
    appendCheckbox(li)
    li.appendChild(document.createTextNode(itemFromLocalStorage[PROPERTY_INPUT]))
    appendCloseIcon(li)
    if (itemFromLocalStorage[PROPERTY_IMPORTANT] == 1) {
      li.classList.add('note-list__item_important')
    }
    if (itemFromLocalStorage[PROPERTY_DONE] == 1) {
      li.classList.add('note-list__item_checked')
      li.firstChild.checked = true
    }
    list.appendChild(li)
  }
}

function newToDoItemFromUserInput() {
  let input = text.value
  if (input == '') {
    alert('Wright something')
  }
  else {
    let toDoItem = {
      [PROPERTY_INPUT]: input.trim(),
      [PROPERTY_IMPORTANT]: 0,
      [PROPERTY_DONE]: 0
    }
    addToLocalStorage(JSON.stringify(toDoItem))
    document.querySelector('#text').value = ''
  }
}

function createEmptyListItem() {
  let li = document.createElement('li')
  li.className = 'note-list__item'
  li.classList.add('list-item')
  return li;
}

function appendCheckbox(listItem) {
  if (listItem) {
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    listItem.appendChild(checkbox)
  }
}

function appendCloseIcon(listItem) {
  if (listItem) {
    let span = document.createElement('span')
    let spanImg = document.createElement('img')
    spanImg.src = './src/image/cancel.png'
    spanImg.className = 'list-item__closeIMG'
    span.appendChild(spanImg)
    span.className = "list-item__span"
    listItem.appendChild(span)
  }
}


function addToLocalStorage(toDoItem) {
  let randomNumber = Math.floor(Math.random() * 100)
  localStorage.setItem(randomNumber, toDoItem)
}

function deleteTaskInLocalStorage(text) {
  for (let key in localStorage) {
    let localctorageItem = JSON.parse(localStorage.getItem(key))
    if (localctorageItem) {
      if (localctorageItem[PROPERTY_INPUT] == text) {
        localStorage.removeItem(key)
      }
    }
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
