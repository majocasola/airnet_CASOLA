import { firestoreDB } from './index'
import { collection, setDoc, doc } from 'firebase/firestore/lite'

const PRODUCTS = [{
    "id": 1,
    "title": "Parlante 2.1 powered Z211",
    "description": "Este compacto parlante 2.1 ofrece audio nítido y graves mejorados a través de una conexión de 3,5 mm. Accede fácilmente a los controles de encendido y volumen, y a la toma de auriculares gracias a la sección de control con cable",
    "price": 269.99,
    "category": "Parlantes",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/156550-450-450/980-001269_1.png?v=636973475332200000g",
    "stock": 18
  }, {
    "id": 2,
    "title": "Parlante Stereo USB Z120",
    "description": "Estos altavoces compactos con práctica alimentación por USB se configuran fácilmente y se pueden llevar fácilmente de una habitación a otra",
    "price": 52.1,
    "category": "Parlantes",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/156549-450-450/980-000573_1.png?v=636973475318730000",
    "stock": 17
  }, {
    "id": 3,
    "title": "Parlante Z407 Bluetooth",
    "description": "Z407 Bluetooth con subwoofer para ordenador. Gran sonido y estilo con Z407 para tu escritorio. Sonido envolvente con una potencia de pico de 80 vatios y procesamiento de señal digital",
    "price": 349.81,
    "category": "Parlantes",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/157860-450-450/980-001353.png?v=637491942765500000",
    "stock": 18
  }, {
    "id": 4,
    "title": "Mouse MX Vertical",
    "description": "MX Vertical es un mouse ergonómico avanzado que combina un diseño con base científica y el alto rendimiento de la serie MX. La posición de sujeción natural reduce la presión en la muñeca y la tensión del antebrazo",
    "price": 60.29,
    "category": "Mouse",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/156515-450-450/910-005447_1.png?v=636973474712700000",
    "stock": 10
  }, {
    "id": 5,
    "title": "Mouse Compacto MX ANYWHERE 3",
    "description": "El ratón inalámbrico óptico Logitech MX Anywhere 3 presenta un tamaño compacto que lo convierte en el mejor aliado para el trabajo y la vida diaria.",
    "price": 486.01,
    "category": "Mouse",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/157643-450-450/910-005992.png?v=637388203008470000",
    "stock": 10
  }, {
    "id": 6,
    "title": "Mouse MX Ergo Trackball ",
    "description": "El trackball más avanzado de Logitech para fieles entusiastas y usuarios que busquen alternativas a mouse y touchpads",
    "price": 273.6,
    "category": "Mouse",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/156516-450-450/910-005177_1.png?v=636973474733830000",
    "stock": 17
  }, {
    "id": 7,
    "title": "Teclado Emojis",
    "description": "POP Keys Teclado mecanico inalambrico con teclas emojis personalizables",
    "price": 216.36,
    "category": "Teclados",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/158514-450-450/920-010713.png?v=637800262357370000",
    "stock": 19
  }, {
    "id": 8,
    "title": "Teclado Mecanico",
    "description": "G PRO Teclado mecanico compacto TKL RGB inalambrico LIGHTSPEED GL Tactile",
    "price": 289.1,
    "category": "Teclados",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/157662-450-450/920-009388_1.png?v=637388220605900000",
    "stock": 7
  }, {
    "id": 9,
    "title": "Auriculares G-PRO",
    "description": "Auriculares inalambricos LIGHTSYNC PC G-PRO Gaming",
    "price": 111.47,
    "category": "Gamers",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/157917-450-450/981-000989.png?v=637526456117400000",
    "stock": 9
  }, {
    "id": 10,
    "title": "Auricular Lightspeed",
    "description": "Auriculares inalambricos G435 LIGHTSPEED con microfono para gaming",
    "price": 379.88,
    "category": "Gamers",
    "imageUrl": "https://logitechar.vteximg.com.br/arquivos/ids/158137-450-450/981-001049_3.png?v=637672209473970000",
    "stock": 13
  }]

async function dataToFirebase() {

    const miColeccion = collection(firestoreDB, 'products');
    
    PRODUCTS.forEach((item) => {     
        const newItem = doc(miColeccion);

       setDoc(newItem, item).then(() => {
           console.log("Document written with id: ", newItem.id)})
        .catch(err => {
            console.error("Error adding document: ", err);
        });
    });
}

export default dataToFirebase;