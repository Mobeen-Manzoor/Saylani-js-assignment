document.addEventListener("DOMContentLoaded", () => {

    console.log("hello")
    fetch("./product.json")
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        const shopingContainer = document.getElementById("boxes")

        data.forEach(item => {
            const card = document.createElement('div');
            card.className = "box"
            card.id = `product-id-${item.id}`
            card.innerHTML += `
                <img src="./productimg/${item.img}" alt="" />
          <h2>${item.heading}</h2>
          <p>${item.discription}</p>
          <p>${item.price}</p>
          <a class="cart-btn" onclick = "add_to_cart('${item.id}','${item.img}', '${item.heading}','${item.discription}','${item.price}')">Add to cart</a> `
          shopingContainer.append(card)
        //   console.log(item.id);
          
        });
    });
});
var arr = []
let add_to_cart = (id,img, heading, discription, price) => {
    

   var cart_item = {
    id: id,
    img: img,
    heading: heading,
    discription: discription,
    price: price

   }
   arr.push(cart_item)

   localStorage.setItem("cart_item", JSON.stringify(arr))
   console.log(id)
    
}

// ========================Signup section=====================

let signUpUsers = [];

document.addEventListener("DOMContentLoaded", () => {
    const signupButton = document.getElementById("signup-button");
    signupButton.addEventListener("click", () => {
        
        let signUpUser = {
            "signup_email": document.getElementById("signup-email").value,
            "signup_name": document.getElementById("signup-name").value,
            "signup_password": document.getElementById("signup-password").value
        };
        signUpUsers.push(signUpUser);
        localStorage.setItem("signupUsers", JSON.stringify(signUpUsers));
        alert(`User ${signUpUser.signup_name} successfully!`);
        

    });
}); 

// ===============LOGIN Form==========================

document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("login_btn");
    
    loginBtn.addEventListener("click", () => {

        var loginEmail = document.getElementById("login_email").value;
    var loginPassword = document.getElementById("login_password").value;
        const storedUsers = JSON.parse(localStorage.getItem("signupUsers")) || [];
        console.log(storedUsers);
        
        
        storedUsers.forEach(user => {
            console.log(user.signup_email);
            console.log(user.signup_password);
            console.log(loginPassword);
            console.log(loginEmail);
            
            if (user.signup_email == loginEmail && user.signup_password==loginPassword) {
                location.href = "./";
                
            }else{
                alert("Invalid Username or password")
            }
        });
    });
}); 




// ===============cart sectiom======================
var cardDetail = JSON.parse(localStorage.getItem("cart_item"));
console.log(cardDetail);


const cardSection = document.getElementById("add-to-card")

function renderCard() {
   
    cardSection.innerHTML = "";

    
    cardDetail.forEach(card => {
        var cardBox = document.createElement("div");
        cardBox.className = "add-to-card";
        cardBox.innerHTML = `
            <div class="img"><img src="./productimg/${card.img}" alt=""></div>
            <div class="detail">
                <h2>${card.heading}</h2>
                <p>${card.discription}</p>
            </div>
            <div class="remove-btn">
                <button onclick="remove_cart_box('${card.id}')">Remove</button>
            </div>
        `;
        cardSection.append(cardBox);
    });
}
renderCard()

var remove_cart_box = (id) => {
    
    cardDetail = cardDetail.filter(obj => obj.id !== id);


    localStorage.setItem("cart_item", JSON.stringify(cardDetail));

    
    renderCard();
};






