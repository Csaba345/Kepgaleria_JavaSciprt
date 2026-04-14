export default class Kep {
    constructor(obj, szuloElem, index) {
        this.foto = obj.foto;
        this.index = index;
        this.szuloElem = szuloElem;
        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML += `
            <div class="kep">
                <img src="${this.foto}" alt="${this.cim}"
            </div>
        `;

        this.kepElem = this.szuloElem.querySelectorAll(".kep")[this.index];
        this.esemeny();
    }

    esemeny() {
        this.kepElem.addEventListener("click", () => {
            const esemeny = new CustomEvent("kivalaszt", {
                detail: this.index
            });

            window.dispatchEvent(esemeny);
        });
    }
}