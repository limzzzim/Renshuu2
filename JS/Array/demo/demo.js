let arr = [];
arr[0] = [2,3,4,5,7];
arr[1] = [4,5,4,1,7];
arr[2] = [2,1,6,2,7];
arr[3] = [2,3,3,7,7];
arr[4] = [1,5,4,7,9];

// Hiển thị mảng 2 chiều
let str = "";
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
       str += arr[i][j];
    }
    str += "\n";
}
console.log(str);

// Tính tổng giá trị trên 2 đường chéo
let total = 0
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length;j++){
        if(i==j || i+j == arr[i].length-1){
            total += arr[i][j];
        }
    }
}
console.log("Total: " + total);

// Tính tổng tam giác dưới bên trái
let totalTriangleDown = 0;
for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[i].length-1-i;j++){
        totalTriangleDown += arr[i][j];
    }
}
console.log("totalTriangleDown: " + totalTriangleDown);

// Tính tổng tam giác dưới bên phải
let totalTriangleDown2 = 0;
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr[i].length;j++){
        totalTriangleDown2 += arr[i][j];
    }
}
console.log("totalTriangleDown2: " + totalTriangleDown2);

// Câu 1. tính tổng giá trị đường viền: dùng càng ít vòng for càng tốt
// Câu 2. tính tổng giá trị 2 tam giác trên
let totalTriangleUp = 0;
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr[i].length-j;j++){
        totalTriangleUp += arr[i][j];
    }
}
console.log("totalTriangleUp: " + totalTriangleUp);
// Câu 3. tính tổng các giá trị là sô chẵn
// Câu 4. tính tổng các giá trị là số nguyên tố
// Câu 5. tính tổng 5 số chẵn đầu tiên trong mảng 2 chiều
