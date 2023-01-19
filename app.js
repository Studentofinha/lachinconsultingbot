const {Telegraf} = require("telegraf");
const bot=new Telegraf(`5974755223:AAHXtZMqGxjnOpxyt-qvCy3_60087652eMM`);

const CronJob = require('cron').CronJob;


bot.start((ctx)=>{
    
    const job = new CronJob('0 24 * * * *',function() {
        ctx.replyWithDocument({source:'./file/frontend.pdf'})
        },
        null,
        true
    );
    job.start()
})

bot.launch();