escopo = () => {

    const data = new Date()
    const dia = data.getDay();
    const dataNumero = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = data.getHours();
    const min = data.getMinutes();
    const container = document.querySelector('.container');
    const body = document.querySelector('.bodystyle')

    pegaDia = (dia) => {
        const dias = ['Segunda-Feira', 'Terça-Feira', 'Quara-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado', 'Domingo']
        return dias[dia];
    }

    pegaMes = (mes) => {
        const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
        return meses[mes]
    }


    const diaSemanaTxt = pegaDia(dia);
    const mesTxt = pegaMes(mes)

    criaH1 = (container) => {
        const titulo = document.createElement('h1');
        titulo.classList.add('titulo')
        container.appendChild(titulo);
    }

    inserieNaPágina = (container, diaSemanaTxt, dataNumero, mesTxt, ano, hora, min, body) => {
        const h1 = criaH1(container);
        const titulo = document.querySelector('.titulo');
        if (min < 10) {
            min = '0' + min;
        }

        if (hora < 10) {
            hora = '0' + hora;
        }
        titulo.innerHTML = `${diaSemanaTxt}, ${dataNumero} de ${mesTxt} de ${ano} <br /> ${hora}:${min}`

        if (hora >= 6 && hora <= 12) {
            body.style.backgroundImage = "url('/exercicioDataSwitch/assets/img/dia.webp')";
        } else if (hora >= 12 && hora < 18) {
            body.style.backgroundImage = "url('/exercicioDataSwitch/assets/img/tarde.webp')";
        } else {
            body.style.backgroundImage = "url('/exercicioDataSwitch/assets/img/noite.webp')";
        }
    }

    inserieNaPágina(container, diaSemanaTxt, dataNumero, mesTxt, ano, hora, min, body)

}

escopo();

