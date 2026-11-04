"use strict";

const WHATSAPP_NUMBER = "201033002607";
const PAYMENT_NUMBER = "01033002607";

const SOLD_OUT_PRODUCTS = [
  // "Elden Ring|offline",
  // "Elden Ring|online"
];

const CUSTOM_IMAGES = {
  "Phantom Blade Zero":"images/phant.jpg",
  "Call of Duty: Modern Warfare 4":"images/cod4.jpg",
  "Forza Horizon 6":"images/forza.jpg",
  "Elden Ring":"images/elden-ring.jpg",
  "Bloodborne":"images/bloodborne.jpg",
  "EA SPORTS FC 27":"images/fc27.webp"
};


const GAME_PRICES = {

  "Call of Duty: Modern Warfare 4":{
    offlinePrice:300,onlinePrice:3500,
    offlineOffer:null,onlineOffer:null
  },
  "Phantom Blade Zero":{
    offlinePrice:400,onlinePrice:800,
    offlineOffer:null,onlineOffer:null
  },
  

  "EA SPORTS FC 26":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "EA SPORTS FC 27":{
    offlinePrice:300,onlinePrice:2000,
    offlineOffer:null,onlineOffer:null
  },
  "Forza Horizon 5":{
    offlinePrice:300,onlinePrice:400,
    offlineOffer:250,onlineOffer:null
  },
  "Forza Horizon 6":{
    offlinePrice:300,onlinePrice:400,
    offlineOffer:null,onlineOffer:null
  },
  
  "F1 24":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Need for Speed Unbound":{
    offlinePrice:300,onlinePrice:500,
    offlineOffer:null,onlineOffer:null
  },
  "The Crew Motorfest":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Elden Ring":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:250,onlineOffer:null
  },
  "Elden Ring: Shadow of the Erdtree":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Sekiro: Shadows Die Twice":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Lies of P":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Black Myth: Wukong":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Lords of the Fallen":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Nioh 2":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Bloodborne":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Remnant II":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Wo Long: Fallen Dynasty":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "God of War Ragnarök":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "God of War":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:250,onlineOffer:null
  },
  "Marvel's Spider-Man Remastered":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Marvel's Spider-Man: Miles Morales":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Marvel's Spider-Man 2":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Ghost of Tsushima DIRECTOR'S CUT":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Horizon Forbidden West Complete Edition":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Horizon Zero Dawn Remastered":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Red Dead Redemption 2":{
    offlinePrice:300,onlinePrice:800,
    offlineOffer:250,onlineOffer:null
  },
  "Cyberpunk 2077":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:250,onlineOffer:null
  },
  "Grand Theft Auto V Enhanced":{
    offlinePrice:300,onlinePrice:800,
    offlineOffer:null,onlineOffer:null
  },
  "Mafia: Definitive Edition":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Assassin's Creed Mirage":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Assassin's Creed Valhalla":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Assassin's Creed Shadows":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Far Cry 6":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Dying Light 2 Stay Human":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Resident Evil 2":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Resident Evil 3":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Resident Evil Village":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Resident Evil 4":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Silent Hill 2":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Alan Wake 2":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Dead Space":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "The Callisto Protocol":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "The Outlast Trials":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Sons of the Forest":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "The Last of Us Part I":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "The Last of Us Part II Remastered":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "UNCHARTED: Legacy of Thieves Collection":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Star Wars Jedi: Survivor":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Prince of Persia: The Lost Crown":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Sifu":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Kena: Bridge of Spirits":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Stray":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Devil May Cry 5":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Armored Core VI: Fires of Rubicon":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Final Fantasy XVI":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Final Fantasy VII Remake Intergrade":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Monster Hunter Wilds":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Persona 3 Reload":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Metaphor: ReFantazio":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Baldur's Gate 3":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Dragon's Dogma 2":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Hogwarts Legacy":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "DOOM Eternal":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "DOOM: The Dark Ages":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Call of Duty: Modern Warfare II":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Call of Duty: Modern Warfare III":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Call of Duty: Black Ops 6":{
    offlinePrice:null,onlinePrice:300,
    offlineOffer:null,onlineOffer:null
  },
  "Call of Duty: Black Ops 7":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Battlefield 2042":{
    offlinePrice:null,onlinePrice:300,
    offlineOffer:null,onlineOffer:null
  },
  "Battlefield 6":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "HELLDIVERS 2":{
    offlinePrice:null,onlinePrice:300,
    offlineOffer:null,onlineOffer:null
  },
  "Warhammer 40,000: Space Marine 2":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  
  "S.T.A.L.K.E.R. 2: Heart of Chornobyl":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Palworld":{
    offlinePrice:null,onlinePrice:300,
    offlineOffer:null,onlineOffer:null
  },
  "Hades II":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Hades":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Hollow Knight: Silksong":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "It Takes Two":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Split Fiction":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "TEKKEN 8":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Street Fighter 6":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Mortal Kombat 1":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "WWE 2K25":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "NBA 2K25":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Starfield":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "Kingdom Come: Deliverance II":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  },
  "The Witcher 3: Wild Hunt":{
    offlinePrice:300,onlinePrice:null,
    offlineOffer:null,onlineOffer:null
  }

};

const NEW_GAMES = [
  "Call of Duty: Modern Warfare 4",
  "EA SPORTS FC 27",
  "Forza Horizon 6",
  "Battlefield 6",
  "Call of Duty: Black Ops 7",
  "Hades II",
  "Split Fiction",
  "Phantom Blade Zero"
];

const FEATURED_GAMES = [
  "Phantom Blade Zero",
  "Red Dead Redemption 2",
  "God of War Ragnarök",
  "Elden Ring",
  "Cyberpunk 2077",
  "Forza Horizon 5",
  "Marvel's Spider-Man Remastered",
  "Black Myth: Wukong",
  "The Witcher 3: Wild Hunt",
  "Ghost of Tsushima DIRECTOR'S CUT",
  "Baldur's Gate 3"
];

const raw = [
["Call of Duty: Modern Warfare 4",2026,"shooter",0],
["Phantom Blade Zero",2026,"action",0],
["EA SPORTS FC 25",2024,"sports",2669320],
["EA SPORTS FC 26",2025,"sports",0],
["EA SPORTS FC 27",2026,"sports",0],
["Forza Horizon 5",2021,"racing",1551360],
["Forza Horizon 6",2026,"racing",0],
["Forza Motorsport",2023,"racing",2440510],
["F1 25",2025,"racing",0],
["F1 24",2024,"racing",2488620],
["Need for Speed Unbound",2022,"racing",1846380],
["The Crew Motorfest",2023,"racing",2698940],
["Elden Ring",2022,"souls",1245620],
["Elden Ring: Shadow of the Erdtree",2024,"souls",1245620],
["Sekiro: Shadows Die Twice",2019,"souls",814380],
["Lies of P",2023,"souls",1627720],
["Black Myth: Wukong",2024,"souls",2358720],
["Lords of the Fallen",2023,"souls",1501750],
["Nioh 2",2021,"souls",1325200],
["Bloodborne",2015,"souls",0],
["Remnant II",2023,"souls",1282100],
["Wo Long: Fallen Dynasty",2023,"souls",1448440],
["God of War Ragnarök",2024,"story",2322010],
["God of War",2018,"story",1593500],
["Marvel's Spider-Man Remastered",2022,"story",1817070],
["Marvel's Spider-Man: Miles Morales",2022,"story",1817190],
["Marvel's Spider-Man 2",2025,"story",2651280],
["Ghost of Tsushima DIRECTOR'S CUT",2024,"story",2215430],
["Horizon Forbidden West Complete Edition",2024,"story",2420110],
["Horizon Zero Dawn Remastered",2024,"story",2561580],
["Red Dead Redemption 2",2019,"story",1174180],
["Cyberpunk 2077",2020,"story",1091500],
["Grand Theft Auto V Enhanced",2025,"open",3240220],
["Mafia: Definitive Edition",2020,"story",1030840],
["Assassin's Creed Mirage",2023,"open",3035570],
["Assassin's Creed Valhalla",2020,"open",2208920],
["Assassin's Creed Shadows",2025,"open",0],
["Far Cry 6",2021,"open",2369390],
["Dying Light 2 Stay Human",2022,"horror",534380],
["Resident Evil 2",2019,"horror",883710],
["Resident Evil 3",2020,"horror",952060],
["Resident Evil Village",2021,"horror",1196590],
["Resident Evil 4",2023,"horror",2050650],
["Silent Hill 2",2024,"horror",2124490],
["Alan Wake 2",2023,"horror",0],
["Dead Space",2023,"horror",1693980],
["The Callisto Protocol",2022,"horror",1544020],
["The Outlast Trials",2024,"horror",1304930],
["Sons of the Forest",2024,"horror",1326470],
["The Last of Us Part I",2023,"story",1888930],
["The Last of Us Part II Remastered",2025,"story",2531310],
["UNCHARTED: Legacy of Thieves Collection",2022,"story",1659420],
["Star Wars Jedi: Survivor",2023,"story",1774580],
["Prince of Persia: The Lost Crown",2024,"action",2751000],
["Sifu",2022,"action",2138710],
["Kena: Bridge of Spirits",2021,"action",1954200],
["Stray",2022,"action",1332010],
["Devil May Cry 5",2019,"action",601150],
["Armored Core VI: Fires of Rubicon",2023,"action",1888160],
["Final Fantasy XVI",2024,"rpg",2515020],
["Final Fantasy VII Remake Intergrade",2021,"rpg",1462040],
["Monster Hunter Wilds",2025,"rpg",2246340],
["Persona 3 Reload",2024,"rpg",2161700],
["Metaphor: ReFantazio",2024,"rpg",2679460],
["Baldur's Gate 3",2023,"rpg",1086940],
["Dragon's Dogma 2",2024,"rpg",2054970],
["Hogwarts Legacy",2023,"open",990080],
["DOOM Eternal",2020,"shooter",782330],
["DOOM: The Dark Ages",2025,"shooter",3017860],
["Call of Duty: Modern Warfare II",2022,"shooter",1962660],
["Call of Duty: Modern Warfare III",2023,"shooter",2519060],
["Call of Duty: Black Ops 6",2024,"shooter",1938090],
["Call of Duty: Black Ops 7",2025,"shooter",0],
["Battlefield 2042",2021,"shooter",1517290],
["Battlefield 6",2025,"shooter",0],
["HELLDIVERS 2",2024,"shooter",553850],
["Warhammer 40,000: Space Marine 2",2024,"action",2183900],
["THE FINALS",2023,"shooter",2073850],
["S.T.A.L.K.E.R. 2: Heart of Chornobyl",2024,"shooter",1643320],
["Palworld",2024,"open",1623730],
["Hades II",2025,"action",1145350],
["Hades",2020,"action",1145360],
["Hollow Knight: Silksong",2025,"action",1030300],
["It Takes Two",2021,"action",1426210],
["Split Fiction",2025,"action",2001120],
["TEKKEN 8",2024,"sports",1778820],
["Street Fighter 6",2023,"sports",1364780],
["Mortal Kombat 1",2023,"sports",1971870],
["WWE 2K25",2025,"sports",0],
["NBA 2K25",2024,"sports",2878980],
["Starfield",2023,"rpg",1716740],
["Kingdom Come: Deliverance II",2025,"rpg",1771300],
["The Witcher 3: Wild Hunt",2015,"rpg",292030]
];

const categoryInfo=[
["all","🎮","كل الألعاب"],
["story","📖","ألعاب قصة"],
["souls","⚔️","سولز"],
["racing","🏎️","سباق"],
["horror","👻","رعب"],
["action","💥","أكشن"],
["shooter","🎯","شوتر"],
["rpg","🧙","RPG"],
["open","🌍","عالم مفتوح"],
["sports","⚽","رياضة"]
];

const baseGames=raw.map((g,i)=>({
 baseId:i,
 name:g[0],
 year:g[1],
 cat:g[2],
 appid:Number(g[3])||0,
 image:CUSTOM_IMAGES[g[0]]||""
})).filter((g,i,arr)=>arr.findIndex(x=>x.name===g.name)===i);

function makeGames(){
 const result=[];

 baseGames.forEach(g=>{
  const prices=GAME_PRICES[g.name];

  if(!prices)return;

  ["offline","online"].forEach(mode=>{
   const price=prices[mode+"Price"];
   const offer=prices[mode+"Offer"];

   if(price===null||price===undefined||price===""||
      !Number.isFinite(Number(price))||Number(price)<=0)return;

   const validOffer=
    offer!==null&&offer!==undefined&&offer!==""&&
    Number.isFinite(Number(offer))&&
    Number(offer)>0&&Number(offer)<Number(price);

   result.push({
    ...g,
    id:g.baseId+"_"+mode,
    mode,
    price:Number(price),
    offer:validOffer?Number(offer):null
   });
  });
 });

 return result;
}

let games=makeGames();

let activeCategory="all";
let cart=readJSON("gamevex_cart",{});

function readJSON(key,fallback){
 try{
  const v=localStorage.getItem(key);
  return v===null?fallback:JSON.parse(v);
 }catch{return fallback}
}

function saveCart(){
 try{
  localStorage.setItem("gamevex_cart",JSON.stringify(cart));
 }catch{}
}

function escapeHTML(s){
 return String(s).replace(/[&<>"']/g,c=>({
  "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
 }[c]));
}

function money(n){
 return Number(n||0).toLocaleString("en-US")+" جنيه";
}

function goTo(id){
 document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
}

function toast(msg){
 const el=document.getElementById("toast");
 el.textContent=msg;
 el.classList.add("show");
 clearTimeout(toast.timer);
 toast.timer=setTimeout(()=>el.classList.remove("show"),2400);
}

function isSoldOut(g){
 return SOLD_OUT_PRODUCTS.includes(g.name+"|"+g.mode);
}

function getPriceForCard(g){
 return g.offer!==null?g.offer:g.price;
}

function coverURL(g){
 if(!g.appid)return "";
 return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${g.appid}/library_600x900.jpg`;
}

function coverHTML(g){
 const customURL=g.image||"";
 const steamURL=coverURL(g);
 const initialURL=customURL||steamURL;

 if(!initialURL){
  return `<div class="cover-fallback">${escapeHTML(g.name)}</div>`;
 }

 return `<img
 src="${escapeHTML(initialURL)}"
 alt="${escapeHTML(g.name)}"
 loading="lazy"
 data-fallback="${escapeHTML(customURL?steamURL:"")}"
 onerror="handleCoverError(this)">`;
}

function handleCoverError(img){
 const fallback=img.dataset.fallback||"";

 if(fallback&&!img.dataset.fallbackTried){
  img.dataset.fallbackTried="1";
  img.src=fallback;
  return;
 }

 const div=document.createElement("div");
 div.className="cover-fallback";
 div.textContent=img.alt||"صورة اللعبة";
 img.replaceWith(div);
}

function renderCategories(){
 document.getElementById("categories").innerHTML=categoryInfo.map(c=>`
 <button class="category ${activeCategory===c[0]?"active":""}" onclick="setCategory('${c[0]}')">
 <span class="emoji">${c[1]}</span>${c[2]}
 </button>
 `).join("");
}

function setCategory(cat){
 activeCategory=cat;
 renderCategories();

 document.getElementById("catalogTitle").textContent=
 categoryInfo.find(c=>c[0]===cat)?.[2]||"كل الألعاب";

 renderAll();
 goTo("catalog");
}

function getQuery(){
 return document.getElementById("searchInput").value.toLowerCase().trim();
}

function getSort(){
 return document.getElementById("sortSelect").value;
}

function filterGames(list){
 const query=getQuery();
 const sort=getSort();

 let result=list.filter(g=>
  (activeCategory==="all"||g.cat===activeCategory)&&
  g.name.toLowerCase().includes(query)
 );

 if(sort==="name")result.sort((a,b)=>a.name.localeCompare(b.name));
 if(sort==="priceLow")result.sort((a,b)=>getPriceForCard(a)-getPriceForCard(b));
 if(sort==="priceHigh")result.sort((a,b)=>getPriceForCard(b)-getPriceForCard(a));
 if(sort==="year")result.sort((a,b)=>b.year-a.year);

 return result;
}

function gameCard(g,options={}){
 const soldOut=isSoldOut(g);
 const displayPrice=getPriceForCard(g);
 const hasDiscount=g.offer!==null;
 const isNew=NEW_GAMES.includes(g.name);

 const modeLabel=g.mode==="online"?"أونلاين":"أوفلاين";

 return `
 <article class="card ${soldOut?"sold-out":""}">
 <div class="cover">
 ${coverHTML(g)}

 ${soldOut?'<div class="sold-out-overlay"><span>لقد نفذت الكمية</span></div>':""}

 ${isNew?'<span class="badge badge-new">جديد</span>':""}

 <span class="badge ${g.mode==="online"?"badge-online":"badge-offline"}"
 style="${isNew?"top:43px":""}">
 ${modeLabel}
 </span>

 ${hasDiscount?'<span class="badge badge-offer">عرض</span>':""}

 ${options.featured?'<span class="badge badge-feature">TOP 10</span>':""}
 </div>

 <div class="card-body">
 <h3>${escapeHTML(g.name)}</h3>

 <div class="meta">${g.year} · ${categoryInfo.find(c=>c[0]===g.cat)?.[2]||g.cat}</div>
 <div class="meta">${modeLabel}</div>

 ${soldOut?'<div class="meta sold-out-label">لقد نفذت الكمية</div>':""}

 <div class="price ${hasDiscount?"discount-price":""}">
 ${money(displayPrice)}
 ${hasDiscount?`<span class="old-price">${money(g.price)}</span>`:""}
 </div>

 <div class="card-actions">
 <button class="btn" ${soldOut?"disabled":""}
 onclick="addToCart('${g.id}')">
 ${soldOut?"نفذت الكمية":"+ أضف للسلة"}
 </button>
 </div>
 </div>
 </article>`;
}

function renderSection(id,list,options={}){
 const el=document.getElementById(id);

 if(!list.length){
  el.innerHTML='<div class="empty">مفيش ألعاب هنا مطابقة للبحث أو التصنيف الحالي.</div>';
  return;
 }

 el.innerHTML=list.map(g=>gameCard(g,options)).join("");
}

function renderAll(){

 const online=filterGames(games.filter(g=>g.mode==="online"));
 const offline=filterGames(games.filter(g=>g.mode==="offline"));

 renderSection("onlineProducts",online);
 renderSection("offlineProducts",offline);

 const featuredNames=FEATURED_GAMES;

 let featured=filterGames(
  games.filter(g=>featuredNames.includes(g.name))
 );

 featured.sort((a,b)=>
  featuredNames.indexOf(a.name)-featuredNames.indexOf(b.name)
 );

 renderSection("topProducts",featured.slice(0,10),{featured:true});

 const onlineOffers=filterGames(
  games.filter(g=>g.mode==="online"&&g.offer!==null)
 );

 const offlineOffers=filterGames(
  games.filter(g=>g.mode==="offline"&&g.offer!==null)
 );

 renderSection("onlineOfferProducts",onlineOffers);
 renderSection("offlineOfferProducts",offlineOffers);
}

/* السلة */
function addToCart(id){
 const g=games.find(x=>x.id===id);
 if(!g)return;

 if(isSoldOut(g)){
  toast("عذرًا، لقد نفذت كمية اللعبة");
  return;
 }

 if(!cart[id]){
  cart[id]={qty:0,price:getPriceForCard(g)};
 }

 cart[id].qty++;
 cart[id].price=getPriceForCard(g);

 saveCart();
 updateCart();
 toast("اتضافت للسلة 🛒");
}

function normalizeCart(){
 for(const id of Object.keys(cart)){
  const g=games.find(x=>x.id===id);

  if(!g||isSoldOut(g)){
   delete cart[id];
   continue;
  }

  if(typeof cart[id]==="number"){
   cart[id]={qty:cart[id],price:getPriceForCard(g)};
  }

  if(!cart[id]||typeof cart[id]!=="object"||
     !Number.isFinite(Number(cart[id].qty))||
     Number(cart[id].qty)<=0){
   delete cart[id];
   continue;
  }

  cart[id].qty=Math.floor(Number(cart[id].qty));
  cart[id].price=getPriceForCard(g);
 }

 saveCart();
}

function changeQty(id,delta){
 if(!cart[id])return;

 const g=games.find(x=>x.id===id);

 if(g&&isSoldOut(g)){
  delete cart[id];
  saveCart();
  updateCart();
  toast("لقد نفذت كمية اللعبة");
  return;
 }

 cart[id].qty+=delta;

 if(cart[id].qty<=0)delete cart[id];

 saveCart();
 updateCart();
}

function removeItem(id){
 delete cart[id];
 saveCart();
 updateCart();
 toast("اتحذفت من السلة");
}

function clearCart(){
 cart={};
 saveCart();
 updateCart();
 toast("السلة اتفضت");
}

function updateCart(){
 const ids=Object.keys(cart);

 document.getElementById("cartCount").textContent=
 ids.reduce((s,id)=>s+(cart[id]?.qty||0),0);

 document.getElementById("cartItems").innerHTML=ids.length?ids.map(id=>{
  const g=games.find(x=>x.id===id);
  if(!g)return "";

  const item=cart[id];

  return `
  <div class="cart-row">
   <div class="cart-thumb">${coverHTML(g)}</div>
   <div class="cart-info">
    <h4>${escapeHTML(g.name)} — ${g.mode==="online"?"أونلاين":"أوفلاين"}</h4>
    <small>${money(item.price)} للنسخة</small>
    <div class="qty">
     <button onclick="changeQty('${g.id}',-1)">−</button>
     <span>${item.qty}</span>
     <button onclick="changeQty('${g.id}',1)">+</button>
     <button class="remove" onclick="removeItem('${g.id}')">إزالة</button>
    </div>
   </div>
  </div>`;
 }).join(""):'<div class="empty">السلة فاضية لسه 🎮</div>';

 const total=ids.reduce((sum,id)=>
  sum+(cart[id]?(Number(cart[id].price)||0)*cart[id].qty:0),0
 );

 document.getElementById("cartTotal").textContent=money(total);
}

function openCart(){
 document.getElementById("overlay").classList.add("show");
 document.getElementById("cartDrawer").classList.add("show");
 document.body.style.overflow="hidden";
}

function closeCart(){
 document.getElementById("overlay").classList.remove("show");
 document.getElementById("cartDrawer").classList.remove("show");
 document.body.style.overflow="";
}

function checkout(){
 normalizeCart();
 updateCart();

 const ids=Object.keys(cart);

 if(!ids.length){
  toast("السلة فاضية");
  return;
 }

 const name=document.getElementById("customerName").value.trim();
 const phone=document.getElementById("customerPhone").value.trim();

 if(!name){
  toast("اكتب اسمك الأول");
  document.getElementById("customerName").focus();
  return;
 }

 if(!phone){
  toast("اكتب رقم تليفونك الأول");
  document.getElementById("customerPhone").focus();
  return;
 }

 const phoneDigits=phone.replace(/\D/g,"");

 if(phoneDigits.length<8){
  toast("اكتب رقم تليفون صحيح");
  document.getElementById("customerPhone").focus();
  return;
 }

 const lines=ids.map(id=>{
  const g=games.find(x=>x.id===id);
  const item=cart[id];

  return g
   ?`${g.name} (${g.mode==="online"?"أونلاين":"أوفلاين"}) × ${item.qty} = ${item.price*item.qty} جنيه`
   :"";
 }).filter(Boolean);

 const total=ids.reduce((s,id)=>
  s+(cart[id]?cart[id].price*cart[id].qty:0),0
 );

 const msg=[
  " مساء الخير GAME.VEX",
  "الاسم: "+name,
  "رقم العميل: "+phone,
  "",
  ...lines,
  "",
  "الإجمالي: "+money(total),
  "في انتظار تأكيد الطلب",

 ].join("\n");

 window.open(
  "https://wa.me/"+WHATSAPP_NUMBER+"?text="+encodeURIComponent(msg),
  "_blank"
 );
}

normalizeCart();
renderCategories();

renderAll();
updateCart();

document.addEventListener("keydown",function(e){
 if(e.key==="Escape")closeCart();
});