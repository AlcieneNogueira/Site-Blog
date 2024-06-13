const container = document.getElementById('container')
const registerBtn = document.getElementById('register')
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});



// validação do nome

const nomeInput = document.getElementById("nome")
const nomeLabel = document.querySelector("label[for='nome']")
const nomeHelp = document.getElementById("nome-help")

function mostrarPopup(input, label){
    // mostrar popup de campo obrigatorio
input.addEventListener("focus", () => {
   label.classList.add("required-popup");
});

    // cocultar popup de campo obrigatorio
input.addEventListener("blur", () =>{
    label.classList.remove("required-popup");
});
}
mostrarPopup(nomeInput, nomeLabel)

// validar valor do input

nomeInput.addEventListener("change", (evento) =>{
    let valorInput = evento.target.value
    console.log(valorInput.length);

    if(valorInput.length < 3) {
        console.log("o nome deve conter 3 ou mais caracteres.");
        nomeInput.classList.add("error")
        nomeHelp.classList.add("visible")
        nomeInput.classList.remove("correct")
        nomeHelp.innerText = 'o nome deve conter 3 ou mais caracteres.'
    } else {
        console.log("valor correto")
        nomeInput.classList.add("correct")
        nomeHelp.classList.remove("visible")
    }
})


// validação do email

const emailInput = document.getElementById("email")
const emailLabel = document.querySelector("label[for='email']")
const emailHelp = document.getElementById("email-help")


mostrarPopup(emailInput, emailLabel)

emailInput.addEventListener("change", (evento) => {
    const valorInput = evento.target.value

    if(valorInput.includes("@") && valorInput.includes(".com")) {
        console.log("valor correto!");
        emailInput.classList.add("correct")
        emailHelp.classList.remove("visible")
    } else {
        console.log("o email deve conter @ e .com");
        emailInput.classList.add("error")
        emailHelp.classList.add("visible")
        emailInput.classList.remove("correct")
        emailHelp.innerText = 'o email deve conter @ e .com'
    }
});