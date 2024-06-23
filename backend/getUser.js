const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const loading = document.querySelector('.loading')

const userWebsite = document.querySelector('.user-website');

fetch('https://jsonplaceholder.typicode.com/users/'+id)
      .then(response => response.json())
      .then(res => {
        console.log(res);
        document.querySelector('.user-name').innerText = res.name;
        document.querySelector('.user-email').innerText = res.email;
        document.querySelector('.phone-number').innerText = res.phone;
        document.querySelector('.user-webname').innerText = res.username;
        userWebsite.href = `${res.website}`;
        userWebsite.innerText = "Website: " + res.website;

        document.querySelector('.user-city').innerText = res.address.city
        document.querySelector('.user-street').innerText = res.address.street
        document.querySelector('.user-zip').innerText = res.address.zipcode
})
.finally(() => loading.style.display = 'none')