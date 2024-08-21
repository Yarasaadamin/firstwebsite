//Global scope
let gym = "can access gym";

function apartment(){
    let kitchen = 1;
    let bedroom = 1;
    console.log(gym ,kitchen ,bedroom);

function room(){
    //local scope
    let light = 1;
    console.log(light ,kitchen);
}
return room
}
console.log(apartment());

let firstRoom = apartment()
console.dir(firstRoom)

function apartment2(){
    let kitchen = 1;
    let bedroom = 1;
    console.log(gym ,kitchen ,bedroom);
}

const a = "10"
const b = "20"
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

const langs = ["العربية" , "الانجليزية" , "الايطالية"]
langs[0] = "الفرنسية"
langs.push("العربية")
console.log(langs);
