let age = 32;
let userName = "Max";
let hobbies = ['Sports', 'Cooking', 'Reading'];
let job = { 
title: 'Developer', 
place:'New York', 
salary: 50000,
}

let adultYears;

function calculateAdultYears(userAge){
    let rezultat;
    rezultat = userAge - 18;
    return rezultat;
}

adultYears = calculateAdultYears(age);
console.log(adultYears);




age = 20;
adultYears = calculateAdultYears(age);
console.log(adultYears);

let osoba = {
    name: 'Max',
    greet() {
        console.log('Hello!');
    }
};