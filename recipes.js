const recipes = [
  {
    "_id": 0,
    "image": "./images/mamo-white-matt.jpg",
    "recipe": [
      {
        "material": "Custer Feldspar",
        "amount": "25"
      },
      {
        "material": "Dolomite",
        "amount": "20"
      },
      {
        "material": "Minspar 200",
        "amount": "20"
      },
      {
        "material": "Calcined Kaolin",
        "amount": "15"
      },
      {
        "material": "EP Kaolin",
        "amount": "10"
      },
      {
        "material": "Whiting",
        "amount": "5"
      }
    ],
    "name": "Mamo White Matt",
    "link": "https://glazy.org/recipes/30904",
    "credit": "Alfred Grinding Room",
    "cone": "9"
  },
  {
    "_id": 1,
    "image": "./images/choy-blue-celadon.jpg",
    "recipe": [
      {
        "material": "Custer Feldspar",
        "amount": "50"
      },
      {
        "material": "Silica",
        "amount": "24"
      },
      {
        "material": "Barium Carbonate",
        "amount": "16"
      },
      {
        "material": "Whiting",
        "amount": "6"
      },
      {
        "material": "EP Kaolin",
        "amount": "4"
      }
    ],
    "name": "Chow Blue Celadon",
    "link": "https://glazy.org/recipes/30866",
    "credit": "Alfred Grinding Room",
    "cone": "9"
  },
  {
    "_id": 2,
    "image": "./images/translucent-base.jpg",
    "recipe": [
      {
        "material": "Neph Sye A270",
        "amount": "44"
      },
      {
        "material": "Silica",
        "amount": "13"
      },
      {
        "material": "Whiting",
        "amount": "7"
      },
      {
        "material": "Zinc Oxide",
        "amount": "13"
      },
      {
        "material": "EP Kaolin",
        "amount": "7"
      }
    ],
    "name": "Translucent Base",
    "link": "https://glazy.org/recipes/29844",
    "credit": "Alfred Grinding Room",
    "cone": "5"
  },
  {
    "_id": 3,
    "image": "./images/steves-blue-green-celadon.jpg",
    "recipe": [
      {
        "material": "Minspar 200",
        "amount": "35"
      },
      {
        "material": "Silica",
        "amount": "26"
      },
      {
        "material": "Whiting",
        "amount": "14"
      },
      {
        "material": "Zinc Oxide",
        "amount": "11"
      },
      {
        "material": "Wollastonite",
        "amount": "9"
      },
      {
        "material": "EP Kaolin",
        "amount": "5"
      }
    ],
    "name": "Steve's Blue-Green Celadon",
    "link": "https://glazy.org/recipes/31661",
    "credit": "Alfred Grinding Room",
    "cone": "10"
  },
  {
    "_id": 4,
    "image": "./images/vc-opaque-satin.jpg",
    "recipe": [
      {
        "material": "Neph Sye A270",
        "amount": "12"
      },
      {
        "material": "Ferro Frit 3124",
        "amount": "72"
      },
      {
        "material": "Silica",
        "amount": "10"
      },
      {
        "material": "EP Kaolin",
        "amount": "6"
      }
    ],
    "name": "V.C. Opaque Satin",
    "link": "https://glazy.org/recipes/32110",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 5,
    "image": "./images/vc-vampie-red.jpg",
    "recipe": [
      {
        "material": "Silica",
        "amount": "28"
      },
      {
        "material": "Mahavir Potash Feldspar",
        "amount": "26"
      },
      {
        "material": "Whiting",
        "amount": "16"
      },
      {
        "material": "Barium Carbonate",
        "amount": "5"
      },
      {
        "material": "Soda Ash",
        "amount": "5"
      },
      {
        "material": "Fusion Frit 367",
        "amount": "5"
      },
      {
        "material": "EP Kaolin",
        "amount": "4"
      },
      {
        "material": "Kentucky OM #4 Ball Clay",
        "amount": "4"
      }
    ],
    "name": "V.C. Vampire Red",
    "link": "https://glazy.org/recipes/31669",
    "credit": "Alfred Grinding Room",
    "cone": "10"
  },
  {
    "_id": 6,
    "image": "./images/haynes-satin.jpg",
    "recipe": [
      {
        "material": "Neph Sye A270",
        "amount": "45"
      },
      {
        "material": "Dolomite",
        "amount": "10"
      },
      {
        "material": "Whiting",
        "amount": "8"
      },
      {
        "material": "Amtalc-C98 Talc",
        "amount": "7"
      },
      {
        "material": "Bentonite",
        "amount": "2"
      }
    ],
    "name": "Haynes Satin",
    "link": "https://glazy.org/recipes/30881",
    "credit": "Alfred Grinding Room",
    "cone": "9"
  },
  {
    "_id": 7,
    "image": "./images/woo-yellow.jpg",
    "recipe": [
      {
        "material": "Minspar 200",
        "amount": "34"
      },
      {
        "material": "Barium Carbonate",
        "amount": "25"
      },
      {
        "material": "Zircopax",
        "amount": "15"
      },
      {
        "material": "Dolomite",
        "amount": "12"
      },
      {
        "material": "EP Kaolin",
        "amount": "7"
      },
      {
        "material": "Silica",
        "amount": "7"
      }
    ],
    "name": "Woo Yellow",
    "link": "https://glazy.org/recipes/31674",
    "credit": "Alfred Grinding Room",
    "cone": "10"
  },
  {
    "_id": 8,
    "image": "./images/vc-satin-doll-black.jpg",
    "recipe": [
      {
        "material": "Redart",
        "amount": "40"
      },
      {
        "material": "Amtalc-C98 Talc",
        "amount": "15"
      },
      {
        "material": "Neph Sye A270",
        "amount": "15"
      },
      {
        "material": "Barium Carbonate",
        "amount": "10"
      },
      {
        "material": "Silica",
        "amount": "10"
      },
      {
        "material": "Whiting",
        "amount": "10"
      }
    ],
    "name": "V.C. Satin Doll Black",
    "link": "https://glazy.org/recipes/31077",
    "credit": "Alfred Grinding Room",
    "cone": "10"
  },
  {
    "_id": 9,
    "image": "./images/vc-lavender-mamo.jpg",
    "recipe": [
      {
        "material": "EP Kaolin",
        "amount": "26"
      },
      {
        "material": "Lithium Carbonate",
        "amount": "22"
      },
      {
        "material": "Chrome Oxide",
        "amount": "2"
      }
    ],
    "name": "V.C. Lavender Mamo",
    "link": "https://glazy.org/recipes/30892",
    "credit": "Alfred Grinding Room",
    "cone": "9"
  },
  {
    "_id": 10,
    "image": "./images/risd-lithium-blue.jpg",
    "recipe": [
      {
        "material": "Silica",
        "amount": "52"
      },
      {
        "material": "Lithium Carbonate",
        "amount": "26"
      },
      {
        "material": "EP Kaolin",
        "amount": "11"
      },
      {
        "material": "Copper Carbonate",
        "amount": "3"
      },
      {
        "material": "Whiting",
        "amount": "3"
      },
      {
        "material": "Bentonite",
        "amount": "1"
      },
      {
        "material": "Bone Ash",
        "amount": "1"
      }
    ],
    "name": "RISD Lithium Blue",
    "link": "https://glazy.org/recipes/147393",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 11,
    "image": "./images/kulisek-satin-matt-g-1.jpg",
    "recipe": [
      {
        "material": "Minspar 200",
        "amount": "58"
      },
      {
        "material": "Whiting",
        "amount": "24"
      },
      {
        "material": "EP Kaolin",
        "amount": "16"
      },
      {
        "material": "Tin Oxide",
        "amount": "2"
      }
    ],
    "name": "Kulisek Satin Matt G-1",
    "link": "https://glazy.org/recipes/30889",
    "credit": "Alfred Grinding Room",
    "cone": "9"
  },
  {
    "_id": 12,
    "image": "./images/aventurine.jpg",
    "recipe": [
      {
        "material": "Silica",
        "amount": "40"
      },
      {
        "material": "Borax",
        "amount": "39"
      },
      {
        "material": "Red Iron Oxide",
        "amount": "15"
      },
      {
        "material": "Boric Acid",
        "amount": "2"
      },
      {
        "material": "Barium Carbonate",
        "amount": "2"
      },
      {
        "material": "EP Kaolin",
        "amount": "1"
      }
    ],
    "name": "Aventurine",
    "link": "https://glazy.org/recipes/147983",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 13,
    "image": "./images/katrinas-excellent-black.jpg",
    "recipe": [
      {
        "material": "Ferro Frit 3195",
        "amount": "42"
      },
      {
        "material": "EP Kaolin",
        "amount": "23"
      },
      {
        "material": "Wollastonite",
        "amount": "13"
      },
      {
        "material": "Silica",
        "amount": "10"
      },
      {
        "material": "Mason 6600 black stain",
        "amount": "5"
      },
      {
        "material": "Bentonite",
        "amount": "2"
      }
    ],
    "name": "Katrina's Excellent Black",
    "link": "https://glazy.org/recipes/148211",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 14,
    "image": "./images/stokes-c.jpg",
    "recipe": [
      {
        "material": "Neph Sye A270",
        "amount": "58"
      },
      {
        "material": "Barium Carbonate",
        "amount": "21"
      },
      {
        "material": "Kentucky OM #4 Ball Clay",
        "amount": "7"
      },
      {
        "material": "Silica",
        "amount": "5"
      },
      {
        "material": "Lithium Carbonate",
        "amount": "4"
      },
      {
        "material": "Bentonite",
        "amount": "2"
      }
    ],
    "name": "Stokes C",
    "link": "https://glazy.org/recipes/29842",
    "credit": "Alfred Grinding Room",
    "cone": "6"
  },
  {
    "_id": 15,
    "image": "./images/water-blue.jpg",
    "recipe": [
      {
        "material": "Ferro Frit 3110",
        "amount": "77"
      },
      {
        "material": "Silica",
        "amount": "10"
      },
      {
        "material": "EP Kaolin",
        "amount": "7"
      },
      {
        "material": "Copper Carbonate",
        "amount": "6"
      },
      {
        "material": "Gerstley Borate",
        "amount": "5"
      }
    ],
    "name": "Water Blue",
    "link": "https://glazy.org/recipes/147403",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 16,
    "image": "./images/lisa-orrs-beautiful-deep-blue.jpg",
    "recipe": [
      {
        "material": "Ferro Frit 3110",
        "amount": "67"
      },
      {
        "material": "Soda Ash",
        "amount": "16"
      },
      {
        "material": "Gerstley Borate",
        "amount": "10"
      },
      {
        "material": "Silica",
        "amount": "8"
      },
      {
        "material": "Copper Carbonate",
        "amount": "6"
      },
      {
        "material": "EP Kaolin",
        "amount": "5"
      },
      {
        "material": "Bentonite",
        "amount": "2"
      },
      {
        "material": "Cobalt Carbonate",
        "amount": "⅓"
      }
    ],
    "name": "Lisa Orr's Beautiful Deep Blue",
    "link": "https://glazy.org/recipes/148224",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 17,
    "image": "./images/new-gill-blue.jpg",
    "recipe": [
      {
        "material": "Ferro Frit 3124",
        "amount": "40"
      },
      {
        "material": "Gerstley Borate",
        "amount": "28"
      },
      {
        "material": "Silica",
        "amount": "19"
      },
      {
        "material": "Minspar 200",
        "amount": "5"
      },
      {
        "material": "EP Kaolin",
        "amount": "5"
      },
      {
        "material": "Copper Carbonate",
        "amount": "3"
      }
    ],
    "name": "New Gill Blue",
    "link": "https://glazy.org/recipes/147404",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 18,
    "image": "./images/burkett-sdsu-white-crawl-glaze.jpg",
    "recipe": [
      {
        "material": "Gerstley Borate",
        "amount": "46"
      },
      {
        "material": "Magnesium Carbonate",
        "amount": "31"
      },
      {
        "material": "EP Kaolin",
        "amount": "18"
      },
      {
        "material": "Zircopax",
        "amount": "5"
      },
      {
        "material": "Borax",
        "amount": "3"
      }
    ],
    "name": "Burkett SDSU White Crawl Glaze",
    "link": "https://glazy.org/recipes/147985",
    "credit": "Alfred Grinding Room",
    "cone": "04"
  },
  {
    "_id": 19,
    "image": "./images/nicks-base-yellow-orange.jpg",
    "recipe": [
      {
        "material": "Ferro Frit 3124",
        "amount": "40"
      },
      {
        "material": "Gerstley Borate",
        "amount": "28"
      },
      {
        "material": "Silica",
        "amount": "19"
      },
      {
        "material": "Minspar 200",
        "amount": "5"
      },
      {
        "material": "EP Kaolin",
        "amount": "5"
      },
      {
        "material": "Copper Carbonate",
        "amount": "3"
      }
    ],
    "name": "Nick's (Base) Yellow Orange",
    "link": "https://glazy.org/recipes/30881",
    "credit": "Alfred Grinding Room",
    "cone": "9"
  }
]

module.exports = {recipes};
