function esempio1() {
    alert('Esempio 1!');
}

//Esempio 2
function esempio2(){
    document.getElementById("testo1").innerHTML = "Esempio 2!";
}
//Esempio 3
function esempio3(){
    document.write("Esempio 3!");
}
function esempio4() {
    document.write("Esempio 4!");
}

//Esempio 5
function esempio5(){
    window.alert("Esempio 5!"); //Posso anche omettere la parola chiave "window".
}
//Esempio 6
function esempio6(){
    console.log("Esempio 6");
}
function esempio7() {
    window.print();
}

function esempio8() {
    var a = 5, //Posso dichiarare variabili su una stessa linea separandole con una virgola.
        b = 6, //Anche il simbolo "$" e "_" sono accettato come nome_variabile!
        c = a + b; //Le variabili dichiarate globali, saranno accessibili usando la parola "window".
    document.getElementById("esempio8").innerHTML = "A: " + a + "  |  B: " + b + "  |  C = A + B: " + c;
}

function esempio9() {
    var nome = "Giacomo",
        cognome = "Volpini";
    document.getElementById("esempio9").innerHTML = nome + " " + cognome;
}

function esempio10() {
    var carName;
    carName = "Volvo";
    document.getElementById("esempio10").innerHTML = carName;
}

function esempio11() {
    var undefined;
    document.getElementById("esempio11").innerHTML = undefined + " -- L'output è questo perché non ho assegnato nulla alla variabile!";
}

function esempio12() {
    var nome = "Matteo";
    var nome;
    document.getElementById("esempio12").innerHTML = nome + " -- Ridichiarazione variabile!";
}

function esempio13() {
    var x = "Giacomo" + 5 + 6;
    var y = 5 + 6 + "Giacomo";
    document.getElementById("esempio13").innerHTML = x + "<br>" + y + "<br>A seconda dell'ordine in cui sommo numeri e stringhe, la risultante sarà diversa!";
}

function esempio14() {
    {
        let x = 10;
    }
    document.getElementById("esempio14").innerHTML = "Variabile dichiarata con \"let\" dentro ad un blocco. Non vista fuori da esso, darebbe errore!" +
        "<br>Se fosse stata dichiarata con \"var\", sarebbe stato possibile accedervi";
}

function esempio15() {
    {
        {
            var x = 10;
        }
        let y = 5;
    }
    document.write(x);
    document.write("<br>Guardando la console, si puo notare come sia stato lanciato un errore riguardo a \"y\". Termina l'esecuzione del codice dopo!");
    document.write(y);
}

function esempio16() {
    var x = 10; {
        let x = 2;
    }
    document.getElementById("esempio16").innerHTML = x + " -- Il suo valore rimane invariato perché nel blocco ho ridichiarato \"x\" con la parola let. Se avessi usato var, il suo valore sarebbe cambiato!" +
        "<br> Non posso dichiarare variabili con lo stesso nome ma parole chiavi diverse nello stesso blocco!";
}

function esempio17() {
    var i = 20;
    for (var i = 0; i < 10; i++) {}
    document.getElementById("esempio17").innerHTML = i + " -- Usando la parola chiave \"var\" dentro ai cicli, se lo stesso nome era già stato usato, il valore finale sarà cambiato (x inizializzata a 20)!" +
        "<br> Usando la parola chiave \"let\" si risolve questo problema.";
}

function esempio18() {
    nome = "Matteo";
    document.getElementById("esempio18").innerHTML = nome + " -- Hoisting, posso usare le variabili prima di averle dichiarate solo se utilizzo la parola \"var\", altrimenti verrà lanciato un Reference Error!";
    var nome;
}

function esempio19() {
    try {
        carName = "Volvo";
        document.getElementById("esempio19").innerHTML = "Casa automobilistica: " + carName;
        let carName;
    } catch (errore) {
        document.getElementById("esempio19").innerHTML =
            errore.name + ": " + errore.message;
    }
}

function esempio20() {
    try {
        const PI = 3.141592653589793;
        PI = 3.14;
    } catch (errore) {
        document.getElementById("esempio20").innerHTML = errore + "<br>Le costanti vanno inizializzate al momento della creazione!<br>Il comportamento di \"const\" all'interno dei blocchi è simile a quello di \"let\".";
    }
}

function esempio21() {
    const persona = { nome: "Giacomo", cognome: "Volpini", eta: 17 };
    document.getElementById("esempio21").innerHTML = persona.nome + " " + persona.cognome + " " + persona.eta + " -- Posso Cambiare il valore degli attributi di un oggetto costante<br>";
    persona.eta = 18;
    document.getElementById("esempio21").append(persona.nome + " " + persona.cognome + " " + persona.eta + " -- Non posso però cambiare l'oggetto a cui la costate fa riferimento!");
}

function esempio22() {
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");
    document.getElementById("esempio22").innerHTML = cars + "<br>Ovviamente avendo dichiarato l'array come costante, non posso cambiarlo con uno della stessa lunghezza, ma posso comunque aggiungerci elementi con il metodo .push()!«";
}