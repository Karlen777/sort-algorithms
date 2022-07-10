"use scrict"
//forEach

const arr1 = ["LG","BERG","SAMSUNG"];
arr1.forEach(element => console.log(element));

// copy object

const product = {
    name: "Sofa",
    brand: "Sapphire furniture",
    price: 499000,
    isAvailable: false,
    marerial: "leather"
};

const copyProduct = copyObj(product);
copyProduct.name = "Patina";
copyProduct.brand = "Salmast";
copyProduct.price = 520000;
copyProduct.isAvailable = true;
copyProduct.marerial = "wood";

console.log(product);
console.log(copyProduct);

function copyObj(mainObject) {
const mainObjCopy = {};

    for (let key in mainObject) {
        mainObjCopy[key] = mainObject[key];
}
    return mainObjCopy;
}


//copy array

const technique = ["LG","BERG","SAMSUNG"];
const copyTechnique = copyArrays(technique);
technique[0] ="BOSCH";
 
console.log(technique);
console.log(copyTechnique);

function copyArrays (mainArray) {
    const arr = [];

    for (let i in mainArray) {
        arr[i] = mainArray[i];
}
    return arr;
}


//split string => zangvac

const age = prompt("greq qani tarekaneq","");
const fromUser = age.split(" ",103);



//sort alg
let arr = [243,-43,55,69,5,6,895,547];
function sort(arr){
    for(let i = 0; i < arr.length;i++){
        for(let j = 0;j < (arr.length-i-1);j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] =arr[j+1];
                arr[j+1] = temp;
            }

        }
    }
console.log(arr);
}
sort(arr);