
const WHATSAPP_NUMBER = "201033002607";
const VODAFONE_CASH_NUMBER = "01033002607";
const DEFAULT_IMAGE = "images/default.jpg";




const GAMES = [
    {
        name: "phantom blade zero",
        year: 2026,
        category: "أكشن",
        appid: null,

        cover: "images/phant.jpg",
        background: "images/phant.jpg",

        onlinePrice: null,
        offlinePrice: 800,

        onlineOffer: null,
        offlineOffer: 650,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: true
    },

    {
        name: "Red Dead Redemption 2",
        year: 2018,
        category: "عالم مفتوح",
        appid: 1174180,

        cover: "",
        background: "",

        onlinePrice: 300,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Elden Ring",
        year: 2022,
        category: "Souls",
        appid: 1245620,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: 250,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Cyberpunk 2077",
        year: 2020,
        category: "RPG",
        appid: 1091500,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Forza Horizon 5",
        year: 2021,
        category: "سباقات",
        appid: 1551360,

        cover: "",
        background: "",

        onlinePrice: 300,
        offlinePrice: 300,

        onlineOffer: 250,
        offlineOffer: 250,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Forza Horizon 6",
        year: 2026,
        category: "سباقات",
        appid: null,

        cover: "images/forza.jpg",
        background: "images/forza.jpg",

        onlinePrice: 500,
        offlinePrice: 400,

        onlineOffer: 400,
        offlineOffer: 300,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: true
    },

    {
        name: "God of War",
        year: 2022,
        category: "أكشن",
        appid: 1593500,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: 250,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Call of Duty: Modern Warfare 4",
        year: 2026,
        category: "تصويب",
        appid: null,

        cover: "images/cod4.jpg",
        background: "images/cod4.jpg",

        onlinePrice: 3000,
        offlinePrice: 450,

        onlineOffer: 2500,
        offlineOffer: 350,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: true
    },

    {
        name: "Resident Evil 4",
        year: 2023,
        category: "رعب",
        appid: 2050650,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Spider-Man Remastered",
        year: 2022,
        category: "أكشن",
        appid: 1817070,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    

    {
        name: "Hogwarts Legacy",
        year: 2023,
        category: "RPG",
        appid: 990080,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Black Myth: Wukong",
        year: 2024,
        category: "أكشن",
        appid: 2358720,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 400,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: true
    },

    {
        name: "Grand Theft Auto V",
        year: 2015,
        category: "عالم مفتوح",
        appid: 271590,

        cover: "",
        background: "",

        onlinePrice: 300,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "The Witcher 3",
        year: 2015,
        category: "RPG",
        appid: 292030,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Sekiro: Shadows Die Twice",
        year: 2019,
        category: "Souls",
        appid: 814380,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },


    {
        name: "Resident Evil Village",
        year: 2021,
        category: "رعب",
        appid: 1196590,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "The Last of Us Part I",
        year: 2023,
        category: "قصة",
        appid: 1888930,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Lies of P",
        year: 2023,
        category: "Souls",
        appid: 1627720,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Dying Light 2",
        year: 2022,
        category: "عالم مفتوح",
        appid: 534380,

        cover: "",
        background: "",

        onlinePrice: 300,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Assassin's Creed Valhalla",
        year: 2020,
        category: "عالم مفتوح",
        appid: 2208920,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "It Takes Two",
        year: 2021,
        category: "مغامرات",
        appid: 1426210,

        cover: "",
        background: "",

        onlinePrice: 300,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Marvel's Spider-Man: Miles Morales",
        year: 2022,
        category: "أكشن",
        appid: 1817190,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Horizon Forbidden West",
        year: 2024,
        category: "عالم مفتوح",
        appid: 2420110,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 350,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Ghost of Tsushima",
        year: 2024,
        category: "أكشن",
        appid: 2215430,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 350,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Silent Hill 2",
        year: 2024,
        category: "رعب",
        appid: 2124490,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 350,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Helldivers 2",
        year: 2024,
        category: "تصويب",
        appid: 553850,

        cover: "",
        background: "",

        onlinePrice: 350,
        offlinePrice: null,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    

    {
        name: "Star Wars Jedi: Survivor",
        year: 2023,
        category: "أكشن",
        appid: 1774580,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Lords of the Fallen",
        year: 2023,
        category: "Souls",
        appid: 1501750,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "The Callisto Protocol",
        year: 2022,
        category: "رعب",
        appid: 1544020,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    

    {
        name: "DOOM Eternal",
        year: 2020,
        category: "تصويب",
        appid: 782330,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Horizon Zero Dawn",
        year: 2020,
        category: "عالم مفتوح",
        appid: 1151640,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Resident Evil 3",
        year: 2020,
        category: "رعب",
        appid: 952060,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Stray",
        year: 2022,
        category: "مغامرات",
        appid: 1332010,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 250,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "A Plague Tale: Requiem",
        year: 2022,
        category: "قصة",
        appid: 1182900,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 300,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: false,
        isNew: false
    },

    {
        name: "Baldur's Gate 3",
        year: 2023,
        category: "RPG",
        appid: 1086940,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 400,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Indiana Jones and the Great Circle",
        year: 2024,
        category: "مغامرات",
        appid: 2677660,

        cover: "",
        background: "",

        onlinePrice: null,
        offlinePrice: 350,

        onlineOffer: null,
        offlineOffer: null,

        onlineSoldOut: false,
        offlineSoldOut: false,

        featured: true,
        isNew: false
    }

];




const PS_GAMES = [
    {
        name: "GTA 6",
        year: 2026,
        category: "عالم مفتوح",

        cover: "images/gta6.jpg",
        background: "images/gta6.jpg",

        primaryPrice: 3500,
        primaryOffer: null,
        primarySoldOut: false,

        secondaryPrice: 2800,
        secondaryOffer: null,
        secondarySoldOut: false,

        featured: true,
        isNew: true
    },
{
        name: "phantom blade zero",
        year: 2026,
        category: "أكشن",

        cover: "images/phant.jpg",
        background: "images/phant.jpg",

        primaryPrice: 2400,
        primaryOffer: null,
        primarySoldOut: false,

        secondaryPrice: 1800,
        secondaryOffer: null,
        secondarySoldOut: false,

        featured: true,
        isNew: true
    },

    {
        name: "God of War Ragnarök",
        year: 2024,
        category: "أكشن",

        cover: "images/god.jpg",
        background: "images/god.jpg",

        primaryPrice: 800,
        primaryOffer: null,
        primarySoldOut: false,

        secondaryPrice: 600,
        secondaryOffer: null,
        secondarySoldOut: false,

        featured: true,
        isNew: false
    },

    {
        name: "Marvel's Spider-Man 2",
        year: 2025,
        category: "أكشن",

        cover: "images/spider.jpg",
        background: "images/spider.jpg",

        primaryPrice: 950,
        primaryOffer: null,
        primarySoldOut: false,

        secondaryPrice: 750,
        secondaryOffer: null,
        secondarySoldOut: false,

        featured: true,
        isNew: false
    },



    {
        name: "Ghost of yotei",
        year: 2025,
        category: "أكشن",

        cover: "images/ghost.jpg",
        background: "images/ghost.jpg",

        primaryPrice: 1200,
        primaryOffer: null,
        primarySoldOut: false,

        secondaryPrice: 950,
        secondaryOffer: null,
        secondarySoldOut: false,

        featured: true,
        isNew: false
    }

];




const DESCRIPTIONS = {
    "red dead redemption 2": "عِش مغامرة ملحمية في عالم مفتوح واسع مليء بالتفاصيل والشخصيات والمهام.",
    "elden ring": "ادخل عالمًا خياليًا واسعًا مليئًا بالأسرار والتحديات.",
    "cyberpunk 2077": "انطلق إلى مدينة مستقبلية ضخمة مليئة بالتكنولوجيا والمهام والاختيارات.",
    "forza horizon 5": "استمتع بتجربة سباقات مفتوحة في عالم مستوحى من المكسيك.",
    "god of war": "خض مغامرة أكشن ملحمية تجمع بين القتال والاستكشاف والقصة.",
    "bloodborne": "اكتشف عالمًا مظلمًا وغامضًا يعتمد على القتال والتحديات.",
    "black myth: wukong": "انطلق في مغامرة أكشن مستوحاة من الأساطير الصينية.",
    "hogwarts legacy": "استكشف عالم السحر في تجربة عالم مفتوح.",
    "resident evil 4": "استعد لمغامرة مليئة بالتشويق والمواجهات.",
    "spider-man remastered": "انطلق في شوارع المدينة واستمتع بتجربة أكشن ومغامرات.",
    "the last of us part i": "خض تجربة قصصية مليئة بالأحداث والشخصيات.",
    "sekiro: shadows die twice": "اختبر مهاراتك في القتال والتوقيت الدقيق.",
    "lies of p": "ادخل عالمًا غامضًا مستوحى من قصة بينوكيو.",
    "assassin's creed valhalla": "عِش مغامرة الفايكنج واستكشف عالمًا مفتوحًا.",
    "it takes two": "خض مغامرة تعاونية مليئة بالتحديات.",
    "marvel's spider-man: miles morales": "استمتع بمغامرة جديدة في عالم سبايدرمان.",
    "horizon forbidden west": "استكشف عالمًا واسعًا مليئًا بالمخلوقات الآلية والأسرار.",
    "ghost of tsushima": "عِش مغامرة ساموراي في عالم مفتوح.",
    "silent hill 2": "استكشف تجربة رعب نفسي مليئة بالغموض.",
    "helldivers 2": "شارك في مواجهات تعاونية مليئة بالتحديات.",
    " wake 2": "ادخل تجربة قصصية تجمع بين الغموض والرعب النفسي.",
    "star wars jedi: survivor": "خض مغامرة أكشن في عالم Star Wars.",
    "lords of the fallen": "استكشف عالمًا خياليًا مظلمًا مليئًا بالتحديات.",
    "the callisto protocol": "خض تجربة رعب وبقاء في عالم خيال علمي.",
    "palworld": "استكشف عالمًا مفتوحًا واكتشف مناطق جديدة.",
    "doom eternal": "خض تجربة تصويب مليئة بالتحديات.",
    "stray": "استكشف مدينة غامضة واكتشف أسرارها.",
    "baldur's gate 3": "ادخل مغامرة تقمص أدوار واسعة.",
    "god of war ragnarök": "استكمل رحلة كريتوس وأتريوس.",
    "marvel's spider-man 2": "استمتع بمغامرة سبايدرمان في مدينة نيويورك.",
    "the last of us part ii remastered": "تابع أحداث قصة درامية في عالم مليء بالتحديات.",
    "resident evil 3": "عِش تجربة رعب وبقاء في مدينة مليئة بالمخاطر."
};

function getDescription(game) {
    return DESCRIPTIONS[game.name.toLowerCase()] ||
        `استمتع بتجربة ${game.name} في مغامرة تجمع بين أسلوب اللعب المميز والتحديات المختلفة.`;
}




let activeCategory = "الكل";
let currentGame = null;
let selectedPSEdition = "primary";
let cart = [];

try {
    const saved = JSON.parse(localStorage.getItem("gamevex_cart") || "[]");

    if (Array.isArray(saved)) {
        cart = saved.filter(item =>
            item &&
            item.id &&
            item.name &&
            Number(item.price) >= 0
        );
    }
} catch (error) {
    cart = [];
}

function escapeText(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function makeId(name, mode) {
    return encodeURIComponent(name + "|" + mode).replace(/'/g, "%27");
}

function getDiscount(oldPrice, newPrice) {
    if (!oldPrice || !newPrice || newPrice >= oldPrice) return 0;

    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
}




function getSteamCover(game) {
    if (!game.appid || Number(game.appid) <= 0) {
        return DEFAULT_IMAGE;
    }

    return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appid}/library_600x900.jpg`;
}

function getSteamBackground(game) {
    if (!game.appid || Number(game.appid) <= 0) {
        return getImage(game);
    }

    return `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${game.appid}/library_hero.jpg`;
}

function getImage(game) {
    if (game.cover && game.cover.trim() !== "") {
        return game.cover;
    }

    return getSteamCover(game);
}

function getBackground(game) {
    if (game.background && game.background.trim() !== "") {
        return game.background;
    }

    if (game.platform === "PS") {
        return getImage(game);
    }

    return getSteamBackground(game);
}

function getGameId(game, mode) {
    return game.name + "|" + mode;
}




function getPSEdition(game, edition) {
    const primary = edition === "primary";

    const original = primary
        ? game.primaryPrice
        : game.secondaryPrice;

    const offer = primary
        ? game.primaryOffer
        : game.secondaryOffer;

    const sold = primary
        ? game.primarySoldOut
        : game.secondarySoldOut;

    return {
        ...game,
        platform: "PS",
        mode: edition,
        edition: edition,
        price: offer !== null && offer !== undefined ? offer : original,
        oldPrice: offer !== null && offer !== undefined ? original : null,
        soldOut: !!sold
    };
}

function getGames() {
    const result = [];

    GAMES.forEach(game => {

        if (game.onlinePrice !== null) {
            result.push({
                ...game,
                platform: "PC",
                mode: "online",
                price: game.onlineOffer ?? game.onlinePrice,
                oldPrice: game.onlineOffer !== null ? game.onlinePrice : null,
                soldOut: !!game.onlineSoldOut
            });
        }

        if (game.offlinePrice !== null) {
            result.push({
                ...game,
                platform: "PC",
                mode: "offline",
                price: game.offlineOffer ?? game.offlinePrice,
                oldPrice: game.offlineOffer !== null ? game.offlinePrice : null,
                soldOut: !!game.offlineSoldOut
            });
        }

    });

    return result;
}

function modeName(mode) {
    if (mode === "online") return "Online";
    if (mode === "offline") return "Offline";
    if (mode === "primary") return "Primary Account";
    if (mode === "secondary") return "Secondary Account";

    return "PlayStation";
}




function psCardPrices(game) {
    const primary = getPSEdition(game, "primary");
    const secondary = getPSEdition(game, "secondary");

    function priceHTML(item, label) {
        const discount = item.oldPrice
            ? getDiscount(item.oldPrice, item.price)
            : 0;

        return `
            <div class="ps-card-price ${item.soldOut ? "unavailable" : ""}">
                ${label}

                <strong>
                    ${item.soldOut ? "نفذت الكمية" : item.price + " EGP"}
                </strong>

                ${item.oldPrice
                    ? `<em><del>${item.oldPrice} EGP</del> - خصم ${discount}%</em>`
                    : ""
                }
            </div>
        `;
    }

    return `
        <div class="ps-card-prices">
            ${priceHTML(primary, "PRIMARY")}
            ${priceHTML(secondary, "SECONDARY")}
        </div>
    `;
}

function gameCard(game) {
    const image = getImage(game);
    const isPS = game.platform === "PS";
    const id = makeId(game.name, game.mode);

    let badges = "";
    let priceHTML = "";
    let addButton = "";

    if (isPS) {

        const primary = getPSEdition(game, "primary");
        const secondary = getPSEdition(game, "secondary");

        const hasDiscount = primary.oldPrice || secondary.oldPrice;
        const bothSold = primary.soldOut && secondary.soldOut;

        if (bothSold) {
            badges += `<span class="game-label sold">نفذت الكمية</span>`;
        }

        badges += `<span class="game-label ps-label">PLAYSTATION</span>`;

        if (game.isNew) {
            badges += `<span class="game-label new">جديد</span>`;
        }

        if (hasDiscount) {
            badges += `<span class="game-label discount">عرض خاص</span>`;
        }

        priceHTML = psCardPrices(game);

        addButton = `
            <button class="add-btn" onclick="openDetails('${id}')">
                اختار الحساب
            </button>
        `;

    } else {

        const discount = game.oldPrice
            ? getDiscount(game.oldPrice, game.price)
            : 0;

        if (game.soldOut) {
            badges += `<span class="game-label sold">نفذت الكمية</span>`;
        }

        badges += game.mode === "online"
            ? `<span class="game-label online">ONLINE</span>`
            : `<span class="game-label offline">OFFLINE</span>`;

        if (game.isNew) {
            badges += `<span class="game-label new">جديد</span>`;
        }

        if (discount) {
            badges += `<span class="game-label discount">خصم ${discount}%</span>`;
        }

        priceHTML = `
            <div class="game-price">
                <span class="price">${game.price} EGP</span>

                ${game.oldPrice
                    ? `<span class="old-price">${game.oldPrice} EGP</span>`
                    : ""
                }
            </div>

            ${discount
                ? `<div class="discount-info">وفر ${discount}% على اللعبة</div>`
                : ""
            }
        `;

        addButton = `
            <button class="add-btn" ${game.soldOut ? "disabled" : ""}
                onclick="addToCart('${id}')">

                ${game.soldOut ? "نفذت الكمية" : "أضف للسلة"}

            </button>
        `;
    }

    return `
        <article class="game-card">

            <div class="game-cover" onclick="openDetails('${id}')">

                <img
                    src="${escapeText(image)}"
                    alt="${escapeText(game.name)}"
                    loading="lazy"
                    onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}'"
                >

                <div class="game-badges">
                    ${badges}
                </div>

            </div>

            <div class="game-info">

                <h3>${escapeText(game.name)}</h3>

                <div class="game-meta">
                    ${game.year || ""} • ${isPS ? "PlayStation" : modeName(game.mode)}
                </div>

                ${priceHTML}

                <div class="card-actions">

                    <button class="details-btn" onclick="openDetails('${id}')">
                        التفاصيل
                    </button>

                    ${addButton}

                </div>

            </div>

        </article>
    `;
}

function renderGrid(elementId, games, emptyText) {
    const element = document.getElementById(elementId);

    if (!games.length) {
        element.innerHTML = `
            <div class="empty-message">
                ${emptyText || "لا توجد ألعاب هنا حاليًا"}
            </div>
        `;

        return;
    }

    element.innerHTML = games.map(gameCard).join("");
}




function renderCategories() {
    const categories = [
        "الكل",
        ...new Set(
            [...GAMES, ...PS_GAMES]
                .map(game => game.category)
                .filter(Boolean)
        )
    ];

    document.getElementById("categories").innerHTML =
        categories.map(category => `
            <button
                class="category-btn ${activeCategory === category ? "active" : ""}"
                onclick="selectCategory('${escapeText(category)}')"
            >
                ${escapeText(category)}
            </button>
        `).join("");
}

function selectCategory(category) {
    activeCategory = category;
    renderAll();
}

function renderAll() {
    const search = document
        .getElementById("searchInput")
        .value
        .trim()
        .toLowerCase();

    const matches = game => (
        game.name.toLowerCase().includes(search) ||
        String(game.category || "").toLowerCase().includes(search)
    ) && (
        activeCategory === "الكل" ||
        game.category === activeCategory
    );

    const pcGames = getGames().filter(matches);
    const psGames = PS_GAMES.filter(matches);

    const allGames = [
        ...pcGames,
        ...psGames.map(game => ({
            ...game,
            platform: "PS",
            mode: "ps"
        }))
    ];

    renderCategories();

    renderGrid("allGamesGrid", allGames);

    renderGrid(
        "onlineGrid",
        pcGames.filter(game => game.mode === "online")
    );

    renderGrid(
        "offlineGrid",
        pcGames.filter(game => game.mode === "offline")
    );

    const featuredPC = pcGames.filter(game => game.featured);

    const featuredPS = psGames
        .filter(game => game.featured)
        .map(game => ({
            ...game,
            platform: "PS",
            mode: "ps"
        }));

    renderGrid(
        "featuredGrid",
        [...featuredPC, ...featuredPS].slice(0, 12)
    );

    const offersPC = pcGames.filter(
        game => game.oldPrice !== null && game.oldPrice > game.price
    );

    const offersPS = psGames
        .filter(game => {
            const primary = getPSEdition(game, "primary");
            const secondary = getPSEdition(game, "secondary");

            return (
                (primary.oldPrice && primary.price < primary.oldPrice) ||
                (secondary.oldPrice && secondary.price < secondary.oldPrice)
            );
        })
        .map(game => ({
            ...game,
            platform: "PS",
            mode: "ps"
        }));

    renderGrid("offersGrid", [...offersPC, ...offersPS]);

    renderGrid(
        "psGrid",
        psGames.map(game => ({
            ...game,
            platform: "PS",
            mode: "ps"
        })),
        "لم يتم العثور علي اي العاب"
    );
}




function setActiveNav(element) {
    document.querySelectorAll(".quick-link").forEach(link => {
        link.classList.remove("active");
    });

    element.classList.add("active");
}




function openDetails(encodedId) {
    let id;

    try {
        id = decodeURIComponent(encodedId);
    } catch (error) {
        return;
    }

    const parts = id.split("|");
    const gameName = parts[0];
    const mode = parts[1];

    let game;

    if (mode === "ps") {
        const base = PS_GAMES.find(item => item.name === gameName);

        if (!base) return;

        game = getPSEdition(base, "primary");
        selectedPSEdition = "primary";

    } else {
        game = getGames().find(item => getGameId(item, item.mode) === id);
    }

    if (!game) return;

    currentGame = game;

    document.getElementById("homePage").style.display = "none";
    document.getElementById("detailsPage").classList.add("active");

    const cover = document.getElementById("detailsCover");

    cover.src = getImage(game);

    cover.onerror = function () {
        this.onerror = null;
        this.src = DEFAULT_IMAGE;
    };

    document.getElementById("detailsTitle").textContent = game.name;

    document.getElementById("detailsDescription").textContent =
        getDescription(game);

    let tags = `
        <span>${escapeText(String(game.year || ""))}</span>
        <span>${escapeText(game.category || "")}</span>
    `;

    if (game.platform === "PS") {
        tags += `<span>PlayStation</span>`;
    } else {
        tags += `<span>${modeName(game.mode)}</span>`;
    }

    document.getElementById("detailsTags").innerHTML = tags;

    const psBox = document.getElementById("psEditionBox");

    if (game.platform === "PS") {
        psBox.style.display = "block";

        renderPSEditionOptions(
            PS_GAMES.find(item => item.name === game.name)
        );

    } else {
        psBox.style.display = "none";
    }

    updateDetailsPrice();

    document.getElementById("detailsBackground").style.backgroundImage =
        `url("${getBackground(game)}")`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function renderPSEditionOptions(game) {
    if (!game) return;

    const options = document.getElementById("psEditionOptions");

    function optionHTML(edition, label) {
        const item = getPSEdition(game, edition);

        const discount = item.oldPrice
            ? getDiscount(item.oldPrice, item.price)
            : 0;

        const selected = selectedPSEdition === edition;

        return `
            <button
                class="ps-edition-option ${selected ? "selected" : ""}"
                ${item.soldOut ? "disabled" : ""}
                onclick="selectPSEdition('${edition}')"
            >

                <strong>${label}</strong>

                <span>
                    ${item.soldOut ? "نفذت الكمية" : item.price + " EGP"}
                </span>

                ${item.oldPrice
                    ? `<small><span class="ps-old">${item.oldPrice} EGP</span> - خصم ${discount}%</small>`
                    : ""
                }

                <small>
                    ${item.soldOut
                        ? "غير متاح"
                        : selected
                            ? "تم الاختيار"
                            : "اضغط للاختيار"
                    }
                </small>

            </button>
        `;
    }

    options.innerHTML =
        optionHTML("primary", "Primary Account") +
        optionHTML("secondary", "Secondary Account");
}

function selectPSEdition(edition) {
    if (!currentGame || currentGame.platform !== "PS") return;

    const base = PS_GAMES.find(
        game => game.name === currentGame.name
    );

    if (!base) return;

    const item = getPSEdition(base, edition);

    if (item.soldOut) return;

    selectedPSEdition = edition;
    currentGame = item;

    renderPSEditionOptions(base);
    updateDetailsPrice();
}

function updateDetailsPrice() {
    if (!currentGame) return;

    document.getElementById("detailsPrice").textContent =
        currentGame.soldOut
            ? "نفذت الكمية"
            : currentGame.price + " EGP";

    const old = document.getElementById("detailsOldPrice");
    const discountBox = document.getElementById("detailsDiscount");

    const discount = currentGame.oldPrice
        ? getDiscount(currentGame.oldPrice, currentGame.price)
        : 0;

    if (discount) {
        old.textContent =
            "السعر قبل الخصم: " + currentGame.oldPrice + " EGP";

        discountBox.textContent = "خصم " + discount + "%";

    } else {
        old.textContent = "";
        discountBox.textContent = "";
    }

    const button = document.getElementById("detailsAddButton");

    button.disabled = !!currentGame.soldOut;

    button.textContent = currentGame.soldOut
        ? "نفذت الكمية"
        : "أضف إلى السلة";

    button.onclick = function () {
        if (!currentGame || currentGame.soldOut) return;

        const id = makeId(
            currentGame.name,
            currentGame.mode
        );

        addToCart(id);
    };
}

function showHome() {
    document.getElementById("detailsPage").classList.remove("active");
    document.getElementById("homePage").style.display = "block";

    currentGame = null;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}




function saveCart() {
    try {
        localStorage.setItem("gamevex_cart", JSON.stringify(cart));
    } catch (error) {
        console.warn("تعذر حفظ السلة");
    }
}

function addToCart(encodedId) {
    let id;

    try {
        id = decodeURIComponent(encodedId);
    } catch (error) {
        alert("حدث خطأ في اختيار اللعبة.");
        return;
    }

    const parts = id.split("|");
    const name = parts[0];
    const mode = parts[1];

    let game;

    if (mode === "primary" || mode === "secondary") {
        const base = PS_GAMES.find(item => item.name === name);

        if (base) {
            game = getPSEdition(base, mode);
        }

    } else {
        game = getGames().find(
            item => getGameId(item, item.mode) === id
        );
    }

    if (!game) {
        alert("لم يتم العثور على اللعبة. حاول تحديث الصفحة.");
        return;
    }

    if (game.soldOut) {
        alert("هذه اللعبة غير متاحة حاليًا.");
        return;
    }

    if (!Number.isFinite(Number(game.price)) || Number(game.price) < 0) {
        alert("سعر اللعبة غير صحيح.");
        return;
    }

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity = Number(existing.quantity || 1) + 1;

    } else {
        cart.push({
            id: id,
            name: game.name,
            mode: game.mode,
            platform: game.platform,
            price: Number(game.price),
            image: getImage(game),
            quantity: 1
        });
    }

    saveCart();
    renderCart();
    toggleCart(true);
}

function removeFromCart(index) {
    if (index < 0 || index >= cart.length) return;

    cart.splice(index, 1);

    saveCart();
    renderCart();
}

function renderCart() {
    const itemsElement = document.getElementById("cartItems");

    const count = cart.reduce(
        (sum, item) => sum + Number(item.quantity || 0),
        0
    );

    document.getElementById("cartCount").textContent = count;

    if (!cart.length) {
        itemsElement.innerHTML = `
            <p class="empty-message">السلة فارغة حاليًا</p>
        `;

    } else {
        itemsElement.innerHTML = cart.map((item, index) => `
            <div class="cart-item">

                <img
                    src="${escapeText(item.image || DEFAULT_IMAGE)}"
                    alt="${escapeText(item.name)}"
                    onerror="this.onerror=null;this.src='${DEFAULT_IMAGE}'"
                >

                <div class="cart-item-info">

                    <strong>${escapeText(item.name)}</strong>

                    <small>
                        ${escapeText(modeName(item.mode))} × ${Number(item.quantity)}
                    </small>

                    <div class="cart-item-price">
                        ${Number(item.price) * Number(item.quantity)} EGP
                    </div>

                </div>

                <button
                    class="remove-item"
                    onclick="removeFromCart(${index})"
                >
                    ×
                </button>

            </div>
        `).join("");
    }

    const total = cart.reduce(
        (sum, item) => sum +
            (Number(item.price) * Number(item.quantity)),
        0
    );

    document.getElementById("cartTotal").textContent = total + " EGP";

    updateCheckoutState();
}

function toggleCart(show) {
    document
        .getElementById("cartOverlay")
        .classList.toggle("active", show);
}

function overlayClose(event) {
    if (event.target.id === "cartOverlay") {
        toggleCart(false);
    }
}




const customerNameInput = document.getElementById("customerName");
const customerPhoneInput = document.getElementById("customerPhone");
const checkoutButton = document.getElementById("checkoutButton");
const checkoutHint = document.getElementById("checkoutHint");

customerNameInput.addEventListener("input", updateCheckoutState);
customerPhoneInput.addEventListener("input", updateCheckoutState);

function isValidEgyptianPhone(phone) {
    return /^01[0125][0-9]{8}$/.test(phone);
}

function updateCheckoutState() {
    const name = customerNameInput.value.trim();
    const phone = customerPhoneInput.value.trim();

    const validName = name.length >= 3;
    const validPhone = isValidEgyptianPhone(phone);
    const hasItems = cart.length > 0;

    checkoutButton.disabled = !(
        validName &&
        validPhone &&
        hasItems
    );

    if (!hasItems) {
        checkoutHint.textContent = "أضف لعبة إلى السلة أولًا.";

    } else if (!validName) {
        checkoutHint.textContent = "اكتب اسمك بالكامل لتفعيل الطلب.";

    } else if (!validPhone) {
        checkoutHint.textContent =
            "اكتب رقم هاتف مصري صحيح مكوّن من 11 رقمًا.";

    } else {
        checkoutHint.textContent =
            "بياناتك جاهزة. يمكنك إتمام الطلب الآن.";
    }
}




function checkout() {
    if (!cart.length) {
        alert("السلة فارغة");
        return;
    }

    const name = customerNameInput.value.trim();
    const phone = customerPhoneInput.value.trim();

    if (name.length < 3) {
        alert("من فضلك اكتب اسمك بالكامل.");
        customerNameInput.focus();
        return;
    }

    if (!isValidEgyptianPhone(phone)) {
        alert("من فضلك اكتب رقم هاتف مصري صحيح مكوّن من 11 رقمًا.");
        customerPhoneInput.focus();
        return;
    }

    let message = " Hello GAME.VEX\n";
    message += "الاسم: " + name + "\n";
    message += "رقم الهاتف: " + phone + "\n\n";
    message += "الألعاب المطلوبة:\n";

    cart.forEach(item => {
        message += "- " + item.name +
            " (" + modeName(item.mode) + ") × " +
            item.quantity + " = " +
            (Number(item.price) * Number(item.quantity)) +
            " EGP\n";
    });

    const total = cart.reduce(
        (sum, item) => sum +
            (Number(item.price) * Number(item.quantity)),

        0

    );

    message += "\nالإجمالي: " + total + " EGP\n";

    message += "رقم Vodafone Cash: " + VODAFONE_CASH_NUMBER + "\n";

    message += "حالة الطلب: في انتظار تأكيد الطلب";

    const whatsappURL =

        "https://wa.me/" +

        WHATSAPP_NUMBER +

        "?text=" +

        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

}



renderAll();

renderCart();