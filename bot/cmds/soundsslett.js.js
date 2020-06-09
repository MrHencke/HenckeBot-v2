module.exports = {
    name: 'slett',
    description: '',
  category: 'hjelpemetode',
    aliases: [],
    execute(bot, msg, args) {
          if (msg.author.id == process.env.HenckeID || msg.author.id == "152019710949588992") {
                    const amount = (parseInt(args.join(" "), 10))+1;
                    if (isNaN(amount) == true) {
                        return msg.channel.send("Skriv inn et tall da din nepe.");
                    } else if (!amount) {
                        return msg.reply(
                            "Kan du lese? Skriv inn et tall mellom 2 og 100, helst ikke vær grådig og gå for hundre. Husk at du kan telle på hånden om du trenger hjelp."
                        );
                    } else if (amount > 100) {
                        return msg.channel.send("App, app, app! Bare 100 om gangen.");
                    } else if (amount < 2) {
                        return msg.channel.send(
                            "Imagine å prøve å slette noe så lite, nesten like lite som relevansen til TrashBot."
                        );
                    }
                    msg.channel.bulkDelete(amount).catch(err => {
                        console.error(err);
                        msg.channel.send("Jeg har visst ikke lov til dette");
                    });
                } else {
                    msg.reply("App, app, app! Dette har du ikke lov til.");
                }     
    },
};