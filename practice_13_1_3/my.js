let arr = [3, 5, 6, 9, 8, 4, 7, 1];
let sum = 0;
let max = arr[0];
function findmax() {
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        sum +=arr[i];
        avg = sum/arr.length;
    }
    document.write(" số lớn nhất là " +max + " trung bình là " + avg)
}
findmax(arr)