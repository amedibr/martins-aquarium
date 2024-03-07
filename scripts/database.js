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
            image: "https://cdn.pixabay.com/photo/2022/08/17/08/14/fish-7391851_640.jpg",
            species: "is a fish",
            name: "Bart",
            food: "Chili",
            length: 4,
            location: "Atlantic Ocean",
        },
        {
            id: 2,
            image: "https://cdn.pixabay.com/photo/2018/04/15/17/45/fish-3322230_640.jpg",
            species: "is a fish",
            name: "Lloyd",
            food: "French Fries",
            length: 4.5,
            location: "Atlantic Ocean",
        },
        {
            id: 3,
            image: "https://cdn.pixabay.com/photo/2023/02/04/14/22/fish-7767315_640.jpg",
            species: "is a fish",
            name: "Helga",
            food: "Pizza",
            length: 2,
            location: "Pacific Ocean",
        },
        {
            id: 4,
            image: "https://cdn.pixabay.com/photo/2020/04/18/14/01/blue-5059268_640.jpg",
            species: "is a fish",
            name: "Arnold",
            food: "Hot Dog",
            length: 4,
            location: "Pacific Ocean",
        },
        {
            id: 5,
            image: "https://cdn.pixabay.com/photo/2021/01/14/20/32/fish-5917864_640.jpg",
            species: "is a fish",
            name: "Frank",
            food: "Tacos",
            length: 1,
            location: "Atlantic Ocean",
        },
        {
            id: 6,
            image: "https://cdn.pixabay.com/photo/2019/03/23/15/20/triggerfish-4075542_640.jpg",
            species: "is a fish",
            name: "Lenny",
            food: "Spaghetti",
            length: 3.5,
            location: "Indian Ocean",
        },
        {
            id: 7,
            image: "https://cdn.pixabay.com/photo/2017/07/31/21/45/sea-2561399_640.jpg",
            species: "is a fish",
            name: "Arthur",
            food: "Vegetarian",
            length: 10,
            location: "Atlantic Ocean",
        },
        {
            id: 8,
            image: "https://cdn.pixabay.com/photo/2018/03/11/18/28/fish-3217631_640.jpg",
            species: "is a fish",
            name: "Bill",
            food: "Bottom Feeder",
            length: 5,
            location: "Pacific Ocean",
        }
    ]
}


export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}