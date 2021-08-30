
const pullApi = async () => {
    let response = await fetch('https://randomuser.me/api/');
    let resData = await response.json();
    showData(resData.results[0]);
};

const getAllElements = {
    photo: document.getElementById('photo'),
    name: document.getElementById('name'),
    gender: document.getElementById('gend'),
    streetAdd: document.getElementById('street'),
    phoneNum: document.getElementById('phone'),
    emailAdd: document.getElementById('email'),
    age: document.getElementById('age'),
}

const showData = users => {
    getAllElements.age.innerText = users.dob.age;
    getAllElements.photo.src = users.picture.large;
    getAllElements.gender.innerText = users.gender;
    getAllElements.emailAdd.innerText = users.email;
    getAllElements.phoneNum.innerText = users.phone;
    getAllElements.name.innerText = `${users.name.first} ${users.name.last}`;
    getAllElements.streetAdd.innerText = `${users.location.state}, ${users.location.city}, ${users.location.country}`;
};