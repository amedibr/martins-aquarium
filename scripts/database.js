/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            id: 1,
            img: "",
            species: "",
            name: "Bart",
            food: "crustaceans",
            size: 3,
            location: "",
        }
        {
            id: 2,
            img: "",
            species: "",
            name: "Lloyd",
            food: "crustaceans",
            size: 3,
            location: "",
        }
        {
            id: 3,
            img: "",
            species: "",
            name: "Helga",
            food: "crustaceans",
            size: 3,
            location: "",
        }
        {
            id: 4,
            img: "",
            species: "",
            name: "Arnold",
            food: "crustaceans",
            size: 3,
            location: "",
        }
        {
            id: 5,
            img: "",
            species: "",
            name: "Frank",
            food: "crustaceans",
            size: 3,
            location: "",
        }
        {
            id: 6,
            img: "",
            species: "",
            name: "Lenny",
            food: "crustaceans",
            size: 3,
            location: "",
        }
        {
            id: 7,
            img: "",
            species: "",
            name: "Arthur",
            food: "crustaceans",
            size: 3,
            location: "",
        }
        {
            id: 8,
            img: "",
            species: "",
            name: "Bill",
            food: "crustaceans",
            size: 3,
            location: "",
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}