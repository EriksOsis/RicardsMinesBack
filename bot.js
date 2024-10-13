const { Telegraf } = require('telegraf');

// Replace 'YOUR_BOT_TOKEN' with the token provided by BotFather
const bot = new Telegraf('7737982835:AAG9lHDZo2xX0KKcZcd677wK2qL7Tj7Hv3Q');

// Start command handler
bot.start((ctx) => {
    ctx.replyWithPhoto(
        'https://imgur.com/a/StNNHCp', // Replace with your image URL
        {
            caption: 'Welcome To The DragosMines - AI BOT!🤖 Press "PLAY NOW" to start playing👇🏽!',
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Open Mini-App',
                            web_app: {
                                url: 'https://dragosmines.netlify.app/' // Replace with your mini-app URL
                            }
                        }
                    ]
                ]
            }
        }
    );
});

// Launch the bot
bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
