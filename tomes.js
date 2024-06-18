const tomes = [
    {
    "id": 1,
    "title": "ROMANCE DAWN - À l’aube d’une grande aventure",
    "tome_number": "n°1",
    "tome_japan_date_publish": "1997-12-24",
    "tome_french_date_publish": "2000-09-01",
    },
    {
    "id": 2,
    "title": "Luffy versus la bande à Baggy",
    "tome_number": "n°2",
    "tome_japan_date_publish": "1998-04-03",
    "tome_french_date_publish": "2000-11-22"
    },
    {
    "id": 3,
    "title": "Une vérité qui blesse",
    "tome_number": "n°3",
    "tome_japan_date_publish": "1998-06-04",
    "tome_french_date_publish": "2001-01-10"
    },
    {
    "id": 4,
    "title": "Attaque au clair de lune",
    "tome_number": "n°4",
    "tome_japan_date_publish": "1998-08-04",
    "tome_french_date_publish": "2001-03-14"
    },
    {
    "id": 5,
    "title": "Pour qui sonne le glas",
    "tome_number": "n°5",
    "tome_japan_date_publish": "1998-10-02",
    "tome_french_date_publish": "2001-05-01"
    },
    {
    "id": 6,
    "title": "Le serment",
    "tome_number": "n°6",
    "tome_japan_date_publish": "1998-12-03",
    "tome_french_date_publish": "2001-07-03"
    },
    {
    "id": 7,
    "title": "Vieux machin",
    "tome_number": "n°7",
    "tome_japan_date_publish": "1999-03-04",
    "tome_french_date_publish": "2001-09-25"
    },
    {
    "id": 8,
    "title": "Je ne mourrai pas !",
    "tome_number": "n°8",
    "tome_japan_date_publish": "1999-04-30",
    "tome_french_date_publish": "2001-11-13"
    },
    {
    "id": 9,
    "title": "Larmes",
    "tome_number": "n°9",
    "tome_japan_date_publish": "1999-07-02",
    "tome_french_date_publish": "2002-02-12"
    },
    {
    "id": 10,
    "title": "OK, Let's Stand Up !",
    "tome_number": "n°10",
    "tome_japan_date_publish": "1999-10-04",
    "tome_french_date_publish": "2002-04-16"
    },
    {
    "id": 11,
    "title": "Le plus grand bandit d'East Blue",
    "tome_number": "n°11",
    "tome_japan_date_publish": "1999-12-02",
    "tome_french_date_publish": "2002-07-02"
    },
    {
    "id": 12,
    "title": "Et ainsi débuta la légende",
    "tome_number": "n°12",
    "tome_japan_date_publish": "2000-02-02",
    "tome_french_date_publish": "2002-08-27"
    },
    {
    "id": 13,
    "title": "Tiens bon !",
    "tome_number": "n°13",
    "tome_japan_date_publish": "2000-04-28",
    "tome_french_date_publish": "2002-10-15"
    },
    {
    "id": 14,
    "title": "Instinct",
    "tome_number": "n°14",
    "tome_japan_date_publish": "2000-07-04",
    "tome_french_date_publish": "2003-01-21"
    },
    {
    "id": 15,
    "title": "Droit devant !!",
    "tome_number": "n°15",
    "tome_japan_date_publish": "2000-09-04",
    "tome_french_date_publish": "2003-03-19"
    },
    {
    "id": 16,
    "title": "Successeurs",
    "tome_number": "n°16",
    "tome_japan_date_publish": "2000-12-04",
    "tome_french_date_publish": "2003-05-14"
    },
    {
    "id": 17,
    "title": "Les cerisiers d'Hiluluk",
    "tome_number": "n°17",
    "tome_japan_date_publish": "2001-02-02",
    "tome_french_date_publish": "2003-09-17"
    },
    {
    "id": 18,
    "title": "Ace entre en scène",
    "tome_number": "n°18",
    "tome_japan_date_publish": "2001-04-04",
    "tome_french_date_publish": "2003-11-12"
    },
    {
    "id": 19,
    "title": "Rébellion",
    "tome_number": "n°19",
    "tome_japan_date_publish": "2001-07-04",
    "tome_french_date_publish": "2004-01-06"
    },
    {
    "id": 20,
    "title": "Bataille décisive à Alubarna",
    "tome_number": "n°20",
    "tome_japan_date_publish": "2001-09-04",
    "tome_french_date_publish": "2004-03-03"
    },
    {
    "id": 21,
    "title": "Utopia",
    "tome_number": "n°21",
    "tome_japan_date_publish": "2001-12-04",
    "tome_french_date_publish": "2004-05-12"
    },
    {
    "id": 22,
    "title": "Hope !",
    "tome_number": "n°22",
    "tome_japan_date_publish": "2002-02-04",
    "tome_french_date_publish": "2004-07-15"
    },
    {
    "id": 23,
    "title": "L'aventure de Vivi",
    "tome_number": "n°23",
    "tome_japan_date_publish": "2002-04-04",
    "tome_french_date_publish": "2004-09-08"
    },
    {
    "id": 24,
    "title": "Croire en ses rêves",
    "tome_number": "n°24",
    "tome_japan_date_publish": "2002-07-04",
    "tome_french_date_publish": "2004-11-02"
    },
    {
    "id": 25,
    "title": "L'homme qui valait 100 millions",
    "tome_number": "n°25",
    "tome_japan_date_publish": "2002-09-04",
    "tome_french_date_publish": "2005-02-01"
    },
    {
    "id": 26,
    "title": "Aventure sur l'île de Dieu",
    "tome_number": "n°26",
    "tome_japan_date_publish": "2002-12-04",
    "tome_french_date_publish": "2005-04-05"
    },
    {
    "id": 27,
    "title": "Prélude",
    "tome_number": "n°27",
    "tome_japan_date_publish": "2003-02-04",
    "tome_french_date_publish": "2005-06-01"
    },
    {
    "id": 28,
    "title": "Wiper le démon furieux ",
    "tome_number": "n°28",
    "tome_japan_date_publish": "2003-05-01",
    "tome_french_date_publish": "2005-08-31"
    },
    {
    "id": 29,
    "title": "Oratorio",
    "tome_number": "n°29",
    "tome_japan_date_publish": "2003-07-04",
    "tome_french_date_publish": "2005-10-05"
    },
    {
    "id": 30,
    "title": "Capriccio",
    "tome_number": "n°30",
    "tome_japan_date_publish": "2003-10-03",
    "tome_french_date_publish": "2006-01-04"
    },
    {
    "id": 31,
    "title": "Nous sommes là",
    "tome_number": "n°31",
    "tome_japan_date_publish": "2009-12-19",
    "tome_french_date_publish": "2006-03-01"
    },
    {
    "id": 32,
    "title": "Love Song",
    "tome_number": "n°32",
    "tome_japan_date_publish": "2004-03-04",
    "tome_french_date_publish": "2006-05-03"
    },
    {
    "id": 33,
    "title": "Davy Back Fight",
    "tome_number": "n°33",
    "tome_japan_date_publish": "2004-06-04",
    "tome_french_date_publish": "2006-07-12"
    },
    {
    "id": 34,
    "title": "Water Seven, la cité sur l'eau",
    "tome_number": "n°34",
    "tome_japan_date_publish": "2004-08-04",
    "tome_french_date_publish": "2006-09-05"
    },
    {
    "id": 35,
    "title": "Capitaine",
    "tome_number": "n°35",
    "tome_japan_date_publish": "2004-11-04",
    "tome_french_date_publish": "2006-11-08"
    },
    {
    "id": 36,
    "title": "Justice n°9",
    "tome_number": "n°36",
    "tome_japan_date_publish": "2005-02-04",
    "tome_french_date_publish": "2007-02-14"
    },
    {
    "id": 37,
    "title": "Monsieur Tom",
    "tome_number": "n°37",
    "tome_japan_date_publish": "2005-04-28",
    "tome_french_date_publish": "2007-04-04"
    },
    {
    "id": 38,
    "title": "Rocketman",
    "tome_number": "n°38",
    "tome_japan_date_publish": "2005-07-04",
    "tome_french_date_publish": "2007-06-06"
    },
    {
    "id": 39,
    "title": "Opération sauvetage",
    "tome_number": "n°39",
    "tome_japan_date_publish": "2005-11-04",
    "tome_french_date_publish": "2007-08-21"
    },
    {
    "id": 40,
    "title": "Gear",
    "tome_number": "n°40",
    "tome_japan_date_publish": "2005-12-26",
    "tome_french_date_publish": "2007-11-14"
    },
    {
    "id": 41,
    "title": "Déclaration de guerre",
    "tome_number": "n°41",
    "tome_japan_date_publish": "2006-04-04",
    "tome_french_date_publish": "2008-01-23"
    },
    {
    "id": 42,
    "title": "Les pirates contre le CP9",
    "tome_number": "n°42",
    "tome_japan_date_publish": "2006-07-04",
    "tome_french_date_publish": "2008-03-19"
    },
    {
    "id": 43,
    "title": "La légence du Héro",
    "tome_number": "n°43",
    "tome_japan_date_publish": "2006-09-04",
    "tome_french_date_publish": "2008-05-21"
    },
    {
    "id": 44,
    "title": "Rentrons",
    "tome_number": "n°44",
    "tome_japan_date_publish": "2006-12-04",
    "tome_french_date_publish": "2008-07-09"
    },
    {
    "id": 45,
    "title": "Je comprends ce que vous resentez",
    "tome_number": "n°45",
    "tome_japan_date_publish": "2007-03-02",
    "tome_french_date_publish": "2008-09-10"
    },
    {
    "id": 46,
    "title": "Aventure sur l'île Fantôme",
    "tome_number": "n°46",
    "tome_japan_date_publish": "2007-07-04",
    "tome_french_date_publish": "2008-11-18"
    },
    {
    "id": 47,
    "title": "Temps couvert avec chutes d'os par moments",
    "tome_number": "n°47",
    "tome_japan_date_publish": "2007-09-04",
    "tome_french_date_publish": "2006-01-07"
    },
    {
    "id": 48,
    "title": "L'aventure d'Oz",
    "tome_number": "n°48",
    "tome_japan_date_publish": "2007-12-04",
    "tome_french_date_publish": "2009-03-25"
    },
    {
    "id": 49,
    "title": "Nightmare Luffy",
    "tome_number": "n°49",
    "tome_japan_date_publish": "2008-03-04",
    "tome_french_date_publish": "2009-05-20"
    },
    {
    "id": 50,
    "title": "De retour face au mur",
    "tome_number": "n°50",
    "tome_japan_date_publish": "2008-06-04",
    "tome_french_date_publish": "2009-07-01"
    },
    {
    "id": 51,
    "title": "Les onze Supernovae",
    "tome_number": "n°51",
    "tome_japan_date_publish": "2008-09-04",
    "tome_french_date_publish": "2009-09-09"
    },
    {
    "id": 52,
    "title": "Roger & Reyleigh",
    "tome_number": "n°52",
    "tome_japan_date_publish": "2008-12-04",
    "tome_french_date_publish": "2010-01-13"
    },
    {
    "id": 53,
    "title": "Le tempérament d'un roi",
    "tome_number": "n°53",
    "tome_japan_date_publish": "2009-03-04",
    "tome_french_date_publish": "2010-04-07"
    },
    {
    "id": 54,
    "title": "Plus personne ne m'arrêtera",
    "tome_number": "n°54",
    "tome_japan_date_publish": "2009-06-04",
    "tome_french_date_publish": "2010-07-01"
    },
    {
    "id": 55,
    "title": "Des travs en enfer",
    "tome_number": "n°55",
    "tome_japan_date_publish": "2009-09-04",
    "tome_french_date_publish": "2010-10-06"
    },
    {
    "id": 56,
    "title": "Merci pour tout",
    "tome_number": "n°56",
    "tome_japan_date_publish": "2009-12-04",
    "tome_french_date_publish": "2011-01-05"
    },
    {
    "id": 57,
    "title": "Guerre au sommet",
    "tome_number": "n°57",
    "tome_japan_date_publish": "2010-03-04",
    "tome_french_date_publish": "2011-04-06"
    },
    {
    "id": 58,
    "title": "L'ère de Barbe Blanche",
    "tome_number": "n°58",
    "tome_japan_date_publish": "2010-06-04",
    "tome_french_date_publish": "2011-09-07"
    },
    {
    "id": 59,
    "title": "La mort de Portgas D. Ace",
    "tome_number": "n°59",
    "tome_japan_date_publish": "2010-08-04",
    "tome_french_date_publish": "2011-11-30"
    },
    {
    "id": 60,
    "title": "Petit Frère",
    "tome_number": "n°60",
    "tome_japan_date_publish": "2010-11-04",
    "tome_french_date_publish": "2012-01-12"
    },
    {
    "id": 61,
    "title": "À l'aube d'une grande aventure vers le nouveau monde",
    "tome_number": "n°61",
    "tome_japan_date_publish": "2011-02-04",
    "tome_french_date_publish": "2012-03-07"
    },
    {
    "id": 62,
    "title": "Périple sur l'île des hommes-poissons",
    "tome_number": "n°62",
    "tome_japan_date_publish": "2011-05-02",
    "tome_french_date_publish": "2012-05-23"
    },
    {
    "id": 63,
    "title": "Otohime et Tiger",
    "tome_number": "n°63",
    "tome_japan_date_publish": "2011-08-04",
    "tome_french_date_publish": "2012-07-04"
    },
    {
    "id": 64,
    "title": "100 000 vs 10",
    "tome_number": "n°64",
    "tome_japan_date_publish": "2011-11-04",
    "tome_french_date_publish": "2012-10-03"
    },
    {
    "id": 65,
    "title": "Table rase",
    "tome_number": "n°65",
    "tome_japan_date_publish": "2012-02-03",
    "tome_french_date_publish": "2013-01-02"
    },
    {
    "id": 66,
    "title": "Vers le soleil",
    "tome_number": "n°66",
    "tome_japan_date_publish": "2012-05-02",
    "tome_french_date_publish": "2013-04-03"
    },
    {
    "id": 67,
    "title": "Cool Fight",
    "tome_number": "n°67",
    "tome_japan_date_publish": "2012-08-03",
    "tome_french_date_publish": "2013-07-03"
    },
    {
    "id": 68,
    "title": "Alliance entre pirates",
    "tome_number": "n°68",
    "tome_japan_date_publish": "2012-11-02",
    "tome_french_date_publish": "2013-10-09"
    },
    {
    "id": 69,
    "title": "SAD",
    "tome_number": "n°69",
    "tome_japan_date_publish": "2013-03-04",
    "tome_french_date_publish": "2014-01-03"
    },
    {
    "id": 70,
    "title": "Doflamingo sort de l'ombre",
    "tome_number": "n°70",
    "tome_japan_date_publish": "2013-06-04",
    "tome_french_date_publish": "2014-04-02"
    },
    {
    "id": 71,
    "title": "Le colisée de tous les dangers",
    "tome_number": "n°71",
    "tome_japan_date_publish": "2013-08-02",
    "tome_french_date_publish": "2014-07-02"
    },
    {
    "id": 72,
    "title": "Le oubliés de Dressrosa",
    "tome_number": "n°72",
    "tome_japan_date_publish": "2013-11-01",
    "tome_french_date_publish": "2014-10-01"
    },
    {
    "id": 73,
    "title": "L'opération Dressrosa S.O.P",
    "tome_number": "n°73",
    "tome_japan_date_publish": "2014-03-04",
    "tome_french_date_publish": "2015-01-07"
    },
    {
    "id": 74,
    "title": "Je serai toujours à tes côtés",
    "tome_number": "n°74",
    "tome_japan_date_publish": "2014-06-04",
    "tome_french_date_publish": "2015-04-01"
    },
    {
    "id": 75,
    "title": "Ma gratitude",
    "tome_number": "n°75",
    "tome_japan_date_publish": "2014-09-04",
    "tome_french_date_publish": "2015-07-01"
    },
    {
    "id": 76,
    "title": "Poursuis ta route !",
    "tome_number": "n°76",
    "tome_japan_date_publish": "2014-12-27",
    "tome_french_date_publish": "2015-09-02"
    },
    {
    "id": 77,
    "title": "Smile",
    "tome_number": "n°77",
    "tome_japan_date_publish": "2015-04-03",
    "tome_french_date_publish": "2015-11-18"
    },
    {
    "id": 78,
    "title": "L'icône du Mal",
    "tome_number": "n°78",
    "tome_japan_date_publish": "2015-07-03",
    "tome_french_date_publish": "2016-03-02"
    },
    {
    "id": 79,
    "title": "Lucy !",
    "tome_number": "n°79",
    "tome_japan_date_publish": "2015-10-02",
    "tome_french_date_publish": "2016-07-06"
    },
    {
    "id": 80,
    "title": "Vers une bataille sans précédent",
    "tome_number": "n°80",
    "tome_japan_date_publish": "2015-12-28",
    "tome_french_date_publish": "2016-10-05"
    },
    {
    "id": 81,
    "title": "A la rencontre de Maitre Chavipère",
    "tome_number": "n°81",
    "tome_japan_date_publish": "2016-04-04",
    "tome_french_date_publish": "2017-01-04"
    },
    {
    "id": 82,
    "title": "Un monde en pleine agitation",
    "tome_number": "n°82",
    "tome_japan_date_publish": "2016-07-04",
    "tome_french_date_publish": "2017-04-19"
    },
    {
    "id": 83,
    "title": "Charlotte Linlin",
    "tome_number": "n°83",
    "tome_japan_date_publish": "2016-11-04",
    "tome_french_date_publish": "2017-07-05"
    },
    {
    "id": 84,
    "title": "Luffy vs Sanji",
    "tome_number": "n°84",
    "tome_japan_date_publish": "2017-02-03",
    "tome_french_date_publish": "2017-10-04"
    },
    {
    "id": 85,
    "title": "Menteur",
    "tome_number": "n°85",
    "tome_japan_date_publish": "2017-05-02",
    "tome_french_date_publish": "2018-01-03"
    },
    {
    "id": 86,
    "title": "Opération régicide",
    "tome_number": "n°86",
    "tome_japan_date_publish": "2017-08-04",
    "tome_french_date_publish": "2018-04-04"
    },
    {
    "id": 87,
    "title": "Impitoyable",
    "tome_number": "n°87",
    "tome_japan_date_publish": "2017-11-02",
    "tome_french_date_publish": "2018-07-04"
    },
    {
    "id": 88,
    "title": "Lionne",
    "tome_number": "n°88",
    "tome_japan_date_publish": "2018-03-02",
    "tome_french_date_publish": "2018-10-17"
    },
    {
    "id": 89,
    "title": "Bad End Musical",
    "tome_number": "n°89",
    "tome_japan_date_publish": "2018-06-04",
    "tome_french_date_publish": "2019-01-02"
    },
    {
    "id": 90,
    "title": "La Terre Sainte de Marie Joie",
    "tome_number": "n°90",
    "tome_japan_date_publish": "2018-09-04",
    "tome_french_date_publish": "2019-04-03"
    },
    {
    "id": 91,
    "title": "Aventure au pays des samouraïs",
    "tome_number": "n°91",
    "tome_japan_date_publish": "2018-12-04",
    "tome_french_date_publish": "2019-07-03"
    },
    {
    "id": 92,
    "title": "La grande courtisane Komurosaki",
    "tome_number": "n°92",
    "tome_japan_date_publish": "2019-03-04",
    "tome_french_date_publish": "2019-10-16"
    },
    {
    "id": 93,
    "title": "La coqueluche du village d'Ebisu",
    "tome_number": "n°93",
    "tome_japan_date_publish": "2019-07-04",
    "tome_french_date_publish": "2020-01-02"
    },
    {
    "id": 94,
    "title": "Le rêve des guerriers",
    "tome_number": "n°94",
    "tome_japan_date_publish": "2019-10-04",
    "tome_french_date_publish": "2020-05-27"
    },
    {
    "id": 95,
    "title": "L'aventure d'Oden",
    "tome_number": "n°95",
    "tome_japan_date_publish": "2019-12-28",
    "tome_french_date_publish": "2020-07-01"
    },
    {
    "id": 96,
    "title": "Bouillir, tel est le propre du Oden",
    "tome_number": "n°96",
    "tome_japan_date_publish": "2020-04-03",
    "tome_french_date_publish": "2020-10-07"
    },
    {
    "id": 97,
    "title": "Ma bible",
    "tome_number": "n°97",
    "tome_japan_date_publish": "2020-09-16",
    "tome_french_date_publish": "2021-01-06"
    },
    {
    "id": 98,
    "title": "Les neufs rônins",
    "tome_number": "n°98",
    "tome_japan_date_publish": "2021-02-04",
    "tome_french_date_publish": "2021-05-19"
    },
    {
    "id": 99,
    "title": "Luffy au Chapeau de paille",
    "tome_number": "n°99",
    "tome_japan_date_publish": "2021-06-04",
    "tome_french_date_publish": "2021-09-15"
    },
    {
    "id": 100,
    "title": "Le fluide royal",
    "tome_number": "n°100",
    "tome_japan_date_publish": "2021-09-03",
    "tome_french_date_publish": "2021-12-08"
    },
    {
    "id": 101,
    "title": "Place aux têtes d'affiche",
    "tome_number": "n°101",
    "tome_japan_date_publish": "2021-12-03",
    "tome_french_date_publish": "2022-05-04"
    },
    {
    "id": 102,
    "title": "Un moment décisif",
    "tome_number": "n°102",
    "tome_japan_date_publish": "2022-04-04",
    "tome_french_date_publish": "2022-09-14"
    },
    {
    "id": 103,
    "title": "Le guerrier libérateur",
    "tome_number": "n°103",
    "tome_japan_date_publish": "2022-08-04",
    "tome_french_date_publish": "2022-12-07"
    },
    {
    "id": 104,
    "title": "Momonosuké Kozuki, shogun du pays des Wa",
    "tome_number": "n°104",
    "tome_japan_date_publish": "2022-11-04",
    "tome_french_date_publish": "2023-04-19"
    },
    {
    "id": 105,
    "title": "Le rêve de Luffy",
    "tome_number": "n°105",
    "tome_japan_date_publish": "2023-03-03",
    "tome_french_date_publish": "2023-09-29"
    },
    {
    "id": 106,
    "title": "Le rêve d'un génie",
    "tome_number": "n°106",
    "tome_japan_date_publish": "2023-07-04"
    },
    {
    "id": 107,
    "title": "Le héros de la légende",
    "tome_number": "n°107",
    "tome_japan_date_publish": "2023-11-02",
    "tome_french_date_publish": "2024-04-03"
    },
    {
    "id": 108,
    "title": "Un monde dans lequel mieux vaut mourir",
    "tome_number": "n°108",
    "tome_japan_date_publish": "2024-03-04"
    },
    {
    "id": 109,
    "title": "109",
    "tome_number": "n°109"
    }
]

module.exports = tomes