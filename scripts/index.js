fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=${config.MY_KEY}`)
    .then((response) => {
        if(!response.ok) {
            throw new Error('Erro ao executar a requisição, status ' + response.status);
        }
        return response.json();
    })
    .then((api) => {
        let texto = "";

        let numeroDeMoedas = 10;
        for(let i = 0; i < numeroDeMoedas; i++) {
            texto += `
                <div class="media row">
                    <img src="../images/coin.jpg" class="align-self-center mr-3 col-1" alt="coin" width="100" height="60">
                    <div class="media-body col-3">
                        <h5 class="mt-2">${api.data[i].name}</h5>
                        <p>${api.data[i].symbol}</p>
                    </div>
                    <div class="historical-data col-5">
                        <p>Início do rastreio da moeda: ${api.data[i].first_historical_data}</p>
                    </div>
                </div>
            `;
        }

        document.getElementById("coins").innerHTML = texto;
    })
    .catch((error) => {
        console.log(error.message);
    })





    