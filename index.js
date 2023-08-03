


function saturdayFun (activity = 'roller-skate') {
        return `This Saturday, I want to ${activity}!`
}

function mondayWork (activity = 'go to the office') {
        return `This Monday, I will ${activity}.`
}

function wrapAdjective (character) { 
    
        return function (highlight) {
            return `You are ${character}${highlight}${character}!`
        }

    // return function compliment (detail = 'special') {
    //     return `You are ${detail}!`
    // }
}
