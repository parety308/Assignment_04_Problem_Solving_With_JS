//Problem -01:
function totalFine(fare) {
    if (typeof fare !== "number" || fare <= 0) {
        return "Invalid";
    }
    const total_fine = fare + fare * (20 / 100) + 30;
    return total_fine;
}

//problem-02:
function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    let str2 = "";
    for (const s of str) {
        if (s !== " ") str2 += s;
    }
    return str2.toUpperCase();
}

//Problem-03:
function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !==
        "object") {
        return "Invalid";
    }
    const totalWrong1 = player1.foul + player1.cardY + player1.cardR;
    const totalWrong2 = player2.foul + player2.cardY + player2.cardR;
    return (totalWrong1 < totalWrong2) ? player1.name :
        (totalWrong1 === totalWrong2) ? "Tie" : player2.name;
}

//Problem-04
function isSame(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        return "Invalid";
    }
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}

//Problem-05
function resultReport(marks) {
    if (!Array.isArray(marks)) return "Invalid";

    const student = { finalScore: 0, pass: 0, fail: 0 };

    for (const mark of marks) {
        student.finalScore += mark;
        if (mark >= 40) student.pass++;
        else student.fail++;
    }

    student.finalScore = marks.length > 0 ? Math.round(student.finalScore / marks.length) : 0;

    return student;
}
