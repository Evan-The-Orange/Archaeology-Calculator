class Material {
    constructor(name, numRequired) {
        this.name = name;
        this.numRequired = numRequired;
    }
}

class Recipe {
    constructor(artefact, level, xpEach, mats, alignment, minForCollection = 2) {
        this.artefact = artefact;
        this.level = level;
        this.xpEach = xpEach
        this.mats = mats;
        this.ignore = false;
        this.alignment = alignment;
        this.minForCollection = minForCollection;
    }
}

var materialList = ["Third Age iron", "Zarosian insignia", "Samite silk", "Imperial steel", "White oak", "Goldrune", "Orthenglass", "Vellum", "Cadmium red",
    "Ancient vis", "Tyrian purple", "Leather scraps", "Chaotic brimstone", "Demonhide", "Eye of Dagon", "Hellfire metal", "Keramos", "White marble",
    "Cobalt blue", "Everlight silvthril", "Star of Saradomin", "Blood of Orcus", "Stormguard steel", "Wings of War", "Animal furs", "Armadylean yellow",
    "Malachite green", "Mark of the Kyzaj", "Vulcanised rubber", "Warforged bronze", "Fossilised bone", "Yu'biusk clay", "Aetherium alloy",
    "Quintessence", "Soapstone"];

var recipes = [
    new Recipe("Venator dagger", 5, 305.1, [
        new Material("Third Age iron", 16),
        new Material("Zarosian insignia", 12)
    ], "Zarosian I"),
    new Recipe("Venator light crossbow", 5, 305.1, [
        new Material("Third Age iron", 12),
        new Material("Zarosian insignia", 16)
    ], "Zarosian I"),
    new Recipe("Legionary gladius", 12, 430.8, [
        new Material("Third Age iron", 10),
        new Material("Zarosian insignia", 6),
        new Material("Imperial steel", 12)
    ], "Zarosian I"),
    new Recipe("Legionary square shield", 12, 430.8, [
        new Material("Third Age iron", 8),
        new Material("Zarosian insignia", 8),
        new Material("Imperial steel", 12)
    ], "Zarosian I"),
    new Recipe("Primis Elementis standard", 12, 430.8, [
        new Material("Samite silk", 16),
        new Material("Third Age iron", 12)
    ], "Zarosian I"),
    new Recipe("Zaros effigy", 17, 520.5, [
        new Material("Samite silk", 8),
        new Material("White oak", 10),
        new Material("Zarosian insignia", 12)
    ], "Zarosian I"),
    new Recipe("Zarosian training dummy", 17, 520.5, [
        new Material("Third Age iron", 16),
        new Material("White oak", 14)
    ], "Zarosian I"),
    new Recipe("Hookah pipe", 20, 574.4, [
        new Material("Third Age iron", 10),
        new Material("Goldrune", 12),
        new Material("Orthenglass", 8)
    ], "Zamorakian I", 3),
    new Recipe("Opulent wine goblet", 20, 574.4, [
        new Material("Third Age iron", 14),
        new Material("Goldrune", 16)
    ], "Zamorakian I", 3),
    new Recipe("Crest of Dagon", 24, 646.2, [
        new Material("Goldrune", 14),
        new Material("Orthenglass", 18)
    ], "Zamorakian I", 4),
    new Recipe("'Disorder' painting", 24, 646.2, [
        new Material("Samite silk", 6),
        new Material("White oak", 6),
        new Material("Vellum", 6),
        new Material("Cadmium red", 14)
    ], "Zamorakian I", 3),
    new Recipe("Legatus Maximus figurine", 25, 664.1, [
        new Material("Goldrune", 8),
        new Material("Zarosian insignia", 14),
        new Material("Ancient vis", 10)
    ], "Zarosian I", 4),
    new Recipe("'Solem in Umbra' painting", 25, 664.1, [
        new Material("Samite silk", 8),
        new Material("White oak", 10),
        new Material("Tyrian purple", 14)
    ], "Zarosian I", 3),
    new Recipe("Imp mask", 29, 735.9, [
        new Material("Leather scraps", 10),
        new Material("Chaotic brimstone", 10),
        new Material("Demonhide", 12)
    ], "Zamorakian I", 3),
    new Recipe("Lesser demon mask", 29, 735.9, [
        new Material("Leather scraps", 6),
        new Material("Chaotic brimstone", 8),
        new Material("Demonhide", 12),
        new Material("Cadmium red", 6)
    ], "Zamorakian I", 3),
    new Recipe("Greater demon mask", 29, 735.9, [
        new Material("Third Age iron", 6),
        new Material("Leather scraps", 6),
        new Material("Chaotic brimstone", 8),
        new Material("Demonhide", 12)
    ], "Zamorakian I", 3),
    new Recipe("Order of Dis robes", 36, 861.5, [
        new Material("Samite silk", 16),
        new Material("Cadmium red", 10),
        new Material("Eye of Dagon", 14)
    ], "Zamorakian I"),
    new Recipe("Ritual dagger", 36, 861.5, [
        new Material("Goldrune", 16),
        new Material("Hellfire metal", 24)
    ], "Zamorakian I", 3),
    new Recipe("'Frying pan'", 42, 1073.3, [
        new Material("Third Age iron", 20),
        new Material("White marble", 24)
    ], "Saradominist I"),
    new Recipe("Hallowed lantern", 42, 1073.3, [
        new Material("Third Age iron", 20),
        new Material("Keramos", 24)
    ], "Saradominist I"),
    new Recipe("Branding iron", 45, 1283.3, [
        new Material("Third Age iron", 14),
        new Material("Eye of Dagon", 12),
        new Material("Hellfire metal", 20)
    ], "Zamorakian II"),
    new Recipe("Manacles", 45, 1283.3, [
        new Material("Third Age iron", 14),
        new Material("Chaotic brimstone", 18),
        new Material("Eye of Dagon", 14)
    ], "Zamorakian II"),
    new Recipe("Ancient timepiece", 47, 1423.3, [
        new Material("Goldrune", 12),
        new Material("Imperial steel", 16),
        new Material("Ancient vis", 18)
    ], "Zarosian II", 4),
    new Recipe("Legatus pendant", 47, 1423.3, [
        new Material("Third Age iron", 16),
        new Material("Goldrune", 18),
        new Material("Ancient vis", 12)
    ], "Zarosian II", 3),
    new Recipe("Ceremonial unicorn ornament", 48, 1493.3, [
        new Material("Keramos", 26),
        new Material("Cobalt blue", 20)
    ], "Saradominist I", 3),
    new Recipe("Ceremonial unicorn saddle", 48, 1493.3, [
        new Material("Leather scraps", 24),
        new Material("Cobalt blue", 22)
    ], "Saradominist I"),
    new Recipe("Everlight harp", 51, 1703.3, [
        new Material("Everlight silvthril", 30),
        new Material("White oak", 22)
    ], "Saradominist I", 3),
    new Recipe("Everlight trumpet", 51, 1703.3, [
        new Material("Everlight silvthril", 28),
        new Material("Goldrune", 24)
    ], "Saradominist I", 4),
    new Recipe("Everlight violin", 51, 1703.3, [
        new Material("Star of Saradomin", 16),
        new Material("White oak", 20),
        new Material("Samite silk", 16)
    ], "Saradominist I", 3),
    new Recipe("Folded-arm figurine (female)", 56, 2053.3, [
        new Material("White marble", 30),
        new Material("Goldrune", 24)
    ], "Saradominist I"),
    new Recipe("Folded-arm figurine (male)", 56, 2053.3, [
        new Material("White marble", 30),
        new Material("Goldrune", 24)
    ], "Saradominist I"),
    new Recipe("Pontifex signet ring", 58, 2193.3, [
        new Material("Third Age iron", 16),
        new Material("Goldrune", 18),
        new Material("Ancient vis", 22)
    ], "Zarosian II", 3),
    new Recipe("'Incite Fear' spell scroll", 58, 2193.3, [
        new Material("Vellum", 20),
        new Material("Ancient vis", 18),
        new Material("Blood of Orcus", 18)
    ], "Zarosian II", 3),
    new Recipe("Dominion discus", 61, 2566.7, [
        new Material("Keramos", 34),
        new Material("Star of Saradomin", 28)
    ], "Saradominist II"),
    new Recipe("Dominion javelin", 61, 2566.7, [
        new Material("Keramos", 32),
        new Material("Third Age iron", 30)
    ], "Saradominist II"),
    new Recipe("Dominion pelte shield", 61, 2566.7, [
        new Material("Star of Saradomin", 34),
        new Material("Samite silk", 28)
    ], "Saradominist II"),
    new Recipe("'The Lake of Fire' painting", 65, 3500.0, [
        new Material("Samite silk", 10),
        new Material("White oak", 10),
        new Material("Vellum", 10),
        new Material("Cadmium red", 34)
    ], "Zamorakian II", 3),
    new Recipe("'Lust' metal sculpture", 65, 3500.0, [
        new Material("Third Age iron", 16),
        new Material("Eye of Dagon", 24),
        new Material("Goldrune", 24)
    ], "Zamorakian II", 3),
    new Recipe("Chaos star", 68, 4200.0, [
        new Material("Chaotic brimstone", 28),
        new Material("Hellfire metal", 36)
    ], "Zamorakian II"),
    new Recipe("Spiked dog collar", 68, 4200.0, [
        new Material("Third Age iron", 24),
        new Material("Leather scraps", 24),
        new Material("Chaotic brimstone", 16)
    ], "Zamorakian II"),
    new Recipe("Bronze Dominion medal", 69, 4433.3, [
        new Material("Everlight silvthril", 36),
        new Material("Star of Saradomin", 26),
    ], "Saradominist II", 3),
    new Recipe("Silver Dominion medal", 69, 4433.3, [
        new Material("Everlight silvthril", 36),
        new Material("Star of Saradomin", 26)
    ], "Saradominist II", 3),
    new Recipe("Dominion torch", 69, 4433.3, [
        new Material("Goldrune", 12),
        new Material("Orthenglass", 12),
        new Material("Everlight silvthril", 20),
        new Material("Star of Saradomin", 18)
    ], "Saradominist II", 3),
    new Recipe("Ikovian gerege", 70, 4666.7, [
        new Material("Third Age iron", 36),
        new Material("Wings of War", 30)
    ], "Armadylean I", 3),
    new Recipe("Toy glider", 70, 4666.7, [
        new Material("Stormguard steel", 36),
        new Material("White oak", 30)
    ], "Armadylean I"),
    new Recipe("Toy war golem", 70, 4666.7, [
        new Material("Third Age iron", 36),
        new Material("White oak", 30)
    ], "Armadylean I"),
    new Recipe("Decorative vase", 72, 5133.3, [
        new Material("White marble", 36),
        new Material("Cobalt blue", 30)
    ], "Saradominist II"),
    new Recipe("Patera bowl", 72, 5133.3, [
        new Material("Keramos", 36),
        new Material("Goldrune", 30)
    ], "Saradominist II"),
    new Recipe("Kantharos cup", 72, 5133.3, [
        new Material("Everlight silvthril", 30),
        new Material("Orthenglass", 36)
    ], "Saradominist II"),
    new Recipe("Ceremonial mace", 74, 5600.0, [
        new Material("Imperial steel", 20),
        new Material("Third Age iron", 20),
        new Material("Goldrune", 28)
    ], "Zarosian II", 3),
    new Recipe("'Consensus ad Idem' painting", 74, 5600.0, [
        new Material("White oak", 10),
        new Material("Samite silk", 10),
        new Material("Tyrian purple", 50)
    ], "Zarosian II", 3),
    new Recipe("Pontifex Maximus figurine", 74, 5600.0, [
        new Material("Zarosian insignia", 24),
        new Material("Ancient vis", 16),
        new Material("Goldrune", 28)
    ], "Zarosian II", 3),
    new Recipe("Avian song-egg player", 76, 6066.7, [
        new Material("Stormguard steel", 36),
        new Material("Armadylean yellow", 32)
    ], "Armadylean I", 3),
    new Recipe("Keshik drum", 76, 6066.7, [
        new Material("Wings of War", 16),
        new Material("Animal furs", 16),
        new Material("White oak", 20),
        new Material("Leather scraps", 16)
    ], "Armadylean I", 3),
    new Recipe("Morin khuur", 76, 6066.7, [
        new Material("Armadylean yellow", 36),
        new Material("White oak", 32)
    ], "Armadylean I", 3),
    new Recipe("Ekeleshuun blinder mask", 76, 6066.7, [
        new Material("Vulcanised rubber", 24),
        new Material("Malachite green", 20),
        new Material("Vellum", 24)
    ], "Bandosian I", 3),
    new Recipe("Narogoshuun 'Hob-da-Gob' ball", 76, 6066.7, [
        new Material("Vulcanised rubber", 36),
        new Material("Mark of the Kyzaj", 32)
    ], "Bandosian I"),
    new Recipe("Rekeshuun war tether", 76, 6066.7, [
        new Material("Warforged bronze", 20),
        new Material("Vulcanised rubber", 22),
        new Material("Leather scraps", 26)
    ], "Bandosian I"),
    new Recipe("Aviansie dreamcoat", 81, 7388.9, [
        new Material("Armadylean yellow", 20),
        new Material("Samite silk", 30),
        new Material("Animal furs", 22)
    ], "Armadylean I"),
    new Recipe("Ceremonial plume", 81, 7388.9, [
        new Material("Armadylean yellow", 38),
        new Material("Goldrune", 34)
    ], "Armadylean I", 3),
    new Recipe("Peacocking parasol", 81, 7388.9, [
        new Material("Armadylean yellow", 22),
        new Material("Samite silk", 30),
        new Material("White oak", 20)
    ], "Armadylean I"),
    new Recipe("Ogre Kyzaj axe", 81, 7388.9, [
        new Material("Warforged bronze", 28),
        new Material("Mark of the Kyzaj", 20),
        new Material("Fossilised bone", 24)
    ], "Bandosian I"),
    new Recipe("Ork cleaver sword", 81, 7388.9, [
        new Material("Warforged bronze", 36),
        new Material("Fossilised bone", 36)
    ], "Bandosian I"),
    new Recipe("Larupia trophy", 81, 7388.9, [
        new Material("Cadmium red", 18),
        new Material("Animal furs", 28),
        new Material("Orthenglass", 26),
    ], "Zamorakian II"),
    new Recipe("Lion trophy", 81, 7388.9, [
        new Material("Cadmium red", 18),
        new Material("Animal furs", 28),
        new Material("White oak", 26)
    ], "Zamorakian II"),
    new Recipe("She-wolf trophy", 81, 7388.9, [
        new Material("Chaotic brimstone", 26),
        new Material("Cadmium red", 18),
        new Material("Animal furs", 28)
    ], "Zamorakian II"),
    new Recipe("Pontifex censer", 81, 7388.9, [
        new Material("Third Age iron", 20),
        new Material("Ancient vis", 20),
        new Material("Goldrune", 32)
    ], "Zarosian II", 3),
    new Recipe("Pontifex crozier", 81, 7388.9, [
        new Material("Imperial steel", 20),
        new Material("Zarosian insignia", 20),
        new Material("Goldrune", 32)
    ], "Zarosian II", 3),
    new Recipe("Pontifex mitre", 81, 7388.9, [
        new Material("Samite silk", 32),
        new Material("Ancient vis", 20),
        new Material("Zarosian insignia", 20)
    ], "Zarosian II", 3),
    new Recipe("Thorobshuun battle standard", 83, 8166.7, [
        new Material("Mark of the Kyzaj", 16),
        new Material("Malachite green", 22),
        new Material("White oak", 16),
        new Material("Samite silk", 20)
    ], "Bandosian I"),
    new Recipe("Yurkolgokh stink grenade", 83, 8166.7, [
        new Material("Yu'biusk clay", 38),
        new Material("Vulcanised rubber", 36)
    ], "Bandosian I"),
    new Recipe("Dominarian device", 84, 8555.6, [
        new Material("Everlight silvthril", 30),
        new Material("Keramos", 22),
        new Material("Third Age iron", 22)
    ], "Saradominist III"),
    new Recipe("Fishing trident", 84, 8555.6, [
        new Material("Star of Saradomin", 22),
        new Material("Third Age iron", 30),
        new Material("Goldrune", 22)
    ], "Saradominist III", 3),
    new Recipe("Hawkeye lens multi-vision scope", 85, 8944.4, [
        new Material("Stormguard steel", 40),
        new Material("Orthenglass", 34)
    ], "Armadylean II"),
    new Recipe("Talon-3 razor wing", 85, 8944.4, [
        new Material("Aetherium alloy", 40),
        new Material("Wings of War", 34)
    ], "Armadylean II"),
    new Recipe("Necromantic focus", 86, 9333.3, [
        new Material("Imperial steel", 20),
        new Material("Blood of Orcus", 26),
        new Material("Ancient vis", 30)
    ], "Zarosian III", 3),
    new Recipe("'Exsanguinate' spell scroll", 86, 9333.3, [
        new Material("Vellum", 40),
        new Material("Blood of Orcus", 36)
    ], "Zarosian III", 3),
    new Recipe("High priest crozier", 89, 10500.0, [
        new Material("Mark of the Kyzaj", 26),
        new Material("Malachite green", 24),
        new Material("Goldrune", 28)
    ], "Bandosian I", 3),
    new Recipe("High priest mitre", 89, 10500.0, [
        new Material("Mark of the Kyzaj", 26),
        new Material("Malachite green", 24),
        new Material("Samite silk", 28)
    ], "Bandosian I", 4),
    new Recipe("High priest orb", 89, 10500.0, [
        new Material("Mark of the Kyzaj", 26),
        new Material("Malachite green", 24),
        new Material("Goldrune", 28)
    ], "Bandosian I", 3),
    new Recipe("'Pandemonium' tapestry", 89, 10500.0, [
        new Material("White oak", 12),
        new Material("Samite silk", 12),
        new Material("Vellum", 12),
        new Material("Cadmium red")
    ], "Zamorakian III", 3),
    new Recipe("'Torment' metal sculpture", 89, 10500.0, [
        new Material("Eye of Dagon", 20),
        new Material("Third Age iron", 20),
        new Material("Hellfire metal", 38)
    ], "Zamorakian III"),
    new Recipe("Prototype gravimeter", 91, 11277.8, [
        new Material("Quintessence", 34),
        new Material("Leather scraps", 20),
        new Material("Third Age iron", 26)
    ], "Armadylean II"),
    new Recipe("Songbird recorder", 91, 11277.8, [
        new Material("Stormguard steel", 44),
        new Material("Orthenglass", 36)
    ], "Armadylean II", 3),
    new Recipe("Amphora", 92, 11666.7, [
        new Material("Everlight silvthril", 34),
        new Material("Keramos", 46)
    ], "Saradominist III"),
    new Recipe("Rod of Asclepius", 92, 11666.7, [
        new Material("White marble", 30),
        new Material("Star of Saradomin", 24),
        new Material("Goldrune", 26)
    ], "Saradominist III", 3),
    new Recipe("Zarosian ewer", 93, 12500.0, [
        new Material("Third Age iron", 52),
        new Material("Zarosian insignia", 30)
    ], "Zarosian III"),
    new Recipe("Zarosian stein", 93, 12500.0, [
        new Material("Third Age iron", 16),
        new Material("Imperial steel", 36),
        new Material("Zarosian insignia", 30)
    ], "Zarosian III"),
    new Recipe("Beastkeeper helm", 94, 13333.3, [
        new Material("Warforged bronze", 16),
        new Material("Vulcanised rubber", 24),
        new Material("Animal furs", 20),
        new Material("Fossilised bone", 24)
    ], "Bandosian II", 3),
    new Recipe("Idithuun horn ring", 94, 13333.3, [
        new Material("Yu'biusk clay", 40),
        new Material("Vulcanised rubber", 44)
    ], "Bandosian II"),
    new Recipe("'Nosorog!' sculpture", 94, 13333.3, [
        new Material("Yu'biusk clay", 30),
        new Material("Malachite green", 24),
        new Material("Soapstone", 30)
    ], "Bandosian II"),
    new Recipe("Stormguard gerege", 95, 14166.7, [
        new Material("Stormguard steel", 36),
        new Material("Wings of War", 28),
        new Material("Goldrune", 20)
    ], "Armadylean II"),
    new Recipe("Dayguard shield", 95, 14166.7, [
        new Material("Stormguard steel", 36),
        new Material("Wings of War", 28),
        new Material("White oak", 20)
    ], "Armadylean II"),
    new Recipe("Garagorshuun anchor", 97, 15833.3, [
        new Material("Warforged bronze", 32),
        new Material("Mark of the Kyzaj", 26),
        new Material("Third Age iron", 30)
    ], "Bandosian II"),
    new Recipe("Ourg megahitter", 97, 15833.3, [
        new Material("White oak", 20),
        new Material("Leather scraps", 20),
        new Material("Orthenglass", 26),
        new Material("Malachite green", 22)
    ], "Bandosian II"),
    new Recipe("Ourg tower/goblin cower shield", 97, 15833.3, [
        new Material("Mark of the Kyzaj", 20),
        new Material("Third Age iron", 26),
        new Material("Leather scraps", 22),
        new Material("White oak", 20)
    ], "Bandosian II"),
    new Recipe("Golem heart", 98, 16666.7, [
        new Material("Aetherium alloy", 34),
        new Material("Quintessence", 24),
        new Material("Orthenglass", 16),
        new Material("Soapstone", 16)
    ], "Armadylean II"),
    new Recipe("Golem instruction", 98, 16666.7, [
        new Material("Quintessence", 46),
        new Material("Vellum", 44)
    ], "Armadylean II", 3),
    new Recipe("Hellfire haladie", 98, 16666.7, [
        new Material("Hellfire metal", 44),
        new Material("Third Age iron", 26),
        new Material("Leather scraps", 20)
    ], "Zamorakian III"),
    new Recipe("Hellfire katar", 98, 16666.7, [
        new Material("Hellfire metal", 50),
        new Material("Leather scraps", 40)
    ], "Zamorakian III"),
    new Recipe("Hellfire zaghnal", 98, 16666.7, [
        new Material("Hellfire metal", 38),
        new Material("White oak", 26),
        new Material("Orthenglass", 26)
    ], "Zamorakian III"),
    new Recipe("Dorgeshuun spear", 100, 18666.7, [
        new Material("Warforged bronze", 50),
        new Material("White oak", 42)
    ], "Bandosian II"),
    new Recipe("'Forged in War' sculpture", 100, 18666.7, [
        new Material("Warforged bronze", 50),
        new Material("Yu'biusk clay")
    ], "Bandosian II"),
    new Recipe("Kopis dagger", 100, 18666.7, [
        new Material("Everlight silvthril", 100),
        new Material("Leather scraps", 42)
    ], "Saradominist III"),
    new Recipe("Xiphos short sword", 100, 18666.7, [
        new Material("Everlight silvthril", 46),
        new Material("Leather scraps", 46)
    ], "Saradominist III"),
    new Recipe("'Smoke Cloud' spell scroll", 100, 18666.7, [
        new Material("Vellum", 40),
        new Material("Ancient vis", 20),
        new Material("Blood of Orcus", 32)
    ], "Zarosian III", 3),
    new Recipe("Vigorem vial", 100, 18666.7, [
        new Material("Imperial steel", 54),
        new Material("Ancient vis", 38)
    ], "Zarosian III"),
    new Recipe("Blackfire lance", 103, 22166.7, [
        new Material("Aetherium alloy", 50),
        new Material("Quintessence", 46)
    ], "Armadylean III"),
    new Recipe("Nightguard shield", 103, 22166.7, [
        new Material("Stormguard steel", 30),
        new Material("Wings of War", 36),
        new Material("White oak", 30)
    ], "Armadylean III"),
    new Recipe("Huzamogaarb chaos crown", 104, 23333.3, [
        new Material("Warforged bronze", 44),
        new Material("Third Age iron", 34),
        new Material("Eye of Dagon", 20)
    ], "Bandosian III", 3),
    new Recipe("Saragorgak star crown", 104, 23333.3, [
        new Material("Warforged bronze", 44),
        new Material("Third Age iron", 34),
        new Material("Star of Saradomin", 20)
    ], "Bandosian III", 3),
    new Recipe("'Possesion' metal sculpture", 104, 23333.3, [
        new Material("Eye of Dagon", 24),
        new Material("Chaotic brimstone", 30),
        new Material("Third Age iron", 44)
    ], "Zamorakian IV"),
    new Recipe("Trishula", 104, 23333.3, [
        new Material("Hellfire metal", 48),
        new Material("Eye of Dagon", 30),
        new Material("Third Age iron", 20)
    ], "Zamorakian IV"),
    new Recipe("Tsutaroth piercing", 104, 23333.3, [
        new Material("Hellfire metal", 44),
        new Material("Chaotic brimstone", 30),
        new Material("Cadmium red", 24)
    ], "Zamorakian IV"),
    new Recipe("'The Pride of Padosan' painting", 105, 24500, [
        new Material("Cobalt blue", 52),
        new Material("White oak", 16),
        new Material("Samite silk", 16),
        new Material("Vellum", 16)
    ], "Saradominist IV", 3),
    new Recipe("'Hallowed Be the Everlight' painting", 105, 24500, [
        new Material("Cobalt blue", 52),
        new Material("White oak", 16),
        new Material("Samite silk", 16),
        new Material("Vellum", 16)
    ], "Saradominist IV", 3),
    new Recipe("'The Lord of Light' painting", 105, 24500, [
        new Material("Cobalt blue", 52),
        new Material("White oak", 16),
        new Material("Samite silk", 16),
        new Material("Vellum", 16)
    ], "Saradominist IV", 3),
    new Recipe("Ancient magic tablet", 107, 27000, [
        new Material("Ancient vis", 40),
        new Material("Blood of Orcus", 64)
    ], "Zarosian III"),
    new Recipe("Portable phylactery", 107, 27000, [
        new Material("Imperial steel", 48),
        new Material("Blood of Orcus", 36),
        new Material("Ancient vis", 20)
    ], "Zarosian III"),
    new Recipe("'Animate Dead' spell scroll", 107, 27000, [
        new Material("Vellum", 40),
        new Material("Ancient vis", 24),
        new Material("Blood of Orcus", 40)
    ], "Zarosian III"),
    new Recipe("'The Enlightened Soul' scroll", 109, 29666.7, [
        new Material("Star of Saradomin", 50),
        new Material("Vellum", 60)
    ], "Saradominist IV", 3),
    new Recipe("'The Eudoxian Elements' tablet", 109, 29666.7, [
        new Material("White marble", 60),
        new Material("Goldrune", 50)
    ], "Saradominist IV", 3),
    new Recipe("Drogokishuun hook sword", 110, 31000, [
        new Material("Warforged bronze", 44),
        new Material("Malachite green", 36),
        new Material("Fossilised bone", 32)
    ], "Bandosian III"),
    new Recipe("Hobgoblin mansticker", 110, 31000, [
        new Material("Warforged bronze", 66),
        new Material("Fossilised bone", 46)
    ], "Bandosian III"),
    new Recipe("Chaos Elemental trophy", 110, 31000, [
        new Material("Chaotic brimstone", 52),
        new Material("White oak", 50),
        new Material("Hellfire metal", 30)
    ], "Zamorakian III"),
    new Recipe("Virius trophy", 110, 31000, [
        new Material("Demonhide", 44),
        new Material("White oak", 34),
        new Material("Orthenglass", 34)
    ], "Zamorakian III"),
    new Recipe("Flat cap", 111, 32333.3, [
        new Material("Armadylean yellow", 60),
        new Material("Samite silk", 54)
    ], "Armadylean III", 3),
    new Recipe("Night owl flight goggles", 111, 32333.6, [
        new Material("Armadylean yellow", 44),
        new Material("Leather scraps", 40),
        new Material("Orthenglass", 30)
    ], "Armadylean III"),
    new Recipe("Prototype godbow", 112, 33666.7, [
        new Material("Aetherium alloy", 50),
        new Material("Quintessence", 34),
        new Material("Wings of War", 34)
    ], "Armadylean III"),
    new Recipe("Prototype godstaff", 112, 33666.7, [
        new Material("Aetherium alloy", 50),
        new Material("Quintessence", 34),
        new Material("Wings of War", 34)
    ], "Armadylean III"),
    new Recipe("Prototype godsword", 112, 33666.7, [
        new Material("Aetherium alloy", 50),
        new Material("Quintessence", 34),
        new Material("Goldrune", 34)
    ], "Armadylean III"),
    new Recipe("Praetorian hood", 114, 36666.7, [
        new Material("Ancient vis", 36),
        new Material("Samite silk", 48),
        new Material("Zarosian insignia", 40)
    ], "Zarosian IV", 3),
    new Recipe("Praetorian robes", 114, 36666.7, [
        new Material("Ancient vis", 30),
        new Material("Samite silk", 54),
        new Material("Zarosian insignia", 40)
    ], "Zarosian IV"),
    new Recipe("Praetorian staff", 114, 36666.7, [
        new Material("Imperial steel", 36),
        new Material("Ancient vis", 58),
        new Material("Zarosian insignia", 30)
    ], "Zarosian IV"),
    new Recipe("Kal-i-kran chieftain crown", 115, 38333.3, [
        new Material("Yu'biusk clay", 66),
        new Material("Animal furs", 60)
    ], "Bandosian III", 3),
    new Recipe("Kal-i-kran mace", 115, 38333.3, [
        new Material("Vulcanised rubber", 42),
        new Material("Third Age iron", 44),
        new Material("Fossilised bone", 40)
    ], "Bandosian III"),
    new Recipe("Kal-i-kran warhorn", 115, 38333.3, [
        new Material("Vulcanised rubber", 44),
        new Material("Fossilised bone", 42),
        new Material("Animal furs", 40)
    ], "Bandosian III"),
    new Recipe("Tsutsaroth helm", 116, 40000, [
        new Material("Hellfire metal", 50),
        new Material("Eye of Dagon", 40),
        new Material("Goldrune", 40)
    ], "Zamorakian IV", 3),
    new Recipe("Tsusaroth pauldron", 116, 40000, [
        new Material("Hellfire metal", 40),
        new Material("Goldrune", 50),
        new Material("Eye of Dagon", 40)
    ], "Zamorakian IV"),
    new Recipe("Tustsaroth urumi", 116, 40000, [
        new Material("Hellfire metal", 50),
        new Material("Eye of Dagon", 40),
        new Material("Third Age iron", 40)
    ], "Zamorakian IV"),
    new Recipe("Kontos lance", 117, 41666.7, [
        new Material("Everlight silvthril", 70),
        new Material("Samite silk", 62)
    ], "Saradominist IV"),
    new Recipe("Doru spear", 117, 41666.7, [
        new Material("Everlight silvthril", 70),
        new Material("White oak", 62)
    ], "Saradominist IV"),
    new Recipe("Chuluu stone", 118, 43333.3, [
        new Material("Aetherium alloy", 40),
        new Material("Quintessence", 30),
        new Material("Soapstone", 40),
        new Material("Goldrune", 24)
    ], "Armadylean III", 3),
    new Recipe("Quinessence counter", 118, 43333.3, [
        new Material("Quintessence", 54),
        new Material("Stormguard steel", 40),
        new Material("White oak", 40)
    ], "Armadylean III"),
    new Recipe("Spherical astrolabe", 118, 43333.3, [
        new Material("Aetherium alloy", 46),
        new Material("Armadylean yellow", 40),
        new Material("Orthenglass", 48)
    ], "Armadylean III"),
    new Recipe("Ancient globe", 118, 43333.3, [
        new Material("White oak", 20),
        new Material("Tyrian purple", 54),
        new Material("Ancient vis", 60)
    ], "Zarosian IV"),
    new Recipe("Battle plans", 118, 43333.3, [
        new Material("Vellum", 40),
        new Material("Tyrian purple", 54),
        new Material("Ancient vis", 34)
    ], "Zarosian IV"),
    new Recipe("'Prima Legio' painting", 118, 43333.3, [
        new Material("White oak", 20),
        new Material("Samite silk", 20),
        new Material("Tyrian purple", 74),
        new Material("Zarosian insignia", 20)
    ], "Zarosian IV", 3),
    new Recipe("Horogothgar cooking pot", 119, 45000, [
        new Material("Yu'biusk clay", 60),
        new Material("Malachite green", 38),
        new Material("Soapstone", 40)
    ], "Bandosian III"),
    new Recipe("'Da Boss Man' sculpture", 119, 45000, [
        new Material("Yu'biusk clay", 50),
        new Material("Malachite green", 44),
        new Material("Soapstone", 44)
    ], "Bandosian III", 4)
];

function getRecipeByArtefact(artefact) {
    for (i = 0; i < recipes.length; i++) {
        if (recipes[i].artefact == artefact) {
            return recipes[i];
        }
    }
}

function getMatsByArtefact(artefact) {
    var recipe = getRecipeByArtefact(artefact);

    return recipe.mats;
}


//TODO: Add collections?
