const uswdsStyleSheet = '/sds2.css';
const sdsStyleSheet = '/sds.css';

if(localStorage.getItem('styleToApply') === null){
    localStorage.setItem('styleToApply', 'sds');
} else {
}

const containingDiv = document.querySelector('#containing-div');


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
    links.item(index).setAttribute('href', localStorage.getItem('styleToApply') === 'sds' ? sdsStyleSheet : uswdsStyleSheet);
    setTimeout(()=>{
        containingDiv.hidden = null;
    }, 50)
}