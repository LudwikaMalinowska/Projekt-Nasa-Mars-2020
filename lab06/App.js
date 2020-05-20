const div1 = document.getElementById("1");

// const App = React.createElement('ul', {id: 'newElement'},
//     React.createElement('li', {}, 'Wiadomość'));
// ReactDOM.render(App, div1);
//
//
// const newUl = document.getElementById("newElement");
// const newLi = [
//     React.createElement('li', {}, 'Wiadomość1'),
//     React.createElement('li', {}, 'Wiadomość2'),
//     React.createElement('li', {}, 'Wiadomość3'),
//     React.createElement('li', {}, 'Wiadomość4')
// ]
//
// ReactDOM.render(newLi, newUl);

const App2 = (id, insideUl) => {
    return React.createElement('ul', {id: id}, insideUl);
}

const listElement = (text) => {
    return React.createElement('li', {}, text);
}

const liTab = [
    listElement("text1"),
    listElement("text2"),
    listElement("text3"),
    listElement("text4"),
    listElement("text5")
]

const ul2 = App2("newElement2", liTab)

ReactDOM.render(ul2, div1);

const button = React.createElement('button', {id: "btn"}, "Kliknij");

ReactDOM.render(button, div1);

const btn = document.getElementById("btn");
btn.addEventListener('click', function () {
    alert('Kliknięty');
});
