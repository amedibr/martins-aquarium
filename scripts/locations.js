import { fishLocation } from "./database.js";

export const LocationList = () => {
    const locations = [...fishLocation()]

    let htmlString = `<article class="side__locations"> <h2 class="side__locations--header">Fish Habitats</h2>
    `

    for (const fishLocations of locations) {
        htmlString += `
            <header>"${fishLocations.name}"</header>
            <li>${fishLocations.location}</li> 
            `
    }
    htmlString += `</article>`

    return htmlString
}