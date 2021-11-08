
function buttonFunction(){
const container=document.createElement('div')
container.id='container'
container.style.width="100%";
container.style.position='absolute'
container.style.textAlign='center'
container.style.height="50px";
container.style.top="20px";
container.style.marginLeft='-7%'

container.style.padding='20px'


const homeBtn=document.createElement('botton')
homeBtn.id='homeBtn'

homeBtn.style.color='white'
homeBtn.style.cursor='pointer'
homeBtn.style.fontFamily='Bradley Hand, cursive'
homeBtn.innerText='HOME'
homeBtn.style.fontSize='25px'
homeBtn.style.padding='10px'
homeBtn.style.border='2px solid white'
const menuBtn=document.createElement('botton')
menuBtn.id='menuBtn'


menuBtn.style.cursor='pointer'
menuBtn.style.color='white'
menuBtn.style.fontFamily='Bradley Hand, cursive'
menuBtn.innerText='MENU'
menuBtn.style.fontSize='25px'
menuBtn.style.padding='10px'
menuBtn.style.border='2px solid white'
menuBtn.style.marginLeft='5px'
const contactBtn=document.createElement('botton')
contactBtn.id='contactBtn'
contactBtn.style.cursor='pointer'
contactBtn.style.color='white'
contactBtn.style.fontFamily='Bradley Hand, cursive'
contactBtn.innerText='CONTACT'
contactBtn.style.fontSize='25px'
contactBtn.style.padding='10px'
contactBtn.style.border='2px solid white'
contactBtn.style.marginLeft='5px'

document.body.appendChild(container)
container.appendChild(homeBtn)
container.appendChild(menuBtn)
container.appendChild(contactBtn)
}

export {buttonFunction }