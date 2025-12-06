function Cart(button) {
    if (button.innerText === "Add to Cart") {
        button.innerText = "Added to Cart";
        button.style.backgroundColor = "green";
        button.style.color = "white";
        alert("Item has been added to Cart")
    } 
    else {
        button.innerText = "Add to Cart";
        button.style.backgroundColor = "";
        button.style.color = "white";
        alert("Item has been removed from Cart")
    }
}

