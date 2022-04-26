const calculator = () => {
    const calcSquareMeters = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')

    const numberEnable = (e) => {
        e.target.value = e.target.value.replace(/\D+/, "")  
    }
    calcSquareMeters.addEventListener('input', numberEnable)
    calcCount.addEventListener('input', numberEnable)
    calcDay.addEventListener('input', numberEnable)
}

export default calculator