
export default class NagyKep{
    
    constructor(obj,index,szuloElem){
        this.foto=obj.foto;
        this.cim=obj.cim;
        this.leiras=obj.leiras;
        this.index=index;
        this.szuloElem=szuloElem;
        this.megjelenit();
    }

    megjelenit(){
        this.szuloElem.innerHTML=`
            <div class="nagykep">
            <img src="${this.foto}" alt="${this.cim}">
            <h3>${this.cim}</h3>
            <p>${this.leiras}</p>
        `
    }


}