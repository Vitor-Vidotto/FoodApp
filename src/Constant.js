import { ref, get } from "firebase/database";
import { database } from "../firebaseConfig"; 

let categories = []; // Inicializa a variável categories como uma array vazia

// Referência para a coleção "categories"
const categoriesRef = ref(database, "categories");


export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",
};

//  Data for categories filter

function getCategoriesFromFirebase() {
  get(categoriesRef)
    .then((snapshot) => {
      if (snapshot.exists()) {
        categories = Object.values(snapshot.val());
        // Faça algo com as categorias atualizadas
        console.log("Categorias do Firebase:", categories);
      } else {
        console.log("Não foram encontradas categorias.");
      }
    })
    .catch((error) => {
      console.error("Erro ao buscar categorias do Firebase:", error);
    });
}

// Chama a função para buscar e atualizar as categorias
getCategoriesFromFirebase();

// Exporta a variável categories para uso em outros arquivos
export { categories };

export const recipeList = [
	{
		id: "01",
		name: "Tuna Tartare",
		image: require("../assets/images/tuna.png"),
		rating: "4.2",
		ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#006A4E",
		description:
			"A delightful and refreshing dish featuring fresh tuna mixed with zesty lime juice and the crunch of red onion and avocado.",
		steps: [
			"Dice the fresh tuna into small cubes.",
			"Finely chop the red onion and avocado.",
			"Mix the tuna, red onion, and avocado in a bowl.",
			"Drizzle lime juice over the mixture and gently toss.",
			"Serve chilled and enjoy!",
		],
	},
	{
		id: "02",
		name: "Lasagna",
		image: require("../assets/images/lasgana.png"),
		rating: "3.6",
		ingredients: [
			"Lasagna Noodles",
			"Ground Beef",
			"Ricotta Cheese",
			"Tomato Sauce",
		],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#f39c12",
		description:
			"A classic Italian comfort food with layers of lasagna noodles, flavorful ground beef, rich ricotta cheese, and tangy tomato sauce.",
		steps: [
			"Cook the lasagna noodles according to package instructions.",
			"Brown the ground beef in a skillet and season with spices.",
			"Layer the lasagna noodles, beef, ricotta cheese, and tomato sauce in a baking dish.",
			"Repeat the layers and bake in the oven until bubbly and golden.",
			"Let it cool slightly before serving.",
		],
	},
	{
		id: "03",
		name: "Hot Dog",
		image: require("../assets/images/hotdog.png"),
		rating: "4.6",
		ingredients: ["Hot Dog Buns", "Frankfurters", "Ketchup", "Mustard"],
		time: "40 mins",
		difficulty: "Medium",
		calories: "420 cal",
		color: "#FF0000",
		// description, steps to prepare
		description:
			"A classic American favorite, hot dog buns stuffed with juicy frankfurters, drizzled with ketchup and mustard for that perfect balance of flavors.",
		steps: [
			"Grill or heat the frankfurters until they're cooked through.",
			"Place the frankfurters in hot dog buns.",
			"Squeeze ketchup and mustard over the frankfurters.",
			"Serve with your favorite sides and enjoy!",
		],
	},
	{
		id: "04",
		name: "Manchurian",
		image: require("../assets/images/manchurian.png"),
		rating: "3.6",
		ingredients: ["Cauliflower", "Soy Sauce", "Ginger", "Garlic"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#d35400",
		description:
			"A popular Indo-Chinese dish featuring crispy cauliflower bites tossed in a flavorful sauce made with soy sauce, ginger, and garlic.",
		steps: [
			"Cut the cauliflower into florets and blanch them.",
			"Prepare a sauce by mixing soy sauce, ginger, and garlic.",
			"Deep-fry or shallow-fry the cauliflower until crispy.",
			"Toss the fried cauliflower in the sauce until well coated.",
			"Garnish with chopped green onions and serve hot.",
		],
	},
	{
		id: "05",
		name: "Chicken",
		image: require("../assets/images/chicken.png"),
		rating: "2.2",
		ingredients: ["Chicken Breasts", "Salt", "Black Pepper", "Olive Oil"],
		time: "45 mins",
		difficulty: "Medium",
		calories: "450 cal",
		color: "#8d4004",
		description:
			"A succulent chicken dish seasoned with a blend of salt and black pepper, then cooked to perfection with a drizzle of olive oil.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Season the chicken breasts with salt and black pepper.",
			"Heat olive oil in a skillet over medium-high heat.",
			"Sear the chicken breasts on both sides until golden brown.",
			"Transfer the chicken to the oven and bake until cooked through.",
			"Serve hot and enjoy your flavorful chicken!",
		],
	},
	{
		id: "06",
		name: "Cupcakes",
		image: require("../assets/images/cupcakes.png"),
		rating: "5.0",
		ingredients: ["Flour", "Sugar", "Eggs", "Butter"],
		time: "60 mins",
		difficulty: "Medium",
		calories: "200 cal",
		description:
			"Delightful cupcakes made with a perfect blend of flour, sugar, eggs, and butter, perfect for any occasion.",
		steps: [
			"Preheat the oven to the specified temperature.",
			"Prepare the cupcake batter by mixing the ingredients together.",
			"Line a muffin tin with cupcake liners.",
			"Fill each liner with batter and bake in the oven.",
			"Let the cupcakes cool, then frost and decorate as desired.",
			"Indulge in these sweet treats and savor the flavor!",
		],
	},
	{
		id: "07",
		name: "Curry",
		image: require("../assets/images/curry.png"),
		rating: "4.8",
		ingredients: ["Meat", "Curry Powder", "Coconut Milk", "Spices"],
		time: "55 mins",
		difficulty: "Hard",
		calories: "550 cal",
		color: "#d35400",

		description:
			"A rich and aromatic curry dish featuring tender pieces of meat cooked in a flavorful blend of curry powder, coconut milk, and spices.",
		steps: [
			"Marinate the meat with spices and let it sit for a while.",
			"Heat oil in a large pot and sauté the marinated meat until browned.",
			"Add curry powder and stir to coat the meat.",
			"Pour in coconut milk and bring to a simmer.",
			"Cover and let the curry simmer until the meat is tender and the flavors meld.",
			"Serve the curry with rice or bread and enjoy the deliciousness!",
		],
	},
	{
		id: "08",
		name: "Ramen",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Ramen Noodles", "Soy Sauce", "Eggs", "Vegetables"],
		time: "35 mins",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Boil the ramen noodles according to package instructions.",
			"In a pot, bring water to a simmer and add soy sauce for the broth.",
			"Add chopped vegetables and let them cook until tender.",
			"Boil eggs to your desired doneness, then peel and slice them.",
			"Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.",
			"Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!",
		],
	},
	{
		id: "08",
		name: "Teste2",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Ramen Noodles", "Soy Sauce", "Eggs", "Vegetables"],
		time: "35 mins",
		difficulty: "Easy",
		calories: "400 cal",
		color: "#f96163",
		description:
			"A comforting bowl of ramen featuring slurp-worthy noodles, a savory soy sauce-based broth, tender vegetables, and perfectly boiled eggs.",
		steps: [
			"Boil the ramen noodles according to package instructions.",
			"In a pot, bring water to a simmer and add soy sauce for the broth.",
			"Add chopped vegetables and let them cook until tender.",
			"Boil eggs to your desired doneness, then peel and slice them.",
			"Assemble the ramen bowls by placing cooked noodles, vegetables, and egg slices.",
			"Ladle the hot broth over the ingredients and get ready to enjoy your homemade ramen!",
		],
	},
	{
		id: "05", // Café da manhã
		name: "Pancakes",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.7",
		ingredients: ["Flour", "Milk", "Eggs", "Sugar", "Baking Powder"],
		time: "25 mins",
		difficulty: "Easy",
		calories: "300 cal",
		color: "#FF5733",
		description:
		  "Fluffy and delicious pancakes made from scratch with a simple batter of flour, milk, eggs, sugar, and baking powder.",
		steps: [
		  "In a bowl, mix flour, sugar, and baking powder.",
		  "In another bowl, beat eggs and add milk.",
		  "Combine the wet and dry ingredients and mix until smooth.",
		  "Heat a non-stick skillet and pour in pancake batter.",
		  "Cook until bubbles form, then flip and cook until golden brown.",
		],
	  },
	  {
		id: "06", // Café da manhã
		name: "French Toast",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.5",
		ingredients: ["Bread Slices", "Eggs", "Milk", "Vanilla Extract", "Cinnamon"],
		time: "20 mins",
		difficulty: "Easy",
		calories: "280 cal",
		color: "#FFC300",
		description:
		  "Golden and crispy French toast made by dipping bread slices in a mixture of eggs, milk, vanilla extract, and cinnamon, then pan-frying to perfection.",
		steps: [
		  "In a bowl, whisk together eggs, milk, vanilla extract, and cinnamon.",
		  "Dip bread slices into the egg mixture, ensuring they're well-coated.",
		  "Pan-fry the bread slices until golden brown on both sides.",
		  "Serve hot with your favorite toppings.",
		],
	  },
	  {
		id: "07", // Café da manhã
		name: "Omelette",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.3",
		ingredients: ["Eggs", "Milk", "Cheese", "Bell Peppers", "Onions"],
		time: "15 mins",
		difficulty: "Easy",
		calories: "250 cal",
		color: "#FF5733",
		description:
		  "A fluffy omelette filled with a mixture of eggs, milk, cheese, bell peppers, and onions, cooked to perfection.",
		steps: [
		  "Whisk eggs and milk together in a bowl.",
		  "Heat a non-stick skillet over medium heat and add eggs.",
		  "Sprinkle cheese, bell peppers, and onions over half of the omelette.",
		  "Fold the other half over the filling and cook until set.",
		  "Slide onto a plate and serve hot.",
		],
	  },
	  {
		id: "08", // Café da manhã
		name: "Granola Parfait",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.0",
		ingredients: ["Greek Yogurt", "Granola", "Berries", "Honey"],
		time: "10 mins",
		difficulty: "Easy",
		calories: "320 cal",
		color: "#FFC300",
		description:
		  "A healthy and delicious parfait made with layers of Greek yogurt, granola, fresh berries, and a drizzle of honey.",
		steps: [
		  "In a glass, layer Greek yogurt, granola, and fresh berries.",
		  "Repeat the layers until the glass is full.",
		  "Drizzle honey over the top and serve immediately.",
		],
	  },
	  {
		id: "08", // Almoço
		name: "Chicken Caesar Wrap",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Grilled Chicken", "Romaine Lettuce", "Caesar Dressing", "Flour Tortilla"],
		time: "20 mins",
		difficulty: "Easy",
		calories: "380 cal",
		color: "#0097A7",
		description:
		  "A portable and tasty chicken Caesar wrap with grilled chicken, crisp romaine lettuce, Caesar dressing, all wrapped in a soft flour tortilla.",
		steps: [
		  "Grill chicken until cooked through, then slice it.",
		  "Place a tortilla on a flat surface and layer with romaine lettuce.",
		  "Add grilled chicken and drizzle with Caesar dressing.",
		  "Wrap the tortilla tightly and enjoy on the go.",
		],
	  },
	  {
		id: "07", // Almoço
		name: "Caprese Salad",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.7",
		ingredients: ["Tomatoes", "Fresh Mozzarella", "Basil Leaves", "Balsamic Glaze"],
		time: "15 mins",
		difficulty: "Easy",
		calories: "280 cal",
		color: "#E74C3C",
		description:
		  "A refreshing Caprese salad with sliced tomatoes, fresh mozzarella cheese, basil leaves, and a drizzle of balsamic glaze.",
		steps: [
		  "Slice tomatoes and fresh mozzarella cheese into rounds.",
		  "Arrange them on a plate, alternating with fresh basil leaves.",
		  "Drizzle with balsamic glaze and serve.",
		],
	  },
	  {
		id: "06", // Almoço
		name: "Vegetable Stir-Fry",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.4",
		ingredients: ["Mixed Vegetables", "Soy Sauce", "Ginger", "Garlic", "Sesame Oil"],
		time: "20 mins",
		difficulty: "Easy",
		calories: "290 cal",
		color: "#0097A7",
		description:
		  "A quick and healthy vegetable stir-fry with a mix of colorful vegetables, soy sauce, ginger, and garlic, cooked to perfection.",
		steps: [
		  "Chop mixed vegetables into bite-sized pieces.",
		  "Heat sesame oil in a wok or skillet and add ginger and garlic.",
		  "Stir-fry the vegetables until they're tender-crisp.",
		  "Add soy sauce and toss to combine.",
		  "Serve hot over rice or noodles.",
		],
	  },
	  {
		id: "05", // Almoço
		name: "BBQ Pulled Pork Sandwich",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.6",
		ingredients: ["Pulled Pork", "BBQ Sauce", "Coleslaw", "Burger Bun"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "380 cal",
		color: "#E74C3C",
		description:
		  "A satisfying BBQ pulled pork sandwich with tender pulled pork, smoky BBQ sauce, and creamy coleslaw served on a burger bun.",
		steps: [
		  "Heat pulled pork in a saucepan with BBQ sauce until heated through.",
		  "Toast burger buns until lightly browned.",
		  "Layer pulled pork and coleslaw on the bun.",
		  "Top with the other half of the bun and enjoy.",
		],
	  },
	  {
		id: "04", // Jantar
		name: "Spaghetti Carbonara",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.8",
		ingredients: ["Spaghetti", "Eggs", "Pancetta", "Parmesan Cheese"],
		time: "25 mins",
		difficulty: "Medium",
		calories: "350 cal",
		color: "#1ABC9C",
		description:
		  "A classic Italian pasta dish with spaghetti, eggs, crispy pancetta, and grated Parmesan cheese, creating a creamy and savory sauce.",
		steps: [
		  "Cook spaghetti according to package instructions and drain.",
		  "In a separate bowl, whisk eggs and grated Parmesan cheese.",
		  "In a pan, cook pancetta until crispy, then combine with cooked spaghetti.",
		  "Pour egg mixture over the spaghetti and toss until creamy.",
		  "Serve hot with additional Parmesan cheese.",
		],
	  },
	  {
		id: "03", // Jantar
		name: "Salmon with Lemon Butter Sauce",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.5",
		ingredients: ["Salmon Fillets", "Lemon", "Butter", "Dill", "Garlic"],
		time: "20 mins",
		difficulty: "Medium",
		calories: "320 cal",
		color: "#1ABC9C",
		description:
		  "Flaky and flavorful salmon fillets served with a tangy lemon butter sauce, fresh dill, and a hint of garlic.",
		steps: [
		  "Season salmon fillets with salt and pepper.",
		  "In a pan, melt butter and sauté minced garlic until fragrant.",
		  "Add salmon fillets and cook until flaky and golden.",
		  "Drizzle with lemon juice and fresh dill before serving.",
		],
	  },
	  {
		id: "02", // Jantar
		name: "Vegetable Curry",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.2",
		ingredients: ["Mixed Vegetables", "Curry Paste", "Coconut Milk", "Spices"],
		time: "30 mins",
		difficulty: "Easy",
		calories: "290 cal",
		color: "#FF5733",
		description:
		  "A comforting vegetable curry featuring a mix of vegetables, aromatic curry paste, and creamy coconut milk, all simmered to perfection.",
		steps: [
		  "Chop mixed vegetables into bite-sized pieces.",
		  "In a pot, heat curry paste and add vegetables.",
		  "Stir-fry for a few minutes, then pour in coconut milk.",
		  "Simmer until vegetables are tender and the curry thickens.",
		  "Serve hot with rice or naan bread.",
		],
	  },
	  {
		id: "01", // Jantar
		name: "Chicken Fajitas",
		image: require("../assets/images/ramen-org.png"),
		rating: "4.4",
		ingredients: ["Chicken Strips", "Bell Peppers", "Onions", "Fajita Seasoning"],
		time: "25 mins",
		difficulty: "Easy",
		calories: "350 cal",
		color: "#FFC300",
		description:
		  "Sizzling chicken fajitas with tender chicken strips, colorful bell peppers, onions, and flavorful fajita seasoning.",
		steps: [
		  "In a skillet, cook chicken strips until no longer pink.",
		  "Add sliced bell peppers and onions, then sprinkle with fajita seasoning.",
		  "Sauté until vegetables are tender and everything is well-seasoned.",
		  "Serve in tortillas with your favorite toppings.",
		],
	  },
];