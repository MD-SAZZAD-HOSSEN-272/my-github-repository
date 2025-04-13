

function cashOut( money ) {
    if (typeof money === "number" && money >= 0) {
        const cashOutCharge = money * 1.75 / 100;
        return cashOutCharge;
    }else {
        return "Invalid";
    }
}



function  validEmail( email ) {
    if (typeof email !== "string") {
        return "Invalid"
    }
    for (let i = 0; i < email.length; i++){
        if (email[0] === "." || email[0] === "-" || email[0] === "_" || email[0] === "@" || email[0] === "+") {
            return false;
        }
        else if (email.includes(" ") || !email.includes("@") || !email.endsWith(".com")) {
            return false;
        }else {
            return true;
        }
    }
}



function  electionResult( votes ) {
    if (!Array.isArray(votes)) {
        return "Invalid"
    }
    let countMango = 0;
    let countBanana = 0;
    for (let i = 0; i < votes.length; i++) {
       if (votes[i] === "mango") {
        countMango ++;
       }else if (votes[i] === "banana") {
        countBanana ++;
       }
    }
    if (countBanana > countMango) {
        return "Banana";
    }else if (countMango > countBanana) {
        return "Mango";
    }else if (countBanana === countMango) {
        return "draw";
    }

    
}



function  isBestFriend( f1 , f2 ) {
    if (typeof f1 !== "object" || f1 === null || Array.isArray(f1, f2) || typeof f2 !== "object" || f2 === null) {
        return "Invalid";
    }
    if (typeof f1.roll === "number" || typeof f1.bestFriend === "number" || typeof f2.roll === "number" || typeof f2.bestFriend === "number") {

        if (f1.roll === f2.bestFriend && f1.bestFriend === f2.roll) {
            return true;
        }else {
            return false;
        }
    }
    
}



function  calculateWatchTime( times ) {
    let sum = 0;
    for (time of times) {
        if (typeof time !== "number") {
            return "Invalid"
        }else {
            sum += time;
        }
    }
    const hours = Math.floor (sum / 3600);
    const minute = Math.floor((sum % 3600) / 60);
    const second = Math.floor(sum % 60);
    const calculateObject = {
        Hours: hours,
        Minute: minute,
        Second: second
    }
    return calculateObject;
}

















// category 0002 ------------------------------------------------------------------------------------------------------------------------------------


function  validContact( contact ) {
    if (typeof contact !== "string"){
        return "Invalid";
    }
    
    // console.log(contact.length);
    // for (let i = 0; i < contact.length; i++) {
    //     if (contact[0] === "0" || contact[1] === "1") {
    //         return false;
    //     }
    // }
    if(contact.length > 11 || contact.length < 11 || contact.includes(" ") || contact.slice(0, 2) !== "01") {
        return false
    }else {
        return true;
    }
}

console.log(validContact("01819234567"));




function  validProposal( person1 , person2 ) {
    if (typeof person1 !== "object" || person1 === null || Array.isArray(person1, person2) || typeof person2 !== "object" || person2=== null) {
        return false;
    }
    else if(person1.gender !== person2.gender) {
        const difference = person1.age - person2.age;
        if (Math.abs(difference <= 7)) {
            return true
        }else {
            return false;
        }
    }
}

// const person1 = { name: "Rahul", gender: "male", age: 28 }
// const person2 = { name: "Joya", gender: "female", age: 21 }
// const result = validProposal(person1, person2);
// console.log(result);