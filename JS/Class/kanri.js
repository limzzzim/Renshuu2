class Phone {
    constructor(line, volume, price, discount) {
        this.line = line;
        this.volume = volume;
        this.price = price;
        this.discount = discount;
    };
    getdiscount() {
        return `${(this.discount) * 100}%`;
    };
    getAmount() {
        return ((1 - this.discount) * this.volume * this.price);
    }
}

let phoneList = [
    new Phone("Sony Xperia", 4, 8000000, 0.1),
    new Phone("Samsung Galaxy", 3, 5000000, 0.05),
    new Phone("Nokia 6", 2, 4500000, 0.2),
    new Phone("Xiaomi Redmi Note 4", 6, 8900000, 0.1),
    new Phone("Apple iPhone 6S", 9, 9600000, 0.25),
    new Phone("Xiaomi Mi 6s Plus", 7, 3500000, 0.3),
    new Phone("Apple iPhone 8 Plus", 8, 11500000, 0),
    new Phone("Fujitsu F-04E", 5, 13000000, 0.15),
    new Phone("Oppo A71", 8, 7500000, 0.2),
]

function showList() {
    let tbShow = document.getElementById("tbShow");
    let totalAmount = 0;
    for (let i = 0; i < phoneList.length; i++) {
        tbShow.innerHTML += `
            <tr>
                <td style="text-align:center">${i+1}</td>
                <td>${phoneList[i].line}</td>
                <td style="text-align:right">${phoneList[i].volume}</td>
                <td style="text-align:right">${phoneList[i].price}</td>
                <td style="text-align:right">${phoneList[i].getdiscount()}</td>
                <td style="text-align:right">${phoneList[i].getAmount().toFixed(0)}</td>
            </tr>
        `
    totalAmount += phoneList[i].getAmount();
    }
    document.getElementById("totalAmount").innerHTML = totalAmount;
}

showList();