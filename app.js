const form = document.querySelector('form')
const tbody = document.querySelector('tbody')

// constructor function
function Book(name, author, year) {
    ;(this.name = name),
    (this.author = author),
    (this.year = year)
}

//  UI
function UI() {}
UI.prototype.addBook = function (book) {
    const tr = document.createElement('tr')
    const countBook = tbody.childNodes.length
    tr.innerHTML = `
    <th>${countBook + 1}</th>
    <th>${book.name}</th>
    <th>${book.author}</th>
    <th>${book.year}</th>
    <th>
    span class="delete"><i class="fas fa-trash"></i></span>
    </th>
    `

    tbody.appendChild(tr)
}

UI.prototype.showMessage = function (type, text) {
    const htmlMassage = document.createElement('div')
    htmlMassage.classList.add(`alert`)
    htmlMassage.classList.add(`alert-${type}`)
    htmlMassage.textContent = text
    CredentialsContainer.insertBefore(htmlMassage, form)

    setTimeout(() => {
        htmlMassage.remove()
    }, 3000)
}

UI.prototype.clear = () => {

}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const ui = new UI()
    if(form.name.value && form.author.value && form.year.value ) {
        const book = new Book(formname.value, form.author.value, form.year.value)
    // ui
        ui.addBook(book)
    } else {
        ui.showMessage('warning', 'You forgot something in the form!')
    }
})  

tbody.addEventListener('click', (e) => {
    e.target
})