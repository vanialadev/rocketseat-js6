const arr = [1, 3, 4, 5, 8, 9];


const newArr = arr.map((item, index) => item * index);

console.log(newArr)

const sum = arr.reduce((total, proximo) => total + proximo);

console.log(sum)

const filter = arr.filter(item => item % 2 === 0);

console.log(filter);


const find = arr.find( item => item === 6);

console.log(find);

const test = () => {

}

