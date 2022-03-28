let telas = ['componente1', 'componente2']

const mostraComp = (comp) => {
    telas.forEach((c) => {
        document.querySelector('#' + c).classList.add('hidden');
    })
    document.querySelector('#' + comp).classList.remove('hidden');
}

const ativaElem = (elem) => {
    let irmaos = elem.parentNode.children;
    for (let i = 0; i < irmaos.length; i++) irmaos[i].classList.remove('active');
    elem.classList.add('active')
}

onload = () => {
    document.querySelector('#markPethop').onclick = (e) => {
        mostraComp('componente2');
    }
    document.querySelector('#btnCloseSch').onclick = (e) => {
        mostraComp('componente1');
    }
    document.querySelector('#btnCancelSch').onclick = (e) => {
        mostraComp('componente1');
    }
}