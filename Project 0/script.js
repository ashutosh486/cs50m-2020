const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-list',
  TODO_DELETE: 'todo-delete',
  TODO_CONTAINER: 'todo-container',
  CONTAINER:'container',
  FLOW:'flow-right'
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

let itemCount=0
let CheckCount=0

function newTodo() {
	const todo = prompt('Task?')
	if(todo)
	{
		itemCount+=1
		var node = document.createElement('li')
		node.className = classNames.TODO_CONTAINER
		var text = document.createTextNode(todo)
		
		var checkbox = document.createElement('input');
		checkbox.type = "checkbox";
		checkbox.className = classNames.TODO_CHECKBOX
		checkbox.onclick = function(){
			if (checkbox.checked){
				CheckCount +=1
			}
			else{
				CheckCount-=1
			}
			console.log('CheckCount:',CheckCount)
			itemCountSpan.innerHTML=itemCount
			uncheckedCountSpan.innerHTML = itemCount-CheckCount
		}
		var deleteBox = document.createElement('BUTTON')
		deleteBox.id = 'button'
		deleteBox.innerHTML = 'Delete'
		deleteBox.className = classNames.TODO_DELETE
		deleteBox.onclick = function(){
			deleteBox.parentElement.remove()
			itemCount-=1
			console.log(!deleteBox.previousSibling.checked)
			if(deleteBox.previousSibling.checked){
				CheckCount-=1
				}

			itemCountSpan.innerHTML=itemCount
			uncheckedCountSpan.innerHTML = itemCount-CheckCount
		}
		node.appendChild(text)
		node.appendChild(checkbox)
		node.appendChild(deleteBox)
		list.appendChild(node)
		console.log('CheckCount:',CheckCount)
		itemCountSpan.innerHTML=itemCount
		uncheckedCountSpan.innerHTML = itemCount-CheckCount	
	}
}

