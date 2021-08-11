var form= document.getElementById('addForm');
var itemList= document.getElementById('items');


//for submit event

form.addEventListener('submit', addItem);

//for deleting an event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e){
    e.preventDefault();

    //getting new input value

    var newItem= document.getElementById("item").value;

    //creating new list item
    var listItem= document.createElement('li');
    //Adding class
    listItem.className='list-group-item';

    //appending text node to li
    listItem.appendChild(document.createTextNode(newItem));
 

    //creating delete button

    var deleteButton=document.createElement('button');
    deleteButton.className= 'btn btn-danger btn-sm float-end delete'
    deleteButton.appendChild(document.createTextNode('X'));
    //Adding delete button to the list item
    listItem.appendChild(deleteButton);

    itemList.appendChild(listItem);
}

//Removing an item from List

function removeItem(e){
if(e.target.classList.contains('delete')){
if(confirm('Do you want to delete this item?')){
    var li=e.target.parentElement;
    itemList.removeChild(li);

}

}

}


//Filter Items

function filterItems(e){
    var text= e.target.value.toLowerCase();

    //get list items
    var items= itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text)!=-1){
            item.style.dislay='block';
        }
        else{
            item.style.dislay='none';
        }

    })
}
