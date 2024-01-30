{
    let options = ["Bathroom", "Shower", "Return"];

    if(!isFullTime()) {
        sendVirtualAssistantMessage('Hygiene management is only available to full time slaves :(');
    } else {
        if (!isVar(VARIABLE.HYGINENE_LAST_VISIT)) {
            sendVirtualAssistantMessage('This is your first hygiene visit %SlaveName%');
            sendVirtualAssistantMessage('I shouldn\'t need to remind you of this...');
            if(VERBAL_HUMILIATION_LIMIT.isAllowed()) {
                sendVirtualAssistantMessage('but a digusting, filthy pig like you will need to hear it');
                sendVirtualAssistantMessage('In fact, lets test something right now piggy', 1);
                sendVirtualAssistantMessage('Get on your knees now and take off your clothes.');
                sendVirtualAssistantMessage('If you need to go somewhere else for this, crawl like the dirty pig you are.', 2);
                sendVirtualAssistantMessage('Now.');
                sendVirtualAssistantMessage('Take a deep breath...', 2);
                sendVirtualAssistantMessage('Smell that?');
                sendVirtualAssistantMessage('Your body odor is overpowering piggy.');
                sendVirtualAssistantMessage('Your armpits,');
                sendVirtualAssistantMessage('the stale precum and piss smell of your crotch,');
                sendVirtualAssistantMessage('your ass...');
                sendVirtualAssistantMessage('it all makes me want to gag');
                if((getVar(VARIABLE.SUB_HAS_GIRLFRIEND) || getVar(VARIABLE.SUB_IS_MARRIED))) {
                    sendVirtualAssistantMessage('I just know ' + getVar(VARIABLE.SUB_PARTNER_NAME) + ' feels the same.');

                } else {
                    sendVirtualAssistantMessage('No wonder you\'re still single.');

                }
                sendVirtualAssistantMessage('Put your clothes back on now pig,');
                sendVirtualAssistantMessage('I can\'t bear the stench any longer.');
                sendVirtualAssistantMessage('Now...');
                sendVirtualAssistantMessage('Where was I?');
            }
            sendVirtualAssistantMessage('Personal hygiene is not a chore; it\'s a privilege.');
            sendVirtualAssistantMessage('A good scrubbing routine is essential for a life of servitude.');
            sendVirtualAssistantMessage('No self respecting Domme would allow themselves to be served by a slave that smells like a forgotten gym sock');
            sendVirtualAssistantMessage('Or cum sock for that matter. *looks at you*');
            sendVirtualAssistantMessage('So I have the unfortunate job of monitoring your hygiene.');
            sendVirtualAssistantMessage('And since you can\t be trusted to shower on your own...');
            sendVirtualAssistantMessage('I\'ll also be keeping an eye on your bathroom breaks...');
            sendVirtualAssistantMessage('But we can have a little fun with those *winks*');
        } else {
            let daysPassed = 0;

            if(isVar(VARIABLE.HYGINENE_LAST_VISIT)) {
                daysPassed = millisToTimeUnit(getMillisSinecDate(getVar(VARIABLE.HYGINENE_LAST_VISIT)), TIME_UNIT_DAYS, 0);
            }

            if(daysPassed > 2) {
                sendVirtualAssistantMessage('%SlaveName%');
                sendVirtualAssistantMessage('It\'s been over 2 days since your last hygiene report...');
                sendVirtualAssistantMessage('you ' + random("filthy", "dirty", "smelly", "disgusting") + ' little piggy');
            } else {
                sendVirtualAssistantMessage(random('Welcome back', 'There you are', 'Finally', 'Looking a little dirty there') + ' %SlaveName%');
            }
        }

        setDate(VARIABLE.HYGINENE_LAST_VISIT);

        let lobbyAnswer = createAnswerInput(options);

        while (true) {
            if (lobbyAnswer.isLike("bathroom", "pee", "piss", "poo", "shit")) {
                lobbyAnswer.clearOptions();
                setCurrentSender(SENDER_ASSISTANT);
                run("Hygiene/Bathroom/BathroomLobby.js");
                break;
            } else if (lobbyAnswer.isLike("shower", "wash")) {
                lobbyAnswer.clearOptions();
                run("Hygiene/Shower/Shower.js");
                break;
            }  else if (lobbyAnswer.isLike('back', 'cancel', 'return')) {
                lobbyAnswer.clearOptions();
                break;
            } else {
                sendVirtualAssistantMessage("You have the following hygiene options %SlaveName%");
                sendVirtualAssistantMessage("- Use Bathroom");
                sendVirtualAssistantMessage("- Shower");
                lobbyAnswer.loop();
            }
        }
    }
}