// Might want to move this somewhere else...
const blacklist = new Set(["1-upclock", "4te_(artist)", "68" , "after_transformation", "ahkin", "ahsoka_tano", "alacarte", "alexzozaya", "amazinky", "amnesia_creations", "amputee", "anthro_on_feral", "aogami", "arctic_fox", "azula", "bargglesnatch-x1", "batruse", "bee_haji", "big_belly", "birth", "birthing", "bitchsuit", "bittenhard", "bittercream", "blattarieva", "bluebean", "bluestrikerbomber", "bonk", "borky-draws", "borscht bovid_humanoid", "brain_fuck", "breathotter", "brunn-bear", "c0sm0", "cdi", "charly-sparks", "charmandrigo", "chastity_cage", "chastity_device", "chubby", "cidea", "cold_quarantine", "contraption", "countryhumans", "cpctail", "creamygrapes", "croisshark", "croquant", "cumflation", "cuntboy", "cyanosis", "cynphira", "danonymous", "darekawa-iwanai", "dark_violet", "darkmirage", "darknetic", "dawnlux", "dayan", "dengon", "devilmimey", "dickgirl", "dorosheva-e", "dr.francat", "dragonchu", "dreameclipsewolf", "e254e", "ear_penetration", "eeveelution", "egg_bulge", "egging_(artist)", "enryo ", "ergomancy", "eugeniyburnt", "eye_penetration", "fallenarts", "fart_fetish", "female_deathclaw", "female_rapist", "femboy", "femdom", "fid", "fizwack", "folo", "foxyart", "freeflyspecter", "fuchs", "fucking_machine", "fuf", "fukashinx", "furreon", "futanari", "ganachethehorse", "gay", "gender_swap", "giantess", "giel_(pixiv)", "giratina_(artist)", "goldcrustedchicken", "gore", "gt", "gulonine", "guro", "gyu_hydrogen", "h2o2", "h3_sama", "hakiahki", "hako", "harness_gag", "harumi", "hasshou", "hatii", "hatiimiga", "hector21314", "hermaphrodite", "hiccupsdoesart", "hirudega", "hukitsuneko", "hyper_breasts", "hypnosis", "infinitydoom", "inflation", "jeffthehusky", "jerseydevil", "jessie_(pokemon)", "jet_puri", "jinx_(league_of_legends)", "kageyama", "katahane3", "kekitopu", "keylai", "kicktyan", "kimirera", "kinkangel", "kinkmilk", "kiriya", "komeko-nk", "komusou_(jinrikisha)", "konopizaga!!", "koorinezumi", "korra", "kuroodod", "kushina13", "latex_bodysuit", "lavilovi", "leakyroot", "leonifa", "livesinabag", "lonewolffl", "loonyjams", "lutun", "maggotscookie", "male/ambiguous", "male/male", "male_focus", "male_only", "male_penetrated", "male_penetrating_male", "mandemolition", "manmosu_marimo", "mark", "marlowws", "matemi", "mcnasty", "mecaw", "meisaikawaii", "mel_the_hybrid", "mew", "milking", "minami_(artist)", "mind_control", "miso_souperstar", "moonlight-ka", "mr", "mysterious", "mysterious_mew", "mysterywhiteflame", "nakimayo", "necrophilia", "nikkibunn", "nipple_weights", "nose_hook", "not_a_furfag", "nude_futanari", "o-ishi", "oddly_bally", "ohmuu", "overweight", "palisal", "pdxyz", "pheonixbat", "plus5pencil", "po-ju", "pockyrumz", "poisindoodles", "popping", "pornwhal", "pregnant", "primaldialga1992", "psycodraws", "pu_sukebe", "puchoregular", "pvt.keron", "qurnix", "rapistwerewolf", "relevancy", "reverse_rape", "revous", "rosechu", "rouge_the_bat", "roz_stripe", "sakaeguchi_okarina", "saljidark", "scat", "sex_box", "shenhibiki", "shikaro", "shotien", "sigenoya", "sindoll", "sinensian", "sl350", "slimefur", "spacewaifuart", "species_transformation", "strangehero", "strap-on", "strapon", "strongmoist", "subaru331", "sumeriandragon", "tamanosuke", "tatsumaki", "tbsktbwa", "testowepiwko", "the_amazing_world_of_gumball", "therealjl", "theskeleton", "time_stop", "toriumi(artist)", "transformation_sequence", "tricksta", "trout_(artist)", "tydrian", "type", "undertale_(series)", "urusee584", "uyu", "vcrow_shuu", "vinvulpis", "visionaryserpent", "voidtails", "vore", "weight_gain", "wing_boner", "winick-lim", "wobblelava", "xorall", "xxgato", "yaita", "yaoi", "yojek163", "youjomodoki", "youki029", "yousan", "zaire_(nightdancer)", "zanthu", "zeetyphlosion", "poison_mushroom_cookie", "ilya_efimov", "zen_allen", "woohyoot", "dntks_4320", "syuro", "bwrd", "anstingdude", "knightartist115", "dg254", "albertomangala", "ruri_tsubame", "sparksreactor", "pancarta", "annon", "susiebeeca", "radio_gosha", "gilxxgamesh", "vivid_moti", "cybeeyoru", "sheecktor", "plushtrapboyuwu", "tokemaru", "kikunyi", "muffyhecc", "fluffolio", "68_(artist)", "holly_ero", "jackerwobb", "moon_lordeet", "feralmunchies", "dagasi", "freckledcoat", "voy_barranca_abajo", "rapel", "sepiruth", "fennephilim_fox", "darkholm1", "xlkev", "steel_cat", "punimofu", "nokemop", "nnecgrau", "scruffythedeer", "mcdiego", "4te", "rumine", "tasteofchoklit", "tingtongten", "kyle5021", "powerofsin", "yopy", "lattemon", "cinthya!!(r18)", "otherthatguy", "vogold", "yabam", "dima_(artist)", "umisag85rabb99", "shiaz", "zerofox1000", "day-t", "aomokoka", "pizademokttero", "kloudmutt", "nofuta", "gooeykazoo", "darksuiro", "lemondude", "ahegao8", "suns_(artist)", "evilbanana", "tenebscuro", "jellli", "nelsonnoir", "otterjunk", "megusuri", "troglor", "wildroxann", "valvi369", "sailor_bomber", "jinti_(artist)", "minami_juuji", "negoya", "nv_hollow", "elisasharky_(artist)", "petruz", "dawnthemetamon", "maxhe", "sohornyraccoon", "box_xod", "spicyfuse", "kthanid_(artist)", "gildagriffon", "an420g", "cherry_(animal_crossing)", "dratvan", "sabbasarts", "meinfischer", "polarbearnsfw", "kuzlin", "paulundead33", "petiteswitch", "yukari_ume", "contingency", "princess_josie_riki", "bosomancer", "fontez", "bimbo_lips", "japy7u7", "redangelart", "kantan", "belly_fur", "cinccino", "brush_wheel", "renaspyro", "huge_nose", "ankofox", "mfmftanutan", "omikuro", "syourinbonzu", "seadra", "qr-code", "vanillart23", "konzaburou", "sefeiren", "baginazard", "ahegaoandy", "saperonblack", "mawile", "lil_scooter56", "g-sun", "imotaco_nankin", "victoria_viper", "bad_boy_blacky", "yonezmi", "sharalythesheep", "truewaifu", "roksim", "josephsuchus", "skyevixensartwork", "trilemma", "brionne", "cuespatra", "diamond_hakamo-o", "damian_(pokemon_insurgence)", "fapmaster", "dh-arts", "talentlesshack", "sandwich-anomaly", "purugly", "masterj291", "mommomma114", "caroo", "drizzile", "birshy", "seii3", "monodog_(artist)", "jankingen", "alyrise", "jirachi", "shirazono_raiyu", "tailzkim", "ky_(malamute)", "skweekers", "tourmalice", "salamandre", "princessdarcy", "doublepopsicle", "r-mk", "mootcookie_(artist)", "sleeper_(pokemon)", "eiroru", "unown", "thewizardstick", "deadlywolf112", "rymherdier", "luna_the_eevee", "eroborus", "fullfolka", "glury_the_unown", "text_porn", "9_6", "mexicanvulpine1987", "infamousrel", "female_decidueye", "insomniacovrlrd", "jinnosound", "fennekin", "ky_(malamute)", "chiyo_koharu", "wash_rotom", "jocario", "ssjtim", "shiny_salazzle", "yuki_(evov1)", "yukilazzle_(evov1)", "shiohara", "paradoxide", "kesu_pu", "flamyphantom1", "anglwshot", "female_machoke", "ultralobs", "mudkip", "pasaran", "snivythesuperior", "nezumi", "mudsdale", "frontierbrain", "pidgeot", "gblastman", "riolu", "snorlax", "shiin", "cum_from_navel", "dedenne", "inkcookie", "zpectralkrystal", "kurobedamu", "linoone", "dragontherapist", "zxx3", "lugia", "shakran", "rabidus", "tobato_the_dog", "bloated_stomach", "roga14", "tenshio", "preciousleaf", "dominant_ambiguous", "dedalo", "kitsoone", "bonneter", "o^o", "minamo_(pixiv17726065)"




















                       
                          
                          
                          
                          ]);

const imageList = document.querySelector(".image-list");

const posts = imageList?.querySelectorAll("span");

const unwantedPosts = [];

posts?.forEach(post => {
    if (isInBlackList(post)) unwantedPosts.push(post);
});

unwantedPosts.forEach(post => post.style.display = "None");

function isInBlackList(post) {
    // It is observed that alt and title attribute contain tags
    let tags = post.querySelector("img").alt.trim().split(" ");

    return tags.some(tag => blacklist.has(tag));
}
