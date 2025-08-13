function totalFine(fare) {
    if (typeof fare != Number || fare <= 0) {
        return "Invalid";
    }
    const total_fine = fare + fare * (20 / 100) + 30;
    return total_fine;
}
console.log(totalFine("Gorib tai ticket katinai"));