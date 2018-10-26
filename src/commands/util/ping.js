const { oneLine } = require('common-tags');
const Command = require('../base');

module.exports = class PingCommand extends Command {
	   constructor(client) {
        super(client, {
			name: 'ping',
			aliases: ['gecikme'],
			group: 'muzik',
			memberName: 'ping',
			description: 'Botun pingini gösterir.',
			guildOnly: true,
            throttling: {
                usages: 1,
                duration: 10
            },
        });

    }

    async run(msg) {
		if(!msg.editable) {
			const pingMsg = await msg.reply('Hesaplanıyor...');
			return pingMsg.edit('' + (msg.channel.type !== 'dm' ? msg.author : '') + ':mega: *Pong!* Mesaj Gecikmesi: ' + (pingMsg.createdTimestamp - msg.createdTimestamp) + 'ms! ' + (this.client.ping ? '`Websocket: ' + Math.floor(this.client.ping) + 'ms`' : ''));
		} else {
			await msg.edit('Hesaplanıyor...');
			return msg.edit('' + (msg.channel.type !== 'dm' ? msg.author : '') + ':mega: *Pong!* Mesaj Gecikmesi: ' + (msg.createdTimestamp - msg.createdTimestamp) + 'ms! ' + (this.client.ping ? '`Websocket: ' + Math.floor(this.client.ping) + 'ms`' : ''));
		}
    }
};
