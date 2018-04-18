



exports.run = (client, message, args) => {

    var max = 350 * 1000;
    var min = 305 * 1000;
    var cycles;

    if (!args[0]) cycles = 10;
    else cycles = args[0];

    message.channel.send('.forage');

    var delay = Math.floor(Math.random() * (max - min + 1)) + min;
    var i;


    //Assign forage commands
    for (i = 0; i < cycles; i++) {

        //Assign Forage Commands
        setTimeout(() => {

            message.channel.send('.forage');
        }, delay)


        delay = delay + Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Tell user script is complete
    setTimeout(() => {

        message.channel.send('-forage');
    }, delay + 1200)





}