const noHdrbtn = document.querySelectorAll('header')
const noFtr = document.querySelectorAll('footer')

	noHdrbtn[0].classList.add('behind')
    noFtr[0].classList.add('behind')

window.onload = ()=>{

	const btnClkA = document.querySelectorAll('.btn')
	
	
    const cardGet = document.querySelectorAll('.card')
        cardGet[0].classList.add('behind')
    	cardGet[5].classList.add('behind')
    	cardGet[6].classList.add('behind')
    	cardGet[4].classList.add('behind')
    
    	console.log(cardGet)
    btnClkA[0].addEventListener('click',()=>{
    	
    	
    })
}
