# media-UNIFE

Calcola la media dal libretto online con la possibilità di aggiungere voti non ancora verbalizzati.

## Uso

Copia e incolla il contenuto dello script `voti.jl` nella console del tuo browser (aprila con `F12` e seleziona la _tab_ `Console`).

Per fare previsioni su possibili voti non ancora verbalizzati usa le funzioni `speculateVoteAlert`, per prevedere la media aggiungendo un solo voto,  e `speculateVotesAlert`, per prevederne la media aggiungendone più di uno, come segue:

```javascript

speculateVoteAlert("30L", 6); // se prevedi di prendere
                              // un 30 e lode in un
                              // esame da 6 CFU

speculateVotesAlert([
    ["30L", 6],
    ["28", 12]
]);

```

## Nota

In generale è una cattiva idea eseguire codice JavaScript scaricato dal web in una pagina contenente dati sensibili!!!
