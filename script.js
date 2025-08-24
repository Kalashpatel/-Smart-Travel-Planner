console.log("Add your top 5 destinations you want to travel");

let destinations = new Array(5);

for(let i = 0; i < destinations.length; i++){
    destinations[i] = prompt(`Enter the ${i + 1} destination : `);
}

let budget = parseInt(prompt("Enter your total budget : "));
let days = parseInt(prompt("Enter the number of travel days : "));

console.log("Here is your final travel planner....");
console.log(`Destinations entered : ${destinations}`);
console.log(`Your travel budget : ${budget}`);
console.log(`Days planned for trip : ${days}`);

let tripType, hotels, summary;

if(days < 3){
    tripType = "Weekend Gateway..";
}else if (days >= 3 && days < 7){
    tripType = "Perfact Holiday Trip..";
}else{
    tripType = "Extended Vacation..";
}

if(budget/days < 2000){
    hotels = "Budget Hotels..";
}else if (budget/days >= 2000 && budget/days < 5000){
    hotels = "Mid range hotels..";
}else{
    hotels = "Luxury Hotels..";
}

if(budget < 10000){
    summary = "Plan a short domestic trip..";
}else if (budget >= 10000 && budget < 50000){
    summary = "You can plan a long domestic trip..";
}else{
    summary = "International trip possible..";
}

console.log(`Trip type : ${tripType}`);
console.log(`Hotel suggestion : ${hotels}`);
console.log(`Final travel summary : ${summary}`);