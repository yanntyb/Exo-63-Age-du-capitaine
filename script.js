let text = document.getElementById("para");

let ageMax = parseInt(prompt("age Max"))

let age = 0;
while(age < ageMax){
    let message = "Le capitane a " + age + " ans, "
    if(age <18){
        message+= "le capitaine est jeune"
    }else if(18 < age < 50){
        message+= "le capitaine n'est pas très vieux"
    }else if(age > 50){
        message+= "le capitaine est vieux"
    }
    text.innerHTML += message + "<br>"
    age ++
};