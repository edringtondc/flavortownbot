const Discord = require("discord.js")
const client = new Discord.Client()

const https = require('https');
let response;

client.on("ready", () => {
// getGif()
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {   
    if (msg.content.toLowerCase().includes("flavortown") ) {
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
        console.log("randomNum: " + randomNum)
        response = json.data[randomNum].images.downsized_large.url;

        console.log("reply " + response);
        
        console.log("response " + response)        
        msg.reply(response)
                   // msg.reply("welcome to flavor town!");
                 
      });
    })
}
    
    }).on('error', (e) => {
      console.error(e);
    });
    


    
//   if (msg.content.toLowerCase().includes(messages)) {
//     msg.reply("welcome to flavortown")
//   }

client.login("NzE3ODgzODY2NjY4NDY2MTk2.XtvTuw.WOYRSxkt1pJz09z2q9TtMKhSjwI")