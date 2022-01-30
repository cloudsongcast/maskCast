window.onload = ()=>{	
	const btnClkA = document.querySelectorAll('.btn')
    
    btnClkA[0].addEventListener('click',()=>{
    	const vueForm = document.querySelectorAll('.vue-form div div ul li')
    	vueForm[1].classList.add('behind')
    	vueForm[2].classList.add('behind')
    	vueForm[3].classList.add('behind')
    	console.log(vueForm[1]);
    })
}
