import express from "express";
import morgan from "morgan";
import cors from "cors";

// 1. iniciar la aplicación
const app = express();

// 2. configuraciones generales del puerto con process.env.PORT sirve para que servidor te diga el puerto
const PORT = process.env.PORT || 5000; 

console.log(process.env);

// 3. Middlewares son etapas previas o posteriores de que se produce la accion en el controlador.
// podemos armarlos o usar algunos que ya esten hechos. 
// nos gustaria que en cada peticion el servidor nos muestre un mensaje de que se produjo una peticion
// para hacerlo le vamos a decir a la app que utilice como Middlewares

// 1mer Middlewares
app.use(morgan("dev"));

// 2do Middlewares
// QUE ES CORS ES PARA QUE SE CONECTE EL FRONTEN CON EL BACKEND DENTRO PODEMOS CONFIFURAR QUE COSAS PODEMOS PERMITIR
// app.use(cors({
   // origin: "https://ejercicio-14-react-63i.netlify.app"  En el origin podemos poner desde que url del fronte podemos conectarnos si lo ponemos como arreglo [] podemos agregar mas de 1
// })) //CROSS-ORIGIN-RESOURCE-SHARING
app.use(cors());

//3cer Middlewares
// esto lo que le esta diciendo que prepare al servidor para recibir request(pedido) que tenga en el cuerpo el body json
app.use(express.json());

// 4. Rutas


// 5. Iniciar el loop (bucle) del servidor 
app.listen( PORT, ()=>{
    console.log(`servidor ejecutandose en el puerto ${PORT}`)
})
