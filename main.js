const rBtns =  document.querySelectorAll('.rating-btn');
const submitBtn = document.getElementById('submit');
const number = document.getElementById('number');

submitBtn.addEventListener('click',() => {
    document.querySelector('.container').classList.add('hidden');
    document.querySelector('.thank-container').classList.remove('hidden');
})


rBtns.forEach( e => {
    e.addEventListener('click', e => {
        number.innerHTML = e.target.innerHTML;
        e.target.classList.add('orange');
    })
})
