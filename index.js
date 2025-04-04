//tworzymy stałą express zawierającą moduł express
const express = require('express');
//tworzymy stałą app zawierającą funkcję express - instancję aplikacji
const app = express();
//definiujemy port na którym nasłuchuje serwer
const port = 3000;

//dodajemy middleware do naszej aplikacji
//middleware to funkcja, która wykonuje się w trakcie przetwarzania żądania
//jest niezbędna do przetwarzania żądań POST HTTP - bez niego nie odbierzemy danych z formularza
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware testowy
app.use((req, res, next) => {
    //to wypisuje w konsoli informacje na temat żądania
    console.log('Żądanie: ', req.method, req.url);
    //to pozwala na przejście do kolejnego middleware lub obsługi żądania
    next();
});

//zdefiniuj ścieżkę dla żądania GET dla adresu głównego
app.get('/', (req, res) => {
    //to odbiera dane z URL - możemy zakodowac np. id http://localhost:3000/?id=1
    console.log('Żądanie GET dla strony głównej ', req.query);
    res.send('Hello World!');
});
app.post('/', (req, res) => {
    //to odbiera dane z formularza lub wysłane w formacie JSON
    console.log('Żądanie POST dla strony głównej ', req.body);
    res.send('Hello World!');
});

//nasłuchuj na określonym porcie
app.listen(port, () => {
    //po odpaleniu aplikacji wypisuje potwierdzenie do konsoli
    console.log(`Aplikacja pracuje pod adresem http://localhost:${port}`);
});