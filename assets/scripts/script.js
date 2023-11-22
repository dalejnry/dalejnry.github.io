const body = document.body

const div = document.querySelector('div')
const spanHello = document.querySelector('#hello')
const spanBye = document.querySelector('#bye')

spanHello.classList.add("new-class")
spanHello.classList.remove("hi1")
spanHello.classList.toggle("hi1") //if none it will add