//zadanie 1.5
const arr5 = [
    { id: 'abc', name: 'Ala' },
    { id: 'def', name: 'Tomek' },
    { id: 'ghi', name: 'Jan' }
]

// const arr6 = []
//
// const id = (arr) => arr.reduce((prev, curr, index, arr) => {
//
//     // arr6["${curr.id}"] = curr;
//     // arr6[curr.id.toString] = curr;
//     // console.log(index)
//     // if (prev === undefined){
//     //     // console.log(prev)
//     //     arr[`${curr.id}`] = curr;
//     //     // arr.shift()
//     //     // if (arr[index - 1] !== null ){
//     //     //     arr.splice(index - 1, 1);
//     //     // }
//     // } else {
//     //     // console.log(prev, prev.id)
//     //     arr[`${prev.id}`] = prev;
//     //     arr[`${curr.id}`] = curr;
//     //     // arr.shift();
//     //     // arr.shift();
//     //     arr.splice(index - 1, 2);
//     // }
//
//     // console.log(curr, curr.id)
//     // arr[`${curr.id}`] = curr;
//
//     if (prev === undefined){
//         console.log(prev, curr)
//         arr6[`${curr.id}`] = curr;
//         // arr.shift()
//         // if (arr[index - 1] !== null ){
//         //     arr.splice(index - 1, 1);
//         // }
//     } else {
//         // console.log(prev, curr)
//         arr6[`${prev.id}`] = prev;
//         arr6[`${curr.id}`] = curr;
//         // arr.shift();
//         // arr.shift();
//         // arr.splice(index - 1, 2);
//     }
//
// }, arr6)
//
// id(arr5)
// console.log(arr6)
// console.log(arr5)

arr5.reduce((acc, curr, index, arr) => ({

    ...acc,
    [`${curr.id}`]: {
        id: curr.id,
        name: curr.name
    }
}), {});

console.log(arr5)