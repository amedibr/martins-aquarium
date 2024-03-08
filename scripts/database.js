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
            length: 5,
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
            length: 3,
            location: "Pacific Ocean",
        },
        {
            id: 5,
            image: "https://cdn.pixabay.com/photo/2021/01/14/20/32/fish-5917864_640.jpg",
            species: "is a fish",
            name: "Frank",
            food: "Tacos",
            length: 2,
            location: "Atlantic Ocean",
        },
        {
            id: 6,
            image: "https://cdn.pixabay.com/photo/2019/03/23/15/20/triggerfish-4075542_640.jpg",
            species: "is a fish",
            name: "Lenny",
            food: "Spaghetti",
            length: 3,
            location: "Indian Ocean",
        },
        {
            id: 7,
            image: "https://cdn.pixabay.com/photo/2017/07/31/21/45/sea-2561399_640.jpg",
            species: "is a fish",
            name: "Arthur",
            food: "Vegetarian",
            length: 15,
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

const tankCareTips = {
        tips:[
    {
      title: "Regular Water Changes",
      description: "Perform regular water changes to maintain water quality in the aquarium."
    },
    {
      title: "Proper Feeding",
      description: "Feed your fish the right amount of food and avoid overfeeding to prevent water pollution."
    },
    {
      title: "Monitor Water Parameters",
      description: "Regularly check and maintain proper water parameters such as pH, temperature, and ammonia levels."
    },
    {
      title: "Clean the Filter",
      description: "Clean or replace the aquarium filter regularly to ensure efficient filtration."
    },
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const tankTips = () => {
    return tankCareTips.tips.map(tips => ({...tips}))
}

export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    const holyFish = []

    for (let holy of database.fish) {
        if (holy.length % 6 === 3)
            holyFish.push(holy)
    }

    return holyFish
}

export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    const soldiers = []

    for (let fighter of database.fish) {
        if (fighter.length % 15 === 5)
            soldiers.push(fighter)
    }
    return soldiers
}

export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    const heretic = []

    for (let unholy of database.fish) {
        if (unholy.length % 2 === 0)
            heretic.push(unholy)
    }
    return heretic
}