import Kepek from "./Kepek.js";

const lista = [
    {
        foto: "https://www.celjaded.com/wp-content/uploads/2018/11/CelJaded-Half-Life-2-Banner.jpg.webp",
        cim: "Half-Life-1-2",
        leiras:"Szereplő: Gordon Freeman",
        leiras1: "1 rész: A játék főhőse Gordon Freeman, egy elméleti fizikus, aki a Black Mesa kutatókomplexumban dolgozik. Egy kísérlet során rosszul sikerült teleportációs teszt megnyitja a kaput a Xen nevű dimenzióba, és idegen lények árasztják el a bázist.",
        leiras2:"2rész: Évekkel később a G‑Man „felébreszti” Gordont, aki egy teljesen megváltozott világba kerül. A Földet az idegen Combine Birodalom uralja, az emberek elnyomás alatt élnek.",
    },
    {
        foto: "https://images.ctfassets.net/rporu91m20dc/4kDfUCWxKMa6yESgw62WQ2/4e8f5f0eb90cd8013e234ec78199476c/F76_BurningSprings_small.jpg",
        cim: "F76 BurningSprings",
        leiras: "Red Rider"
    },
    {
        foto: "https://a.allegroimg.com/s512/117d65/75ea30b74877a88a42f21959946a/Metro-2033-Metro-2034-Metro-2035-Glukhovsky",
        cim: "Metro 2033-35",
        leiras: "Ez a "
    },
    {
        foto: "https://hammertimecafe.hu/app/uploads/2025/11/warhammer-40.000-category-cover-scaled.png",
        cim: "Harmadik kép",
        leiras: "Ez a harmadik kép"
    }
];

const szulo = document.querySelector(".galeria");

new Kepek(lista, szulo);

window.addEventListener("kivalaszt", (e) => {
    console.log("Kiválasztott index:", e.detail);
});