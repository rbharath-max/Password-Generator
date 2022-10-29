

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let pNew = document.getElementById("pass-el")

let aNew = document.getElementById("apass-el")

    



function passwordGenerator(){
    let passwordLength = 13
    let str =""
    let strn= ""
    for(let i = 0; i < passwordLength ; i++){
        let randomNumber = characters[Math.floor(Math.random() * characters.length)]
        str +=  randomNumber
        
        
    }
    
     for(let i = 0; i < passwordLength ; i++){
        let randomNumber = characters[Math.floor(Math.random() * characters.length)]
        
        strn += randomNumber
        
    }
    pNew.textContent = str
    aNew.textContent = strn
    

}

function copyPaste(){
    let cNew = document.getElementById("pass-el")
    
    
    
    cNew.SelectionRange(0 , 999999)
    
    navigator.clipboard.writeText(cNew.value)
    
    alert("Copied the text: " + cNew.value);
}













