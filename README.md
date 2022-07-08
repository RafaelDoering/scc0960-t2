# SCC0960 - T2

Esse projeto é o segundo trabalho da matéria SCC0960 - Programação Funcional ministrada no ICMC-USP no primeiro semestre de 2022 pelo professor Adenilso da Silva Simão.

Temos uma implementação utilizando Typescript que faz a leitura de qualquer dataset de casos de covid do [repositória da Johns Hopkins University](https://github.com/CSSEGISandData/COVID-19/tree/master/csse_covid_19_data/csse_covid_19_daily_reports). Ele aceita o nome do arquivo por linha de comando e realiza alguns processamentos mostrando dados importantes como:

- Os três países com mais casos confirmados em ordem alfabética.
- Dentre os dez países com mais casos ativos, a soma dos mortes dos cinco países com menos casos confirmados.
- O maior número de mortes entre os países do hemisfério sul.
- O maior número de mortes entre os países do hemisfério norte.
- A soma de casos ativos de todos os países em que tem 1.000.000 ou mais de casos confirmados.

## Execução

Com Node e NPM instalados no seu computador, instale as dependencias do projeto:
```bash
npm install
```

Faça o build da aplicação:
```bash
npm run build
```

Execute a aplicação:
```bash
npm run start
```

## License
[MIT](https://choosealicense.com/licenses/mit/)
