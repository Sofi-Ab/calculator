const opperator = "";
const data = [];
const numbers = document.querySelectorAll('.number');
const deleteElement = document.getElementsByClassName('delete');
const opp = document.querySelectorAll('.opperateur');
const egale = document.getElementById('equal')
console.log(egale);


numbers.forEach(number => { number.addEventListener('click', () => {
    const val = number.value;
    display.value += val;

})
    
});

deleteElement.forEach( deletes => { deletes.addEventListener('click', () => {
    const deleteBtn = deletes.value

    if (deleteBtn === 'REST') {
        display.value = ""
    } else if(deleteBtn == 'DEL'){
        display.value =  display.value.slice(0, -1);
        console.log(display.value);
        
    }
}) 

})

opp.forEach(opperator => { opperator.addEventListener('click', () => {
    const oppBtn = opp.value
    display.value += opperator.value  
if (oppBtn === '.') {
    if (!display.value.inculcdes('.')) display.oppBtn.innerText = "."; {
        
    }
}
    
    
})

})

function resultat (numbers1, numbers2) {
    opp.forEach(opperator => { opperator.addEventListener('click', () => {






    })

})
}


/********************************* Changement des themes ********************************* */
const btnElement = document.querySelectorAll('.btn');
const themeOne = document.getElementsByClassName('1')
themeOne = setAttribute('style', 'color:beige; font-weight: bold; font-size: 16px');

/********************************* recuperation des diffrents themes ********************************* */
themeOne.addEventListener('click', function() {

    // Utilisez setAttribute pour changer le contenu de l'attribut "style"
    btnElement.setAttribute('style', 'color:beige; font-weight: bold; font-size: 16px');
});


  






