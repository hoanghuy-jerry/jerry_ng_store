
const productElement_for_laptop = document.querySelector("ul#laptop");
//1 tạo mảng product
let laptops = [{
    id: 1,
    product_name: 'Laptop Dell Inspiron 14 5440 D0F3W',
    ram: 'Updating',
    price: '15.990.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_29.png'
},
{
    id: 2,
    product_name: 'Laptop Dell Inspiron 15 3530 J9XFD',
    ram: 'Updating',
    price: '14.990.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_843.png'
},
{
    id: 3,
    product_name: 'Laptop Dell 15 DC15250 79N4M',
    ram: 'Updating',
    price: '11.290.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_54.png'
},
{
    id: 4,
    product_name: 'Laptop Dell 15 DC15255 DC5R5802W1',
    ram: 'Updating',
    price: '15.990.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_58.png'
},
{
    id: 5,
    product_name: 'Laptop Dell 15 DC15250 71073959',
    ram: 'Updating',
    price: '20.390.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_744_1_45.png'
},
{
    id: 6,
    product_name: 'Laptop Dell Vostro 3530 2H1TPI5',
    ram: 'Updating',
    price: '13.890.000',
    product_thumb: 'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/g/r/group_659_2__8.png'
},
];

//2.Xuất dữ liệu lên html với array map
let productHtml_for_laptop = laptops.map((Element) => {
    return `
             <li>
                <a href="#"><img src="${Element.product_thumb}"></a>
                <a class="product-name" href="#">${Element.product_name}</a>
                <br>
                <span>Ram:${Element.ram}GB</span>
                <br>
                <span>Cost:${Element.price}đ</span>
             </li>
            `;
})

productElement_for_laptop.innerHTML = productHtml_for_laptop.join("");