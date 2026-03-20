import { useState, useRef, useEffect } from "react";

var NUT={
"pz1":{ing:["flour","olive oil","garlic","salt","herbs","yeast"],cal:"280-350",pro:"7g",carb:"42g",fat:"10g",hs:6,all:["gluten"],pair:"Sparkling water or light white wine",tip:"Lightest pizza option — great if you're watching calories",joke:"Why did the focaccia break up with the baguette? It needed more space."},
"pz2":{ing:["flour","olive oil","garlic","tomato","mozzarella","basil","pesto","pine nuts"],cal:"380-450",pro:"14g",carb:"44g",fat:"18g",hs:6,all:["gluten","dairy","nuts"],pair:"Pinot Grigio",tip:"The pesto adds healthy fats from pine nuts",joke:"This pizza is so caprese-ious, it should be illegal."},
"pz3":{ing:["flour","tomato sauce","mozzarella","basil","oregano","olive oil"],cal:"400-500",pro:"16g",carb:"48g",fat:"16g",hs:5,all:["gluten","dairy"],pair:"Chianti or any light red",tip:"The OG pizza — sometimes simple is best",joke:"What's a pizza's favorite movie? Slice of Life."},
"pz4":{ing:["flour","tomato sauce","mozzarella","ham","mushrooms"],cal:"480-560",pro:"22g",carb:"46g",fat:"20g",hs:5,all:["gluten","dairy"],pair:"Medium-bodied red wine",tip:"Mushrooms are packed with B vitamins",joke:"This pizza is the Regina of all pizzas. Bow down."},
"pz5":{ing:["flour","tomato sauce","mozzarella","ham","pineapple"],cal:"460-540",pro:"20g",carb:"52g",fat:"18g",hs:4,all:["gluten","dairy"],pair:"A tropical cocktail, obviously",tip:"Pineapple has bromelain which aids digestion — you'll need it for the debate this starts",joke:"I don't judge people. Unless they put pineapple on pizza. Then I judge a lot."},
"pz6":{ing:["flour","tomato sauce","mozzarella","salami","mushrooms","olives","asparagus"],cal:"520-620",pro:"24g",carb:"46g",fat:"26g",hs:5,all:["gluten","dairy"],pair:"Sangiovese",tip:"Olives bring healthy monounsaturated fats",joke:"This pizza has more toppings than my CV has skills."},
"pz7":{ing:["flour","tomato sauce","mozzarella","ham","mushrooms","olives","artichokes"],cal:"500-600",pro:"22g",carb:"48g",fat:"24g",hs:5,all:["gluten","dairy"],pair:"Vermentino white wine",tip:"Artichokes are great for liver health — perfectly timed for Friday",joke:"Four seasons on one pizza? That's climate change I can get behind."},
"pz8":{ing:["flour","tomato sauce","mozzarella","anchovies","olives","garlic"],cal:"440-520",pro:"22g",carb:"44g",fat:"20g",hs:6,all:["gluten","dairy","fish"],pair:"Dry white wine like Verdicchio",tip:"Anchovies are loaded with omega-3 fatty acids",joke:"This pizza has a-salt-ed my taste buds."},
"pz9":{ing:["flour","tomato sauce","mozzarella","black mushrooms","garlic"],cal:"400-480",pro:"16g",carb:"46g",fat:"16g",hs:6,all:["gluten","dairy"],pair:"Pinot Noir",tip:"Mushrooms are one of the few food sources of vitamin D",joke:"There's not mushroom for improvement on this pizza."},
"pz10":{ing:["flour","tomato sauce","mozzarella","asparagus","olives","mushrooms"],cal:"420-500",pro:"18g",carb:"46g",fat:"18g",hs:7,all:["gluten","dairy"],pair:"Sauvignon Blanc",tip:"Asparagus is rich in folate and vitamin K",joke:"This pizza really raises the bar-agus."},
"pz11":{ing:["flour","tomato sauce","mozzarella","mushrooms","olives","green peppers","asparagus"],cal:"440-520",pro:"18g",carb:"48g",fat:"18g",hs:7,all:["gluten","dairy"],pair:"House white wine",tip:"The veggie loaded option — packed with fiber",joke:"The restaurant named a pizza after itself. That takes some crust."},
"pz12":{ing:["flour","tomato sauce","gorgonzola","provolone","parmigiano"],cal:"560-650",pro:"26g",carb:"44g",fat:"32g",hs:4,all:["gluten","dairy"],pair:"Bold red like Barolo",tip:"Triple cheese = triple calcium. Also triple regret.",joke:"This pizza is so cheesy, even this joke can't compete."},
"pz13":{ing:["flour","tomato sauce","mozzarella","smoked salmon","caviar","cream cheese"],cal:"520-620",pro:"24g",carb:"44g",fat:"28g",hs:5,all:["gluten","dairy","fish"],pair:"Champagne or Prosecco",tip:"Salmon provides excellent omega-3s for brain health",joke:"Caviar on pizza? That's how you know it's payday."},
"pz14":{ing:["flour","tomato sauce","mozzarella","mushrooms","olives","green peppers","chilli","garlic"],cal:"420-500",pro:"17g",carb:"48g",fat:"18g",hs:7,all:["gluten","dairy"],pair:"Cold beer",tip:"Chilli boosts metabolism — science says this pizza helps you lose weight*",joke:"This pizza arrested my hunger. Hence the name."},
"pz15":{ing:["flour","tomato sauce","mozzarella","bacon","avocado"],cal:"520-600",pro:"22g",carb:"44g",fat:"28g",hs:5,all:["gluten","dairy"],pair:"Craft IPA",tip:"Avocado adds potassium and healthy fats",joke:"Bacon and avo? This is basically a Cape Town brunch on a pizza base."},
"pz16":{ing:["flour","tomato sauce","mozzarella","brinjals","zucchini","red peppers","sundried tomatoes"],cal:"400-480",pro:"16g",carb:"50g",fat:"16g",hs:8,all:["gluten","dairy"],pair:"Rose wine",tip:"One of the healthiest pizzas — loaded with antioxidants from the veggies",joke:"This pizza goes to the gym. It's absolutely shredded with vegetables."},
"pz17":{ing:["flour","tomato sauce","mozzarella","chicken livers","onion","chili"],cal:"480-560",pro:"26g",carb:"44g",fat:"22g",hs:5,all:["gluten","dairy"],pair:"Full-bodied red wine",tip:"Chicken livers are one of nature's best sources of iron and B12",joke:"Chicken livers on pizza? That takes guts. Literally."},
"pz18":{ing:["flour","tomato sauce","mozzarella","calamari","mussels","shrimps"],cal:"480-580",pro:"28g",carb:"44g",fat:"20g",hs:6,all:["gluten","dairy","shellfish"],pair:"Crisp white wine like Chablis",tip:"Seafood is lean protein — this is the gym bro's pizza",joke:"The ocean called. It wants its pizza back."},
"pz19":{ing:["flour","tomato sauce","mozzarella","beef mince","green peppers","onion","chilli","garlic"],cal:"540-640",pro:"28g",carb:"48g",fat:"26g",hs:5,all:["gluten","dairy"],pair:"Mexican beer with lime",tip:"High protein from the mince — great post-workout meal if you squint hard enough",joke:"This pizza is so spicy, it needs its own fire extinguisher."},
"pz20":{ing:["flour","tomato sauce","mozzarella","spinach","olives","feta"],cal:"420-500",pro:"18g",carb:"44g",fat:"20g",hs:7,all:["gluten","dairy"],pair:"Greek white wine or Retsina",tip:"Spinach and feta — a Mediterranean power combo for iron and calcium",joke:"It's all Greek to me. Actually, it's all Greek to the pizza too."},
"pa1":{ing:["pasta","butter","sage","parmigiano"],cal:"420-500",pro:"14g",carb:"52g",fat:"20g",hs:5,all:["gluten","dairy"],pair:"Light white wine",tip:"Simple but satisfying — butter and sage is a classic for a reason",joke:"This pasta is sage advice for a good lunch."},
"pa2":{ing:["pasta","olive oil","garlic"],cal:"380-440",pro:"12g",carb:"54g",fat:"14g",hs:7,all:["gluten"],pair:"Pinot Grigio",tip:"One of the lightest pasta options — garlic is also great for immunity",joke:"This pasta keeps vampires AND hunger away."},
"pa3":{ing:["pasta","basil","pine nuts","olive oil","garlic","parmigiano"],cal:"520-600",pro:"18g",carb:"52g",fat:"28g",hs:6,all:["gluten","dairy","nuts"],pair:"Vermentino",tip:"Pine nuts have zinc and magnesium — brain food for the afternoon",joke:"I'm totally pesto-ring you to order this."},
"pa4":{ing:["pasta","olive oil","calamari","chilli","white wine","garlic"],cal:"480-560",pro:"26g",carb:"52g",fat:"18g",hs:6,all:["gluten","shellfish"],pair:"Dry white wine",tip:"Calamari is high protein, low fat — the gym will approve",joke:"This pasta is so good, it's ink-redible."},
"pa5":{ing:["pasta","olive oil","tomato","black mushrooms","basil pesto","garlic"],cal:"460-540",pro:"16g",carb:"56g",fat:"20g",hs:7,all:["gluten","nuts"],pair:"Light red wine",tip:"Tomatoes are rich in lycopene — a powerful antioxidant",joke:"Feeling fresco? This pasta thinks it's cooler than you."},
"pa6":{ing:["pasta","olive oil","peppers","bacon","chicken","mushrooms","feta","garlic"],cal:"580-680",pro:"32g",carb:"52g",fat:"28g",hs:5,all:["gluten","dairy"],pair:"Medium Chardonnay",tip:"High protein from chicken and bacon — this is a meal and a half",joke:"Alla Gracie? More like Alla-mazing."},
"pa7":{ing:["pasta","tomato sauce","basil","herbs","olive oil"],cal:"360-420",pro:"12g",carb:"56g",fat:"10g",hs:8,all:["gluten"],pair:"Any light wine",tip:"Lowest calorie pasta on the menu — your jeans will thank you",joke:"Napoleon-tana? More like Napoleon Dyna-yum."},
"pa8":{ing:["pasta","tomato sauce","chilli","garlic"],cal:"380-440",pro:"12g",carb:"56g",fat:"10g",hs:7,all:["gluten"],pair:"Cold beer",tip:"Chilli peppers contain capsaicin which may boost fat burning",joke:"This pasta is angry. Arrab-iata at your empty plate."},
"pa9":{ing:["pasta","tomato sauce","beef mince","carrots","onion","celery","olive oil"],cal:"560-660",pro:"28g",carb:"56g",fat:"22g",hs:5,all:["gluten"],pair:"Chianti Classico",tip:"Slow-cooked mince means the flavors are deeply developed",joke:"You can't spell Bolognese without GOALS. Well, almost."},
"pa10":{ing:["pasta","tomato sauce","beef meatballs","herbs","parmigiano"],cal:"600-700",pro:"32g",carb:"54g",fat:"26g",hs:5,all:["gluten","dairy"],pair:"Full red wine",tip:"Meatballs = serious protein. Your muscles will thank you",joke:"That's a spicy meatball! Sorry, I had to."},
"pa11":{ing:["pasta","tomato sauce","mushrooms","green peppers","brinjals","zucchini"],cal:"420-500",pro:"14g",carb:"58g",fat:"12g",hs:8,all:["gluten"],pair:"Sauvignon Blanc",tip:"Veggie-packed and colorful — eating the rainbow like a champ",joke:"Spring has sprung and so has this pasta. Prima-vera nice."},
"pa12":{ing:["pasta","tomato sauce","anchovies","olives","capers"],cal:"440-520",pro:"20g",carb:"54g",fat:"16g",hs:6,all:["gluten","fish"],pair:"Dry white wine",tip:"Capers are surprisingly high in antioxidants",joke:"This pasta has a bad reputation but great taste. Just like me."},
"pa13":{ing:["pasta","tomato sauce","bacon","onion","chilli"],cal:"520-600",pro:"22g",carb:"54g",fat:"22g",hs:5,all:["gluten"],pair:"Medium Italian red",tip:"Bacon adds smoky flavor and protein",joke:"Bacon makes everything better. This is not an opinion, it's science."},
"pa14":{ing:["pasta","tomato sauce","black mushrooms","olives"],cal:"400-480",pro:"14g",carb:"56g",fat:"14g",hs:7,all:["gluten"],pair:"Pinot Noir",tip:"A surprisingly light and earthy option",joke:"If you're lost in the woods, just follow the mushroom pasta. It's a fun-gi."},
"pa15":{ing:["pasta","tomato sauce","cream","parmigiano"],cal:"520-600",pro:"18g",carb:"54g",fat:"24g",hs:5,all:["gluten","dairy"],pair:"Chardonnay",tip:"Cream adds richness but also calories — worth every one",joke:"This pasta is the dawn of a beautiful lunch. Get it? Aurora? Dawn?"},
"pa16":{ing:["pasta","cream","ham","mushrooms"],cal:"560-650",pro:"24g",carb:"52g",fat:"28g",hs:4,all:["gluten","dairy"],pair:"Soave white wine",tip:"Creamy and indulgent — it's Friday, you deserve it",joke:"Al Fredo? I barely know Al, but his pasta is incredible."},
"pa17":{ing:["pasta","cream","chicken","bacon","mushrooms","onions","sundried tomatoes"],cal:"620-720",pro:"32g",carb:"52g",fat:"32g",hs:4,all:["gluten","dairy"],pair:"Full Chardonnay",tip:"The most loaded pasta — bring a nap for after",joke:"This pasta has more stuff in it than my garage."},
"pa18":{ing:["pasta","cream","bacon","egg","black pepper","parmigiano"],cal:"580-680",pro:"26g",carb:"52g",fat:"30g",hs:4,all:["gluten","dairy","egg"],pair:"Frascati white wine",tip:"Traditional carbonara uses egg yolk for creaminess — pure comfort",joke:"What do you call a fake noodle? An impasta. But this carbonara is the real deal."},
"pa19":{ing:["pasta","cream","smoked salmon","capers","onions"],cal:"540-640",pro:"26g",carb:"52g",fat:"26g",hs:5,all:["gluten","dairy","fish"],pair:"Champagne or dry Riesling",tip:"Smoked salmon is rich in omega-3 for heart and brain health",joke:"This pasta is swimming in flavor. Salmon pun intended."},
"pa20":{ing:["pasta","cream","mozzarella","gorgonzola","provolone","parmigiano"],cal:"640-740",pro:"28g",carb:"50g",fat:"36g",hs:3,all:["gluten","dairy"],pair:"Bold red wine",tip:"Four cheeses = maximum calcium intake. Also maximum happiness.",joke:"This pasta has four cheeses. That's one for each food group, right?"},
"pa21":{ing:["pasta","chicken","tomato sauce","herbs"],cal:"480-560",pro:"28g",carb:"54g",fat:"16g",hs:6,all:["gluten"],pair:"Light red or white wine",tip:"Lean protein from chicken — solid balanced meal",joke:"Why did the chicken cross the road? To get to this pasta."},
"pa22":{ing:["pasta","veal","tomato sauce","herbs"],cal:"520-600",pro:"30g",carb:"54g",fat:"20g",hs:5,all:["gluten"],pair:"Medium Italian red",tip:"Veal is tender and rich in B vitamins",joke:"This pasta is veal-y good. I'm not sorry."},
"pa23":{ing:["pasta","tomato sauce","tuna","onions"],cal:"460-540",pro:"28g",carb:"54g",fat:"14g",hs:6,all:["gluten","fish"],pair:"Verdicchio white wine",tip:"Tuna is packed with protein and omega-3s",joke:"Can you tuna piano? No, but you can tuna pasta."},
"pa24":{ing:["pasta","tomato sauce","calamari","mussels","prawns"],cal:"500-600",pro:"32g",carb:"52g",fat:"16g",hs:6,all:["gluten","shellfish"],pair:"Crisp white wine",tip:"Seafood trio = lean protein powerhouse",joke:"The sea was angry that day, my friends. But this marinara calmed it right down."},
"bp1":{ing:["pasta sheets","beef mince","tomato sauce","bechamel","mozzarella","parmigiano"],cal:"580-680",pro:"30g",carb:"48g",fat:"28g",hs:4,all:["gluten","dairy","egg"],pair:"Chianti",tip:"Layers of comfort — perfect Friday fuel",joke:"Lasagne is just Italian cake. Change my mind."},
"bp2":{ing:["pasta tubes","spinach","ricotta","tomato sauce","bechamel","mozzarella"],cal:"520-600",pro:"22g",carb:"48g",fat:"26g",hs:5,all:["gluten","dairy","egg"],pair:"Light white wine",tip:"Spinach and ricotta give you iron and calcium in one shot",joke:"These cannelloni are so stuffed, they need bigger pants."},
"bp3":{ing:["penne","tomato sauce","mozzarella","parmigiano","herbs"],cal:"540-640",pro:"24g",carb:"56g",fat:"24g",hs:5,all:["gluten","dairy"],pair:"Medium red wine",tip:"Baked until golden — the crispy cheese top is the best part",joke:"This pasta has been through the fire and it came out golden. Inspirational."},
"pn1":{ing:["ciabatta","beef meatballs","ragu","spinach","peppers","parmesan"],cal:"520-600",pro:"28g",carb:"42g",fat:"24g",hs:5,all:["gluten","dairy"],pair:"Cola or sparkling water",tip:"High protein from the meatballs — great for an active afternoon",joke:"This panini has balls. Meatballs, specifically."},
"pn2":{ing:["ciabatta","chicken","avocado","lettuce","onion","special dressing"],cal:"460-540",pro:"26g",carb:"38g",fat:"24g",hs:6,all:["gluten"],pair:"Iced tea",tip:"Avo adds healthy monounsaturated fats and potassium",joke:"This sandwich is avo-control good."},
"pn3":{ing:["ciabatta","brinjal parmigiana","rocket","parmesan","mozzarella","olive oil"],cal:"420-500",pro:"18g",carb:"40g",fat:"22g",hs:6,all:["gluten","dairy"],pair:"Light white wine",tip:"Brinjal is rich in fiber and antioxidants",joke:"Melenzane sounds fancy but it's just a brinjal in a tuxedo."},
"pn4":{ing:["ciabatta","chicken schnitzel","tomato sauce","mozzarella","parmesan"],cal:"540-620",pro:"30g",carb:"42g",fat:"26g",hs:5,all:["gluten","dairy"],pair:"Craft lager",tip:"Chicken parm in panini form — innovation at its finest",joke:"This panini went to Italy and came back cultured."},
"pn5":{ing:["ciabatta","grilled chicken","rocket","tomato","balsamic onion"],cal:"400-480",pro:"28g",carb:"38g",fat:"16g",hs:7,all:["gluten"],pair:"Sparkling water with lemon",tip:"One of the leanest options — grilled chicken is always a smart pick",joke:"This chicken is so grilled, it just answered 20 questions."},
"pn6":{ing:["ciabatta","grilled veal","rocket","tomato","balsamic onion"],cal:"440-520",pro:"30g",carb:"38g",fat:"18g",hs:6,all:["gluten"],pair:"Light red wine",tip:"Veal is tender and rich in zinc and B12",joke:"This veal panini is a rare find. Medium-rare, to be exact."},
"pn7":{ing:["ciabatta","prosciutto crudo","rocket","parmesan shavings","tomato","olive oil"],cal:"460-540",pro:"24g",carb:"38g",fat:"24g",hs:5,all:["gluten","dairy"],pair:"Prosecco",tip:"Prosciutto is air-dried so it retains more nutrients than cooked ham",joke:"Prosciutto: because 'fancy ham' didn't sound Italian enough."}
};

var MENU=[
{id:"pz1",name:"Focaccia",price:65,cat:"Pizza",desc:"Garlic, olive oil, salt and herbs",tags:["vegan"]},
{id:"pz2",name:"Focaccia Caprese",price:90,cat:"Pizza",desc:"Sliced tomato, mozzarella and basil pesto",tags:["vegetarian"]},
{id:"pz3",name:"Margherita",price:95,cat:"Pizza",desc:"Tomato base, mozzarella and herbs",tags:["vegetarian"]},
{id:"pz4",name:"Regina",price:130,cat:"Pizza",desc:"Ham and mushrooms",tags:[]},
{id:"pz5",name:"Hawaiian",price:130,cat:"Pizza",desc:"Ham and pineapple",tags:[]},
{id:"pz6",name:"Capricciosa",price:149,cat:"Pizza",desc:"Salami, mushrooms, olives and asparagus",tags:[]},
{id:"pz7",name:"Quattro Stagioni",price:149,cat:"Pizza",desc:"Ham, mushrooms, olives and artichokes",tags:[]},
{id:"pz8",name:"Siciliana",price:145,cat:"Pizza",desc:"Anchovies, olives and garlic",tags:["pescatarian"]},
{id:"pz9",name:"Funghineri",price:130,cat:"Pizza",desc:"Black mushrooms and garlic",tags:["vegetarian"]},
{id:"pz10",name:"Asparagi",price:140,cat:"Pizza",desc:"Asparagus, olives and mushrooms",tags:["vegetarian"]},
{id:"pz11",name:"Posticino",price:160,cat:"Pizza",desc:"Mushrooms, olives, green peppers, asparagus",tags:["vegetarian"]},
{id:"pz12",name:"Capo",price:155,cat:"Pizza",desc:"Gorgonzola, provolone and parmigiano",tags:["vegetarian"]},
{id:"pz13",name:"Panna",price:190,cat:"Pizza",desc:"Smoked salmon, caviar and cream cheese",tags:["pescatarian"]},
{id:"pz14",name:"Carabinieri",price:145,cat:"Pizza",desc:"Mushrooms, olives, green peppers, chilli and garlic",tags:["vegetarian","spicy"]},
{id:"pz15",name:"Porchetta",price:130,cat:"Pizza",desc:"Bacon and avo",tags:[]},
{id:"pz16",name:"Contadina",price:140,cat:"Pizza",desc:"Brinjals, zucchini, red peppers and sundried tomatoes",tags:["vegetarian"]},
{id:"pz17",name:"Strega",price:150,cat:"Pizza",desc:"Chicken livers, onion and chili",tags:["spicy"]},
{id:"pz18",name:"Marinara Pizza",price:190,cat:"Pizza",desc:"Calamari, mussels and shrimps",tags:["pescatarian"]},
{id:"pz19",name:"Mexicana",price:165,cat:"Pizza",desc:"Beef mince, green peppers, onion, chilli and garlic",tags:["spicy"]},
{id:"pz20",name:"Al Greco",price:130,cat:"Pizza",desc:"Spinach, olives and feta",tags:["vegetarian"]},
{id:"pa1",name:"Burro e Salvia",price:95,cat:"Pasta",desc:"Butter and sage",tags:["vegetarian"]},
{id:"pa2",name:"Aglio Olio",price:94,cat:"Pasta",desc:"Olive oil and garlic",tags:["vegan"]},
{id:"pa3",name:"Basil Pesto",price:140,cat:"Pasta",desc:"Basil, pine nuts, olive oil, garlic and parmigiano",tags:["vegetarian"]},
{id:"pa4",name:"Alla Ingrid",price:185,cat:"Pasta",desc:"Aglio olio, calamari, chilli and white wine",tags:["pescatarian","spicy"]},
{id:"pa5",name:"Fresco",price:155,cat:"Pasta",desc:"Aglio olio with tomato, mushrooms and pesto",tags:["vegetarian"]},
{id:"pa6",name:"Alla Gracie",price:160,cat:"Pasta",desc:"Peppers, bacon, chicken, mushrooms and feta",tags:[]},
{id:"pa7",name:"Napoletana",price:95,cat:"Pasta",desc:"Tomato and herbs",tags:["vegan"]},
{id:"pa8",name:"Arrabiata",price:105,cat:"Pasta",desc:"Napoletana with chilli",tags:["vegan","spicy"]},
{id:"pa9",name:"Bolognese",price:156,cat:"Pasta",desc:"Slow-cooked beef mince, carrots and onion",tags:[]},
{id:"pa10",name:"Polpette",price:165,cat:"Pasta",desc:"Homemade beef meatballs with napoletana",tags:[]},
{id:"pa11",name:"Primavera",price:155,cat:"Pasta",desc:"Mushrooms, green peppers, brinjals and zucchini",tags:["vegetarian"]},
{id:"pa12",name:"Puttanesca",price:155,cat:"Pasta",desc:"Anchovies, olives and capers",tags:["pescatarian"]},
{id:"pa13",name:"Ammatriciana",price:155,cat:"Pasta",desc:"Bacon, onion and chilli",tags:["spicy"]},
{id:"pa14",name:"Forestiera",price:155,cat:"Pasta",desc:"Black mushroom and olives",tags:["vegan"]},
{id:"pa15",name:"Aurora",price:125,cat:"Pasta",desc:"Napoletana with cream and parmigiano",tags:["vegetarian"]},
{id:"pa16",name:"Al Fredo",price:155,cat:"Pasta",desc:"Cream with ham and mushrooms",tags:[]},
{id:"pa17",name:"Alla Nor",price:165,cat:"Pasta",desc:"Chicken, bacon, mushrooms, onions and sundried tomatoes",tags:[]},
{id:"pa18",name:"Carbonara",price:145,cat:"Pasta",desc:"Cream, bacon, egg and black pepper",tags:[]},
{id:"pa19",name:"Salmone",price:175,cat:"Pasta",desc:"Smoked salmon, capers and onions",tags:["pescatarian"]},
{id:"pa20",name:"Quattro Formaggi",price:170,cat:"Pasta",desc:"Mozzarella, gorgonzola, provolone and parmigiano",tags:["vegetarian"]},
{id:"pa21",name:"Chicken Pasta",price:150,cat:"Pasta",desc:"Chicken pasta",tags:[]},
{id:"pa22",name:"Veal Pasta",price:180,cat:"Pasta",desc:"Veal pasta",tags:[]},
{id:"pa23",name:"Al Tonno",price:160,cat:"Pasta",desc:"Tuna and onions",tags:["pescatarian"]},
{id:"pa24",name:"Marinara Pasta",price:190,cat:"Pasta",desc:"Calamari, mussels and prawns",tags:["pescatarian"]},
{id:"bp1",name:"Lasagne",price:165,cat:"Baked",desc:"Traditional beef lasagne",tags:[]},
{id:"bp2",name:"Cannelloni",price:165,cat:"Baked",desc:"Spinach and ricotta",tags:["vegetarian"]},
{id:"bp3",name:"Pasta Al Forno",price:175,cat:"Baked",desc:"Oven baked pasta",tags:[]},
{id:"pn1",name:"The Polpette",price:112,cat:"Panini",desc:"Meatballs, ragu, spinach, peppers and parmesan",tags:[]},
{id:"pn2",name:"The Chicken & Avo",price:99,cat:"Panini",desc:"Chicken, avo, onion, special dressing",tags:[]},
{id:"pn3",name:"The Melenzane",price:90,cat:"Panini",desc:"Melenzane parmigiana, rocket, parmesan, mozzarella",tags:["vegetarian"]},
{id:"pn4",name:"The Chicken Parm",price:112,cat:"Panini",desc:"Chicken parmigiana, mozzarella and parmesan",tags:[]},
{id:"pn5",name:"The Grigliato (Chicken)",price:96,cat:"Panini",desc:"Grilled chicken, rocket, tomato, balsamic onion",tags:[]},
{id:"pn6",name:"The Grigliato (Veal)",price:110,cat:"Panini",desc:"Grilled veal, rocket, tomato, balsamic onion",tags:[]},
{id:"pn7",name:"The Prosciutto",price:120,cat:"Panini",desc:"Prosciutto crudo, rocket, parmesan and tomato",tags:[]}
];

var PT=["Spaghetti","Linguine","Penne"];
var PU=[{n:"Gnocchi",p:28},{n:"Ravioli - Spinach Ricotta",p:55},{n:"Ravioli - Butternut Ricotta",p:55},{n:"Ravioli - Mushroom Artichoke",p:55},{n:"Ravioli - Beef",p:60},{n:"Ravioli - Smoked Salmon",p:60}];
var CATS=["All","Pizza","Pasta","Baked","Panini"];
var WAN="27816345974";
var ADM="Andre";
var IU=[{id:"u1",name:"Andre"},{id:"u2",name:"Nic"},{id:"u3",name:"Luk"},{id:"u4",name:"Francois"},{id:"u5",name:"Lloyd"},{id:"u6",name:"Anastasia"},{id:"u7",name:"Jenna"},{id:"u8",name:"Andrea"},{id:"u9",name:"Ollie"},{id:"u10",name:"Chris"},{id:"u11",name:"Mike"}];
function mkid(){return"u"+Math.random().toString(36).slice(2,8)}
function pr(o){var p=o.item.price;if(o.upg){var f=PU.find(function(x){return x.n===o.upg});if(f)p+=f.p}return p}

var CSS="*{box-sizing:border-box;margin:0;padding:0}\nbody{background:#f5f3ef}\n::-webkit-scrollbar{width:5px}\n::-webkit-scrollbar-thumb{background:#d0c8b8;border-radius:3px}\ninput::placeholder,textarea::placeholder{color:#aaa}\n@media(min-width:900px){.lp{display:flex!important;flex-direction:column}.rp{display:flex!important;flex-direction:column}.mob{display:none!important}}\n@media(max-width:899px){.lp{display:none!important}.rp{display:none!important}}";

function Lekker(props){
  var s=useState(0),p=s[0],setP=s[1];
  useEffect(function(){var a=setTimeout(function(){setP(1)},300);var b=setTimeout(function(){setP(2)},1000);var c=setTimeout(function(){props.onDone()},2100);return function(){clearTimeout(a);clearTimeout(b);clearTimeout(c)}},[]);
  var em=props.item.cat==="Pizza"?"\uD83C\uDF55":props.item.cat==="Panini"?"\uD83E\uDD6A":"\uD83C\uDF5D";
  return <div style={{position:"fixed",inset:0,zIndex:999,background:"rgba(255,255,255,0.95)",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{textAlign:"center"}}>
    <div style={{fontSize:90,marginBottom:10,transition:"all 0.5s",transform:p>=1?"scale(1.4)":"scale(1)",opacity:p>=2?0.3:1}}>{em}</div>
    <div style={{fontSize:p>=1?56:0,fontWeight:900,color:"#d4a84b",transition:"all 0.5s cubic-bezier(0.34,1.56,0.64,1)",fontStyle:"italic",letterSpacing:3,opacity:p>=1?1:0}}>Lekker!</div>
    <div style={{fontSize:44,marginTop:8,transition:"all 0.4s",opacity:p>=1?1:0,transform:p>=1?"scale(1)":"scale(0)"}}>&#129316;</div>
    <div style={{marginTop:16,fontSize:16,color:"#888",transition:"all 0.4s",opacity:p>=2?1:0}}>{props.item.name} added!</div>
  </div></div>
}

function DiceRoll(props){
  var s1=useState(true),rolling=s1[0],setRolling=s1[1];
  var s2=useState([]),picked=s2[0],setPicked=s2[1];
  var s3=useState(""),cur=s3[0],setCur=s3[1];
  useEffect(function(){
    if(!rolling)return;
    var names=props.users.map(function(u){return u.name});
    var interval=setInterval(function(){setCur(names[Math.floor(Math.random()*names.length)])},80);
    var t=setTimeout(function(){
      clearInterval(interval);
      var shuffled=names.slice().sort(function(){return Math.random()-0.5});
      setPicked([shuffled[0],shuffled[1]]);setCur("");setRolling(false)
    },2500);
    return function(){clearInterval(interval);clearTimeout(t)}
  },[rolling]);

  return <div style={{position:"fixed",inset:0,zIndex:200,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>
    <div style={{background:"#fff",borderRadius:24,padding:32,maxWidth:400,width:"92%",textAlign:"center",border:"1px solid #e0d6c8",boxShadow:"0 20px 60px rgba(0,0,0,0.15)"}}>
      <div style={{fontSize:48,marginBottom:8}}>{rolling?"\uD83C\uDFB2":"\uD83C\uDF89"}</div>
      <div style={{fontSize:20,fontWeight:800,color:"#2d2a26",marginBottom:4}}>{rolling?"Rolling the dice...":"Runners Selected!"}</div>
      <div style={{fontSize:13,color:"#999",marginBottom:20}}>{rolling?"Who's running across the road this Friday?":"These legends are fetching lunch today"}</div>
      {rolling&&<div style={{fontSize:28,fontWeight:800,color:"#d4a84b",padding:"16px 0",background:"#fdf6ee",borderRadius:12,marginBottom:16,border:"1px solid #e8d5b8"}}>{cur||"..."}</div>}
      {!rolling&&picked.length>0&&<div>
        <div style={{display:"flex",gap:12,justifyContent:"center",marginBottom:20}}>
          {picked.map(function(n,i){return <div key={i} style={{background:"#fdf6ee",border:"2px solid #d4a84b",borderRadius:16,padding:"16px 24px",minWidth:120}}>
            <div style={{fontSize:32,marginBottom:4}}>{"\uD83C\uDFC3"}</div>
            <div style={{fontSize:18,fontWeight:800,color:"#d4a84b"}}>{n}</div>
            <div style={{fontSize:11,color:"#999",marginTop:2}}>Runner {i+1}</div>
          </div>})}
        </div>
        <div style={{fontSize:13,color:"#888",fontStyle:"italic",marginBottom:16}}>Shoes on! The dice has spoken. &#127922;</div>
        <button onClick={function(){props.onConfirm(picked)}} style={{width:"100%",padding:12,borderRadius:12,border:"none",background:"#d4a84b",color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer",marginBottom:8}}>&#10003; Confirm Runners</button>
        <button onClick={function(){setRolling(true);setPicked([])}} style={{width:"100%",padding:10,borderRadius:12,border:"1px solid #e0d6c8",background:"#fff",color:"#c4873b",fontSize:13,fontWeight:600,cursor:"pointer"}}>Re-roll</button>
      </div>}
    </div>
  </div>
}

function SpecialPopup(props){
  var s=useState(""),txt=s[0],setTxt=s[1];
  return <div style={{position:"fixed",inset:0,zIndex:150,background:"rgba(0,0,0,0.4)",display:"flex",alignItems:"center",justifyContent:"center",backdropFilter:"blur(4px)"}}>
    <div style={{background:"#fff",borderRadius:20,padding:28,maxWidth:400,width:"92%",textAlign:"center",border:"1px solid #e0d6c8",boxShadow:"0 20px 60px rgba(0,0,0,0.12)"}}>
      <div style={{fontSize:40,marginBottom:8}}>&#129300;</div>
      <div style={{fontSize:18,fontWeight:800,color:"#2d2a26",marginBottom:4}}>Any special requests?</div>
      <div style={{fontSize:13,color:"#888",marginBottom:16}}>Are you full of nonsense or do you actually have dietary needs? Gluten-free base, extra cheese, no onions...</div>
      <textarea value={txt} onChange={function(e){setTxt(e.target.value)}} placeholder="Type your special request here... or leave blank if you're normal" style={{width:"100%",padding:"12px 14px",borderRadius:12,border:"1px solid #e0d6c8",background:"#faf8f5",color:"#222",fontSize:13,outline:"none",resize:"none",height:70,fontFamily:"inherit",marginBottom:16}}/>
      <div style={{display:"flex",gap:10}}>
        <button onClick={function(){props.onDone("")}} style={{flex:1,padding:12,borderRadius:12,border:"1px solid #e0d6c8",background:"#fff",color:"#888",fontSize:14,cursor:"pointer"}}>Nah, I'm easy</button>
        <button onClick={function(){props.onDone(txt)}} style={{flex:1,padding:12,borderRadius:12,border:"none",background:"#d4a84b",color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer"}}>{txt.trim()?"Save request":"Just order it!"}</button>
      </div>
    </div>
  </div>
}

function NutModal(props){
  var info=NUT[props.item.id];
  if(!info)return <div onClick={props.onClose} style={{position:"fixed",inset:0,zIndex:80,background:"rgba(0,0,0,0.35)",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{background:"#fff",borderRadius:20,padding:24,maxWidth:300,textAlign:"center"}}>No data available.<br/><button onClick={props.onClose} style={{marginTop:12,padding:"8px 20px",borderRadius:10,border:"none",background:"#d4a84b",color:"#fff",cursor:"pointer"}}>Close</button></div></div>;
  var sc=info.hs||5;var col=sc>=7?"#22c55e":sc>=4?"#f59e0b":"#e74c3c";
  return <div onClick={props.onClose} style={{position:"fixed",inset:0,zIndex:80,background:"rgba(0,0,0,0.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div onClick={function(e){e.stopPropagation()}} style={{background:"#fff",borderRadius:20,padding:24,maxWidth:400,width:"92%",maxHeight:"85vh",overflowY:"auto",border:"1px solid #e0d6c8",boxShadow:"0 20px 60px rgba(0,0,0,0.12)"}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:16}}>
        <div><div style={{fontSize:10,fontWeight:700,letterSpacing:1.5,color:"#c4873b"}}>NUTRITION INFO</div><div style={{fontSize:17,fontWeight:700,color:"#2d2a26",marginTop:4}}>{props.item.name}</div><div style={{fontSize:12,color:"#888"}}>{props.item.desc}</div></div>
        <button onClick={props.onClose} style={{background:"none",border:"none",fontSize:20,cursor:"pointer",color:"#ccc",flexShrink:0}}>x</button>
      </div>
      <div style={{marginBottom:16}}><div style={{fontSize:11,fontWeight:700,color:"#c4873b",marginBottom:8}}>INGREDIENTS</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:5}}>{info.ing.map(function(x,i){return <span key={i} style={{background:"#fdf6ee",border:"1px solid #e8d5b8",borderRadius:14,padding:"3px 10px",fontSize:11,color:"#8b6914"}}>{x}</span>})}</div>
      </div>
      <div style={{marginBottom:16}}><div style={{fontSize:11,fontWeight:700,color:"#c4873b",marginBottom:6}}>HEALTH SCORE</div>
        <div style={{display:"flex",alignItems:"center",gap:8}}><div style={{flex:1,height:8,borderRadius:4,background:"#e8e0d4",overflow:"hidden"}}><div style={{width:sc*10+"%",height:"100%",borderRadius:4,background:col}}/></div><span style={{fontSize:14,fontWeight:700,color:col}}>{sc}/10</span></div>
      </div>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginBottom:14}}>
        {[{l:"Calories",v:info.cal,c:"#e67e22"},{l:"Protein",v:info.pro,c:"#e74c3c"},{l:"Carbs",v:info.carb,c:"#f39c12"},{l:"Fat",v:info.fat,c:"#9b59b6"}].map(function(n){return <div key={n.l} style={{background:"#faf8f5",borderRadius:10,padding:10,textAlign:"center",border:"1px solid #e8e0d4"}}><div style={{fontSize:13,fontWeight:700,color:n.c}}>{n.v}</div><div style={{fontSize:9,color:"#999",marginTop:2}}>{n.l}</div></div>})}
      </div>
      {info.all.length>0&&<div style={{background:"#fef2f2",borderRadius:10,padding:10,marginBottom:10,border:"1px solid #fecaca"}}><span style={{fontSize:10,fontWeight:700,color:"#dc2626"}}>Allergens: </span><span style={{fontSize:10,color:"#b91c1c"}}>{info.all.join(", ")}</span></div>}
      <div style={{background:"#eff6ff",borderRadius:10,padding:10,marginBottom:10,border:"1px solid #bfdbfe"}}><span style={{fontSize:10,fontWeight:700,color:"#2563eb"}}>Pairs with: </span><span style={{fontSize:10,color:"#1d4ed8"}}>{info.pair}</span></div>
      <div style={{background:"#f0fdf4",borderRadius:10,padding:10,marginBottom:10,border:"1px solid #bbf7d0"}}><span style={{fontSize:10,fontWeight:700,color:"#16a34a"}}>Tip: </span><span style={{fontSize:10,color:"#166534"}}>{info.tip}</span></div>
      <div style={{background:"#fefce8",borderRadius:10,padding:10,border:"1px solid #fde68a"}}><span style={{fontSize:10}}>&#128514; </span><span style={{fontSize:10,color:"#92400e",fontStyle:"italic"}}>{info.joke}</span></div>
    </div>
  </div>
}

function PastaModal(props){
  var s1=useState("Spaghetti"),pt=s1[0],setPt=s1[1];
  var s2=useState(null),pu=s2[0],setPu=s2[1];
  var ex=pu?((PU.find(function(x){return x.n===pu})||{p:0}).p):0;
  return <div onClick={props.onClose} style={{position:"fixed",inset:0,zIndex:90,background:"rgba(0,0,0,0.35)",display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div onClick={function(e){e.stopPropagation()}} style={{background:"#fff",borderRadius:20,padding:24,maxWidth:400,width:"92%",maxHeight:"80vh",overflowY:"auto",border:"1px solid #e0d6c8",boxShadow:"0 20px 60px rgba(0,0,0,0.12)"}}>
      <div style={{color:"#2d2a26",fontSize:18,fontWeight:700,marginBottom:4}}>{props.item.name}</div>
      <div style={{color:"#888",fontSize:13,marginBottom:20}}>{props.item.desc}</div>
      <div style={{fontSize:11,fontWeight:700,color:"#c4873b",marginBottom:8,letterSpacing:1}}>PASTA TYPE</div>
      <div style={{display:"flex",gap:6,flexWrap:"wrap",marginBottom:18}}>
        {PT.map(function(t){return <button key={t} onClick={function(){setPt(t)}} style={{padding:"8px 16px",borderRadius:14,border:pt===t?"2px solid #d4a84b":"1px solid #e0d6c8",background:pt===t?"#fdf6ee":"#fff",color:pt===t?"#c4873b":"#888",fontWeight:pt===t?700:400,fontSize:13,cursor:"pointer"}}>{t}</button>})}
      </div>
      <div style={{fontSize:11,fontWeight:700,color:"#c4873b",marginBottom:8,letterSpacing:1}}>UPGRADE (OPTIONAL)</div>
      <div style={{display:"flex",flexDirection:"column",gap:5,marginBottom:22}}>
        <button onClick={function(){setPu(null)}} style={{display:"flex",justifyContent:"space-between",padding:"10px 14px",borderRadius:10,border:pu===null?"2px solid #d4a84b":"1px solid #e0d6c8",background:pu===null?"#fdf6ee":"#faf8f5",cursor:"pointer",width:"100%"}}><span style={{color:"#2d2a26",fontSize:13}}>No upgrade</span><span style={{color:"#888",fontSize:12}}>+R0</span></button>
        {PU.map(function(u){return <button key={u.n} onClick={function(){setPu(u.n)}} style={{display:"flex",justifyContent:"space-between",padding:"10px 14px",borderRadius:10,border:pu===u.n?"2px solid #d4a84b":"1px solid #e0d6c8",background:pu===u.n?"#fdf6ee":"#faf8f5",cursor:"pointer",width:"100%"}}><span style={{color:"#2d2a26",fontSize:13}}>{u.n}</span><span style={{color:"#888",fontSize:12}}>+R{u.p}</span></button>})}
      </div>
      <div style={{display:"flex",gap:10}}>
        <button onClick={props.onClose} style={{flex:1,padding:12,borderRadius:12,border:"1px solid #e0d6c8",background:"#fff",color:"#888",fontSize:14,cursor:"pointer"}}>Cancel</button>
        <button onClick={function(){props.onAdd(props.item,pt,pu)}} style={{flex:1,padding:12,borderRadius:12,border:"none",background:"#d4a84b",color:"#fff",fontSize:14,fontWeight:700,cursor:"pointer"}}>{"Add \u2014 R"+(props.item.price+ex)}</button>
      </div>
    </div>
  </div>
}

export default function App(){
  var r0=useState(IU),users=r0[0],setUsers=r0[1];
  var r1=useState({}),orders=r1[0],setOrders=r1[1];
  var r2=useState({}),srs=r2[0],setSrs=r2[1];
  var r3=useState(""),sel=r3[0],setSel=r3[1];
  var r4=useState(null),act=r4[0],setAct=r4[1];
  var r5=useState("login"),view=r5[0],setView=r5[1];
  var r6=useState("All"),cat=r6[0],setCat=r6[1];
  var r7=useState(""),sch=r7[0],setSch=r7[1];
  var r8=useState(null),pm=r8[0],setPm=r8[1];
  var r9=useState(null),nut=r9[0],setNut=r9[1];
  var r10=useState(null),lk=r10[0],setLk=r10[1];
  var r11=useState(false),showA=r11[0],setShowA=r11[1];
  var r12=useState(""),nn=r12[0],setNn=r12[1];
  var r13=useState(false),dice=r13[0],setDice=r13[1];
  var r14=useState([]),runners=r14[0],setRunners=r14[1];
  var r15=useState(null),pendingOrder=r15[0],setPendingOrder=r15[1];

  var isAdm=act&&(users.find(function(u){return u.id===act})||{}).name===ADM;
  var aObj=users.find(function(u){return u.id===act});
  var myO=orders[act]||[];var hasO=myO.length>0;
  var gt=users.reduce(function(s,u){return s+(orders[u.id]||[]).reduce(function(t,i){return t+pr(i)},0)},0);
  var fil=MENU.filter(function(m){if(cat!=="All"&&m.cat!==cat)return false;if(sch&&m.name.toLowerCase().indexOf(sch.toLowerCase())===-1&&m.desc.toLowerCase().indexOf(sch.toLowerCase())===-1)return false;return true});

  function doOrder(item,pt,upg){
    setPendingOrder({item:item,pt:pt||null,upg:upg||null});
  }
  function confirmWithSpecial(specialTxt){
    if(!pendingOrder)return;
    var no={};Object.keys(orders).forEach(function(k){no[k]=orders[k]});
    no[act]=[{item:pendingOrder.item,pt:pendingOrder.pt,upg:pendingOrder.upg}];
    setOrders(no);
    if(specialTxt&&specialTxt.trim()){var ns={};Object.keys(srs).forEach(function(k){ns[k]=srs[k]});ns[act]=specialTxt.trim();setSrs(ns)}
    setLk(pendingOrder.item);
    setPendingOrder(null);
  }
  function doAdd(item){if(item.cat==="Pasta")setPm(item);else doOrder(item,null,null)}
  function addU(){if(!nn.trim())return;setUsers(users.concat([{id:mkid(),name:nn.trim()}]));setNn("");setShowA(false)}
  function delU(id){setUsers(users.filter(function(u){return u.id!==id}));var no={};Object.keys(orders).forEach(function(k){if(k!==id)no[k]=orders[k]});setOrders(no)}
  function waUrl(){var l=["*RIIVO LUNCH ORDER*","Piccolo Posticino Rondebosch",""];users.forEach(function(u){var uo=orders[u.id]||[];if(!uo.length)return;var o=uo[0];var s=u.name+": "+o.item.name;if(o.pt)s+=" ("+o.pt+")";if(o.upg)s+=" + "+o.upg;s+=" - R"+pr(o);l.push(s);var sr=srs[u.id];if(sr&&sr.trim())l.push("  Note: "+sr.trim())});l.push("");l.push("*TOTAL: R"+gt.toFixed(2)+"*");return"https://wa.me/"+WAN+"?text="+encodeURIComponent(l.join("\n"))}
  var av=function(d){return{width:28,height:28,borderRadius:"50%",background:d?"#22c55e":"#e8e0d4",display:"flex",alignItems:"center",justifyContent:"center",fontSize:d?13:12,color:d?"#fff":"#999",fontWeight:600,flexShrink:0}};
  var bg={fontFamily:"-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif",color:"#2d2a26",background:"#f5f3ef",minHeight:"100vh"};

  if(view==="login") return <div style={bg}><style dangerouslySetInnerHTML={{__html:CSS}}/>
    <div style={{position:"fixed",top:40,left:10,fontSize:90,opacity:0.04,color:"#2d2a26",pointerEvents:"none",transform:"rotate(-15deg)"}}>&#127829;</div>
    <div style={{position:"fixed",top:200,right:10,fontSize:70,opacity:0.04,color:"#2d2a26",pointerEvents:"none",transform:"rotate(12deg)"}}>&#127837;</div>
    <div style={{position:"fixed",bottom:60,left:25,fontSize:80,opacity:0.04,color:"#2d2a26",pointerEvents:"none"}}>&#129472;</div>
    <div style={{maxWidth:460,margin:"0 auto",padding:24,minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",zIndex:1}}>
      <div style={{textAlign:"center",marginBottom:32}}>
        <div style={{fontSize:56,marginBottom:6}}>&#127829;</div>
        <h1 style={{fontSize:30,fontWeight:800,color:"#2d2a26",margin:"2px 0"}}>Riivo <span style={{color:"#d4a84b"}}>Lunch</span></h1>
        <p style={{color:"#999",fontSize:13,marginTop:4}}>Piccolo Posticino Rondebosch</p>
      </div>
      <div style={{background:"#fff",borderRadius:18,padding:24,border:"1px solid #e0d6c8",boxShadow:"0 2px 12px rgba(0,0,0,0.04)"}}>
        <div style={{fontSize:15,fontWeight:700,color:"#2d2a26",marginBottom:18}}>Who are you?</div>
        <select value={sel} onChange={function(e){setSel(e.target.value)}} style={{width:"100%",padding:"14px 16px",borderRadius:12,border:"1px solid #e0d6c8",background:"#fff",color:sel?"#222":"#aaa",fontSize:14,outline:"none",marginBottom:14,cursor:"pointer"}}>
          <option value="" disabled>Select your name...</option>
          {users.map(function(u){return <option key={u.id} value={u.id}>{u.name}</option>})}
        </select>
        <button onClick={function(){if(sel){setAct(sel);setView("menu")}}} disabled={!sel} style={{width:"100%",padding:14,borderRadius:12,border:"none",background:sel?"#d4a84b":"#e0d6c8",color:sel?"#fff":"#aaa",fontSize:15,fontWeight:700,cursor:sel?"pointer":"default"}}>Start Ordering</button>
        <div style={{borderTop:"1px solid #f0ebe4",paddingTop:14,marginTop:20}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:10}}>
            <span style={{fontSize:12,color:"#999"}}>Team ({users.length})</span>
            <button onClick={function(){setDice(true)}} style={{padding:"6px 14px",borderRadius:10,border:"1px solid #e0d6c8",background:"#fdf6ee",color:"#c4873b",fontSize:11,fontWeight:700,cursor:"pointer"}}>&#127922; Pickup Dice</button>
          </div>
          <div style={{maxHeight:280,overflowY:"auto"}}>{users.map(function(u){var uo=orders[u.id]||[];var d=uo.length>0;var isRunner=runners.indexOf(u.name)>=0;return <div key={u.id} style={{display:"flex",alignItems:"center",gap:10,padding:"8px 0",borderBottom:"1px solid #f5f0ea"}}><div style={av(d)}>{d?"\u2713":u.name[0]}</div><div style={{flex:1}}><div style={{fontSize:13,color:"#2d2a26",display:"flex",alignItems:"center",gap:6}}>{u.name}{isRunner&&<span style={{fontSize:9,background:"#fdf6ee",border:"1px solid #e8d5b8",borderRadius:10,padding:"1px 8px",color:"#c4873b",fontWeight:700}}>{"\uD83C\uDFC3"} Runner</span>}</div>{d&&<div style={{fontSize:11,color:"#999"}}>{uo[0].item.name+" \u2014 R"+pr(uo[0])}</div>}</div></div>})}</div>
        </div>
        {gt>0&&<button onClick={function(){setView("summary")}} style={{width:"100%",padding:12,borderRadius:12,border:"2px solid #d4a84b",background:"transparent",color:"#d4a84b",fontSize:13,fontWeight:700,cursor:"pointer",marginTop:14}}>{"View Summary \u2014 R"+gt.toFixed(2)}</button>}
      </div>
    </div>
    {dice&&<DiceRoll users={users} onConfirm={function(p){setRunners(p);setDice(false)}} />}
  </div>

  if(view==="summary") return <div style={bg}><style dangerouslySetInnerHTML={{__html:CSS}}/>
    <div style={{maxWidth:540,margin:"0 auto",padding:24,minHeight:"100vh",position:"relative",zIndex:1}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:24}}>
        <button onClick={function(){setView(act?"menu":"login")}} style={{background:"none",border:"none",color:"#c4873b",fontWeight:600,fontSize:13,cursor:"pointer"}}>{"\u2190 Back"}</button>
        <span style={{fontSize:18,fontWeight:700,color:"#2d2a26"}}>Order Summary</span>
        <button onClick={function(){setDice(true)}} style={{background:"#fdf6ee",border:"1px solid #e8d5b8",borderRadius:10,padding:"6px 12px",color:"#c4873b",fontSize:11,fontWeight:700,cursor:"pointer"}}>&#127922; Dice</button>
      </div>
      {users.map(function(u){var uo=orders[u.id]||[];if(!uo.length)return null;var o=uo[0];var sr=srs[u.id];return <div key={u.id} style={{background:"#fff",borderRadius:16,padding:20,marginBottom:12,border:"1px solid #e0d6c8",boxShadow:"0 2px 8px rgba(0,0,0,0.03)"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <div style={{display:"flex",alignItems:"center",gap:10}}><div style={av(true)}>{"\u2713"}</div><div><div style={{fontWeight:700,fontSize:14,color:"#2d2a26"}}>{u.name}</div><div style={{fontSize:12,color:"#999",marginTop:2}}>{o.item.name}{o.pt?" ("+o.pt+")":""}{o.upg?" + "+o.upg:""}</div></div></div>
          <span style={{fontWeight:700,color:"#c4873b",fontSize:15}}>R{pr(o)}</span>
        </div>
        {sr&&sr.trim()&&<div style={{marginTop:10,padding:"7px 12px",background:"#fdf6ee",borderRadius:8,fontSize:12,color:"#c4873b",border:"1px solid #e8d5b8"}}>{"\u270D "+sr}</div>}
      </div>})}
      {gt===0&&<div style={{textAlign:"center",padding:40,color:"#bbb"}}>No orders yet</div>}
      {gt>0&&<div>
        <div style={{background:"#fff",borderRadius:14,padding:18,marginBottom:14,border:"2px solid #d4a84b",display:"flex",justifyContent:"space-between",alignItems:"center"}}><span style={{fontWeight:700,fontSize:17,color:"#2d2a26"}}>Grand Total</span><span style={{fontWeight:800,fontSize:24,color:"#d4a84b"}}>R{gt.toFixed(2)}</span></div>
        {runners.length>0&&<div style={{background:"#fdf6ee",borderRadius:14,padding:16,marginBottom:14,border:"1px solid #e8d5b8",display:"flex",alignItems:"center",justifyContent:"center",gap:16}}>
          <span style={{fontSize:13,color:"#c4873b",fontWeight:700}}>{"\uD83C\uDFC3"} Runners:</span>
          {runners.map(function(n,i){return <span key={i} style={{fontSize:14,fontWeight:800,color:"#2d2a26"}}>{n}</span>})}
        </div>}
        <a href={waUrl()} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:16,borderRadius:14,background:"#22c55e",color:"#fff",fontSize:15,fontWeight:700,textDecoration:"none",textAlign:"center"}}>&#128241; Send via WhatsApp</a>
      </div>}
    </div>
    {dice&&<DiceRoll users={users} onConfirm={function(p){setRunners(p);setDice(false)}} />}
  </div>

  return <div style={bg}><style dangerouslySetInnerHTML={{__html:CSS}}/>
    {lk&&<Lekker item={lk} onDone={function(){setLk(null);setAct(null);setSel("");setView("login")}}/>}
    {pm&&<PastaModal item={pm} onAdd={function(it,pt,pu){setPm(null);doOrder(it,pt,pu)}} onClose={function(){setPm(null)}}/>}
    {nut&&<NutModal item={nut} onClose={function(){setNut(null)}}/>}
    {dice&&<DiceRoll users={users} onConfirm={function(p){setRunners(p);setDice(false)}} />}
    {pendingOrder&&<SpecialPopup onDone={function(t){confirmWithSpecial(t)}}/>}
    <div style={{position:"fixed",top:100,right:40,fontSize:100,opacity:0.03,color:"#2d2a26",pointerEvents:"none",transform:"rotate(15deg)"}}>&#127829;</div>
    <div style={{position:"fixed",top:400,left:20,fontSize:80,opacity:0.03,color:"#2d2a26",pointerEvents:"none"}}>&#127837;</div>
    <div style={{position:"fixed",bottom:100,right:60,fontSize:90,opacity:0.03,color:"#2d2a26",pointerEvents:"none"}}>&#129472;</div>
    <div style={{display:"flex",height:"100vh",maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
      <div className="lp" style={{width:200,borderRight:"1px solid #e8e0d4",padding:16,overflowY:"auto",flexShrink:0,display:"none",flexDirection:"column",background:"#faf8f5"}}>
        <div style={{fontSize:10,fontWeight:800,letterSpacing:2,color:"#c4873b",marginBottom:14}}>TEAM</div>
        {users.map(function(u){var uo=orders[u.id]||[];var ac=u.id===act;var isR=runners.indexOf(u.name)>=0;return <div key={u.id} style={{display:"flex",alignItems:"center",gap:8,padding:"8px 10px",borderRadius:10,background:ac?"#fff":"transparent",border:ac?"1px solid #e0d6c8":"1px solid transparent",marginBottom:3}}>
          <div style={{width:22,height:22,borderRadius:"50%",background:uo.length>0?"#22c55e":isR?"#d4a84b":"#e0d6c8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,color:uo.length>0||isR?"#fff":"#999"}}>{uo.length>0?"\u2713":isR?"\uD83C\uDFC3":u.name[0]}</div>
          <span style={{flex:1,fontSize:12,color:ac?"#c4873b":"#555",fontWeight:ac?700:400}}>{u.name}</span>
          {isR&&<span style={{fontSize:8,color:"#c4873b",fontWeight:700}}>RUN</span>}
        </div>})}
        {isAdm&&<div style={{marginTop:12,borderTop:"1px solid #e8e0d4",paddingTop:10}}><div style={{fontSize:10,color:"#999",marginBottom:6}}>Admin</div>
          {!showA?<button onClick={function(){setShowA(true)}} style={{width:"100%",padding:6,borderRadius:8,border:"1px dashed #d0c8b8",background:"transparent",color:"#c4873b",fontSize:11,cursor:"pointer"}}>+ Add user</button>
          :<div style={{display:"flex",gap:4}}><input value={nn} onChange={function(e){setNn(e.target.value)}} onKeyDown={function(e){if(e.key==="Enter")addU()}} placeholder="Name..." style={{flex:1,padding:"6px 8px",borderRadius:8,border:"1px solid #e0d6c8",background:"#fff",color:"#222",fontSize:11,outline:"none"}} autoFocus/><button onClick={addU} style={{padding:"6px 10px",borderRadius:8,border:"none",background:"#d4a84b",color:"#fff",fontSize:11,fontWeight:700,cursor:"pointer"}}>Add</button></div>}
          {users.filter(function(u){return u.name!==ADM}).map(function(u){return <div key={u.id} style={{display:"flex",justifyContent:"space-between",padding:"4px 0"}}><span style={{fontSize:11,color:"#999"}}>{u.name}</span><button onClick={function(){delU(u.id)}} style={{background:"none",border:"none",color:"#e74c3c",fontSize:10,cursor:"pointer"}}>Remove</button></div>})}
        </div>}
        <div style={{marginTop:"auto",paddingTop:12}}>
          <button onClick={function(){setDice(true)}} style={{width:"100%",padding:8,borderRadius:8,border:"1px solid #e0d6c8",background:"#fdf6ee",color:"#c4873b",fontSize:11,fontWeight:600,cursor:"pointer",marginBottom:6}}>&#127922; Pickup Dice</button>
          <button onClick={function(){setAct(null);setView("login")}} style={{width:"100%",padding:8,borderRadius:8,border:"1px solid #e0d6c8",background:"#fff",color:"#999",fontSize:11,cursor:"pointer"}}>Switch user</button>
        </div>
      </div>
      <div style={{flex:1,display:"flex",flexDirection:"column",overflow:"hidden",minWidth:0,background:"#f5f3ef"}}>
        {hasO&&<div style={{padding:"10px 20px",background:"#f0fdf4",borderBottom:"1px solid #bbf7d0",display:"flex",alignItems:"center",justifyContent:"space-between"}}><div style={{fontSize:13,color:"#16a34a"}}>{"\u2713 You picked: "}<strong>{myO[0].item.name}</strong></div><button onClick={function(){var no={};Object.keys(orders).forEach(function(k){if(k!==act)no[k]=orders[k]});setOrders(no)}} style={{padding:"4px 12px",borderRadius:8,border:"1px solid #bbf7d0",background:"transparent",color:"#e74c3c",fontSize:11,cursor:"pointer"}}>Change</button></div>}
        <div style={{padding:"14px 20px 12px",borderBottom:"1px solid #e8e0d4",flexShrink:0,background:"#fff"}}>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12}}>
            <div style={{display:"flex",alignItems:"center",gap:12}}>
              <button className="mob" onClick={function(){setAct(null);setView("login")}} style={{background:"none",border:"none",color:"#c4873b",fontSize:13,fontWeight:600,cursor:"pointer"}}>{"\u2190"}</button>
              <div><div style={{fontSize:10,fontWeight:700,letterSpacing:2,color:"#c4873b"}}>ORDERING FOR</div><div style={{fontSize:17,fontWeight:800,color:"#2d2a26"}}>{aObj?aObj.name:""}</div></div>
            </div>
            <button onClick={function(){setView("summary")}} style={{padding:"8px 14px",borderRadius:10,border:"1px solid #e0d6c8",background:"#fff",color:"#c4873b",fontSize:12,fontWeight:600,cursor:"pointer"}}>Summary</button>
          </div>
          <input value={sch} onChange={function(e){setSch(e.target.value)}} placeholder="Search menu..." style={{width:"100%",padding:"12px 16px",borderRadius:12,border:"1px solid #e0d6c8",background:"#fff",color:"#222",fontSize:14,outline:"none"}}/>
          <div style={{display:"flex",gap:6,overflowX:"auto",paddingBottom:2,marginTop:10}}>
            {CATS.map(function(c){return <button key={c} onClick={function(){setCat(c)}} style={{padding:"6px 14px",borderRadius:14,border:cat===c?"none":"1px solid #e0d6c8",background:cat===c?"#d4a84b":"#fff",color:cat===c?"#fff":"#888",fontWeight:cat===c?700:500,fontSize:12,cursor:"pointer",whiteSpace:"nowrap"}}>{c}</button>})}
          </div>
        </div>
        <div style={{flex:1,overflowY:"auto",padding:"12px 20px"}}>
          <div style={{fontSize:11,color:"#bbb",marginBottom:8}}>{fil.length+" items \u2022 Pick one meal"}</div>
          {fil.map(function(m){return <div key={m.id} style={{background:"#fff",borderRadius:14,padding:"14px 16px",marginBottom:10,border:"1px solid #e8e0d4",opacity:hasO?0.3:1,pointerEvents:hasO?"none":"auto",boxShadow:"0 1px 4px rgba(0,0,0,0.02)"}}>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:12}}>
              <div style={{flex:1}}>
                <div style={{display:"flex",alignItems:"center",gap:6,flexWrap:"wrap"}}>
                  <span style={{fontWeight:700,fontSize:14,color:"#2d2a26"}}>{m.name}</span>
                  {m.tags.indexOf("spicy")>=0&&<span style={{fontSize:10,background:"#fef2f2",color:"#dc2626",borderRadius:8,padding:"2px 7px",border:"1px solid #fecaca",fontWeight:600}}>Spicy</span>}
                  {m.tags.indexOf("vegetarian")>=0&&<span style={{fontSize:10,background:"#f0fdf4",color:"#16a34a",borderRadius:8,padding:"2px 7px",border:"1px solid #bbf7d0",fontWeight:600}}>Veg</span>}
                  {m.tags.indexOf("vegan")>=0&&<span style={{fontSize:10,background:"#ecfdf5",color:"#059669",borderRadius:8,padding:"2px 7px",border:"1px solid #a7f3d0",fontWeight:600}}>Vegan</span>}
                  {m.tags.indexOf("pescatarian")>=0&&<span style={{fontSize:10,background:"#eff6ff",color:"#2563eb",borderRadius:8,padding:"2px 7px",border:"1px solid #bfdbfe",fontWeight:600}}>Fish</span>}
                </div>
                <div style={{fontSize:12,color:"#888",marginTop:3,lineHeight:1.5}}>{m.desc}</div>
                <button onClick={function(e){e.stopPropagation();setNut(m)}} style={{background:"none",border:"none",color:"#c4873b",fontSize:11,cursor:"pointer",padding:0,marginTop:4,fontWeight:600}}>&#9432; Nutrition & Fun Fact</button>
              </div>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:8}}>
                <span style={{fontWeight:800,fontSize:17,color:"#2d2a26"}}>R{m.price}</span>
                <button onClick={function(){doAdd(m)}} style={{padding:"8px 16px",borderRadius:10,border:"none",background:"#d4a84b",color:"#fff",fontSize:12,fontWeight:700,cursor:"pointer",whiteSpace:"nowrap"}}>+ Add</button>
              </div>
            </div>
          </div>})}
          <div style={{height:80}}/>
        </div>
      </div>
      <div className="rp" style={{width:300,borderLeft:"1px solid #e8e0d4",display:"none",flexDirection:"column",background:"#faf8f5",flexShrink:0}}>
        <div style={{padding:"16px 20px",borderBottom:"1px solid #e8e0d4",background:"#fff"}}><div style={{fontSize:10,fontWeight:800,letterSpacing:2,color:"#c4873b"}}>LIVE ORDER</div><div style={{fontSize:17,fontWeight:800,color:"#2d2a26",marginTop:2}}>Summary</div></div>
        <div style={{flex:1,overflowY:"auto",padding:"12px 20px"}}>
          {users.map(function(u){var uo=orders[u.id]||[];if(!uo.length)return <div key={u.id} style={{display:"flex",alignItems:"center",gap:8,padding:"7px 0",opacity:0.4}}><div style={{width:20,height:20,borderRadius:"50%",background:"#e0d6c8",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#999"}}>{u.name[0]}</div><span style={{fontSize:12,color:"#bbb"}}>{u.name+" \u2014 waiting"}</span></div>;
            var o=uo[0];var sr=srs[u.id];return <div key={u.id} style={{marginBottom:12,padding:"10px 12px",background:"#fff",borderRadius:10,border:"1px solid #e8e0d4"}}>
              <div style={{display:"flex",justifyContent:"space-between",marginBottom:4}}><div style={{display:"flex",alignItems:"center",gap:6}}><div style={{width:20,height:20,borderRadius:"50%",background:"#22c55e",display:"flex",alignItems:"center",justifyContent:"center",fontSize:9,color:"#fff"}}>{"\u2713"}</div><span style={{fontSize:12,fontWeight:700,color:"#2d2a26"}}>{u.name}</span></div><span style={{fontSize:12,fontWeight:700,color:"#c4873b"}}>R{pr(o)}</span></div>
              <div style={{fontSize:11,color:"#888",paddingLeft:26}}>{o.item.name}{o.pt?" ("+o.pt+")":""}{o.upg?" + "+o.upg:""}</div>
              {sr&&sr.trim()&&<div style={{marginLeft:26,marginTop:4,fontSize:10,color:"#c4873b",background:"#fdf6ee",borderRadius:6,padding:"2px 8px",display:"inline-block",border:"1px solid #e8d5b8"}}>{sr}</div>}
            </div>
          })}
        </div>
        <div style={{borderTop:"1px solid #e8e0d4",padding:"12px 20px",background:"#fff"}}>
          <textarea value={srs[act]||""} onChange={function(e){var ns={};Object.keys(srs).forEach(function(k){ns[k]=srs[k]});ns[act]=e.target.value;setSrs(ns)}} placeholder="Special requests (gluten-free, extra cheese...)" style={{width:"100%",padding:"10px 12px",borderRadius:10,border:"1px solid #e0d6c8",background:"#faf8f5",color:"#222",fontSize:12,outline:"none",resize:"none",height:48,fontFamily:"inherit"}}/>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"10px 0",marginTop:6}}><span style={{fontSize:13,fontWeight:700,color:"#2d2a26"}}>Grand Total</span><span style={{fontSize:20,fontWeight:800,color:"#c4873b"}}>R{gt.toFixed(2)}</span></div>
          <a href={waUrl()} target="_blank" rel="noopener noreferrer" style={{display:"block",padding:12,borderRadius:10,background:"#22c55e",color:"#fff",fontSize:13,fontWeight:700,textDecoration:"none",textAlign:"center"}}>&#128241; Send via WhatsApp</a>
        </div>
      </div>
    </div>
  </div>
}