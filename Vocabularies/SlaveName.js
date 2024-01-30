function slaveNameVocabulary() {
    let answers = ["slave",
        "pet",
        "toy",
        "stroker"
    ];

    let adjectives = [''];


    if (VERBAL_HUMILIATION_LIMIT.isAllowed() && feelsLikeInsultingSlave()) {
        adjectives.push('disgusting', 'tiny dick', 'worthless', 'naughty', 'stupid', 'filthy', 'nasty', 'pathetic', 'small dick');
        answers.push("slut", 'bitch', 'loser', 'idiot', 'piece of shit', 'whore');
    }
    //Do this after verbal humiliation to clear potential wrong answers in case of only sissy address
    if (SISSY_LIMIT.isAllowed()) {
        adjectives.push('cock hungry', 'cock craving', 'cock sucking', 'cock drunk');

        //Clear answers if we only address as sissy
        if(RULE_ONLY_SISSY_ADDRESS.isActive()) {
            answers = [];
        }

        answers.push("girl", 'bimbo', 'sissy', 'panty boy');
    } else {
        answers.push('boy');
    }


    if(CEI_LIMIT.isAllowed()) {
        if(isChance(50)) {
            answers.push('cum consumer', 'cum lover', 'cum guzzler', 'cum slut', 'cum eater', 'cum whore', 'cum lover');
        } else {
            adjectives.push('cum eating',  'cum sucking', 'cum craving', 'cum swallowing', 'cum drinking');
        }
    }

    if(PEE_LIMIT.isAllowed()) {
        let peeWord = random('piss', 'pee', 'urine')
        if(isChance(50)) {
            answers.push('toilet', 'urinal', peeWord+' drinker', peeWord+' lover', peeWord+' swallower', peeWord+' whore');
        } else {
            adjectives.push('wannabe toilet',  'wannabe urinal', peeWord+' drinking', peeWord+' swallowing', peeWord+' loving');
        }
    }

    if(CUCKOLD_LIMIT.isAllowed()) {
        if(RULE_ONLY_SISSY_ADDRESS.isActive() && isChance(20)) {
            answers.push("sissy cuckie", 'sissy cuckold');
        } else {
            answers.push("cuckie", 'cuckold');
            if(CEI_LIMIT.isAllowed()) {
                answers.push("cum eating cuckie", 'cum drinking cuckold');
            }
        }
    }

    if (getVar(VARIABLE.CHASTITY_ON, false)) {
        adjectives.push('locked', 'caged');
    }

    if (hasLingerieOn()) {
        adjectives.push("dressed up", "dressed up");
    }

    let adjective = isChance(15)? random(adjectives) : "";

    return (adjective + ' ' + random(answers)).trim();
}