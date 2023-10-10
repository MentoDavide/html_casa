let a = 0; //variabile
const b = 0;//costante fissa

let arr1 = [1,2,3,"ciao"];//primo modo per crare un'array
let arr2 = new Array("davide","sasha");//secondo modo per crare un'array si può scrivere all'interno

console.log(arr1);
console.log(arr2);

arr1.push("Antonio");//aggiunge altri elementi all'array
console.log(arr1);
arr1.pop(); // rimuove l'ultimo elemento dell'array
console.log(arr1);
arr1.shift();//toglie il primo elemento dell'array
console.log(arr1);

arr1.unshift(5);//inserisce l'elemento tra parentesi primo di tutti 
console.log(arr1);

arr1.splice(3, 1);//rimuove un elemento il primo numero è la posizione,il secondo quanti elementi vuoi
console.log(arr1);

console.log(
    arr2.includes("sasha")  //controlla se c'è un determinato elemento nell'array
);

console.log(
    arr2.indexOf("sasha")  //controlla la posizione di un determinato elemento nell'array
);

for(let i = 0; i<arr2.length;i++){
    console.log(arr2[i]);
}

. for(let name of arr2){
    console.log(name)
}