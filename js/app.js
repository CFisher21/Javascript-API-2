/*      QAP 3
 * Please update the following with your information:
 *
 *      Name:       <CODY_FISHER>
 *      Student ID: <YOUR_STUDENT_ID>
 *      Date:       <SUBMISSION_DATE>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

// Data sorting
let clothing = [];
for (let i = 0; i < products.length; i++) {
  const cata = products[i].categories[0];
  const boolea = products.discontinued
  if (cata === "c1" ) {
    clothing.push(products[i]);
  } else {
  }
}
console.log(clothing);

let kids = [];
for (let i = 0; i < products.length; i++) {
  const cata = products[i].categories[0];
  if (cata === "c2") {
    kids.push(products[i]);
  } else {
  }
}
console.log(kids);

let tools = [];
for (let i = 0; i < products.length; i++) {
  const cata = products[i].categories[0];
  if (cata === "c3") {
    tools.push(products[i]);
  } else {
  }
}
console.log(tools);

let ppe = [];
for (let i = 0; i < products.length; i++) {
  const cata = products[i].categories[0];
  if (cata === "c4") {
    ppe.push(products[i]);
  } else {
  }
}
console.log(ppe);

// functions to load data to html table

document.querySelector("#clothing").addEventListener("click", getClothes);
document.querySelector("#clothing").addEventListener("click", getTableheader);
document.querySelector("#clothing").addEventListener("click", getClothesheading);

function getClothes() {
    document.getElementById("category-products").innerHTML = ''
    var table = document.getElementById("category-products")
  for (let i = 0; i < clothing.length; i++) {
    var row = `<tr>
                    <td>${clothing[i].id}</td>
                    <td>${clothing[i].title}</td>
                    <td>${clothing[i].description}</td>
                    <td>${clothing[i].price}</td>
            </tr>`
    table.innerHTML += row
  }
}

function getClothesheading() {
    document.querySelector("#selected-category").innerHTML = `<h3>Clothes </h3>`
    
}

document.querySelector("#kids").addEventListener("click", getKids);
document.querySelector("#kids").addEventListener("click", getTableheader);
document.querySelector("#kids").addEventListener("click", getKidsheading);

function getKids() {
    document.getElementById("category-products").innerHTML = ''
    var table = document.getElementById("category-products")
  for (let i = 0; i < kids.length; i++) {
    var row = `<tr>
                    <td>${kids[i].id}</td>
                    <td>${kids[i].title}</td>
                    <td>${kids[i].description}</td>
                    <td>${kids[i].price}</td>
            </tr>`
    table.innerHTML += row
  }
}

function getKidsheading() {
    document.querySelector("#selected-category").innerHTML = `<h3>Kids Clothing </h3>`
    
}

document.querySelector("#tools").addEventListener("click", getTools);
document.querySelector("#tools").addEventListener("click", getTableheader);
document.querySelector("#tools").addEventListener("click", getToolsheading);

function getTools() {
    document.getElementById("category-products").innerHTML = ''
    var table = document.getElementById("category-products")
  for (let i = 0; i < tools.length; i++) {
    var row = `<tr>
                    <td>${tools[i].id}</td>
                    <td>${tools[i].title}</td>
                    <td>${tools[i].description}</td>
                    <td>${tools[i].price}</td>
            </tr>`
    table.innerHTML += row
  }
}

function getToolsheading() {
    document.querySelector("#selected-category").innerHTML = `<h3>Tools </h3>`
    
}

document.querySelector("#ppe").addEventListener("click", getPpe);
document.querySelector("#ppe").addEventListener("click", getTableheader);
document.querySelector("#ppe").addEventListener("click", getPpeheading);

function getPpe() {
    document.getElementById("category-products").innerHTML = ''
    var table = document.getElementById("category-products")
  for (let i = 0; i < ppe.length; i++) {
    var row = `<tr>
                    <td>${ppe[i].id}</td>
                    <td>${ppe[i].title}</td>
                    <td>${ppe[i].description}</td>
                    <td>${ppe[i].price}</td>
            </tr>`
    table.innerHTML += row
  }
}

function getPpeheading() {
    document.querySelector("#selected-category").innerHTML = `<h3>PPE </h3>`
    
}

function getTableheader() {
    var tablehead = document.getElementById("tableheader")
    var heading = ` <tr>
                    <th>Product ID </th>
                    <th>Product Name </th>
                    <th>Description </th>
                    <th>Price </th>
                    </tr>`
        tablehead.innerHTML = heading
}


