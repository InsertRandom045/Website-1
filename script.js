//html buttons
//get refrenses to the buttons and the output element
const button1 = document.getElementById('button1')
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const output = document.getElementById("output")
const subButton = document.getElementById("contact")



//button 1 actionnn
button1.addEventListener("click", function () {
    output.textContent = "Button 1 Was Clicked, cool color :D";
    button1.style.backgroundColor = "rgb(123, 146, 18)";
})
//button 2 ACTTTTTIOOOOONNNN
button2.addEventListener("click", function () {
    output.textContent = "Button 2 was clicked, here a cool font(wicked)."
    button2.style.fontStyle = "italic"
    button2.style.fontFamily = "Courier New"
    button2.style.fontWeight = "bold"
})
//button 3 aaaaaaaaaaaaaaaaaaaaaaaaccccccccccccccccttION
button3.addEventListener("click", function () {
    output.textContent = "Button 3 was clicked, a cool color aninmation was started."
    for(let i = 0; i<100000000; i++){button3 = document.getElementById("button3").animate([{ color: "rgb(127, 255, 212)" }, { color: "rgb(41, 129, 101)" }, { color: "rgb(169, 12, 83)" }, { color: "rgb(127, 255, 212)"}], {duration: 3000})}
    //not working rotation code
    
    //button3=document.getElementById("button3").animate([{transform: rotate(180, deg)}, {transform: rotate(360, deg)}, {duration: 4444}])
})
                                            //button3.removeEventListener("click", function(){})
// var cheese = function(){
//     const randomNumber = (Math.floor(Math.random() * 100)) + 1
//     output.textContent = "Here a random number: " + randomNumber + ", Congrats."
// }

//BUTTON 4 action
button4.addEventListener("click", function(){
    const randomNumber = (Math.floor(Math.random() * 100)) + 1
    output.textContent = "Here a random number: " + randomNumber + ", Congrats."
})
button4.removeEventListener("mouseout", cheese)
//button 5 Action
button5.addEventListener("click", function(){
    //alert("Boo!");
    //confirm("Yep")
    let mathQuestion = prompt("1 + 1 - 0 x 1 = ?")
    if (mathQuestion == 1){alert("Nice you've got it right.")}
})
subButton.addEventListener("submit", function(){
    alert("thank you for your participation");
    let name = subButton["name"]
    let message = subButton["message"]
})
function goToPage(page){
    window.location.href=page;
}
// let aVariable = {x:123,y:1,z:0}
// aVariable.z = 876
//Fix code of sorts
const formElement=document.querySelector("#form");
formElement.addEventListener("submit", (Event) => {
    Event.preventDefault();
    //const formData=new FormData(formElement);
    fetch("https://reqres.in/api/form", {
        method:"POST", 
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: FormData.get("name"),
            messsage: FormData.get("message"),
        }),
    })
    .then((Response)=> {
        window.location.href="./formAnswer.html";
    })
    .catch((error)=>{
        console.error(error);
    });
});