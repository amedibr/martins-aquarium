import { tankTips } from './database.js'

export const TipList = () => {
    // Invoke the function that you imported from the database module
    const tipper = [...tankTips()]

    // Start building a string filled with HTML syntax
    let htmlString = `<article class="side__cleaning"> <h2 class="side__cleaning--header">Martin's Tips</h2>
    <ul>`

    // Create HTML representations of each fish here
    for (const tip of tipper) {

        // Why is there a backtick used for this string?
        htmlString += `
            <header>*${tip.title}*</header>
            <li>${tip.description}</li> 
            `
        }
        htmlString += `</ul></article>`

    return htmlString
}