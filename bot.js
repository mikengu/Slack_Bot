const botKit = require('botkit');
const request = require('superagent');

if(!process.env.token) {
    console.log('Error: Specify a token in an environment variable');
    process.exit(1);
}

const controller = botKit.slackbot();

controller.spawn({
    token: process.env.token
}).startRTM();

controller.on('channel_joined', (bot, message) => {
    bot.say({
        text: `I didn't want to join ${message.channel.name} ¬_¬ but I guess...`,
        channel: message.channel.id
    })
})