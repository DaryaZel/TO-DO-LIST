class StorageManager {
    constructor() {
    }

    addItem(item) {
        let toDoItem = JSON.stringify(item)
        let randomNumber = Math.floor(Math.random() * 100)
        localStorage.setItem(randomNumber, toDoItem)
    }

    deleteItemByText(text) {
        for (let key in localStorage) {
            let item = JSON.parse(localStorage.getItem(key))
            if (item) {
                if (item.input == text) {
                    localStorage.removeItem(key)
                }
            }
        }
    }

    toggleImportantByText(text) {
        for (let key in localStorage) {
            let item = JSON.parse(localStorage.getItem(key))
            if (item) {
                if (item.input == text && item.important == 0) {
                    item.important = 1
                    localStorage.setItem(key, JSON.stringify(item))
                }
                else if (item.input == text && item.important == 1) {
                    item.important = 0
                    localStorage.setItem(key, JSON.stringify(item))
                }
            }
        }
    }

    toggleDoneByText(text) {
        for (let key in localStorage) {
            let item = JSON.parse(localStorage.getItem(key))
            if (item) {
                if (item.input == text && item.done == 0) {
                    item.done = 1
                    localStorage.setItem(key, JSON.stringify(item))
                }
                else if (item.input == text && item.done == 1) {
                    item.done = 0
                    localStorage.setItem(key, JSON.stringify(item))
                }
            }
        }
    }

    getAllItems() {
        let array = []
        for (let key in localStorage) {
            let item = JSON.parse(localStorage.getItem(key))
            if (item) {
                array.push(item)
            }
        }
        return array
    }
}
export { StorageManager }