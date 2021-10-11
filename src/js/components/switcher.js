const uswdsStyleSheet = 'uswds.css';
const sdsStyleSheet ='sds.css';
const stylesheetPathRegex = /((?:\.\.\/)*\/?)(?:sds|uswds)\.css/g;

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
        console.log('href', element.getAttribute('href'))
        const matches = stylesheetPathRegex.exec(element.getAttribute('href'));
        console.log('lastIndex', stylesheetPathRegex.lastIndex)
        if(stylesheetPathRegex.lastIndex !== 0){
            index = i;
            prefix = matches[1];
            console.log('matches[1]', matches[1])
            break;
        }
    }
    console.log('prefix', prefix)
    console.log('styleToApply', localStorage.getItem('styleToApply'))
    console.log('href', prefix + (localStorage.getItem('styleToApply') === 'sds') ? sdsStyleSheet : uswdsStyleSheet);
    links.item(index).setAttribute('href', prefix + (localStorage.getItem('styleToApply') === 'sds' ? sdsStyleSheet : uswdsStyleSheet));
    setTimeout(()=>{
        containingDiv.hidden = null;
    }, 50)
}