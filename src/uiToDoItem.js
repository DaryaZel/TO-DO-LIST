class UiToDoItem {
    #checkbox
    #closeIcon
    #textNode

    constructor() {
        this.li = this.#createEmptyListItem()
        this.#checkbox = this.#createCheckbox()
        this.#closeIcon = this.#createCloseIcon()
        this.#textNode = this.#createTextNode()
        this.li.appendChild(this.#checkbox)
        this.li.appendChild(this.#textNode)
        this.li.appendChild(this.#closeIcon)
    }

    #createEmptyListItem() {
        let li = document.createElement('li')
        li.className = 'note-list__item'
        li.classList.add('list-item')
        return li;
    }

    #createCheckbox() {
        let checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        return checkbox
    }

    #createCloseIcon() {
        let span = document.createElement('span')
        let spanImg = document.createElement('img')
        spanImg.src = './src/image/cancel.png'
        spanImg.className = 'list-item__closeIMG'
        span.appendChild(spanImg)
        span.className = "list-item__span"
        return span
    }

    #createTextNode() {
        return document.createTextNode("")
    }

    static fromToDoItem(toDoItem) {
        let uiItem = new this()
        uiItem.#textNode.nodeValue = toDoItem.input
        if (toDoItem.important == 1) {
            uiItem.li.classList.add('note-list__item_important')
        }
        if (toDoItem.done == 1) {
            uiItem.li.classList.add('note-list__item_checked')
            uiItem.#checkbox.checked = true
        }
        return uiItem
    }

    static fromCloseElement(closeElement) {
        debugger
        let uiItem = new this()
        uiItem.#closeIcon = closeElement
        uiItem.li = closeElement.parentElement.parentElement
        uiItem.text = closeElement.parentElement.parentElement.textContent
        return uiItem;
    }
}
