const inputEmail = document.getElementById("email")
const buttonEmail = document.getElementById("button-early")


buttonEmail.addEventListener("click", () => {
    const valueEmail = String(inputEmail.value)
    if (valueEmail.length === 0) {
        alert("el campo esta vacio")
        return 
    } else if ( valueEmail.includes("@") && valueEmail.toLocaleLowerCase().endsWith(".com")){
        alert(`Su correo se validó exitosamente ${valueEmail}`)
        return
    }
    alert("el correo es incorrecto")
    
})