



// const playerName = "adam";
// const playerPoints = 1234;
// const playerHandsome = false;
// const playerFat = "little bit";

// player.name
// player.points 




const player = {
    name: "adam",
    points: 10,
    fat: true
};

console.log(player.name, player.points);
console.log(player["name"]);

console.log(player);
player.fat = false
console.log(player);

player.lastName = "potato";
console.log(player);
// 2.6
player.points = player.points + 5;
console.log(player);
