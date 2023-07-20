window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
 
function calculateBMI() {
 
    let height = parseInt(document
            .querySelector("#tinggi").value);
 
    let weight = parseInt(document
            .querySelector("#berat").value);
 
    let result = document.querySelector("#result");
    let status = document.querySelector("#status");
 
    if (height === "" || isNaN(height))
        result.innerHTML = "Provide a valid Height!";
 
    else if (weight === "" || isNaN(weight))
        result.innerHTML = "Provide a valid Weight!";
 
    else {
 
        let bmi = (weight / ((height * height)
                            / 10000)).toFixed(2);
 
        result.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.5) {
        result.innerHTML = `<span>${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-info">UNDERWEIGHT</span>`; 
 
        } else if (bmi >= 18.5 && bmi < 22.9) {
        result.innerHTML = `<span>${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-success">NORMAL</span>`; 
 
        } else if (bmi >= 23 && bmi < 24.9) {
        result.innerHTML = `<span>${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-warning">RISK TO OVERWEIGHT</span>`; 
 
        } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML = `<span>${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-oren">OVERWEIGHT</span>`; 
 
        } else {
        result.innerHTML = `<span>${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-danger">OBESE</span>`; 
        }
    }
}