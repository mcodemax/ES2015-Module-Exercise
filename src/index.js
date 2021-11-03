import {choice, remove} from "./helpers";
import foodsArr from "./foods";

const randFruit = choice(foodsArr);

console.log(`I’d like one ${randFruit}, please.`);
console.log(`Here you go: ${randFruit}`);
console.log(`Delicious! May I have another?`);

remove(foodsArr, randFruit);

console.log(`I’m sorry, we’re all out. We have ${foodsArr.length} left.`);
