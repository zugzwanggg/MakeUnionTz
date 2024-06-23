const addButton = document.querySelector('.todo-add__btn');
const todoList = document.querySelector('.todo-list');
const error = document.querySelector('.error');

addButton.addEventListener('click', (e)=> {
  e.preventDefault();
  
  let itemValue = document.createElement('p');
  itemValue.innerText = document.querySelector('.todo-value').value

  // Input value validation
  if (itemValue.innerText == "") {
    return error.classList.add('active');
  }
  error.classList.remove('active');

  // Creating the item
  const listItem = createItem(itemValue);

  // Erasing the input value
  document.querySelector('.todo-value').value = ""

  todoList.appendChild(listItem)
});

function createItem(itemValue) {
  let listItem = document.createElement('li');
  let removeBtn = document.createElement('button');

  removeBtn.className = 'remove-btn';
  removeBtn.innerText = 'Remove';

  listItem.append(itemValue);
  listItem.append(removeBtn);

  // Activing item
  listItem.addEventListener('click', ()=> {
    listItem.classList.toggle('active')
    itemValue.classList.toggle('active')
  })
  
  // Removing item
  removeBtn.addEventListener('click', (e)=> {
    listItem.remove();
  })

  return listItem;
}

