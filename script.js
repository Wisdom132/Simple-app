// add product button event listener
// let addProduct = document.getElementById('add')
// addProduct.addEventListener('click', () => {
    // alert('button is clicked')
// }) 


// form validation
function validateForm() {

   
    let product = document.forms["myform"]["add-product"].value;
    if (product.value == "") {
        // product.style.display = "inline"
        product.innerHTML = "please fill out name of product"
        // console.log(product)
    // alert("product must be filled out");
    return false;
    } else {
        return true
    }
   
    
    // let firstProduct = document.getElementById('product').value;
    // let firstPrice = document.getElementById('price').value;

    // let valid = 1;

    // if (firstProduct == ' ' && valid == 1) {
    //     document.getElementById('product').style.display = 'inline';
    //     document.getElementById('product').innerHTML = 'please enter product';
    //     valid = 0;
    // }
    //  if (firstPrice == " " && valid == 1) {
    //    document.getElementById("price").style.display = "inline";
    //    document.getElementById("price").innerHTML = "please enter price";
    //    valid = 0;
    // }
    
    // if (valid == 1) {
    //     return true; 
    // } else {
    //     return false
    // }

    // if (firstProduct.value == null || product == " ") {
    //     e.preventDefault();
    //     alert('product cant be blank')
    //     return false
    // } else if (firstPrice.value == null || price == " ") {
    //     alert('price cant be blank')
    //     return false
    // }
    // console.log('good')
}