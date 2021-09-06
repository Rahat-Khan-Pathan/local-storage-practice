const getInput = () => {
    const val = document.getElementById('input-field').value;
    document.getElementById('input-field').value = '';
    return val;
}
const showProduct = (product,obj) => {
    const ul = document.getElementById('product-list');
    const li = document.createElement('li');
    li.innerText = (obj[product] === 1) ? product : product + '-> ' + obj[product];
    ul.appendChild(li);
}
const getLocalStorage = () => {
    const items = localStorage.getItem('items');
    let obj;
    if(items) {
        obj = JSON.parse(items);
    }
    else {
        obj = {};
    }
    return obj;
}
const setLocalStorage = (obj,product) => {
    if(obj[product] !== undefined) {
        obj[product]++;
    }
    else {
        obj[product] = 1;
    }
    localStorage.setItem('items',JSON.stringify(obj));
}
const displayProduct = () => {
    const obj = getLocalStorage();
    for(const o in obj) {
        showProduct(o,obj);
    }
}
document.getElementById('button-add').addEventListener('click',function() {
    const inputText = getInput();
    if(!inputText) return;
    const obj = getLocalStorage();
    setLocalStorage(obj,inputText);
    document.getElementById('product-list').textContent = '';
    displayProduct();
})
document.getElementById('button-clear').addEventListener('click',function() {
    document.getElementById('product-list').textContent = '';
    localStorage.removeItem('items');
})
displayProduct();