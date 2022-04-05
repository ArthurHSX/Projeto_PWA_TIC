let telas = ['componente1', 'componente2', 'componente3'];

let vetPetshop = [];
let vetServM = [];

/* Onload  */
onload = () => {
    const p = JSON.parse(localStorage.getItem('lista-petfav-pwa'));
    if (p) vetPetshop = p;

    exibeListaPetshop();

    /* Tela novo Petshop */
    document.querySelector('#btnNovoPetshop').onclick = (e) => {
        mostraComp('componente2');
    }
    document.querySelector('#btnNewService').onclick = (e) => {
        mostraCamposNovoServico();
    }
    document.querySelector('#btnVoltarCad').onclick = (e) => {
        cancelaCadastroPetshop();
        vetServM = [];
    }
    document.querySelector('#btnAddService').onclick = (e) => {
        addNovoServico();
    }
    document.querySelector('#btnVoltarService').onclick = (e) => {
        cancelaNovoServico();
    }
    document.querySelector('#btnSalvarNovo').onclick = (e) => {
        addNovoPetshop();
        vetServM = [];
        salvarAlteracoesStor();
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
    document.querySelector('#btnVoltarServicoPet').onclick = (e) => {
        cancelaNovoServicoPet();
    }
    document.querySelector('#btnVoltarPet').onclick = (e) => {
        cancelaEdicaoPetshop();
        mostraComp('componente1');
    }
    document.querySelector('#btnDeletarPet').onclick = (e) => {
        deletarPetshop();
        vetServM = [];
        salvarAlteracoesStor();
    }
    document.querySelector('#btnSalvarPet').onclick = (e) => {
        salvarEdicaoPetshop();
        vetServM = [];
        salvarAlteracoesStor();
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
            mostraEditarPetshop(p.id);
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

const addNovoServico = () => {
    const ulListaServicoPet = document.querySelector('#ulListaServico');
    ulListaServicoPet.innerHTML = '';
    const campoNome = document.querySelector('#iptNomeServico');
    const campoValor = document.querySelector('#iptValorServico');
    if (campoNome.value != '' && campoValor.value != '') {
        let servico = {
            id: Math.random().toString().replace('0.', ''),
            name: campoNome.value,
            value: campoValor.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }
        vetServM.push(servico);
        vetServM.forEach((s) => {
            let elemS = document.createElement('li');
            elemS.setAttribute('data-id', s.id);
            elemS.innerHTML = s.name + ' - R$' + s.value;
            ulListaServicoPet.appendChild(elemS);
        })
        campoNome.value = '';
        campoValor.value = '';
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

const addNovoPetshop = () => {
    const campoNome = document.querySelector('#iptNome');
    const campoEnd = document.querySelector('#iptEndereco');
    if (campoNome.value != '' && campoEnd.value != '') {
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
        const ulListaServico = document.querySelector('#ulListaServico');
        ulListaServico.innerHTML = '';
        campoNome.value = '';
        campoEnd.value = '';
        vetServM = [];
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

const mostraEditarPetshop = (id) => {
    let h1NomePetshop = document.querySelector('#h1NomePetshop');
    h1NomePetshop.setAttribute('data-id', id);
    let i = vetPetshop.findIndex((x) => x.id == id);
    h1NomePetshop.innerHTML = vetPetshop[i].name;
    let lblEnderecoPet = document.querySelector('#lblEnderecoPet');
    lblEnderecoPet.innerHTML = vetPetshop[i].address;
    if (vetPetshop[i].services.length > 0) {
        const ulListaServicoPet = document.querySelector('#ulListaServicoPet')
        vetServM = vetPetshop[i].services;
        vetPetshop[i].services.forEach((s) => {
            let elemS = document.createElement('li');
            elemS.setAttribute('data-id', s.id);
            elemS.innerHTML = s.name + ' - R$' + s.value;
            ulListaServicoPet.appendChild(elemS);
        });
    }

    return vetPetshop[i].services;
}

const cancelaEdicaoPetshop = () => {
    let h1NomePetshop = document.querySelector('#h1NomePetshop');
    h1NomePetshop.removeAttribute('data-id');
    h1NomePetshop.innerHTML = '';
    let lblEnderecoPet = document.querySelector('#lblEnderecoPet');
    lblEnderecoPet.innerHTML = '';
    const ulListaServicoPet = document.querySelector('#ulListaServicoPet');
    ulListaServicoPet.innerHTML = '';
}

const mostraCamposNovoServicoPet = () => {
    document.querySelector('#divFieldServicoPet').classList.remove('hidden');
    document.querySelector('#ulListaServicoPet').classList.add('hidden');
    document.querySelector('#divSalvarPet').classList.add('hidden');
    document.querySelector('#iptNomeServicoPet').focus();
}

const addNovoServicoPet = () => {
    const ulListaServicoPet = document.querySelector('#ulListaServicoPet')
    ulListaServicoPet.innerHTML = '';
    const campoNome = document.querySelector('#iptNomeServicoPet');
    const campoValor = document.querySelector('#iptValorServicoPet');

    if (campoNome.value != '' && campoValor.value != '') {
        let servico = {
            id: Math.random().toString().replace('0.', ''),
            name: campoNome.value,
            value: campoValor.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
        }
        vetServM.push(servico);
        vetServM.forEach((s) => {
            let elemS = document.createElement('li');
            elemS.setAttribute('data-id', s.id);
            elemS.innerHTML = s.name + ' - R$' + s.value;
            ulListaServicoPet.appendChild(elemS);
        })
        campoNome.value = '';
        campoValor.value = '';
        document.querySelector('#divFieldServicoPet').classList.add('hidden');
        document.querySelector('#ulListaServicoPet').classList.remove('hidden');
        document.querySelector('#divSalvarPet').classList.remove('hidden');
    }
}

const voltaListaServicoPet = () => {
    document.querySelector('#iptNomeServicoPet').value = '';
    document.querySelector('#iptValorServicoPet').value = '';
    document.querySelector('#divFieldServicoPet').classList.add('hidden');
    document.querySelector('#ulListaServicoPet').classList.remove('hidden');
    document.querySelector('#divSalvarPet').classList.remove('hidden');
}

const deletarPetshop = () => {
    let h1NomePetshop = document.querySelector('#h1NomePetshop');
    let dataId = h1NomePetshop.getAttribute('data-id');
    vetPetshop = vetPetshop.filter((x) => x.id != dataId);
    exibeListaPetshop();
    cancelaEdicaoPetshop();
    mostraComp('componente1');
}

const salvarEdicaoPetshop = () => {
    let h1NomePetshop = document.querySelector('#h1NomePetshop');
    let dataId = h1NomePetshop.getAttribute('data-id');
    let i = vetPetshop.findIndex((x) => x.id == dataId);
    vetPetshop[i].services = vetServM;
    cancelaEdicaoPetshop();
    exibeListaPetshop();
    mostraComp('componente1');
}

const salvarAlteracoesStor = () => {
    localStorage.setItem('lista-petfav-pwa', JSON.stringify(vetPetshop));
}

const cancelaNovoServicoPet = () => {
    const campoNome = document.querySelector('#iptNomeServicoPet');
    campoNome.value = '';
    const campoValor = document.querySelector('#iptValorServicoPet');
    campoValor.value = '';
    document.querySelector('#divFieldServicoPet').classList.add('hidden');
    document.querySelector('#ulListaServicoPet').classList.remove('hidden');
    document.querySelector('#divSalvarPet').classList.remove('hidden');
}

/* */

navigator.serviceWorker.register('./sw.js');