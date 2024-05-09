export const validateText = (name, username)=>{
    const regex = /^[a-zA-ZÁÉÍÓÚáéíóúüÜñÑ\s]{3,20}$/
    return regex.test(username, name)
}

export const textValidationMessage = 'Mínimo 3 máximo 20 caracteres. No se aceptan espacios ni caracteres especiales'