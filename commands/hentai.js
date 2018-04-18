



exports.run = (client, message, args) => {

    var max = 20 * 1000;
    var min = 16 * 1000;
    var cycles;

    if (!args[0]) cycles = 10;
    else cycles = args[0];

    message.channel.send('%hentaigif');

    var delay = Math.floor(Math.random() * (max - min + 1)) + min;
    var i;


    //Assign forage commands
    for (i = 0; i < cycles; i++) {

        //Assign Forage Commands
        setTimeout(() => {

            message.channel.send('%hentaigif');
        }, delay)


        delay = delay + Math.floor(Math.random() * (max - min + 1)) + min;
    }

    //Tell user script is complete
    setTimeout(() => {

        message.channel.send('>hentai');
    }, delay + 1200)





}