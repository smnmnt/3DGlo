const formSending = ({ formId, someElem = [] }) => {
        const form = document.getElementById(formId)
        const statusBlock = document.createElement('div')
    
        const inputPhone = document.querySelectorAll('[name="user_phone"]')
        const inputName = document.querySelectorAll('[name="user_name"]')
        const inputUserMessage = document.querySelectorAll('[name="user_message"]')
    
        const loadingText = 'Загрузка'
        const alertText = 'Что-то пошло не так'
        const succeedText = 'Успешно'
    
        statusBlock.classList.add('white-text')
    
        const validate = (formElements) => {
            let success = true
            console.log(formElements);
            formElements.forEach(inputName => {
                if (inputName.classList.contains('form-name')) {
                    if (inputName.value.match(/[^а-яА-Я\-\s]/g)) {
                        success = false
                    }
                }
            })
            formElements.forEach(inputPhone => {
                if (inputPhone.classList.contains('form-phone')) {
                    if (inputPhone.value.match(/[^0-9\(\)\-]/g)) {
                        success = false
                    }
                } 
            })
            formElements.forEach(inputUserMessage => {
                if (inputUserMessage.classList.contains('mess')) {
                    if (inputUserMessage.value.match(/[^а-яА-Я\-\s]/g)) {
                        success = false
                    }
                } 
            })
            return success
        }
    
        const sendData = (data) => {
            return fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
        }
        
        const submitForm = () => {
            const formElements = form.querySelectorAll('input')
            const formData = new FormData(form)
            const formBody = {}
    
            statusBlock.textContent = loadingText

            form.append(statusBlock)
    
            formData.forEach((val, key) => {
                formBody[key] = val
            })
    
            someElem.forEach(elem => {
                const element = document.getElementById(elem.id)
                if (elem.type === 'block') {
                    formBody[elem.id] = element.textContent
                } else if (elem.type === 'input') {
                    formBody[elem.id] = element.value
                }
            })
    
            if (validate(formElements)) {
                sendData(formBody)
                    .then(data => {
                        statusBlock.textContent = succeedText
    
                        formElements.forEach(input => {
                            input.value = ''
                        })
                    })
                    .catch(error => {
                        statusBlock.textContent = alertText
                    })
                
            } else {
                alert('Данные не верны')
                statusBlock.textContent = alertText
            }
        }
    
        try {
            if (!form) {
                throw new Error ('Отсутствует форма')
            }
    
            form.addEventListener('submit', (event) => {

                event.preventDefault()
                
                submitForm()
            })
        } catch (error) {
            console.log(error.message);
        }
    }
export default formSending