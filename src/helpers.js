// import React from "react";

/**returns random item from input array */
function choice(items){
    return items[Math.floor(items.length * Math.random())];
}

/**removes the first matching item from items, if 
 * item exists, and returns it. Otherwise returns undefined */
function remove(items, item) {
    const itemIndex = items.indexOf(item);
    
    if (itemIndex > -1) {
        return items.splice(itemIndex, 1)[0]; //removes the ele from arr that contains what you're looking for
    }
    
    return undefined;
}

export {choice, remove};