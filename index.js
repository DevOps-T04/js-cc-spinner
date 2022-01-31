

var button = document.querySelector('button')
var display = document.querySelector('#display')
var spinner = document.querySelector('#spinner')


button.addEventListener('click', () => {
    display.textContent =''
    spinner.style.display = "block"
    window.setTimeout(() => {
        window.location.reload(true)
    }, 300)
})


window.onload = function(){
    display.textContent ='finished loading ...';
    spinner.style.display = "none"
}
