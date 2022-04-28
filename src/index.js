import timer from './modules/timer'
import menu from './modules/menu'
import popup from './modules/popup'
import slider from './modules/slider'
import form from './modules/form'
import calculatorChecker from './modules/calculatorChecker'
import tabs from './modules/tabs'
import calculatorCounter from './modules/calculatorCounter'
import smootherScreen from './modules/smootherScreen'
import formSending from './modules/formSending'

timer('31 april 2022')
menu()
popup()
slider()
smootherScreen()
form()
calculatorChecker()
calculatorCounter(100)
tabs()
formSending({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
formSending({
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
formSending({
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})