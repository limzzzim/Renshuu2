// [min, max]: Math.floor(Math.random()*(max-min+1)+min)
// let mathFloor = [Math.floor(Math.random() * 10)] ;
// console.log(mathFloor);

//Yêu cầu giải quyết bài toán bằng cách sử dụng hàm (function)

//1. Viết hàm tạo ra 1 mảng numbers có size phần từ, và mảng numbers gồm các giá trị trong khoảng [10, 50]
function createArray(size, max, min, number) {
    let arr = [];
    let sum = 0;
    for (let i=0; i < size; i++) {
      //arr.push(Math.floor(Math.random() * 41) + 10);
      arr[i]=(Math.floor(Math.random() * (max-min+1)+min));
      sum += arr[i];
      console.log(arr[i]);
    }
    console.log(arr);
    console.log(sum);
    arr.includes(number) ? console.log('True') : console.log('False');
}
createArray(10, 60, 2, 17);


//2. Viết hàm hiển thị mảng numbers ra màn hình (mỗi giá trị trên mỗi hàng)

//3. Viết hàm tính tổng các giá trị có trong mảng numbers

//4. Viết hàm kiểm tra trong mảng numbers có xuất hiện số 15 ko (trả về true nếu có và false nếu không)

//5. Viết hàm đếm xem trong mảng numbers có bao nhiêu số lẻ?
