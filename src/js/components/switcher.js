const path = require('path');
const uswdsStyleSheet = path.join(__dirname, '/uswds.css');
const sdsStyleSheet = path.join(__dirname, '/sds.css');

if(localStorage.getItem('styleToApply') === null){
    localStorage.setItem('styleToApply', 'sds');
} else {
}

const containingDiv = document.querySelector('#containing-div');

console.log(sdsStyleSheet)
console.log(uswdsStyleSheet)
updateStyleSheet();

function updateStyleSheet(){
    const links = document.getElementsByTagName('link');
    let index;
    for (let i = 0; i < links.length; i++) {
        const element = links.item(i);

        if(element.getAttribute('href') === sdsStyleSheet || element.getAttribute('href') === uswdsStyleSheet){
            index = i;
            break;
        }     
    }
    // links.item(index).setAttribute('href', localStorage.getItem('styleToApply') === 'sds' ? sdsStyleSheet : uswdsStyleSheet);
    setTimeout(()=>{
        containingDiv.hidden = null;
    }, 50)
}