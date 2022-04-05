let telas = ['componente1', 'componente2', 'componente3'];

let vetPetshop = [];

/* Onload  */
onload = () => {
    exibeListaPetshop();
    let vetServM = [];

    /* Tela novo Petshop */
    document.querySelector('#btnNovoPetshop').onclick = (e) => {
        mostraComp('componente2');
    }
    document.querySelector('#btnNewService').onclick = (e) => {
        mostraCamposNovoServico();
    }
    document.querySelector('#btnVoltarCad').onclick = (e) => {
        cancelaCadastroPetshop();
    }
    document.querySelector('#btnAddService').onclick = (e) => {
        addNovoServico(vetServM);
    }
    document.querySelector('#btnVoltarService').onclick = (e) => {
        cancelaNovoServico();
    }
    document.querySelector('#btnSalvarNovo').onclick = (e) => {
        addNovoPetshop(vetServM);
    }


    /* Tela editar Petshop */
    document.querySelector('#btnNewServicePet').onclick = (e) => {
        mostraCamposNovoServicoPet();
    }
    document.querySelector('#btnVoltarPet').onclick = (e) => {
        voltaListaServicoPet();
    }
    document.querySelector('#btnAddServicePet').onclick = (e) => {
        addNovoServicoPet();
    }
    document.querySelector('#btnVoltarIni').onclick = (e) => {
        mostraComp('componente1');
    }
}

const mostraComp = (comp) => {
    telas.forEach((c) => {
        document.querySelector('#' + c).classList.add('hidden');
    })
    document.querySelector('#' + comp).classList.remove('hidden');
}

const exibeListaPetshop = () => {
    const listaPetshop = document.querySelector('#listaPetshops');
    listaPetshop.innerHTML = '';
    vetPetshop.forEach((p) => {
        let elemPetshop = document.createElement('li');
        elemPetshop.innerHTML = p.name;
        elemPetshop.setAttribute('data-id', p.id);
        elemPetshop.classList.add('light');
        elemPetshop.onclick = () => {
            // editar/visualizar petshop
            mostraComp('componente3');
        }
        listaPetshop.appendChild(elemPetshop);
    });
    if (vetPetshop.length > 0) {
        listaPetshop.classList.remove('hidden');
        document.querySelector('#blank').classList.add('hidden');
    } else {
        listaPetshop.classList.add('hidden');
        document.querySelector('#blank').classList.remove('hidden');
    }
}

/* Tela novo petshop */
const mostraCamposNovoServico = () => {
    document.querySelector('#divFieldServico').classList.remove('hidden');
    document.querySelector('#ulListaServico').classList.add('hidden');
    document.querySelector('#divSalvar').classList.add('hidden');
    document.querySelector('#iptNomeServico').focus();
    const campoNome = document.querySelector('#iptNomeServico');
    campoNome.value = '';
    const campoValor = document.querySelector('#iptValorServico');
    campoValor.value = '';
}

const addNovoServico = (vetServM) => {
    const ulListaServicoPet = document.querySelector('#ulListaServico');
    ulListaServicoPet.innerHTML = '';
    const campoNome = document.querySelector('#iptNomeServico');
    const campoValor = document.querySelector('#iptValorServico');
    if ((campoNome.value != '' || campoNome.value != null) &&
        (campoValor.value != '' || campoValor.value != null)) {
        vetServM.push({
            id: Math.random().toString().replace('0.', ''),
            name: campoNome.value,
            value: campoValor.value
        });
        vetServM.forEach((s) => {
            let elemS = document.createElement('li');
            elemS.setAttribute('data-id', s.id);
            elemS.innerHTML = s.name + ' - R$' + s.value;
            ulListaServicoPet.appendChild(elemS);
        })
        document.querySelector('#divFieldServico').classList.add('hidden');
        document.querySelector('#ulListaServico').classList.remove('hidden');
        document.querySelector('#divSalvar').classList.remove('hidden');
    }
}

const cancelaNovoServico = () => {
    const campoNome = document.querySelector('#iptNomeServico');
    campoNome.value = '';
    const campoValor = document.querySelector('#iptValorServico');
    campoValor.value = '';
    document.querySelector('#divFieldServico').classList.add('hidden');
    document.querySelector('#ulListaServico').classList.remove('hidden');
    document.querySelector('#divSalvar').classList.remove('hidden');
}

const addNovoPetshop = (vetServM) => {
    const campoNome = document.querySelector('#iptNome');
    const campoEnd = document.querySelector('#iptEndereco');
    if ((campoNome.value != '' || campoNome.value != null) &&
        (campoEnd.value != '' || campoEnd.value != null)) {
        let petshop = {
            id: Math.random().toString().replace('0.', ''),
            name: campoNome.value,
            address: campoEnd.value,
            services: vetServM
        };
        vetPetshop.push(petshop);
        const listaPetshop = document.querySelector('#listaPetshops');
        listaPetshop.innerHTML = '';
        vetPetshop.forEach((p) => {
            let elemPetshop = document.createElement('li');
            elemPetshop.innerHTML = p.name;
            elemPetshop.setAttribute('data-id', p.id);
            elemPetshop.classList.add('light');
            elemPetshop.onclick = () => {
                // editar/visualizar petshop
                mostraComp('componente3');
            }
            listaPetshop.appendChild(elemPetshop);
        });
        exibeListaPetshop();
        mostraComp('componente1');
    }
}


const cancelaCadastroPetshop = () => {
    document.querySelector('#iptNome').value = '';
    document.querySelector('#iptEndereco').value = '';
    const ulListaServico = document.querySelector('#ulListaServico')
    ulListaServico.innerHTML = '';
    document.querySelector('#divFieldServico').classList.add('hidden');
    document.querySelector('#ulListaServico').classList.remove('hidden');
    document.querySelector('#divSalvar').classList.remove('hidden');
    mostraComp('componente1');
}

/* */

/* Tela editar petshop */
const mostraCamposNovoServicoPet = () => {
    document.querySelector('#divFieldServicoPet').classList.remove('hidden');
    document.querySelector('#ulListaServicoPet').classList.add('hidden');
    document.querySelector('#divSalvarPet').classList.add('hidden');
    document.querySelector('#iptNomePet').focus();
}

const addNovoServicoPet = (idE) => {
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

const voltaListaServicoPet = () => {
    document.querySelector('#iptNome').value = '';
    document.querySelector('#iptValor').value = '';
    document.querySelector('#divFieldServicoPet').classList.add('hidden');
    document.querySelector('#ulListaServicoPet').classList.remove('hidden');
    document.querySelector('#divSalvarPet').classList.remove('hidden');
}

/* */