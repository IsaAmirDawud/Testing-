const inputPassword = document.getElementById("input-password");
const generatePasswordBtn = document.getElementById("generate-password-btn");
const copyPasswordBtn = document.getElementById("copy-password-btn");
let password; 

const getRandomNum = num => {
    return Math.floor(Math.random() * num)
}

const generatePassword = () => {
    const randomChar = [];
    const lengthOfPassword = getRandomNum(9) + 11;
    for (let i = 0; i < lengthOfPassword; i++){
        randomChar.push(String.fromCharCode(getRandomNum(94) + 33));
    }
    password = randomChar.join("")
    return inputPassword.innerText = password;
}

generatePassword();

generatePasswordBtn.addEventListener("click", ()=>{
    generatePassword();
});

const copyPassword = () =>{
const copyContent = async => {
    try {
        await navigator.clipboard.writeText(password);
        alert("copied to clipboard")
    } catch (err) {
        alert("Failed to copy to clipboard")
    }
}

}
copyPasswordBtn.addEventListener("click", ()=>{
    copyPassword();
});