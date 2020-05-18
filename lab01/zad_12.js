"use strict"

const ntyNajwiekszy = function (tab, n) {
    const najwieksze = []

    for (let i = 1; i <= n; i++){
        const max = Math.max(...tab)
        najwieksze.push(max);
        let pos = tab.indexOf(max);
        while(pos !== -1){
            tab.splice(pos, 1);
            pos = tab.indexOf(max);
        }
    }
    // console.log(najwieksze);
    // console.log(tab)
    return najwieksze[n-1];
}



const a = [2,3,1,5,6,7,7,8,8,8,8,9,9,9,2,1,4];
const nty = ntyNajwiekszy(a, 3)
console.log(nty)