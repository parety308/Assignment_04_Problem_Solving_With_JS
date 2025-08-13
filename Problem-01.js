function totalFine(fine) {
    if (typeof fine != Number || fine <= 0) {
        return "Invalid";
    }
    const total_fine = fine + fine * (20 / 100) + 30;
    return total_fine;
}
console.log(totalFine(0));