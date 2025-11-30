
const productElement = document.querySelector("ul#productList");
//1 tạo mảng product
let products = [{
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
},
{
    id: 7,
    product_name: 'Laptop Dell Inspiron 14 5440 D0F3W',
    ram: 'Updating',
    price: '15.990.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_29.png'
},
{
    id: 8,
    product_name: 'Laptop Dell Inspiron 15 3530 J9XFD',
    ram: 'Updating',
    price: '14.990.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_843.png'
},
{
    id: 9,
    product_name: 'Laptop Dell 15 DC15250 79N4M',
    ram: 'Updating',
    price: '11.290.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_54.png'
},
{
    id: 10,
    product_name: 'Laptop Dell 15 DC15255 DC5R5802W1',
    ram: 'Updating',
    price: '15.990.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_58.png'
},
{
    id: 11,
    product_name: 'Laptop Dell 15 DC15250 71073959',
    ram: 'Updating',
    price: '20.390.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_45.png'
},
{
    id: 12,
    product_name: 'Laptop Dell Vostro 3530 2H1TPI5',
    ram: 'Updating',
    price: '13.890.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_659_2__8.png'
},
];

//2.Xuất dữ liệu lên html với array map
let productHtml = products.map((Element) => {
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
        window.location.assign("/detail.html");
    })
}
// btnElement.addEventListener('click', function (e) {
//     console.log(e);
//     alert(btnElement.getAttribute("product_id"));
// });