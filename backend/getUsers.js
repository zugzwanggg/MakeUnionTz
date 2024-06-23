const usersList = document.querySelector('.users');
const loading = document.querySelector('.loading')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(res => {
    console.log(res);
    res.forEach(user => {
      createItem(user.id, user.name, user.email);
    });
  })
  .finally(() => loading.classList.add('pause'))

function createItem(id,name,email) {
  const listItem = document.createElement('div');
  const avatar = document.createElement('img');
  const userInfoItem = document.createElement('div');
  const linkItem = document.createElement('a');
  const userEmail = document.createElement('small');

  listItem.className = 'users-item';
  avatar.className = "avatar-icon";
  avatar.src = "./img/avatar-default-svgrepo-com.svg";
  avatar.alt = "Avatar";
  linkItem.className = "text-underline";
  userEmail.style.display = "block";

  linkItem.href = "user.html?id=" + id;
  linkItem.innerText = name;
  userEmail.innerText = email;

  userInfoItem.appendChild(linkItem);
  userInfoItem.appendChild(userEmail);

  listItem.appendChild(avatar);
  listItem.appendChild(userInfoItem);

  usersList.appendChild(listItem);
}