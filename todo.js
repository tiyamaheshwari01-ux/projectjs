let todoList =[
    {
    item:"buy milk",
    duedate:'23-06-2026'    
},
    {item:"buy eggs"
    ,duedate:'23-06-2026'
    }
];
    
//declare a global emptry valie to stor the atem entered for later.
displayItems();

function addtodo(){
    // pulling out element (todo-input)
    let inputElement =document.querySelector
    ('#todo-input');
    let dateElement =document.querySelector
    ('#todo-date');
    let todoItem = inputElement.value;
    let tododate = dateElement.value;
    todoList.push({item:todoItem,duedate:tododate});
    //pusing item in a array which is atored in variable todoList and value are coming from the todoItems(input element).



    //after this when we type and add the value adds on no problem but the text it self stays there only so wee need to do something to make thw writing bar again empty.
    inputElement.value='';
    dateElement.value='';
    displayItems();
}

function displayItems(){// this will pick up complete to do list and print the paragraphg tag.
let containerElements =document.querySelector('.todo-container');

// this contain the buttons and the to do elements gives by user and this new html help toh creae the whole dynamic html for the displayed elements



let newHtml ="";
for (let i =0; i<todoList.length; i++){//accumulators pattern.
// let item =todoList[i].item;
// let duedate =todoList[i].duedate;
let{ item , duedate} = todoList[i];
newHtml+=`

<span>${item}</span>
<span>${duedate}</span>
<button class = 'btn-delete'onclick ='todoList.splice(${i},1);
displayItems();
'>Delete</button>


`;
}
//splice helps to delte the function {i} this mean take the currect value of i and put it here 1 specifies that delete one item at the index i here th currect index i.
//displayitem reprint after deleting.what items look like
containerElements.innerHTML= newHtml;
// here we are replaing the whol html elements from the new what new means like whatever remain after changes after remove any task.
}