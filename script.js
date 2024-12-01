setTimeout(() => {
    alert("Assalmualaikum Pak Fahmi 🙏🙏")
}, 3000);
function HitungBMI() {
    const inputBeratBadan = document.getElementById("inputBeratBadan")
    const inputTinggiBadan = document.getElementById("inputTinggiBadan")

    const parseBeratBadan = parseFloat(inputBeratBadan.value)
    const parseTinggiBadan = parseFloat(inputTinggiBadan.value)

    if (isNaN(parseBeratBadan) || isNaN(parseTinggiBadan)) {
        alert("Kamu Belum Input Apapun")
        return
    }

    //Ini buat anu apa namanya biar jadi meter kaan user input nya cm
    const convertM_TinggiBadan = parseTinggiBadan / 100

    const BMI = parseBeratBadan / (convertM_TinggiBadan * convertM_TinggiBadan)

    const hasilBMI = document.getElementById("hasilBMI")
    
    if (BMI <= 18.45) {
        hasilBMI.value = "Kamu Kurus Bro";
    } else if (BMI >= 18.45 && BMI < 24.9) {
        hasilBMI.value = "Kamu Normal Bro";
    } else if (BMI >= 25.0 && BMI < 29.9) {
        hasilBMI.value = "Berat Badan Berlebih"
    } else if (BMI >= 30.0 && BMI < 34.9) {
        hasilBMI.value = "Obesitas Kelas 1";
    } else if (BMI >= 35.0 && BMI < 39.9) {
        hasilBMI.value = "Obesitas Kelas 2";
    } else if (BMI >= 40.0) {
        hasilBMI.value = "Kamu Obesitas";
    }
}
document.getElementById("hitungBMI").addEventListener("click", HitungBMI)