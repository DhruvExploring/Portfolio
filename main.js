

// Form submission alert

document.getElementById("contact-form").addEventListener("submit",function(event){
    alert("Form sucessfully submitted!!"); //shows the alert after form submission 
    event.target.reset(); //resets the form
})


// adding the benefits and the delete button

document.getElementById("benefit-btn1").addEventListener("click",function(){

    const benefitInputBox= document.getElementById("benefit-text1");
    const Container= document.getElementById("benefit-container1");
    const newBen= document.createElement("li");
    const newBenWraper = document.createElement("div");
    newBenWraper.setAttribute("id","benefit-wrapper"); //sets id to benefit-wrapper
    newBen.setAttribute("class","created-list")
    const DelBtn= document.createElement("button");
    const benefitInput= benefitInputBox.value; //gets the text inside the textarea
    if(benefitInput==""){ //checks if the box is empty 
        alert("Please Enter a benfit!"); //asks the user to fill the textarea
        return; // returns the function without creating the new benefit
    }
    DelBtn.innerHTML="Delete";
    DelBtn.setAttribute("class","delete-button");
    DelBtn.onclick= () => Container.removeChild(newBenWraper);
    newBen.innerHTML=benefitInput;
    newBenWraper.appendChild(newBen);
    newBenWraper.appendChild(DelBtn);
    Container.appendChild(newBenWraper);
    benefitInputBox.value=""; //resets the value of input box after submission

})
document.getElementById("benefit-btn2").addEventListener("click",function(){

    const benefitInputBox= document.getElementById("benefit-text2");
    const Container= document.getElementById("benefit-container2");
    const newBen= document.createElement("li");
    const newBenWraper = document.createElement("div");
    newBenWraper.setAttribute("id","benefit-wrapper"); //sets id to benefit-wrapper
    newBen.setAttribute("class","created-list")
    const DelBtn= document.createElement("button");
    const benefitInput= benefitInputBox.value;  //gets the text inside the textarea
    if(benefitInput==""){ //checks if the box is empty
        alert("Please Enter a benfit!"); //asks the user to fill the textarea
        return; // returns the function without creating the new benefit
    }
    DelBtn.innerHTML="Delete";
    DelBtn.setAttribute("class","delete-button");
    DelBtn.onclick= () => Container.removeChild(newBenWraper);
    newBen.innerHTML=benefitInput;
    newBenWraper.appendChild(newBen);
    newBenWraper.appendChild(DelBtn);
    Container.appendChild(newBenWraper);
    benefitInputBox.value=""; //resets the value of input box after submission

})

// date and time displayed at the bottom
function getTime(){
    document.getElementById("DateTime").textContent= "Current date and time: " + Date(); //gets date inside the DateTime element

}

setInterval(getTime,1000); // calls the function in every 1 second


