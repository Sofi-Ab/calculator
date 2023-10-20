
const opperator = document.querySelectorAll('.opperateur');
const inputElement = document.querySelectorAll('input');
console.log(opperator);

const numbers = document.querySelectorAll('.number');
const deleteElement = document.querySelectorAll('.delete');

const egale = document.getElementById('equal')
deleteElement.forEach( deletes => { deletes.addEventListener('click', () => {
    const deleteBtn = deletes.value

    if (deleteBtn === 'REST') {
        display.value = ""
    } else if(deleteBtn == 'DEL'){
        display.value =  display.value.slice(0, -1);
        
        
    }
}) 

})



function appendValue(value) {
    document.getElementById('display').value += value;
    if (value === '.' && currentDisplay.includes('')) {
        return;
    }
}

function deleteLast() {
    let currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);

}

function reset() {
    document.getElementById('display').value = '';
}

function calculate() {
    let currentDisplay = document.getElementById('display').value;
    try {
        // Utiliser la fonction Function pour évaluer l'expression de manière sécurisée
        const result = Function(`'use strict'; return (${currentDisplay})`)();
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erreur';
    }
}

opperator.forEach(opp => { opperator.addEventListener('click', () => {
    const oppBtn = opp.value
  
     
if (oppBtn === '.') {
    if (!display.value.inculcdes('.')) display.oppBtn.innerText = ""; {
        
    }
}
    
    
})

})
console.log(opp);
