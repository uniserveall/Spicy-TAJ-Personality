{
    ////////////////////////////////
    // Calculate Instructions
    ////////////////////////////////
    let messChance = 0;

    // 1 - dressed
    // 2 - naked
    // 3 - boxers
    let clothing = randomInteger(1, 3);

    // 1 - bathroom
    // 2 - stay where you are
    let roomCalc = randomInteger(1, 5);
    let room = 1;
    if (roomCalc == 5) {
        room = 2;
    }
    if (!PEE_LIMIT.isAllowed()) {
        room = 1;
    }
    let recepticle = 3;
    if (room == 1) { // bathroom
        // 1 - bowl 
        // 2 - glass
        // 3 - toilet
        let recepticleCalc = randomInteger(1, 5);
        if (recepticleCalc == 4) {
            recepticle = 1;
        } else if (recepticleCalc = 5) {
            recepticle = 2;
        }
    } else { // stay where you are
        // 1 - bowl 
        // 2 - glass
        recepticle = randomInteger(1, 2);
    }
    if (!PEE_LIMIT.isAllowed()) {
        recepticle = 3;
    }

    if (recepticle == 1 || recepticle == 2) { // bowl or glass
        // 1 - stand 
        // 2 - hover
        // 3 - kneel
        // 4 - plank
        let position = randomInteger(1, 4);
    } else { // toilet
        // 30 - sit
        // 31 - stand 
        // 32 - hover
        // 33 - kneel
        let position = randomInteger(30, 33);
    }
    
    let toiletSetup = 0;
    if (recepticle == 3) { // toilet
        // 1 - seat up
        // 2 - seat down
        // 3 - lid down
        toiletSetup = 1;
        let toiletSetupCalc = randomInteger(1, 21);
        if (toiletSetupCalc == 21 && PEE_LIMIT.isAllowed()) {
            toiletSetup = 3;
            messChance = 1;
        } else if (toiletSetupCalc > 10) {
            toiletSetup = 2;
        }
    }

    // 1 - hard
    // 2 - soft
    let dickStatusCalc = randomInteger(1, 4);
    let dickStatus = 2;
    if (!isInChastity()) {
        if (dickStatusCalc == 4) {
            dickStatus = 1;
            messChance = 1;
        }
    }

    // 1 - no touching
    // 2 - touching
    let touching = randomInteger(1, 2);
    if (touching == 1 && dickStatus == 1) {
        messChance = 1;
    }
    
    let disposal = 0;
    if (recepticle == 1) { // glass
        // 1 - tip and fill with another drink without washing
        // 2 - take glass with you and sip
        // 3 - tip
        // 4 - drink 
        disposal = randomInteger(1, 6);
    } else if (recepticle == 2) { // bowl
        // 21 - tip
        // 22 - drink
        // 23 - submerge face and drink
        disposal = randomInteger(21, 27);
    } else if (recepticle == 3) {
        if (randomInteger(1, 10) == 10) {
            // 50 - fill a cup from the toilet and drink
            disposal = 50;
        }
    }
    let disposalAmount = 0;
    if (disposal == 4 || disposal == 22 || disposal == 23 || disposal == 50) {
        // 1 - all
        // 2 - one quarter
        // 3 - half
        // 4 - three quarters
        // 5 - random sips
        disposalAmount = random(1, 5);
    }
    
    let gargleChance = 0;
    if (
        disposal == 2 
        || disposal == 4
        || disposal == 22
        || disposal == 50
    ) {
        // 1 - gargle after each sip
        gargleChance = randomInteger(0, 1);
    }

    // 1 - dab end with tissue
    // 2 - dab end with finger & lick, then tissue
    let dickCleanUp = randomInteger(1, 2);
    if (!PEE_LIMIT.isAllowed()) {
        dickCleanUp = 1;
    }
    
    let messCleanUp = 0;
    if (messChance == 1) {
        // 1 - clean with tissue
        // 2 - clean with tongue
        messCleanUp = randomInteger(1, 2);
    }
    if (!PEE_LIMIT.isAllowed()) {
        messCleanUp = 1;
    }

    ////////////////////////////////
    // Get Words
    ////////////////////////////////
    let recepticalWord = 'toilet';
    if (recepticle == 1) {
        recepticalWord = 'bowl';
    } else if (recepticalWord == 2) {
        recepticalWord = random('glass', 'cup', 'mug');
    }

    let bathroomWord = random('bathroom', 'restroom', 'toilet');

    let peeWord = random('pee', 'piss', 'urinate', 'go')

    let peeingWord = random('peeing', 'pissing', 'urinating', 'going');

    let dickWord = random('dick ', 'cock ', 'penis ');

    // amount
    // 1 - all
    // 2 - one quarter
    // 3 - half
    // 4 - three quarters
    // 5 - random sips
    let amountWord = 'all';
    switch (disposalAmount) {
        case 1:
            amountWord = 'all';
            break;
        case 2:
            amountWord = 'one quarter';
            break;
        case 3:
            amountWord = 'one half';
            break;
        case 4:
            amountWord = 'three quarters';
            break;
        case 5:
            amountWord = random(1, 10) + ' sips';
            break;
    }
    ////////////////////////////////
    // Instruct
    ////////////////////////////////
    sendMessageBasedOnSender(random('Ok', 'Well', 'Lets see') + ' %SlaveName%...');
    // get glass or bowl
    if (recepticle == 1 || recepticle == 2) {
        sendMessageBasedOnSender(
            random(
                'First, I want you to fetch a ', 
                'Fetch a ', 
                'Go and get ', 
                'Bring me a ', 
                'How about you play bartender for a bit and fetch a ', 
                'I think a little work out is in order, go fetch a '
            )
            + recepticalWord
        );
        sendMessageBasedOnSender(random(
            'Tell me when you have it', 
            'Let me know when you\'re back'
        ));
        waitForDone();
        sendMessageBasedOnSender('%Good%');
    }
    // room instructions
    if (room == 1) {
        sendMessageBasedOnSender(random(
            'When I say so, I want you to go to the ' + bathroomWord,
            'I want you in the ' + bathroomWord + ' for this',
            'Head to the ' + bathroomWord + ' on my order',
            'You\'ll need to head to the ' + bathroomWord + ' %Slave%',
            '%SlaveName%, go to the ' + bathroomWord,
            'I\'ll need you in the ' + bathroomWord + ' for what I have planned'
        ));
    } else if (room == 2) {
        sendMessageBasedOnSender(random(
            'Stay RIGHT where you are', 
            'You\'re not going anywhere %Lol%', 
            'Here seems perfect for what I have in mind', 
            'Don\'t go anywhere %SlaveName%, I want to see this',
            'I\'ve had a fun idea... stay there *wicked grin*'
        ));
    }
    // dress instructions
    let clothingInstructions = [];
    if (clothing == 1) {
        clothingInstructions = [
            'You can stay dressed for this',
            'Keep whatever you\'re wearing on',
            'Keep your clothes on this time',
            'What you are wearing will do',
            'Keep your clothes on %Slave%',
            'No stripping for you,.%Slave% Keep every piece of clothing on',
            'I want you to be fully dressed',
            'I\'ll allow you to stay fully dressed for this'
        ];
        if(VERBAL_HUMILIATION_LIMIT.isAllowed()){
            clothingInstructions.push('Keep your clothes on, I don\'t want to see that beta body right now');
            clothingInstructions.push('Best if you stay dressed, I\'ve seen enough pathetic bodies for one day');
        }
    } else if (clothing == 2) {
        clothingInstructions = [
            'I want you naked for this',
            'Get naked for me',
            'Strip %Slave%',
            'Clothes off %Slave%',
            'Get completely naked',
            'You should be naked',
            'I want you to slowly remove your clothes for me.',
            'Take off your underwear and show me everything',
            'I want you to be completely naked for me. Every last article of clothing',
            'I want you to be completely vulnerable for me. Remove everything',
            'You will strip down and show me your submission. Now.'
        ];
    } else if (clothing == 3) {
        clothingInstructions = [
            'I\'ll need you in just your underwear',
            'Strip to your underwear',
            'Take everything off... but keep your underwear on',
            'I want to see you down to your underwear %SlaveName%',
            'I want you to strip down for me. Every. Single. Thing. But leave those underwear on',
            'It\'s time to get undressed for me. Take off every piece of clothing, but leave your underwear on',
            'Take off all of your clothes. But keep those underwear on... I\'m waiting %Slave%',
            'Remove everything you have on apart from your underwear'
        ];
    }
    sendMessageBasedOnSender(random(clothingInstructions));
    // receptical and position instructions
    sendMessageBasedOnSender(random(
        'You\'ll be ' + peeingWord + ' in the ' + recepticalWord,
        'I want you to ' + peeWord + ' in the ' + recepticalWord,
        'You will ' + peeWord + ' in the ' + recepticalWord + ' %SlaveName%',
        'Take the ' + recepticalWord + ' and ' + peeWord + ' in it %Slave%',
        'I want to see you ' + peeingWord + ' in the ' + recepticalWord
    ));
    // 1 - stand 
    // 2 - hover
    // 3 - kneel
    // 4 - plank
    // 30 - sit
    // 31 - stand 
    // 32 - hover
    // 33 - kneel
    if (position == 1) {
        if (room == 1) {
            sendMessageBasedOnSender(random(
                'And I want you to stand with the ' + recepticalWord + ' between your feet',
                'I\'ll allow you to stand, but keep the ' + recepticalWord + ' at your feet',
                'Stand %Slave%, with the ' + recepticalWord + ' at your feet',
                'You may stand with the ' + recepticalWord + ' on the floor in front of you %SlaveName%'
            ));
        } else if (room == 2) {
            sendMessageBasedOnSender(random(
                'I want you standing...',
                'I\'ll allow you to stand...',
                'Stand %Slave%...',
                'You may stand %SlaveName%...'
            ));
            sendMessageBasedOnSender(random(
                'But you should hold the ' + recepticalWord + ' so you don\'t make a mess in here',
                'Hold the ' + recepticalWord + ' up to that ' + dickWord,
                'I want you holding the ' + recepticalWord + ' up to that ' + dickWord + ' so we don\'t make any mess here'
            ));
        }
    } else if (position == 31) {
        sendMessageBasedOnSender(random(
            'You may stand this time',
            'I\'m feeling genrous so you can stand %Slave%',
            'You can stand while you ' + peeWord + ' %Slave% ',
            'I\'ll let you stand upright for this' 
        ));
    } else if (position == 2 || position == 32) {
        sendMessageBasedOnSender(random(
            'You should squat over it',
            'Hover over it like a girl',
            'I want you to hover over it this time',
            'Squat like a girl over it for me %SlaveName%',
            'Let me see you hover over it %Slave%'
        ));
    } else if (position == 3 || position == 33) {
        sendMessageBasedOnSender(random(
            'But you should be on your knees',
            'But I want to see you kneeling',
            'And I want you on your knees for this',
            'Let me see you kneel for this',
            'Do it on your knees',
            'Do it kneeling'
        ));
    } else if (position == 4) {
        sendMessageBasedOnSender(random(
            'Hmm... but I think you\'re in need of a little work out',
            'I want to make this a little hard for you though',
            'Lets see if we can make it more difficult ',
            'I want to make it challenging for you though',
        ));
        sendMessageBasedOnSender(random(
            'Let me see you plank %Lol% while you ' + peeWord,
            'Plank for me %Slave%',
            'Do a plank over the ' + recepticalWord,
            'I need you to plank over the ' + recepticalWord + ' while you ' + peeWord,
        ));
    } else if (position == 30) {
        sendMessageBasedOnSender(random(
            'You can sit this time',
            'Take a load off, %SlaveName%. You can sit for this',
            'Because I\'m generous, you may be seated',
            'Sit down'
        ));
    }
    // lid instructions
    if (recepticle == 3) {
        // 1 - seat up
        // 2 - seat down
        // 3 - lid down
        if (toiletSetup == 1) {
            if (clothing == 3 && position == 30 && random(0, 5) == 5) {
                sendMessageBasedOnSender('Leave the seat up...');
                sendMessageBasedOnSender('But I do not want to see you pull your underwear down %Lol%');
                sendMessageBasedOnSender('That\'s right sit IN the toilet and piss yourself %SlaveName% %Wicked%');
            } else {
                sendMessageBasedOnSender(random(
                    'Leave the seat up',
                    'Lift the lid and seat',
                    'I want the seat and lid to be raised',
                    'Keep the seat up'
                ));
            }
        } else if (toiletSetup == 2) {
            sendMessageBasedOnSender(random(
                'Lid up, but seat down %SlaveName%',
                'Keep the seat down',
                'I want the seat down and the lid to be raised',
                'Keep the seat dowm'
            ));
        } else if (toiletSetup == 3) {
            sendMessageBasedOnSender(random(
                'But... I want you to put the seat AND lid down %Wicked%',
                'Lets close the lid however',
                'And I want you to shut the lid',
                'Keep the lid shut though %Lol%'
            ));
            sendMessageBasedOnSender(random(
                'No I\'m not joking',
                'I want you to make a big mess',
                'This is going to be fun to watch',
                'I can\'t wait to see how this turns out'
            ));
        }
    }
    
    sendMessageBasedOnSender(random(
        'Now then...',
        'Now...',
        'Ok...'
    ));
    // hardness
    // 1 - hard
    // 2 - soft
    if (dickStatus == 1) {
        sendMessageBasedOnSender('For an extra challenge');
        sendMessageBasedOnSender(random(
            'Make yourself hard for me',
            'I want you to be hard',
            'Get yourself hard',
            'You\'ll need to get hard'
        ));
        sendMessageBasedOnSender(random(
            'But no edging',
            'Don\'t get carried away though'
        ));
    }
    // touching
    // 1 - no touching
    // 2 - touching
    let touchingInstructions = [];
    if (touching == 1) {
        touchingInstructions.push('You may not touch %DomHonorific% %DomName%\'s property');
        touchingInstructions.push('Do not touch %DomHonorific%\'s cock');
        touchingInstructions.push('You\'re not allowed to touch  %DomName%\'s property');
        touchingInstructions.push('No touching of %DomName%\'s dick while you go %Slave%');
        touchingInstructions.push('You\'re not allowed to use your hands to aim');
    } else {
        touchingInstructions.push('You can touch %DomHonorific%\'s cock if you need to');
        touchingInstructions.push('You may touch your %DomHonorific%\'s dick if needed');
        touchingInstructions.push('You may use your hands to aim');
        touchingInstructions.push('You can aim %DomHonorific%\'s cock with you hands ');
        touchingInstructions.push('I\'ll allow you to touch %DomHonorific%\'s cock to aim');
    }
    sendMessageBasedOnSender(random(touchingInstructions));

    sendMessageBasedOnSender(random(
        'Now for my favourite part',
        'Now the real fun begins',
        'Ok, lets have some real fun now'
    ));
    // disposal
    // 1 - tip and fill with another drink without washing
    // 2 - take glass with you and sip
    // 3 - tip
    // 4 - drink 
    // 21 - tip
    // 22 - drink
    // 23 - submerge face and drink
    // 50 - fill a cup from the toilet and drink
    if (disposal == 1) {
        sendMessageBasedOnSender(random(
            
        ));
    }
    
    

    // gargle
    // 1 - gargle after each sip

    // dick clean up

    // mess clean up

    //sendMessageBasedOnSender('Tell me when you are done %SlaveName%');
    // waitForDone();
    // sendMessageBasedOnSender('%Good%');
}