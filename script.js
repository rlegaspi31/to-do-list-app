

const addBtn = document.querySelector('.add-btn')
const listContainer = document.querySelector('.list-items-container')
const inputValue = document.querySelector('.task-input')
let listItem = document.querySelector('.list-item')

addBtn.addEventListener("click", () =>{
    
    if(inputValue.value != ""){
        let newListitem = document.createElement("li")
        let h2Container = document.createElement("h2")
        let btnContainer = document.createElement("div")
        let listValue = inputValue.value
        let checkBtn = document.createElement("button")
        let deleteBtn = document.createElement("button")
        newListitem.setAttribute("class", "list-item")
        h2Container.textContent = listValue
        checkBtn.setAttribute('class', 'check-btn list-btn')
        deleteBtn.setAttribute('class', 'delete-btn list-btn')
        checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>'
        
    
        btnContainer.setAttribute("class", "btn-container")
        btnContainer.appendChild(checkBtn)
        btnContainer.appendChild(deleteBtn)
    
        // Append now in the List ITEM Container
        newListitem.appendChild(h2Container)
        newListitem.appendChild(btnContainer)
    
        document.body.appendChild(newListitem)
        
        checkBtn.addEventListener("click", ()=> {
            h2Container.style.textDecoration = "line-through"
        })
    
        deleteBtn.addEventListener("click", ()=>{
            newListitem.remove()
        } )
    }else{
        alert("Please enter a value")
    }
    })
    




