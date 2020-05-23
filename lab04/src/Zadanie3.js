const person = {
    firstName: 'Jan',
    lastName: "Kowalski",
    city: 'Gdańsk'
};

const person2 = {...person}
person2["firstName"] = "Marek";
console.log(person2)