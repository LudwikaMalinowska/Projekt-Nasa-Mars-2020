// Zadanie 1.5
const arr5 = [
    { id: 'abc', name: 'Ala' },
    { id: 'def', name: 'Tomek' },
    { id: 'ghi', name: 'Jan' }
]

const id = (arr1, arr2) => arr1.reduce((prev, curr, index, arr) => {

    arr2[`${curr.id}`] = curr

}, [])

const arr6 = []
id(arr5, arr6)
console.log(arr6)