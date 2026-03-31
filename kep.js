export default class Kep {
    constructor(obj, szuloElem, index) {
        this.foto = obj.foto;
        this.cim = obj.cim;
        this.leiras = obj.leiras;
        this.index = index;
        this.szuloElem = szuloElem;
        this.leiras1=obj.leiras1
        this.leiras2=obj.leiras2
        this.megjelenit();
    }

    megjelenit() {
        this.szuloElem.innerHTML += `
            <div class="kep">
                <img src="${this.foto}" alt="${this.cim}">
                <h3>${this.cim}</h3>
                <p>${this.leiras}</p>
                <p>${this.leiras1}</p>
                <p>${this.leiras2}</p>
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