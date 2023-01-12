let bill = [
    {
        name: "Pull",
        volume: 3,
        price: 180,
        discount: 5,
    },
    {
        name: "Jean",
        volume: 7,
        price: 420,
        discount: 10,
    },
    {
        name: "Hoodie",
        volume: 5,
        price: 370,
        discount: 15,
    }
]
for (let i = 0; i < bill.length; i++) {
    console.log(`
    Tên sản phẩm: ${(bill[i].name)}
    Số lượng: ${(bill[i].volume)}
    Đơn giá: ${(bill[i].price)}
    Giảm giá: ${(bill[i].discount)}%
    → Thành tiền: ${(bill[i].volume * bill[i].price)-(bill[i].volume * bill[i].price * bill[i].discount/100)}`);
}