window.onload = () => {
    let button = document.querySelector("#btn");
 
    // Function buat menjalankan kalkukaltor
    button.addEventListener("click", calculateBMI);
};

$(document).ready(function() {
    $("#downloadBMI").click(function() {
        domtoimage.toBlob(document.getElementById('contentBMI')).then(function(blob) {
            window.saveAs(blob, "ImageBMI.png")
        })
    })
})
 
function calculateBMI() {
 
    // mendapatkan inputan tinggi dan berat user
    let height = parseInt(document
            .querySelector("#tinggi").value);
 
    let weight = parseInt(document
            .querySelector("#berat").value);
 
    let result = document.querySelector("#result");
    let status = document.querySelector("#status");
 
    // check user memasukan benar atau tidak
    if (height === "" || isNaN(height))
        result.innerHTML = `<small><small><small><small><small><small>Provide a valid Height!</small></small></small></small></small></small>`;
 
    else if (weight === "" || isNaN(weight))
        result.innerHTML = `<small><small><small><small><small><small>Provide a valid Weight!</small></small></small></small></small></small>`;
 
    // 2 2 nya berhasil, langsung dihitung
    else {
 
        let bmi = (weight / ((height * height)
                            / 10000)).toFixed(2);
 
        result.innerHTML = `<span class="bmi-container">${bmi}</span>`;

        if (bmi < 18.5) {
        result.innerHTML = `<span class="bmi-container">${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-info">UNDERWEIGHT</span>`; 
 
        } else if (bmi >= 18.5 && bmi < 22.9) {
        result.innerHTML = `<span class="bmi-container">${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-success">NORMAL</span>`; 
 
        } else if (bmi >= 23 && bmi < 24.9) {
        result.innerHTML = `<span class="bmi-container">${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-warning">RISK TO OVERWEIGHT</span>`; 
 
        } else if (bmi >= 25 && bmi < 29.9) {
        result.innerHTML = `<span class="bmi-container">${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-oren">OVERWEIGHT</span>`; 
 
        } else {
        result.innerHTML = `<span class="bmi-container">${bmi}</span>`;
        status.innerHTML = `<span class="badge badge-danger">OBESE</span>`; 
        }
    }
}
