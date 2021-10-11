const uswdsStyleSheet = 'uswds.css';
const sdsStyleSheet ='sds.css';
const stylesheetPathRegex = /((?:\.\.\/)*\/?)(?:sds|uswds)\.css/;

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
    let index = 0;
    let prefix = '';
    for (let i = 0; i < links.length; i++) {
        const element = links.item(i);
        const matches = stylesheetPathRegex.exec(element.getAttribute('href'));
        if(stylesheetPathRegex.lastIndex !== 0){
            index = i;
            prefix = matches[1];
            break;
        }
    }
    links.item(index).setAttribute('href', prefix + localStorage.getItem('styleToApply') === 'sds' ? sdsStyleSheet : uswdsStyleSheet);
    setTimeout(()=>{
        containingDiv.hidden = null;
    }, 50)
}