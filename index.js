/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterToFeet   =  3.281
const literToGallon =  0.264
const kiloToPound   =  2.204

let lengthEl = document.getElementById("length")
let volumeEl = document.getElementById("volume")
let massEl   = document.getElementById("mass")

let myInput = document.getElementById("myInput");
const convertBtn    = document.getElementById("convert-btn")
const reverseBtn    = document.getElementById("reverse-btn")



let baseValue = (myInput.value * 1).toFixed(3)

//Reverse button toggles which unit is input and converted
let reversed = false
function toggle(){
        reversed = reversed ? false : true
    }
//changes tile when unit is toggled
let unitTitle = document.getElementById("unit-title")
    

function convert() {  
    let baseValue = (myInput.value * 1).toFixed(3)
    if (reversed === false) {
            if (baseValue != 1) {
                lengthEl.textContent = `${(baseValue * 1).toFixed(3)} meters = ${(baseValue * meterToFeet).toFixed(3)} feet`
                
                volumeEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons`
                
                massEl.textContent   = `${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(3)} pounds`   
            } else {
            // make the metric units plural for all values other than 1
                lengthEl.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet`
                
                volumeEl.textContent = `${baseValue} liter = ${(baseValue * literToGallon).toFixed(3)} gallons`
                
                massEl.textContent   = `${baseValue} kilogram = ${(baseValue * kiloToPound).toFixed(3)} pounds`    
            }    
    } else if (reversed === true){   
            if (baseValue != 1) {  
                lengthEl.textContent = `${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meters`
                
                volumeEl.textContent = `${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
                
                massEl.textContent   = `${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilograms` 
            } else {
                lengthEl.textContent = `${baseValue} foot = ${(baseValue / meterToFeet).toFixed(3)} meters`
                
                volumeEl.textContent = `${baseValue} gallon = ${(baseValue / literToGallon).toFixed(3)} liters`
                
                massEl.textContent   = `${baseValue} pound = ${(baseValue / kiloToPound).toFixed(3)} kilograms`
            }              
    }   
}

convertBtn.addEventListener("click", function(){
    let baseValue = (myInput.value * 1).toFixed(3)
    
    convert()
}) 



reverseBtn.addEventListener("click", function () {
    
    toggle()
    console.log(reversed)
    if (reversed === false){
        //If Off, set to true, and update text 
        let reversed = true
        unitTitle.textContent = 'Imperial / Metric Unit Converter';
        
        convert()
        console.log(reversed)
    } else if (reversed === true){
        //If On, set to false, and update text
        let reversed = false
        unitTitle.textContent = 'Metric / Imperial Unit Converter'; 
       
        convert()
        console.log(reversed)
    }
})