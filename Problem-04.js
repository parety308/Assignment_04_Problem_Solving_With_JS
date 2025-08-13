function isSame(arr1, arr2) {
    if (typeof arr1!=="array" || typeof arr2!=="array") {
        return "Invalid";
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
      
    }
      return true;
}

console.log(isSame([], [1, 2, 3, 4]));