function tinhtoan(){
    let a = +document.getElementById('AB').value;
    let b = +document.getElementById('AC').value;
    let c = +document.getElementById('BC').value;
    if  ( a+b>c && b+c>a && a+c>b) {
            if (a==b && b==c && c==a) {
                document.getElementById('hinh').value="Tam giác đều"
            } else if ( a==b || b==c || c==a){
                document.getElementById('hinh').value="Tam giác cân"
            } else if ( (a**2==b**2 + c**2) ||  (b**2==a**2 + c**2) ||  (c**2==a**2 + b**2)) {
                document.getElementById('hinh').value="Tam giác vuông"
            } else if ((a*a>b*b+c*c||b*b>a*a+c*c||c*c >a*a+b*b)) {
                document.getElementById('hinh').value="Tam giác tù"
            } else {
            document.getElementById('hinh').type="text"
            document.getElementById('hinh').value="Tam giác nhọn"
            }
        } else {
        document.getElementById('hinh').type="text"
        document.getElementById('hinh').value="Không phải tam giác"
     }
}

function tinhtoan1(){
    let a = +document.getElementById('AB').value;
    let b = +document.getElementById('AC').value;
    let c = +document.getElementById('BC').value;
    (a+b>c && b+c>a && a+c>b) ? ((a==b && b==c && c==a) ?  document.getElementById('hinh').value="Tam giác đều" :
                                    ( a==b || b==c || c==a) ?  document.getElementById('hinh').value="Tam giác cân" :
                                        (a**2==b**2 + c**2 || b**2==a**2 + c**2 || c**2==a**2 + b**2) ? document.getElementById('hinh').value="Tam giác vuông" :
                                            (a*a>b*b+c*c||b*b>a*a+c*c||c*c >a*a+b*b) ? document.getElementById('hinh').value="Tam giác tù" :
                                                document.getElementById('hinh').value="Tam giác nhọn") :
    document.getElementById('hinh').value="Không phải tam giác";
}

function tinhtoan2(){
    let a = +document.getElementById('AB').value;
    let b = +document.getElementById('AC').value;
    let c = +document.getElementById('BC').value;
    switch (true) { 
        case (a+b>c && b+c>a && a+c>b):
            switch (true) {
                case (a==b && b==c && c==a): {
                    document.getElementById('hinh').value="Tam giác đều";
                    break;
                }
                case (a==b || b==c || c==a): {
                    document.getElementById('hinh').value="Tam giác cân";
                    break;
                }
                case ((a**2==b**2 + c**2)||(b**2==a**2 + c**2)||(c**2==a**2 + b**2)): {
                    document.getElementById('hinh').value="Tam giác vuông";
                    break;
                }
                case ((a*a>b*b+c*c||b*b>a*a+c*c||c*c >a*a+b*b)): {
                    document.getElementById('hinh').value="Tam giác tù";
                    break;
                }
                default:{
                    document.getElementById('hinh').value="Tam giác nhọn";
                    break;
                }
            }
            break;
        default:
        document.getElementById('hinh').value="Không phải tam giác";
        break;
     }

}
