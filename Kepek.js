import Kep from "./kep.js";

export default class Kepek {
    constructor(lista, szuloElem) {
        this.lista = lista;
        this.szuloElem = szuloElem;

        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML = "";

        this.lista.forEach((elem, index) => {
            new Kep(elem, this.szuloElem, index);
        });
    }
}