function createHome(){
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80')";
const content = document.querySelector('#content')
const home = document.createElement('div');
home.id='homeId'
home.style.display='flex'
home.style.alignItems='center'
home.style.textAlign='center'
home.style.opacity='0.8'
home.style.marginTop='7%'
home.style.marginLeft='auto'
home.style.marginRight='auto'
const header = document.createElement('h1');
header.innerHTML = 'BREAD O\'CLOCK BAKERY';
header.style.color='white';
header.style.position='absolute'
header.style.fontFamily='Bradley Hand, cursive'
header.style.fontSize="43px"
header.style.backgroundColor='black'
header.style.width='110%'
header.style.marginTop='-5%'
header.style.height='100px'
header.style.marginLeft='-7%'
header.style.padding='30px'
header.style.paddingTop='20px'
const someText = document.createElement('h3');
someText.innerText = 'Freshest bread around'
someText.style.fontSize="35px"
someText.style.color='white';
someText.style.position='absolute';
someText.style.fontFamily='Bradley Hand, cursive'
someText.style.backgroundColor='black'
someText.style.width='112%'
someText.style.marginTop='0'
someText.style.marginLeft='-7%'
someText.style.padding='30px'
someText.style.paddingTop='20px'
someText.style.height='50px'


const hours = document.createElement('ul')
const days= ['Monday:8am-5pm', 'Tuesday: 8am-5pm' , 'Wednesday: 8am-5pm', 'Thursday: 8am-5pm', 'Friday: 8am-5pm', 'Saturday: 8am-2pm', 'Sunday: 8am-2pm']
hours.style.color='white';
hours.style.fontFamily='Bradley Hand, cursive'
hours.style.fontSize="25px"
hours.style.backgroundColor='black'
hours.style.width='40%'
hours.style.marginTop='240px'
hours.style.marginBottom='-150px'
hours.style.marginLeft='25%'
hours.style.opacity='0.72'
hours.style.padding='25px'
hours.style.listStyleType='none'


for(let day of days){
    let newDay = document.createElement('li');
    newDay.textContent = day;
    hours.appendChild(newDay)
}
document.body.appendChild(home)
home.appendChild(header)
home.appendChild(someText)
home.appendChild(hours)


}
function functionBack () {
 document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2072&q=80')";
 const menuId = document.getElementById('menuId')
  menuId.style.display='none'
  const itemsId = document.getElementById('itemsId')
  itemsId.style.display='none'
  const homeId=document.getElementById('homeId');
  homeId.style.display='flex'; 
  const contactId = document.getElementById('contactId')
   contactId.style.display='none'










}
 export {functionBack , createHome};