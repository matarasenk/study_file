let delDup = (arr) => arr.filter ((v, i) => arr.indexOf(v) == i);

let delExtraSpaces = (str = ` `, wrds = ``) => {
    return ((str += ` ` + wrds).trim()).split(/\s+/);
}

let addWords = (obj, wrds) => {
    if (obj) {
        let arr = delExtraSpaces(obj.words, wrds);
        obj.words = (delDup(arr)).join(` `);
    }
}

let removeWords = (obj, wrds) => {
    if (obj) {
        let arrObj = delDup (delExtraSpaces(obj.words));
        let arrWrds = delDup (delExtraSpaces(wrds));

        arrWrds.forEach(element => {
            (arrObj.indexOf(element) == -1)            
        ? 0 : arrObj.splice(arrObj.indexOf(element), 1)
        });
        obj.words = arrObj.join (` `)
    }
}

let changeWords = (obj, oldWords = ' ', newWrds = ' ') => {
    if (obj) {
        let arrObj = delDup (delExtraSpaces(obj.words));
        let arrOldWords = delDup (delExtraSpaces(oldWords));
        let arrNewWrds = delDup (delExtraSpaces(newWrds));

        arrOldWords.forEach(element => {
            (arrObj.indexOf(element) == -1)            
        ? 0 : arrObj.splice(arrObj.indexOf(element), 1)
        });
        obj.words = arrObj.concat(arrNewWrds).join (` `)
    }
}

const obj= {words: 'newspapers newspapers  books magazines'};

console.log(obj); 
// {words: "newspapers newspapers  books magazines"}

addWords(obj, 'radio newspapers');
console.log(obj); 
// {words: "newspapers books magazines radio"}

removeWords(obj, 'newspapers   radio');
console.log(obj); 
// {words: "books magazines"}

changeWords(obj, 'books radio  magazines', 'tv internet');
console.log(obj); 
// {words: "tv internet"}