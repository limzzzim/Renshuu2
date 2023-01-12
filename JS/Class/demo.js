class Hotel {
    constructor (room, prices, days, discount, surcharge) {
        this.room = room;
        this.prices = prices;
        this.days = days;
        this.discount = discount;
        this.surcharge = surcharge;   
    }
    getAmount(){
        return (1 - this.discount)*this.prices*this.days+this.surcharge;
    }
    getDiscount(){
        return`${this.discount*100}%`;
    }
}

let bill = [
    new Hotel(112, 400000, 5, 0.05, 70000),
    new Hotel(113, 450000, 9, 0.1, 150000),
    new Hotel(114, 500000, 8, 0.15, 600000),
]

function showBill(){
    let tbBill = document.getElementById("tbBill");
    let totalAmount = 0;
    for ( let i=0; i<bill.length; i++){
        tbBill.innerHTML += `
            <tr>
                <td>${bill[i].room}</td>
                <td>${bill[i].prices}</td>
                <td>${bill[i].days}</td>
                <td>${bill[i].getDiscount()}</td>
                <td>${bill[i].surcharge}</td>
                <td>${bill[i].getAmount()}</td>
            </tr>
        `
    totalAmount += bill[i].getAmount();
    }
    document.getElementById("totalAmount").innerHTML = totalAmount;
}
showBill();
