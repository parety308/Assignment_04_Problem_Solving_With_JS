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
console.log(onlyCharacter("Cy   bar- At  tac k  "));