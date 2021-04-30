{
    let menu = createMenu('Clothing');

    menu.registerOption('Bra', ['bra'], function (answer) {
        setCurrentSender(SENDER_ASSISTANT);
        run('Assistant/Settings/Toys/Clothes/Bra.js');
        return false;
    });

    menu.registerOption('Panty', ['panty'], function (answer) {
        setCurrentSender(SENDER_ASSISTANT);
        run('Assistant/Settings/Toys/Clothes/Panty.js');
        return false;
    });

    menu.registerOption('Skirt', ['skirt'], function (answer) {
        setCurrentSender(SENDER_ASSISTANT);
        run('Assistant/Settings/Toys/Clothes/Skirt.js');
        return false;
    });

    menu.registerOption('Trouser', ['trouser'], function (answer) {
        setCurrentSender(SENDER_ASSISTANT);
        run('Assistant/Settings/Toys/Clothes/Trouser.js');
        return false;
    });

    menu.registerOption('Stocking', ['stocking'], function (answer) {
        setCurrentSender(SENDER_ASSISTANT);
        run('Assistant/Settings/Toys/Clothes/Stocking.js');
        return false;
    });


    menu.registerOption('High Heel', ['High Heel'], function (answer) {
        setCurrentSender(SENDER_ASSISTANT);
        run('Assistant/Settings/Toys/Clothes/Heel.js');
        return false;
    });

    menu.registerOption("Return", ["return"], function (answer) {
        return true;
    });

    menu.callMenu();
}