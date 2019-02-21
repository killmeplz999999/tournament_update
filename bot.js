const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!test') {


smashgg.getTournament('to12')
    .then(to12 => {
        to12.getAllPlayers()
        .then(players => {
            var playerCount = players.length;
            console.log(`${playerCount} players entered Tipped Off 12`);
            // Log basic info about every player
            players.forEach(player => {
                console.log(
                    'Name: ' + player.getName() + '\n',
                    'Tag: ' + player.getTag() + '\n',
                    'State: ' + player.getState() + '\n'
                );
            })
        })
        .catch(err => console.error(err));

        to12.getAllMatches()
            .then(matches => {
                console.log(`${sets.length} total matches were played at Tipped Off 12`);
                matches.forEach(match => {
                    console.log(
                        // Get score
                        `[${match.getRound() + ': ' + match.getWinner().getTag() + ' ' + match.getWinnerScore() + ' - ' + match.getLoserScore() + ' ' + match.getLoser().getTag()}] \n`,
                        // Get winner final placement
                        `${match.getWinner().getTag()} placed  ${match.getWinner().getFinalPlacement()} \n`,
                        // Get loser final placement
                        `${match.getLoser().getTag()} placed ${match.getLoser().getFinalPlacement()} \n`
                    );
                })
            })
            .catch(err => console.error(err));
    })
.catch(error => {
    console.error('An error occurred: ', error);
})
    	
		// message.reply(bscmsg + map + pnmbf);

				  	}
});
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
        
