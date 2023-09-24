//购物车涉及数据类型尝试
class shoppingCart{
    constructor(productID, productName, productPrice, productNum, productImage, checked){
        this.productID=productID;
        this.productName=productName;
        this.productPrice=productPrice;
        this.productNum=productNum;
        this.productImage=productImage;
        this.checked=checked;
    }
}
let Cart1 = new shoppingCart(101, 'Liushen Florida water', 10, 1, 'photo.png', true);
console.log(typeof Cart1); //object
console.log(typeof Cart1.productID); //number
console.log(typeof Cart1.productName); //string
console.log(typeof Cart1.productPrice); //number
console.log(typeof Cart1.productNum); //number
console.log(typeof Cart1.productImage); //string
console.log(typeof Cart1.checked); //boolean
//在编写中，了解到JavaScript是动态类型语言，不能给变量或参数指定数据类型；
//JavaScript的超集TypeScript是静态类型语言，可以给变量指定数据类型，即可通过constructor(product:number)指定数据类型

//其他数据类型尝试
//undefined-未定义的数据类型
var data1;
console.log(typeof data1); //undefined
//NULL
//symbol-唯一并且不可变的原始值，可用作对象属性的键
const data3=Symbol()
console.log(typeof data3); //symbol
//数组
var array1 = new Array();