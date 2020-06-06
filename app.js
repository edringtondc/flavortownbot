const Discord = require("discord.js")
const client = new Discord.Client()
require("dotenv").config();

const https = require('https');
let response;

client.on("ready", () => {
// getGif()
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {  
  let theMessage = msg.content.toLowerCase().replace(/\s/g,'');
  console.log(theMessage);

  if (theMessage.includes("flavortown")) {

    https.get('https://api.giphy.com/v1/gifs/search?api_key=KPuzM4uWpifP2TSslQDOG5ALwjwj0TzN&q=guyfieri', (res) => {
    //   console.log('statusCode:', res.statusCode);
    //   console.log('headers:', res.headers);
      let body = [];
      res.on('data', (chunk) => {
        body.push(chunk);
      }).on('end', () => {
        body = Buffer.concat(body).toString();
        // at this point, `body` has the entire request body stored in it as a string
        const json = JSON.parse(body);
        let randomNum = Math.floor(Math.random() * json.data.length)
        response = json.data[randomNum].images.downsized_large.url;
        console.log(response)
        msg.reply(response)
                   // msg.reply("welcome to flavor town!");
                 
      });
    })
}
    
    }).on('error', (e) => {
      console.error(e);
    });
 
      client.login(process.env.BOT_TOKEN)
        // Parameter info object for '/project1/my-parameter'
