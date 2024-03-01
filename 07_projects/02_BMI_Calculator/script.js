const form = document.querySelector("form");
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const button = document.querySelector("button");
    const result = document.createElement("div");
    result.id = "results";
    button.appendChild(result);

    if(height === "" || height < 0 || isNaN(height)){
        result.appendChild(document.createTextNode(`Please enter a valid height ${height}`));
    }
    else if(weight === "" || weight < 0 || isNaN(weight)){
        result.appendChild(document.createTextNode(`Please enter a valid height ${weight}`));
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi > 0 && bmi < 18.6){
            result.appendChild(document.createTextNode(`${bmi} is under weight`));
        }
        else if(bmi >= 18.6 && bmi <= 24.9){
            result.appendChild(document.createTextNode(`${bmi} is normal range`)); 
        }
        else{
            result.appendChild(document.createTextNode(`${bmi} is over weight`));
        }
    }


})