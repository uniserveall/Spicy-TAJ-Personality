{
    setTempVar('findLinkTries', 0);

    findLinkAndRun();
}

function findLinkAndRun() {
    let options;

    if(isInChastity()) {
        options = ['Session/Link/Module/Neutral/*.js', 'Session/Link/Module/Chastity/*.js'];
        sendDebugMessage('Trying to run chastity link');

        setTempVar('minLinksSinceRun', MODULE_LINK.neutralLinkAmount + MODULE_LINK.chastityLinkAmount);

        let winner = getWinnerIndex([MODULE_LINK.neutralLinkAmount, MODULE_LINK.chastityLinkAmount]);

        run(options[winner]);
    } else {
        options = ['Session/Link/Module/Neutral/*.js', 'Session/Link/Module/NoChastity/*.js'];
        sendDebugMessage('Trying to run non chastity link');

        setTempVar('minLinksSinceRun',  MODULE_LINK.neutralLinkAmount  + MODULE_LINK.nonChastityLinkAmount );

        let winner = getWinnerIndex([MODULE_LINK.neutralLinkAmount, MODULE_LINK.nonChastityLinkAmount]);

        run(options[winner]);
    }
}

function tryRunLinkFetchId(minLinksSinceRun) {
    return tryRunLink(getCurrentScriptName(),  minLinksSinceRun);
}

function tryRunLink(linkId, minLinksSinceRun) {
    if(minLinksSinceRun === undefined) {
        minLinksSinceRun = getVar('minLinksSinceRun', 0);
    }

    //Keep track of how many times we tried to find a link
    setTempVar('findLinkTries', getVar('findLinkTries', 0) + 1);

    let maxTries = 10;

    linkId = linkId.toLowerCase();

    //If we already ran that module today try more than 10 times
    if (LINK_HISTORY.isInTodaysHistory(linkId)) {
        maxTries = 30;
    }

    if (LINK_HISTORY.isInHistory(linkId)) {
        //Check whether not enough modules have passed since last time we ran this module
        if (LINK_HISTORY.getModulesSinceHistory(linkId) < minLinksSinceRun) {
            if(getVar('findLinkTries') < maxTries) {
                //Try to find a different link
                findLinkAndRun();
                return false;
            }
        }
    }

    sendDebugMessage('Executing link and adding to history');

    LINK_HISTORY.addHistoryRun(linkId);
    return true;
}
