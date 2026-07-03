function predictPrice(){

    let area = document.getElementById("area").value;

    if(area==""){
        alert("Please enter area");
        return;
    }

    let price = area * 5000;

    document.getElementById("result").innerHTML =
    "Estimated Price: ₹" + price.toLocaleString();
}
