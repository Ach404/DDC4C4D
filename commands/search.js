



exports.run = (client, message, args) => {

    var max = 605 * 1000;
    var min = 600 * 1000;
    var cycles;

    if (!args[0]) cycles = 10;
    else cycles = args[0];

    message.channel.send('.search');

    var delay = Math.floor(Math.random() * (max - min + 1)) + min;
    var i;


    //Assign forage commands
    for (i = 0; i < cycles; i++) {

        //Assign Forage Commands
        setTimeout(() => {

            message.channel.send('.search');
        }, delay)


        delay = delay + Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Tell user script is complete
    setTimeout(() => {

        message.channel.send('>search');
    }, delay + 1200)





}