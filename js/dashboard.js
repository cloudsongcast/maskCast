

let chngTitle= document.querySelectorAll('.mr-auto')
	
let chbBckgn =  document.querySelectorAll('.bg-primary-dark')

let getDataCardt = document.querySelectorAll('.card')
let getFooterDOM = document.querySelectorAll('.footer-alt')
	
	chngTitle[0].innerHTML = "eRDio"
	chbBckgn[0].style.color = "black"
	
let getContainer = document.querySelectorAll('.container')
let containerChg = getContainer[0].innerHTML


	window.onload = ()=>{
			
	   let getAllCards = document.querySelectorAll('.card')
       const selectNode = document.getElementById('dashboard')
       getAllCards[1].classList.add('behind')
       getAllCards[0].classList.add('behind')
       getAllCards[2].classList.add('behind')
       const createCardTmp = document.createElement('DIV')
       createCardTmp.classList.add('card-body')
       const createBodyCardTmp = document.createElement('DIV')
       createBodyCardTmp.classList.add('row');createBodyCardTmp.classList.add('mb-4')
          // ADD BUTTON to stations admin
const dataTrgAtt = document.createAttribute("data-target");
const dataTglAtt = document.createAttribute("data-toggle");
const btnToOpen = document.createElement('BUTTON')
btnToOpen.classList.add('btn')
btnToOpen.classList.add('btn-login')
btnToOpen.classList.add('btn-primary')
btnToOpen.classList.add('btn-block')
btnToOpen.classList.add('mt-3')
dataTrgAtt.value = "#modalStation"
dataTglAtt.value = "modal"
btnToOpen.attributes.setNamedItem(dataTrgAtt)
btnToOpen.attributes.setNamedItem(dataTglAtt)
btnToOpen.innerHTML = "Administrar Estaciones"
//-----------------------------------------------------------
// ADD BUTTONs
const btnToOpenMusic = document.createElement('BUTTON')
const dataToMusic = document.createAttribute("onClick")
btnToOpenMusic.classList.add('btn')
btnToOpenMusic.classList.add('btn-login')
btnToOpenMusic.classList.add('btn-primary')
btnToOpenMusic.classList.add('btn-block')
btnToOpenMusic.classList.add('mt-3')
btnToOpenMusic.innerHTML = "Archivos de musica"
dataToMusic.value = "window.location = 'http://3.133.195.135/station/1/files'"
//-----------------------------------------------------------
// ADD BUTTONs
const btnToOpenDJ = document.createElement('BUTTON')
btnToOpenDJ.classList.add('btn')
btnToOpenDJ.classList.add('btn-login')
btnToOpenDJ.classList.add('btn-primary')
btnToOpenDJ.classList.add('btn-block')
btnToOpenDJ.classList.add('mt-3')
btnToOpenDJ.innerHTML = "DJ "

//create Modal select station to up music
const createModalStation = document.createElement('DIV')
createModalStation.classList.add('modal')
createModalStation.id = "modalStation"
const createModalDialog = document.createElement('DIV')
const createModalContent = document.createElement('DIV')
const createModalHeader = document.createElement('DIV')
const createModalBody = document.createElement('DIV')
const createModalFooter = document.createElement('DIV')
const dataInBody = document.createElement('p')
dataInBody.innerHTML = "datos datos"

createModalDialog.classList.add('modal-dialog')
createModalContent.classList.add('modal-content')

createModalHeader.classList.add('modal-header')
createModalBody.classList.add('modal-body')
createModalFooter.classList.add('modal-footer')
//-----------------------------------------------------------
//create Modal select station to up music
const createModalMusic = document.createElement('DIV')
createModalMusic.classList.add('musicmodal')
createModalMusic.id = "modalMusic"
const createModalMDialog = document.createElement('DIV')
const createModalMContent = document.createElement('DIV')
const createModalMHeader = document.createElement('DIV')
const createModalMBody = document.createElement('DIV')
const createModalMFooter = document.createElement('DIV')
const dataInBodyM = document.createElement('p')
dataInBodyM.innerHTML = "datos datos"

createModalMDialog.classList.add('modal-dialog')
createModalContent.classList.add('modal-content')

createModalMHeader.classList.add('modal-header')
createModalMBody.classList.add('modal-body')
createModalMFooter.classList.add('modal-footer')
//-------------------------------------------------------------

//Print new menu 
document.getElementById('dashboard').appendChild(createCardTmp)
createCardTmp.appendChild(createBodyCardTmp)// agregando tarjeta a body
createCardTmp.appendChild(btnToOpen) //agregando btn para abrir admin
createCardTmp.appendChild(btnToOpenMusic) // agregar btn abrir musica
createCardTmp.appendChild(btnToOpenDJ)
//Load Modal to body
document.body.appendChild(createModalStation)
createModalStation.appendChild(createModalDialog)
createModalDialog.appendChild(createModalContent)
createModalContent.appendChild(createModalHeader)
createModalContent.appendChild(createModalBody)
//createModalBody.appendChild(dataInBody)
//Load Modal music to body
document.body.appendChild(createModalMusic)
createModalMusic.appendChild(createModalMDialog)
createModalMDialog.appendChild(createModalMContent)
createModalMContent.appendChild(createModalMHeader)
createModalMContent.appendChild(createModalMBody)

setTimeout(function() {
	 console.log("load")
	let getTableResponsive = document.getElementById('station_dashboard')
     let getTableResponsiv = document.querySelectorAll('.table')
     
     createModalBody.appendChild(getTableResponsiv[0])
     //--------------------take name station
     let createBtnStationName = document.querySelectorAll('.table tr big')
     let stationHas = 0
     let stationTrueNum = 0
     createBtnStationName.forEach(putWholeStation)
//check want stations hs
     function putWholeStation(item,index){
     	stationHas++
     }
     for(i=0;i<=(stationHas-1);i++){
// ADD BUTTONs to take name off stations
stationTrueNum++
const btnToOpenMusic = document.createElement('BUTTON')
const dataToMusic = document.createAttribute("onClick")
btnToOpenMusic.classList.add('btn')
btnToOpenMusic.classList.add('btn-login')
btnToOpenMusic.classList.add('btn-primary')
btnToOpenMusic.classList.add('btn-block')
btnToOpenMusic.classList.add('mt-3')
btnToOpenMusic.id = createBtnStationName[i].innerHTML
  let xx = document.createElement("A");
  let tt = document.createTextNode(createBtnStationName[i].innerHTML);
  xx.setAttribute("href", "http://3.133.195.135/station/"+stationTrueNum+"/files");
  xx.appendChild(tt);

dataToMusic.value = "console.log('clik')"
btnToOpenMusic.attributes.setNamedItem(dataToMusic)
createCardTmp.appendChild(btnToOpenMusic)
btnToOpenMusic.appendChild(xx)
}
//-----------------------------------------------------------
     	
     
     
     console.log(stationHas)
     console.log(createBtnStationName[0].innerHTML);
}, 5000);

}
	function goToStationSelect(sa){
   
 console.log(sa)
}
//
//getFooterDOM[0].innerHTML = getContainer[0].innerHTML
/*
class="btn btn-login btn-primary btn-block mt-2 mb-3

function myFunction() {

// Create an "li" node:
const node = document.createElement("li");

// Create a text node:
const textnode = document.createTextNode("Water");

// Append the text node to the "li" node:
node.appendChild(textnode);

// Append the "li" node to the list:
document.getElementById("myList").appendChild(node);
}
*/
//last edit 30-01-22 03:57
