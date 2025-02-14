
const div1 = document.querySelector('.teste');
const btn = document.querySelector('#btn');
const act = document.querySelector('p')
const animal = document.querySelector('#animal');
const img = document.querySelector('#img')
const input = document.querySelector('#animal');



input.addEventListener('keydown', (event) =>{
    console.log(event)

    if(event.key !== "Enter") return
    
    const valueinput = input.value;
    act.innerHTML = `Ativamos o ${valueinput}`
    act.classList.add('active')
    img.classList.toggle('opacity')
    
    setTimeout(() => {
        img.src = "" + valueinput + ".jpeg"; // Muda a imagem
        img.classList.remove('opacity'); // Remove a classe de opacidade para mostrar a nova imagem
    }, 200); // O tempo deve ser igual ao tempo da transição CSS
    
});


btn.addEventListener('click', () =>{
    console.log("clicou no botão");
    const valueinput = input.value;
    act.innerHTML = `Ativamos o ${valueinput}`
    act.classList.add('active')
    img.classList.toggle('opacity')
    
    setTimeout(() => {
        img.src = "" + valueinput + ".jpeg"; // Muda a imagem
        img.classList.remove('opacity'); // Remove a classe de opacidade para mostrar a nova imagem
    }, 200); // O tempo deve ser igual ao tempo da transição CSS
});
