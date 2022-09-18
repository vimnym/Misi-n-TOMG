const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Oal Tere, la verdad me di cuenta que a la unica persona que amo es a ti, realmente quiero intentar las cosas contigo una vez más y demostrarte que realmente ya aprendí de mis errores y soy alguien que puede darte todo sin ponerte molesta o estresada, tu sabes que jamás haría algo que te perjudicara a ti ni a nadie que te rodea, he aprendido a admitir mis errores y a trabajar en ellos sin la necesidad de buscar terceros, gente a la que necesite culpar para salirme con la mía, me di cuenta que eso fue muy inmaduro de mi parte y ya no volveras a escuchar de eso ni de más inseguridades, me di cuenta que la única manera en la que puedo estar contigo es siendo una persona segura de si misma, cosa que ya soy🤑🤑 gracias a meditación y platicas internas, quiero estar contigo en una relación sana y madura en la cual seamos nosotros mismos, tu y yo contra el mundo. Si por otro lado querías escoger no, yo la neta si quiero ser tu compi 😋😋, aquí el chiste es formar parte de tu vida, de ambas maneras apoyandote 🤑😮 y estos sentimientos se desapareceran, de veritas de veritas 🥵🥵.')
});

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})
