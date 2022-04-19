function iniciar(num) // al dar click en el boton se inicia la simulacion
{
    let input = document.getElementById('inputNum').value;//obtiene el valor ingresado
    if(num == input)//al ser funcion recursiva se tiene que detener, se detiene al ser iguales
    {
        graficar();//al detenerse la funcion se grafica las ganadas de cada jugador
        return;
    }
    let cartas = [];//Las cartas generadas seran guardadas en un array
    generaCartas(cartas);//metodo que genera las cartas
    juegaCartas(cartas);//metodo que juega las cartas
    setTimeout(function()
    {//al terminar cada jugada se alista el tablero para la proxima partida
        let listCartas = Array.from(document.querySelectorAll('img'));
        document.getElementById("Contador1").innerText="0";
        document.getElementById("Contador2").innerText="0";
        document.getElementById("Contador3").innerText="0";
        document.getElementById("Contador4").innerText="0";
        //reinicia todos los contadores a 0
        listCartas.map(item =>{//regresa a su estado inicial las cartas, volteadas y en su lugar
            item.classList.add("volteada");
            item.classList.remove("move1");
            item.classList.remove("move2");
            item.classList.remove("move3");
            item.classList.remove("move4");
        });  
        cartas.length=0;//borra las cartas generadas 
        num++;//incrementa el contador y se vuelve a jugar otra partida
        iniciar(num);
    },6500);//inplementa un intervalo de tiempo
}
function generaCartas(cartas) 
{//genera de manera aleatoria las 40 cartas
    for(var i = 0; i < 40; i++) 
    {
        let carta = 0;
        let paloCarta = Math.random();
        if(paloCarta<0.25) //le asigna un valor dependiendo el tipo de palo
        {//siendo la carta numero 40 la que tiene mas valor y la 1 la que tiene menos valor
            carta = 30;//oro
        }
        else if(paloCarta>=0.25 && paloCarta<0.5)
        {
            carta = 20;//copas
        }
        else if(paloCarta>=0.5 && paloCarta<0.75)
        {
            carta = 10;//espadas
        }
        else if(paloCarta>=0.75)
        {
            carta = 0;//bastos
        }
        let numeroCarta = Math.random();
        if(numeroCarta<0.1)
        {
            carta += 10;//as
        }
        else if(numeroCarta>= 0.1 && numeroCarta<0.2)
        {
            carta += 9;//rey
        }
        else if(numeroCarta>= 0.2 && numeroCarta<0.3)
        {
            carta += 8;//caballo
        }
        else if(numeroCarta>= 0.3 && numeroCarta<0.4)
        {
            carta += 7;//sota
        }
        else if(numeroCarta>= 0.4 && numeroCarta<0.5)
        {
            carta += 6;//7
        }
        else if(numeroCarta>= 0.5 && numeroCarta<0.6)
        {
            carta += 5;//6
        }
        else if(numeroCarta>= 0.6 && numeroCarta<0.7)
        {
            carta += 4;//5
        }
        else if(numeroCarta>= 0.7 && numeroCarta<0.8)
        {
            carta += 3;//4
        }
        else if(numeroCarta>= 0.8 && numeroCarta<0.9)
        {
            carta += 2;//3
        }
        else if(numeroCarta>= 0.9)
        {
            carta += 1;//2
        }
        if(cartas.includes(carta))//valida si la carta generada ya esta en el array
        {
            i--; //en caso de que este, decrementa i y se salta el push y vuelve a generar la carta
            continue;
        }
        cartas.push(carta);
    }
}
function juegaCartas(cartas) 
{
    let mazo1 = cartas.slice(0,10);//divide los mazos de cada jugador
    dibujaCartas(mazo1,"jugador1");//dibuja cada carta de cada jugador
    let mazo2 = cartas.slice(10,20);
    dibujaCartas(mazo2,"jugador2");
    let mazo3 = cartas.slice(20,30);
    dibujaCartas(mazo3,"jugador3");
    let mazo4 = cartas.slice(30,40);
    dibujaCartas(mazo4,"jugador4");
    centrarCartas(0,mazo1,mazo2,mazo3,mazo4);//realiza la animacion de cada carta
}
function dibujaCartas(mazo,player)
{
//como obtuve las imagenes?
//las descargue de un repositorio de Github
//ya teniendo la lista en el explorador de archivos copie todas las direcciones al mismo tiempo y
//filtre los textos que no se ocupaban y los guarde los restante en un array para usar 
//las dirrecciones de cada imagen
    const texto ="bastos1.jpg-bastos2.jpg-bastos3.jpg-bastos4.jpg-bastos5.jpg-bastos6.jpg-bastos7.jpg-bastos10.jpg-bastos11.jpg-bastos12.jpg-espadas1.jpg-espadas2.jpg-espadas3.jpg-espadas4.jpg-espadas5.jpg-espadas6.jpg-espadas7.jpg-espadas10.jpg-espadas11.jpg-espadas12.jpg-copas1.jpg-copas2.jpg-copas3.jpg-copas4.jpg-copas5.jpg-copas6.jpg-copas7.jpg-copas10.jpg-copas11.jpg-copas12.jpg-oros1.jpg-oros2.jpg-oros3.jpg-oros4.jpg-oros5.jpg-oros6.jpg-oros7.jpg-oros10.jpg-oros11.jpg-oros12.jpg";
    var imagenesCartas = texto.split("-");
    let jugador = document.getElementById(player);
    for(var i = 0; i <10; i++) 
    {
        jugador.children[i].classList.add("volteada");//se voltea la carta 
        jugador.children[i].src = "Cartas/"+imagenesCartas[mazo[i]-1];
        //asigna la imagen dependiendo del valor de la carta
    }
}
function centrarCartas(num,mazo1,mazo2,mazo3,mazo4) 
{  
    if(num<10)//se ejecuta 10 veces por partida
    {
        setTimeout(function()
        {
            let cartaMayor = Math.max(mazo1[num],mazo2[num],mazo3[num],mazo4[num]);//busca la carta mayor por jugada
            if(mazo1.includes(cartaMayor))//el mazo que tenga la carta mayor tendra un punto
            {
                let valor = parseInt(document.getElementById("Contador1").innerText);
                valor++; //incrementa el contador de cada jugador
                document.getElementById("Contador1").innerText = valor;
            }
            else if(mazo2.includes(cartaMayor))
            {
                let valor = parseInt(document.getElementById("Contador2").innerText);
                valor++;
                document.getElementById("Contador2").innerText = valor;
            }
            else if(mazo3.includes(cartaMayor))
            {
                let valor = parseInt(document.getElementById("Contador3").innerText);
                valor++;
                document.getElementById("Contador3").innerText = valor;
            }
            else if(mazo4.includes(cartaMayor))
            {
                let valor = parseInt(document.getElementById("Contador4").innerText);
                valor++;
                document.getElementById("Contador4").innerText = valor;
            }  
            let carta1 = document.getElementById("jugador1").children[num];//obtiene la carta de cada ronda
            carta1.classList.remove("volteada"); //voltea la carta para asi verla
            carta1.classList.add("move1");//aplica la animacion de movimiento a cada jugador
            let carta2 = document.getElementById("jugador2").children[num];
            carta2.classList.remove("volteada");
            carta2.classList.add("move2");
            let carta3 = document.getElementById("jugador3").children[num];
            carta3.classList.remove("volteada");
            carta3.classList.add("move3");
            let carta4 = document.getElementById("jugador4").children[num];
            carta4.classList.remove("volteada");
            carta4.classList.add("move4");
            num++;
            centrarCartas(num,mazo1,mazo2,mazo3,mazo4);//se vuelve a ejecutar hasta llegar a las 10 jugadas
        },550);
    }
    else
    {//al terminar la partida se ejecutara este bloque de codigo
        let valor1 = parseInt(document.getElementById("Contador1").innerText);
        let valor2 = parseInt(document.getElementById("Contador2").innerText);
        let valor3 = parseInt(document.getElementById("Contador3").innerText);
        let valor4 = parseInt(document.getElementById("Contador4").innerText);
        let totalGanadas1 = parseInt(document.getElementById("ganadas1").innerText);
        let totalGanadas2 = parseInt(document.getElementById("ganadas2").innerText);
        let totalGanadas3 = parseInt(document.getElementById("ganadas3").innerText);
        let totalGanadas4 = parseInt(document.getElementById("ganadas4").innerText);
        let Mayor = Math.max(valor1,valor2,valor3,valor4);//obtiene el jugador con mayor puntaje
        if(valor1==Mayor)
        {//el jugador con mayor puntaje se le sumara un punto a sus ganadas
            totalGanadas1++;
            document.getElementById("ganadas1").innerText = totalGanadas1;
        }
        else if(valor2==Mayor)
        {
            totalGanadas2++;
            document.getElementById("ganadas2").innerText = totalGanadas2;
        }
        else if(valor3==Mayor)
        {
            totalGanadas3++;
            document.getElementById("ganadas3").innerText = totalGanadas3;
        }
        else if(valor4==Mayor)
        {
            totalGanadas4++;
            document.getElementById("ganadas4").innerText = totalGanadas4;
        }
    }
}
function graficar() 
{   
    let totalGanadas1 = parseInt(document.getElementById("ganadas1").innerText);
    let totalGanadas2 = parseInt(document.getElementById("ganadas2").innerText);
    let totalGanadas3 = parseInt(document.getElementById("ganadas3").innerText);
    let totalGanadas4 = parseInt(document.getElementById("ganadas4").innerText);
    var winsCanvas = document.getElementById("popChart");
    var winsData = 
    {
        labels: ["jugador1","jugador2","jugador3","jugador4"],
        datasets: 
        [{
            data: [totalGanadas1,totalGanadas2,totalGanadas3,totalGanadas4],
            backgroundColor: ["#FA8276","#7cB3D5","#Eaa2Ef","#57FB78"]
        }]
    };
    var pieChart = new Chart(winsCanvas, 
    {
        type: 'pie',
        data: winsData
    });  
}     