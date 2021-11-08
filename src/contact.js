function createContact(){
const contact = document.createElement('div')
contact.id='contactId'
    contact.style.alignItems='center'
    contact.style.textAlign='center'
    contact.style.opacity='0.77'
    contact.style.marginTop='17%'
    contact.style.marginLeft='25%'
    
    contact.style.width='50%'
    contact.style.display='none'
    contact.style.color='white';
    contact.style.fontFamily='Bradley Hand, cursive'
    contact.style.fontSize="32px"
    contact.style.backgroundColor='black'
    

     const info = document.createElement('ul')
const infoList= ['WE LOVE WHEN YOU CONTACT US','832-111-2222 Business line', '832-111-3333 fax ' , 'Wednesday: 8am-5pm', 'Bakery@ourbakery.com', '1 love ln Texas']
info.style.marginLeft='5%'
info.style.listStyleType='none'
for(let oneItem of infoList){
    let newItem = document.createElement('li');
    newItem.textContent = oneItem;
    info.appendChild(newItem);
}

    document.body.appendChild(contact)
    
    contact.appendChild(info)
}


function contactFunction(){
    document.body.style.backgroundImage="url('https://images.unsplash.com/photo-1509957879660-dd8846a0b43d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80')"
    const homeId=document.getElementById('homeId');
    homeId.style.display='none'; 
   const menuId = document.getElementById('menuId')
   menuId.style.display='none'
   const itemsId = document.getElementById('itemsId')
   itemsId.style.display='none'
   const contactId = document.getElementById('contactId')
   contactId.style.display='flex'
}
export {contactFunction , createContact}