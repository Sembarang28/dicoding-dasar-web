const games = [
    {
        judul : "Call Of Duty MW",
        genre : "Action, Shooter",
        price : "Rp 800.000",
        image : "gameImg/CODMW.jpg"
    },
    {
        judul : "Elden Ring",
        genre : "Action, RPG",
        price : "Rp 820.000",
        image : "gameImg/ER.jpg"
    },
    {
        judul : "Finat Fantasy 7 Remake",
        genre : "Action, RPG",
        price : "Rp 850.000",
        image : "gameImg/FF7R.jpg"
    },
    {
        judul : "God Of War Ragnarok",
        genre : "Action, RPG",
        price : "Rp 800.000",
        image : "gameImg/GOWR.jpg"
    },
    {
        judul : "MotoGP 22",
        genre : "Racing",
        price : "Rp 500.000",
        image : "gameImg/MG22.jpg"
    },
    {
        judul : "Persona 4 Golden",
        genre : "RPG",
        price : "Rp 300.000",
        image : "gameImg/P4G.png"
    },
    {
        judul : "Persona 5 Royal",
        genre : "RPG",
        price : "Rp 800.000",
        image : "gameImg/P5R.jpg"
    },
    {
        judul : "Resident Evil Village",
        genre : "Action, Shooter",
        price : "Rp 700.000",
        image : "gameImg/REVIII.jpg"
    },
    {
        judul : "Story Of Seasons POOT",
        genre : "Simulation",
        price : "Rp 600.000",
        image : "gameImg/SOSPOOT.jpg"
    }
];

let index = 0;

for (let i = 0; i < games.length; i++) {
    document.write("<div class='card first'><div class='judul'>"+games[i].judul+
    "</div><div class='gameImg'><img src="+games[i].image+
    "></div><div class='genre'>"+games[i].genre+
    "</div><div class='price'>"+games[i].price+
    "</div><div class='buy'><a href='#'>Buy</a></div></div>")
}; 