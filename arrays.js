document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny",];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 
    //opgave 1: Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle de tal som er større end 20.
    const manyNumbers = numbersArray.filter(num => num > 20)
    console.log("Opgave 1", manyNumbers);
    

    // Opgave 2
    // Tilføj katten "Sniffles" til catsArray.
    // Udskriv arrayet i konsollen.
    // console.log("Opgave 2", ...)
    catsArray.push("Sniffles")
    console.log("Opgave 2", catsArray);
    

    // Opgave 3a
    // Check om der i dogsArray er en hund som hedder "Trixie".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3a", ...)
    console.log("Opgave 3a", dogsArray.includes("Trixie"));
    
    // Opgave 3b
    // Check om der i dogsArray er en hund som hedder "Baxter".
    // Udskriv "true" eller "false" i konsollen afhængig af svaret.
    // console.log("Opgave 3b", ...)
    console.log("Opgave 3b", dogsArray.includes("Baxter"))

    //     Opgave 4a
    // Check om der i catsArray er en kat som hedder "Bagheera".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4a", ...)
    const found = catsArray.find((element) => element === "Bagheera");
    console.log("Opgave 4a", found);
    

    // Opgave 4b
    // Check om der i catsArray er en kat som hedder "Salem".
    // Udskriv katten i konsollen hvis den findes og ellers "undefined".
    // console.log("Opgave 4b", ...)
    const found2 = catsArray.find((element) => element === "Salem");
    console.log("Opgave 4b", found2);

    //     Opgave 5
    // Med udgangspunkt i numbersArray, skal du oprette et nyt array, som indeholder alle tallene i arrayet ganget med 3.
    // Udskriv det nye array i konsollen:
    // console.log("Opgave 5", ...)
    const map = numbersArray.map((x) => x *3)
    console.log("opgave 5", map);
    

    //     Opgave 6
    // Udskriv alle hundene i dogsArray i én lang streng.
    // (Sådan her: BarneyMollyBaxter...)
    // Udskriv strengen konsollen:
    // console.log("Opgave 6", ...)
    console.log("Opgave 6", dogsArray.join(""));
    

    //     Opgave 7a
    // Find ud af hvilket index "Mango" har i fruitsArray.
    // Udskriv indexet i konsollen.
    console.log("Opgave 7a", fruitsArray.indexOf("Mango"))

    // Opgave 7b
    // Find ud af hvilket index "Blåbær" har i fruitsArray.
    // Udskriv indexet i konsollen.
    console.log("Opgave 7b", fruitsArray.indexOf("Blåbær"));
    

    // Opgave 8
    // Lad os forestille os, at dogsArray er en liste af tilmeldte hunde til en udstilling.
    // Den familie der har hunden "Polly" er desværre blevet forhindret i at deltage i udstillingen.
    // Fjern hunden "Polly" fra dogsArray og udskriv det nye array i konsollen
    //  ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    

}) // ends DOMContentLoaded

