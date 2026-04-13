import Kepek from "./Kepek.js";

const lista = [
    {
        foto: "https://www.celjaded.com/wp-content/uploads/2018/11/CelJaded-Half-Life-2-Banner.jpg.webp",
        cim: "Half-Life-1-2",
        leiras:"A Half-Life és a Half-Life 2 Gordon Freeman harcát mutatják be idegenek és egy elnyomó rezsim ellen.",
    },
    {
        foto: "https://images.ctfassets.net/rporu91m20dc/4kDfUCWxKMa6yESgw62WQ2/4e8f5f0eb90cd8013e234ec78199476c/F76_BurningSprings_small.jpg",
        cim: "F76BurningSprings",
        leiras: "A Fallout 76 Burning Springs (helyesen Whitespring Resort) egy luxus üdülőhely Appalachia területén, tele robotokkal és veszélyes ellenfelekkel, de jó lootolási lehetőségekkel."
    },
    {
        foto: "https://a.allegroimg.com/s512/117d65/75ea30b74877a88a42f21959946a/Metro-2033-Metro-2034-Metro-2035-Glukhovsky",
        cim: "Metro 2033-35",
        leiras: "A Metro 2033, Metro 2034 és Metro 2035 Artyom történetét követik, aki egy nukleáris háború utáni Moszkvában a metróalagutakban élő emberiség túléléséért és az igazság felderítéséért küzd."
    },
    {
        foto: "https://i.ytimg.com/vi/bs5GW0FUUew/maxresdefault.jpg",
        cim: "Hearts of Iron IV",
        leiras: "A Hearts of Iron IV egy második világháborús stratégiai játék, ahol egy ország irányításával hadsereget, gazdaságot és diplomáciát menedzselve próbálod győzelemre vezetni nemzetedet."
    }
];

const szulo = document.querySelector(".galeria");

new Kepek(lista, szulo);

window.addEventListener("kivalaszt", (e) => {
    console.log("Kiválasztott index:", e.detail);
});
