// 5. (3p) Skapa en funktion, removeDuplicates, som tar en array
// med element och returnerar en ny array där alla duplicerade
// element har tagits bort och endast unika element finns kvar.


//set method easiest i understood
/*

function removeDuplicates(array) {
    const uniqueNumbers = [... new Set(array)];
    console.log(uniqueNumbers)
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // Ska logga [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


*/







const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const reduceMethod = numbers.reduce((acc, value) => {
    if (!acc.includes(value)) {
        acc.push(value)
    }
    return acc 
}, []);

console.log(reduceMethod);