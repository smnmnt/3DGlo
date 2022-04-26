const form = () => {
    const formName = document.querySelectorAll('[name="user_name"]')
    const formEmail = document.querySelectorAll('[type=email]')
    const formTelephone = document.querySelectorAll('[type=tel]')
    const formMessage = document.querySelector('[placeholder="Ваше сообщение"]')

    
    formName.forEach(formName =>
        formName.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/g, "") 
    }))

    formEmail.forEach(formEmail =>
        formEmail.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-z@\-\.\!\~\*\']/g, "") 
    }))

    formTelephone.forEach(formTelephone =>
        formTelephone.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\(\)\-]/g, "") 
    }))

    formMessage.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]/g, "") 
    })

}

export default form