import Kepek from "./Kepek.js";
import {lista} from "./kepLista.js";
import NagyKep from "./NagyKep.js";


const szuloELEM = document.querySelector(".galeria");
const nagykepElem=document.querySelector(".nagykep")
new Kepek(lista, szuloELEM);

window.addEventListener("kivalaszt", (e) => {
    console.log("Kiválasztott index:", e.detail);
    new NagyKep(index, nagykepElem)
});
