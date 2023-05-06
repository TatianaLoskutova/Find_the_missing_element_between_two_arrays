function findMissing(arr1, arr2) {
    let index;
    for (let i = 0; i < arr1.length; i++) {
        index = arr2.indexOf(arr1[i]);
        if (index > -1) {
            arr2.splice(index, 1);
        } else {
            return arr1[i];
        }
    }
}
