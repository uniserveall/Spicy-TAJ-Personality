{
    let bathroomWord = random('bathroom', 'restroom', 'toilet');
    let welcomeQuestionOptions = [
        'So... you need the ' + bathroomWord + ' %SlaveName%?',
        'Is there a reason you\'re making those funny faces? Need to use the ' + bathroomWord + ', perhaps?',
        'I\'m detecting a change in your posture. It\'s that time again isn\'t it?',
        'Seems like you\'re feeling a bit restless %SlaveName%. Is there something you need to take care of in the ' + bathroomWord + '?',
        'Your fidgeting is making me quite uncomfortable. I\'m starting to think that a ' + bathroomWord + ' break is in order.',
        bathroomWord + ', %Slave%?',
        'Back again?',
        'Is there something you need to take care of in the ' + bathroomWord + '?',
        'Need to use the ' + bathroomWord + ', perhaps?',
        'Yes %SlaveName%?',
        'Feeling desparate are we %SlaveName%?',
        '' + bathroomWord + ' again %SlaveName%?',
        'Needing the ' + bathroomWord + ' %SlaveName%?',
        bathroomWord + '?',
        'Oh boy...',
        bathroomWord + ' is it, %Slave%?',
        'Need the ' + bathroomWord + '?',
        'Mmmm?',
        bathroomWord + ' break?',
        'Looking to relive yourself?',
        'You\'re heading to the ' + bathroomWord + '?',
        bathroomWord + '? This should be fun...',
        bathroomWord + '? Hmm I needed a break anyway...',
        'Just the distraction I needed *wink*',
        'Of course you need the ' + bathroomWord,
        bathroomWord + '? Ok...',
    ];
    if(PEE_LIMIT.isAllowed()){
        let peeWord = random('pee', 'piss', 'urine', 'waste');
        welcomeQuestionOptions.push('Thirsty today are we %SlaveName%? *winks*');
        welcomeQuestionOptions.push('Back for another glass?');
        welcomeQuestionOptions.push('Look who wants to drink some more ' + peeWord + ' *laughs*');
        welcomeQuestionOptions.push('There\'s my little ' + peeWord + ' drinker');
        welcomeQuestionOptions.push('Ahh the urinal is here');
        welcomeQuestionOptions.push('A ' + bathroomWord + ' break for my ' + peeWord + ' drinker? This should be fun...');
        welcomeQuestionOptions.push('I hope you\'re feeling thirsty %SlaveName% *winks*');
    }
    if(VERBAL_HUMILIATION_LIMIT.isAllowed()){
        welcomeQuestionOptions.push('Imagine not being trusted to go to the ' + bathroomWord + ' on your own...');
        welcomeQuestionOptions.push('Awh, the sad little piggy can\'t go to the ' + bathroomWord + ' on their own');
        welcomeQuestionOptions.push('Does the dumb fuck slave need a hand with the ' + bathroomWord + '?');
        welcomeQuestionOptions.push('Time to get that tiny dick out again *laughs*');
        welcomeQuestionOptions.push('You do know an alpha would never have to ask a lady if they could go to the ' + bathroomWord);
        welcomeQuestionOptions.push('Oh god, are you about to get that pathetic dick out again %SlaveName%?');
        welcomeQuestionOptions.push('It always surprises me how small your dick is when we do this');
        welcomeQuestionOptions.push('Need the ' + bathroomWord + ' beta?');
        welcomeQuestionOptions.push('Great, another chance to see the worlds smallest penis *laughs*');
    }
    let welcomeFollowUpOptions = [
        'What is it this time?', 
        'Lucky me',
        'Stop fidgeting, this won\'t take long...',
        'Well... lets see how we can make it fun for me',
        'Ready for your instructions %Slave%?',
        'What do you need to do?',
        'OK, what is it then?',
        'Tell me, %SlaveName%?',
        'I\'m listening %SlaveName%?',
        'Ok... I\'m waiting?',
        'What\'ll it be?',
        'Well then...?',
    ];
    if(PEE_LIMIT.isAllowed()){
        welcomeFollowUpOptions.push('Hmm I wonder how much you\'ll have to drink this time *giggles*');
        welcomeFollowUpOptions.push('You enjoy drinking your own ' + peeWord + ', don\'t you?');
        welcomeFollowUpOptions.push('I can\'t wait to see how much you\'re going to drink for me...');
        welcomeFollowUpOptions.push('Such a shame you\'re can only drink your own ' + peeWord + ' right now...');
        welcomeFollowUpOptions.push('I just know you\'re desperate for me to order you to drink your own ' + peeWord + '');
        welcomeFollowUpOptions.push('It\'s so funny making you drink your own ' + peeWord + ', I cannot wait for this...');
        welcomeFollowUpOptions.push('I hope you have a glass with you *wicked grin*');
        welcomeFollowUpOptions.push('You look ready for a nice warm glass of ' + peeWord);
    }
    if(VERBAL_HUMILIATION_LIMIT.isAllowed()){
        welcomeQuestionOptions.push('How pathetic');
        welcomeQuestionOptions.push('You are so gross');
        welcomeQuestionOptions.push('You really are useless, aren\'t you?');
        welcomeQuestionOptions.push('How are you going to disgust me now?');
        welcomeQuestionOptions.push('Come on then, lets get this over with...');
        welcomeQuestionOptions.push('Lets make this quick, I already want to gag and we\'ve not even started');
    }
    sendMessageBasedOnSender(random(welcomeQuestionOptions), 0, true);
    sendMessageBasedOnSender(random(welcomeFollowUpOptions), 0, true);
    let options = ['One', 'Two', 'Return'];

    let bathroomLobbyAnswer = createAnswerInput(options);

    while (true) {
        if (bathroomLobbyAnswer.isLike("one", "pee", "piss")) {
            bathroomLobbyAnswer.clearOptions();
            run("Hygiene/Bathroom/One.js");
            break;
        } else if (bathroomLobbyAnswer.isLike("two", "poo", "shit", 'both')) {
            bathroomLobbyAnswer.clearOptions();
            run("Hygiene/Bathroom/Two.js");
            break;
        }  else if (bathroomLobbyAnswer.isLike('back', 'cancel', 'return')) {
            lobbyAnswer.clearOptions();
            break;
        } else {
            sendVirtualAssistantMessage("Well %SlaveName%?");
            sendVirtualAssistantMessage("- One (pee)?");
            sendVirtualAssistantMessage("- Two (poo)?");
            lobbyAnswer.loop();
        }
    }
}