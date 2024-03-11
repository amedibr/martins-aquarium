import { FishList } from './fish.js'
import { fishLocation, getFish } from './database.js'
import { tankTips } from './database.js'
import { TipList } from './tips.js'
import { LocationList } from './locations.js'

const tankClean = tankTips()
const allFish = getFish()
const homeFish = fishLocation()

for (const tips of tankClean) {
    console.log(tips)
}

for (const fish of allFish) {
    console.log(fish)
}

for (const home of homeFish) {
    console.log(home)
}
/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
const parentHTMLElement = document.querySelector(".fishlist")
const coparentHTMLElement= document.querySelector(".side__cleaning")
const cousinHTMLElement= document.querySelector(".side__locations")  


parentHTMLElement.innerHTML = FishList()
coparentHTMLElement.innerHTML = TipList()
cousinHTMLElement.innerHTML = LocationList()