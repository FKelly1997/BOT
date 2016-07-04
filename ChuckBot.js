var Botkit = require('botkit');
var Factgen = require ('./jason')
var controller = Botkit.slackbot({
  debug: false
});

controller.spawn({
  token: "xoxb-56653553617-gdhoYIRnn2KuGjoSe9BxlzoT",
}).startRTM()

controller.hears('hello',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'Hello yourself, it is I Chuck Norris, yes yes hold you screams, i know i am amazing.');

});

 controller.hears('Tell me something about you',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'When I do pushups, I dont push myself up I push the world down');
 });


controller.hears('who created you',['direct_message','direct_mention','mention'],function(bot,message) {

  bot.reply(message,'the mighty fluff, the one knows as the fikachu');
 });


 controller.hears('where am I',['direct_message','direct_mention','mention'],function(bot,message) {
    bot.reply(message, getIP());
  });


  controller.hears('Tell me about (.*)',['direct_message','direct_mention','mention'],function(bot,message) {
    var topic = message.match[1].toLowerCase(); //match[1] is the (.*) group. match[0] is the entire group (open the (.*) doors).
    if (topic === 'chuck') {
      return bot.reply(message, "I once had a heart attack... the heart lost.");
    }
  });

controller.hears(["Facts", "try and hit me"], ['direct_message','direct_mention','mention'], function(bot,message) {
  bot.reply(message, Factgen.getFacts() )
});