
const productElement = document.querySelector("ul#cellPhone");
//1 tạo mảng product
let cellPhones = [{
    id: 1,
    product_name: 'Samsung Galaxy A56 5G 8GB 128GB',
    ram: '8/128',
    price: '7.890.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-a56.1_1.png'
},
{
    id: 2,
    product_name: 'Samsung Galaxy A36 5G 8GB 128GB',
    ram: '8/128',
    price: '7.490.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-a36.2.png'
},
{
    id: 3,
    product_name: 'Samsung Galaxy S25 FE 8GB 128GB',
    ram: '8/128',
    price: '13.550.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s25-fe-1.jpg'
},
{
    id: 4,
    product_name: 'Samsung Galaxy S24 Plus 12GB 256GB',
    ram: '12/256',
    price: '15.490.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/a/galaxy-s24-plus-tim.png'
},
{
    id: 5,
    product_name: 'Samsung Galaxy S25 FE 8GB 512GB',
    ram: '8/512',
    price: '16.390.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/a/samsung-galaxy-s25-fe-1_1.jpg'
},
{
    id: 6,
    product_name: 'Samsung Galaxy A36 5G 8GB 128GB',
    ram: '12/256',
    price: '17.190.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/d/i/dien-thoai-samsung-galaxy-s25_1__2.png'
}
];

//2.Xuất dữ liệu lên html với array map
let productHtml = cellPhones.map((Element) => {
    return `
             <li>
                <a href="#" product_id="${Element.id}" class="btn_product"><img src="${Element.product_thumb}"></a>
                <a class="product-name" href="#">${Element.product_name}</a>
                <br>
                <span>Ram:${Element.ram}GB</span>
                <br>
                <span>Cost:${Element.price}đ</span>
             </li>
            `;
})
productElement.innerHTML = productHtml.join("");
//3.Lấy id
const aBtn_product_Element = document.getElementsByClassName("btn_product");
// console.log(aElement);
for (i = 0; i < aBtn_product_Element.length; i++) {
    aBtn_product_Element[i].addEventListener("click", function (e) {
        e.preventDefault();
        // alert("OK");
        // console.log(this.getAttribute("product_id"));
        localStorage.setItem("cellPhoneProductId", this.getAttribute("product_id"));
        console.log(localStorage.getItem('cellPhoneProductId'));
        window.location.assign("file:///C:/Users/bicav/Downloads/shoping-cart/detail.html");
    })
}
// btnElement.addEventListener('click', function (e) {
//     console.log(e);
//     alert(btnElement.getAttribute("product_id"));
// });