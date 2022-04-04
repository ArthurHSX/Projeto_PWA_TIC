let telas = ['componente-0',
    'componente1', 'componente2'
];

let petshops = [
    { id: 1, name: 'CasaPet', coordinates: { lat: -15.9120, lng: -53.1492 } },
    { id: 2, name: 'Petcila', coordinates: { lat: -15.9120, lng: -53.1492 } },
    { id: 3, name: 'Real Pet', coordinates: { lat: -15.9120, lng: -53.1492 } },
    { id: 4, name: 'Pet Nosso', coordinates: { lat: -15.9120, lng: -53.1492 } },
    { id: 5, name: 'Pet Store', coordinates: { lat: -15.9120, lng: -53.1492 } }
];

let servicos = [
    { id: 1, name: 'Banho' },
    { id: 2, name: 'Tosa' },
    { id: 3, name: 'Banho e Tosa' },
    { id: 4, name: 'Pesticida' },
    { id: 5, name: 'Veterinário' },
    { id: 6, name: 'Hotelaria' },
]

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

const ExibeListaPetshop = () => {
    const listaPetshop = document.querySelector('#listaPetshops')
    listaPetshop.innerHTML = '';
    petshops.forEach((p) => {
        let elemPetshop = document.createElement('li');
        elemPetshop.innerHTML = p.name;
        elemPetshop.classList.add('light');
        elemPetshop.onclick = () => {
            // editar/visualizar petshop
            mostraComp('componente3');
        }
        listaPetshop.appendChild(elemPetshop);
    });
    if (petshops.length > 0) {
        listaPetshop.classList.remove('hidden');
        document.querySelector('#blank').classList.add('hidden')
    } else {
        listaPetshop.classList.add('hidden');
        document.querySelector('#blank').classList.remove('hidden')
    }
}

const MostraCamposNovoServico = () => {
    document.querySelector('#divFieldServicoPet').classList.remove('hidden');
    document.querySelector('#ulListaServicoPet').classList.add('hidden');
    document.querySelector('#divSalvarPet').classList.add('hidden');
    document.querySelector('#iptNomePet').focus();
}

const AddNovoServico = (obj) => {
    const ulListaServicoPet = document.querySelector('#ulListaServicoPet')
    ulListaServicoPet.innerHTML = '';

    // servicos.forEach((p) => {
    //     let elemS = document.createElement('li');
    //     elemS.innerHTML = p.name;
    //     ulListaServicoPet.appendChild(elemS);

    // });

    document.querySelector('#divFieldServicoPet').classList.add('hidden');
    document.querySelector('#ulListaServicoPet').classList.remove('hidden');
    document.querySelector('#divSalvarPet').classList.remove('hidden');
}

const VoltaPetshop = () => {
    document.querySelector('#iptNome').value = '';
    document.querySelector('#iptValor').value = '';
    document.querySelector('#divFieldServicoPet').classList.add('hidden');
    document.querySelector('#ulListaServicoPet').classList.remove('hidden');
    document.querySelector('#divSalvarPet').classList.remove('hidden');
}

onload = () => {
    ExibeListaPetshop();

    /* Novo Petshop */
    document.querySelector('#btnNovoPetshop').onclick = (e) => {
        mostraComp('componente2');
    }


    /* Editar Petshop */
    document.querySelector('#btnNewServicePet').onclick = (e) => {
        MostraCamposNovoServico();
    }
    document.querySelector('#btnVoltarPet').onclick = (e) => {
        VoltaPetshop();
    }
    document.querySelector('#btnAddServicePet').onclick = (e) => {
        AddNovoServico();
    }
    document.querySelector('#btnVoltarIni').onclick = (e) => {
        mostraComp('componente1');
    }
}