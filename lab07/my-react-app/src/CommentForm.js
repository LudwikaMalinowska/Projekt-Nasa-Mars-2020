import React from 'react';

const CommentForm = (insideForm) =>{
    return React.createElement('form', {}, insideForm);
}

// const crInput = (text) => {
//     return React.createElement('input', {}, text);
// }


// const input1 = React.createElement('input', {type: "text"});
const input2 = React.createElement('input', {type: "email"});
const input3 = React.createElement('input', {type: "textarea"});

const crForm2 = () => (
    <form>
        <input type="text"/>
    </form>

)

// const inForm = {
//     input1,
//     input2,
//     input3
// }

// const form1 = CommentForm(inForm);
// ReactDOM.render(crForm2(), document.body);

export default crForm2();