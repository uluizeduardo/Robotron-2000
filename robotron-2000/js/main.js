//const controle = document.querySelector('.controle-ajuste');

const subtrair  = document.querySelector('#subtrair');
const somar     = document.querySelector('#somar');
const contador  = document.querySelector('#contador');


subtrair.addEventListener('click', (evento) => {
    contador.value = parseInt(contador.value) - 1;
});

somar.addEventListener('click', (evento) => {
    contador.value = parseInt(contador.value) + 1;
});