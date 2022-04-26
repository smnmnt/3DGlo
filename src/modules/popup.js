const popup = () => {
    const popup = document.querySelector('.popup')
    const popupContent = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = popup.querySelector('.popup-close')

    let count = -38
    let intervalId
    popupContent.style.left = `${count}%`

    
    const disableAnims = (count) => {           
        popupContent.style.left = `${count}%`
    }

    const counterOpen = () => {
        count += 4
        disableAnims(count)
        if (count >= 40) {
            clearInterval(intervalId)
        }
    }
    const counterClose = () => {
        count -= 4
        disableAnims(count)
        if (count <= -38) {
            clearInterval(intervalId)
            popup.style.display = ''
            count = -38
        }
    }


    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                popupContent.style.left = ``
                popup.style.display = 'block'
            } else {
                popup.style.display = 'block'
                intervalId = setInterval(counterOpen, 10)
            }
        })
    })
    closeBtn.addEventListener('click' , () => {
        if (window.innerWidth > 768) {
            intervalId = setInterval(counterClose, 10)
        } else {
            popup.style.display = ''
        }
    })

}

export default popup