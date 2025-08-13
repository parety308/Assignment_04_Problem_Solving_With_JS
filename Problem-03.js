function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object") {
        return "Invalid";
    }
    totalWrong1 = player1.foul + player1.cardY + player1.cardR;
    totalWrong2 = player2.foul + player2.cardY + player2.cardR;
    return (totalWrong1 <totalWrong2) ? player1.name :(totalWrong1===totalWrong2)? "Tie":player2.name;
}
const player1 = {
    name: "Brazil",
    foul: 10,
    cardY: 9,
    cardR: 1
};
const player2 = {
    name: "Brasil",
    foul: 7,
    cardY: 8,
    cardR: 2
};
console.log(bestTeam(player1,player2));