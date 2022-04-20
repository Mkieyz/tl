const translate = require('translate-google')
module.export.run = async (client, message, args) => {
  translate(args.join(" "), { to: 'en'}),then(res => {
    message.channel.send(res)
  })
}
