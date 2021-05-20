function esempio1() {
    alert('Esempio 1!');
}

//Esempio 2
function esempio2(){
    document.getElementById("testo1").innerHTML = "Esempio 2!";
}
//Esempio 3
function esempio3(){
    document.write("Ciao sono l'esempio 3!");
}
function esempio4() {
    document.write("Esempio 4 -> (5+6)");
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
    document.getElementById("esempio11").innerHTML = undefined + " L'output è questo perché non ho assegnato nulla alla variabile!";
}

function esempio12() {
    var nome = "Giacomo";
    var nome;
    document.getElementById("esempio12").innerHTML = nome + " Ridichiarazione variabile!";
}

function esempio13() {
    var x = "Giacomo " + 5 + " " + 6;
    var y = 5 + " " + 6 + " Giacomo";
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
    document.getElementById("esempio15").innerHTML = x ;
    document.getElementById("esempio15").innerHTML +="<br>Guardando la console, si puo notare come sia stato lanciato un errore riguardo a \"y\". Successivamente termina l'esecuzione";
    document.getElementById("esempio15").innerHTML += y;
}

function esempio16() {
    var x = 10; {
        let x = 2;
    }
    document.getElementById("esempio16").innerHTML = x + " Il suo valore rimane invariato perché nel blocco ho ridichiarato \"x\" con la parola let. Se avessi usato var, il suo valore sarebbe cambiato!" +
        "<br> Non posso dichiarare variabili con lo stesso nome ma parole chiavi diverse nello stesso blocco!";
}

function esempio17() {
    var i = 20;
    for (var i = 0; i < 10; i++) {}
    document.getElementById("esempio17").innerHTML = i + " Usando la parola chiave \"var\" dentro ai cicli, se lo stesso nome era già stato usato, il valore finale sarà cambiato (i inizializzata a 0)!" +
        "<br> Usando la parola chiave \"let\" si risolve questo problema.";
}

function esempio18() {
    nome = "Giacomo";
    document.getElementById("esempio18").innerHTML = nome + " Hoisting, posso usare le variabili prima di averle dichiarate solo se utilizzo la parola \"var\", altrimenti verrà lanciato un Reference Error!";
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
    const persona = { nome: "Giacomo", cognome: "Volpini", eta: 17 , altezza : 178 , scuola : "ITIS Tullio Buzzi" };
    document.getElementById("esempio21").innerHTML = persona.nome + " " + persona.cognome + "<br>Anni : " + persona.eta + "<br>Altezza : "+ persona.altezza+"<brScuola : "+persona.scuola+
    "<br> -- Posso assegnare attributi ad un oggetto costante<br>";
    persona.eta = 18;
    persona.weight = "67";
    document.getElementById("esempio21").append(persona.nome + " " + persona.cognome + " - Anni: " + persona.eta +" - Peso: "+persona.weight+ " -- Posso modificare le proprietà dell'oggetto e addirittura aggiungerne ma non riassegnarle !");
}

function esempio22() {
    const cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Toyota";
    cars.push("Audi");
    document.getElementById("esempio22").innerHTML = cars + "<br>Ovviamente avendo dichiarato l'array come costante, non posso cambiarlo con uno della stessa lunghezza, ma posso comunque aggiungerci elementi con il metodo .push()!«";
}

function esempio23() {
    var car;
    var number = 5
    document.getElementById("esempio23").innerHTML = car + "<br />" +
    typeof car +"<br>"+number +" - tipo -> "+ typeof number;
}

function esempio24() {
    document.getElementById("esempio24").innerHTML = typeof undefined + "<br />" +
    typeof null + "<hr />" +
    (null === undefined) + //ugual valore e stesso tipo
    "<br>" +
    (null == undefined);
}

function esempio25(){
    document.getElementById("esempio25").innerHTML = "Ci sono 4 tipi di dati primitivi :<br>String, number, boolean e undefined<br"+
    "<br>Ci sono tipo complessi come object e function che sono restituiti per oggetti,array e null oppure funzioni"+
    "<br>Le funzioni sono blocchi di codice che prendono in input dei parametri e restituendo un valore di return in output"+
    "<br>Possono essere invocate dal loro nome e le variabili dichiarate all'interno di funzioni diventano locali";
}

function esempio26() {
    document.getElementById("esempio26").innerHTML = "Gli oggetti sono contenitori di dati dotati di proprietà e metodi."+
    "<br>I metodi sono funzioni memorizzate come proprietà e possono essere chiamate con nomeOggetto.nomeMetodo()"+
    "<br>La keyword this si riferisce al proprietario della funzione"+
    "<br>La parola new dichiara un oggetto e lo crea ma è sconsigliata per i tipi primitivi perchè lento";
}

function esempio27() {
    document.getElementById("esempio27").innerHTML = "Gli eventi sono cose che accadono agli elementi e JS ci aiuta a reagire a questi eventi"+
    "<br>Esempi comuni sono gli eventi generati dall'utente come onclick e onchange"+
    "<br>Gli event handler possono essere utilizzati per gestire e verificare <br>l'input dell'utente, le azioni dell'utente e le azioni del browser <br>"
    +Date();
}

function esempio28() {
    const s = new String("Ciao");
    const sa = "Ciao";
    document.getElementById("esempio28").innerHTML = "Le stringhe sono composte da più caratteri scritti tra virgolette <br>e servono per memorizzare e manipolare il testo."
    +"<br>Le stringhe sono valori primitivi ma possono essere usate come oggetti attraverso new"+
    "<br>Se confrontiamo però due stringhe (una creata con new  e l'altra letteralmente)"+
    "<br>con l'operatore === avremo come output false perchè saranno di tipi diversi"+
    "<br>Nelle stringhe abbiamo come carattere di uscita il \\ che trasforma i caratteri speciali in stringa"+
    "<br> s = new String(\"Ciao\") != sa = \"Ciao\"";
}

function esempio29() {
    document.getElementById("esempio29").innerHTML = "Le stringhe sono immutabili: non possono essere cambiate ma solo sostituite"+
    "<br>Fra i metodi delle stringhe abbiamo:<br>lenght che restituisce la lunghezza della stringa,<br>indexOf() che restituisce l'indice del primo elemento cercato,"+
    "<br>lastIndexOf() restituisce l'indice dell'ultimo elemento cercato,<br>search() cerca una regex e restituisce la posizione alla prima corrispondenza."+
    "<br>Il metodo slice() invece restituisce una parte di stringa da una pos iniziale e una finale non inclusa.";
}