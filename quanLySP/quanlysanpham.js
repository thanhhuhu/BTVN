let arrProduct = ["Nokia 11", "OPPO Extra", "Iphone 15", "Samsung Galaxy"];

function displayAllProduct() {
  let data = "<table>";
  data += "<tr>";
  data += "<th id='title'>Product Name</th>";
  data +=
    "<th colspan='2' id='action'>" + arrProduct.length + " products</th>";
  data += "</tr>";

  for (let i = 0; i < arrProduct.length; i++) {
    data += "<tr>";
    data += "<td>" + arrProduct[i] + "</td>";
    data += "<td><button onclick='edit(" + i + ")'>Edit</button></td>";
    data += "<td><button onclick='deleteP(" + i + ")'>Delete</button></td>";
    data += "</tr>";
  }
  data += "</table>";
  document.getElementById("result").innerHTML = data;
}

function add() {
  let productName = document.getElementById("add").value;
  arrProduct.push(productName);
  document.getElementById("add").value = "";
  displayAllProduct();
}

function edit(index) {
  let newProduct = prompt(
    "Nhập tên mới: (" + arrProduct[index] + ")",
    arrProduct[index]
  );
  if (newProduct != null) {
    arrProduct[index] = newProduct;
  }
  displayAllProduct();
}

function deleteP(index) {
  if (
    confirm("Bạn chắc chắn muốn xóa sản phẩm: " + arrProduct[index] + "?")
  ) {
    arrProduct.splice(index, 1);
  }
  displayAllProduct();
}