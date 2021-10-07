const canvas = document.getElementById('miCanvas');

let ctx = canvas.getContext('2d');
 
let inicio = {};
let bandera = false;

const color = document.getElementById('colores');
const fuente = document.getElementById('fuente');
const borrar = document.getElementById('borrar');
const colores = document.getElementById('botonColores');
let colors= document.getElementById('inputColor');
// const incremento = document.getElementById('incremento');
// const decremento = document.getElementById('decremento');
const valor = document.getElementById('valor');
const botones = document.querySelectorAll('.boton');

const inputChange =()=>{  
    return colors.value;
}

let counter =0;

if(bandera!=true){

    botones.forEach((boton)=>{
        boton.addEventListener('click',(e)=>{

            const estilos = e.currentTarget.classList;
            // console.log(estilos)
            if(estilos.contains('btn1')){
                counter++;
            } if(estilos.contains('btn2') ){

                if(counter >=1){
                    counter--
                    // !counter
                }
            } 
        ctx.lineWidth=    valor.textContent=counter
        })
    })
    
    
    
    borrar.addEventListener('click',()=>{
        ctx.clearRect(0,0,canvas.width,canvas.height);  
    });
    
    
    colores.addEventListener('click',()=>{
        console.log(inputChange());
        let input = inputChange()
        // console.log(cambiame())
        // let cambiar = cambiame;
        // console.log(JSON.stringify( cambiar))
        console.log(colors.type)
        console.log(colors.name)
        ctx.strokeStyle =input;   
    
}) 



    const ajustar =(xx,yy)=>{
        let posCanvas = canvas.getBoundingClientRect();
        
        let x = xx - posCanvas.left;
        let y = yy - posCanvas.top;
    
        return {x:x,y:y}
    }
    
    const dibujar = (entrar,fin)=>{
    
        // ctx.strokeStyle = 'red';
        ctx.font = '100px';
        ctx.beginPath()
        ctx.moveTo(entrar.x,entrar.y);
        ctx.lineTo(fin.x,fin.y);
        ctx.stroke()
        
    }
    
    canvas.onmousedown = (e)=>{
        inicio = ajustar(e.clientX,e.clientY);
        bandera = true;
        console.log(`retorno ${JSON.stringify(bandera)}`)
    };
    
    canvas.onmouseup = (e)=>{
    
        bandera = false;
        console.log(`retorno ${typeof(JSON.stringify(bandera))} ${typeof(bandera)}`)
        
    };
    canvas.onmousemove = (e)=>{
        if(bandera === true){
    
            let fin = ajustar(e.clientX,e.clientY);
            dibujar(inicio,fin);
    
            inicio = fin
            
        }
        
    }
   
    
}

