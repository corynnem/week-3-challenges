let inputs = document.querySelectorAll('input')
let textareas = document.querySelectorAll('textarea')

let allInputs = [...inputs, ...textareas]


let card = `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

let navbar = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>`

let cssScript = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">`
let jsScript = `<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>`


let cards = document.querySelector('.bootstrapcard')
cards.style.display = 'none'


let navbars = document.querySelector('.bootstrapnavbar')
navbars.style.display = 'none'


const solved = (e, i) => {
    if(e.target.value === e.target.className ) {
        allInputs[i].style = 'background-color: #caffbf;'
    } else {
        if(e.target.className === 'opencurly'){
            e.target.value === '{' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'closecurly') {
            e.target.value === '}' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'  
        } else if(e.target.className === 'openparen') {
            e.target.value === '(' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;' 
        } else if(e.target.className === 'closeparen') {
            e.target.value === ')' ? allInputs[i].style = 'background-color: #caffbf;' : allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'questionmark') { 
            e.target.value === '?' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'colon') {
            e.target.value === ':' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'semicolon') {
            e.target.value === ';' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'strictE') {
            e.target.value === '===' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'equal') {
            e.target.value === '==' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'notEqual') {
            e.target.value === '!==' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'greatOrE') {
            e.target.value === '>=' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'lessOrE') {
            e.target.value === '<=' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'and') {
            e.target.value === '&&' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'or') {
            e.target.value === '||' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'zero') {
            e.target.value === '0' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'length') {
            e.target.value === '.length' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        }  else if(e.target.className === 'iplusplus') {
            e.target.value === 'i++' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        }  else if(e.target.className === 'arrow') {
            e.target.value === '=>' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'openbracket') {
            e.target.value === '[' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'closebracket') {
            e.target.value === ']' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'comma') {
            e.target.value === ',' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'push' ) {
            e.target.value === ".push('Tomato')" || e.target.value === ".push()" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'pop' ) {
            e.target.value === ".pop()"  ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'splice' ) {
            e.target.value === ".splice(2, 1)" || e.target.value === ".splice()" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'reverse' ) {
            e.target.value === ".reverse()" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'keys' ) {
            e.target.value === ".keys" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'values' ) {
            e.target.value === ".values" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'one' ) {
            e.target.value === "1" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'name' ) {
            e.target.value === ".name" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'installBootstrap' ) {
            e.target.value === "npm install bootstrap" ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'stylesheet' ) {
            let input = e.target.value.split(' ').filter(line =>  line !== '' && line !== '\n').join('')
            let formatted = cssScript.split(' ').join('')
            input === formatted ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'script' ) {
            let input = e.target.value.split(' ').filter(line =>  line !== '' && line !== '\n').join('')
            let formatted = jsScript.split(' ').join('')
            input === formatted ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        }  else if(e.target.id === 'card' ) {
            let input = e.target.value.split(' ').filter(line =>  line !== '' && line !== '\n').join('')
            let formatted = card.split(' ').join('')
            if(input === formatted){
                allInputs[i].style = 'background-color: #caffbf;'
                cards.style.display = 'block'
            } else {
                allInputs[i].style = 'background-color: #ffadad;'
            }
        } else if(e.target.id === 'navbar' ) {
            let input = e.target.value.split(' ').filter(line =>  line !== '' && line !== '\n').join('')
            let formatted = navbar.split(' ').join('')
            console.log('onchange')
            if(input === formatted){
                console.log(input, formatted)
                allInputs[i].style = 'background-color: #caffbf;'
                navbars.style.display = 'block'
            } else {
                allInputs[i].style = 'background-color: #ffadad;'
            }
        } else if(e.target.className === 'bonus1'){
            e.target.value === 'num is less than 10' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'bonus2') {
            e.target.value === 'true' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else if(e.target.className === 'bonus3') {
            e.target.value === 'B' ? allInputs[i].style = 'background-color: #caffbf;' :  allInputs[i].style = 'background-color: #ffadad;'
        } else {
            allInputs[i].style = 'background-color: #ffadad;'
        }
    }
}


 for(let i=0; i < allInputs.length; i++) {
    allInputs[i].addEventListener('change', (e) => solved(e, i))
 }




 