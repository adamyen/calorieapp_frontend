function calculations(age, gender, weight, height) {
    const metabolicRate = () => gender === "M"
        ? 66.47 + 13.7 * weight + 5 * height - 6.8 * age
        : 655.1 + 9.6 * weight + 1.8 * height - 4.7 * age;

    const breakfast = () => gender === "M"
        ? (66.47 + 13.7 * weight + 5 * height - 6.8 * age)/4
        : (655.1 + 9.6 * weight + 1.8 * height - 4.7 * age)/4;

    const otherMeal = () => gender === "M"
        ? (66.47 + 13.7*weight + 5*height - 6.8*age)*3/8
        : (655.1 + 9.6*weight + 1.8*height - 4.7*age)*3/8;

    return {
        metabolicRate: metabolicRate(),
        breakfast: breakfast(),
        otherMeal: otherMeal(),
    }
};
const proteinsPercent = (proteinCal, targetCal, consumedCal) => {
    const cal = (targetCal - consumedCal) / proteinCal;
    return `Serving: ${Math.round(cal * 100) / 100}`
}

function getFood() {
    const randomVeggie = () => {
        const vegArray = [{image: "/images/Green1.jpeg", name: "Arugula", calories: 80}, {image: "/images/Green2.jpeg", name: "Spinach", calories: 80}, {image: "/images/Green3.jpeg", name: "Romaine", calories: 80}, {image: "/images/Green4.jpeg", name: "Cress", calories: 80}]
        return vegArray[Math.floor(Math.random() * vegArray.length)];
    }

    const randomGrain = () => {
        const grainArray = [{image: "/images/Grain4.jpeg", name: "Saffron Basmati Rice", calories: 150}, {image: "/images/Grain3.jpeg", name: "Brown Basmati Rice", calories: 140}, {image: "/images/Grain2.jpeg", name: "Black Lentils", calories: 120}, {image: "/images/Grain1.jpeg", name: "RightRice", calories: 130}]
        return grainArray[Math.floor(Math.random() * grainArray.length)];
    }

    const randomProtein = () => {
        const proArray = [{image: "/images/Protein1.jpeg", name: "Chicken", calories: 260}, {image: "/images/Protein2.jpeg", name: "Beef", calories: 280}, {image: "/images/Protein3.jpeg", name: "Fish", calories: 250}, {image: "/images/Protein4.jpeg", name: "Pork", calories: 300}]
        return proArray[Math.floor(Math.random() * proArray.length)];
    }

    return {
        veg: randomVeggie(),
        grain: randomGrain(),
        protein: randomProtein(),
        veg2: randomVeggie(),
        grain2: randomGrain(),
        protein2: randomProtein(),
    }
}

function generateMealPlanProps(age, gender, weight, height) {
    const rates = calculations(
        parseInt(age),
        gender.toUpperCase(),
        parseInt(weight),
        parseInt(height)
    );
    const foods = getFood();
    const proteinDescription1 = proteinsPercent(foods.protein['calories'], rates.breakfast, (foods.veg['calories'] + foods.grain['calories']));
    const proteinDescription2 = proteinsPercent(foods.protein2['calories'], rates.otherMeal, (foods.veg2['calories'] + foods.grain2['calories']));
    return {
        rates,
        foods,
        proteinDescription1,
        proteinDescription2,
    }
}

export { calculations, proteinsPercent, getFood, generateMealPlanProps };
