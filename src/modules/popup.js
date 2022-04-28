import { animate } from './animate'

const popup = () => {
    const popup = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    // const content = document.querySelector('.popup-content')
   
    popup.style.display = 'block'
    popup.style.transform = 'translateX(-100%)'
    popup.style.background = `rgba(0,0,0,.0)`
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () =>{
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    popup.style.transform = `translateX(${100 * (progress-1)}%)`
                    popup.style.background = `rgba(0,0,0,.5)`
                }
              });
        })
    })
 
    popup.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            animate({
                duration: 1000,
                timing(timeFraction) {
                  return timeFraction;
                },
                draw(progress) {
                    popup.style.transform = `translateX(${-100 * progress}%)`
                }
              });
        }
    })
}

export default popup