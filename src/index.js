

import { functionBack , createHome} from "./home"
createHome();
import{buttonFunction} from "./bottons" 
buttonFunction();
import { menuFunction , createMenu } from "./menu"
createMenu();
import {contactFunction , createContact} from "./contact"
createContact();


const homeId = document.getElementById('homeId')
const menuId = document.getElementById('menuId')
const itemsId = document.getElementById('itemsId')
const menuBtn = document.getElementById('menuBtn')
const homeBtn = document.getElementById('homeBtn')
const contactBtn = document.getElementById('contactBtn')
document.body.style.width='100%'
document.body.style.height='100%'
document.body.style.backgroundPosition='fixed'
document.body.style.backgroundRepeat='noRepeat'
document.body.style.backgroundSize='percentage'


menuBtn.addEventListener('click', menuFunction)
homeBtn.addEventListener('click', functionBack)
contactBtn.addEventListener('click' , contactFunction)

menuBtn.onmouseover = ()=> menuBtn.style.backgroundColor='grey'
menuBtn.onmouseleave=()=> menuBtn.style.backgroundColor=''
homeBtn.onmouseover = ()=> homeBtn.style.backgroundColor='grey'
homeBtn.onmouseleave=()=> homeBtn.style.backgroundColor=''
contactBtn.onmouseover = ()=> contactBtn.style.backgroundColor='grey'
contactBtn.onmouseleave=()=> contactBtn.style.backgroundColor=''










    









