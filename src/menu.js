 
  
   
   
function createMenu(){
     const menu = document.createElement('div');
    menu.id='menuId'
    const items = document.createElement('ul')
    items.id='itemsId'
    menu.style.alignItems='center'
    menu.style.textAlign='center'
    menu.style.opacity='0.87'
    menu.style.marginTop='17%'
    menu.style.marginLeft='20%'
    menu.style.marginRight='auto'
    menu.style.width='50%'
    menu.style.display='none'
    
 const menuItems= ['Baguette 10$', 'Wheat Bread 7$' , 'Bagel 7$', 'Banana Bread 8$', 'Cracker 7$', 'English Muffin 8$']
items.style.display='none'
items.style.color='white';
items.style.fontFamily='Bradley Hand, cursive'
items.style.fontSize="42px"
items.style.backgroundColor='black'
items.style.marginTop='0'
items.style.marginBottom='0'
items.style.marginLeft='0'
items.style.opacity='0.87'
items.style.padding='50px'
items.style.listStyleType='none'
items.style.width='100%'
items.style.alignSelf='center'
for(let item of menuItems){
    let newItem = document.createElement('li');
    newItem.textContent = item;
    items.appendChild(newItem);
}

 document.body.appendChild(menu);
    menu.appendChild(items);


}







function menuFunction(){
document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1601233242964-9909c5237aaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')";
   const homeId=document.getElementById('homeId');
   homeId.style.display='none'; 
  const menuId = document.getElementById('menuId')
  menuId.style.display='block'
  const itemsId = document.getElementById('itemsId')
  itemsId.style.display='block'
  const contactId = document.getElementById('contactId')
   contactId.style.display='none'
    
}
export{ menuFunction , createMenu}