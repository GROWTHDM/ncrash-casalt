const btn = document.getElementById('btnCreate');
const cortes = document.getElementById('cortes');
const porcentagem = document.getElementById('porcentagem');


function generateRandomNumber(x, y){
    return Math.ceil(Math.random() * (x + y) - x + x);
}

const generateRandomPercentage = () =>{
    let valorFinal = generateRandomNumber(50, 50);
    return porcentagem.textContent = valorFinal.toFixed(2) + "%";
}

function getCortes(){
    cortes.textContent = generateRandomNumber(0, 3);
}



btn.addEventListener('click', () => {
    getCortes()
    generateRandomPercentage();
})