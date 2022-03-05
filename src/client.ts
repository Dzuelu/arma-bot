import { Client, Intents } from 'discord.js';
import { interactionCreate, messageCreate } from 'handlers';
import { discordToken } from 'utils';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
  partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'USER', 'GUILD_MEMBER']
});

client.on('ready', async () => {
  console.log('ready');
  // The id of the general channel in ArmandaLeg Server
  // To find a channel id, right click channel and copy link
  // https://discord.com/channels/884592833787486318/884592833787486320
  // Use the last(?) number as the id for that channel
  const generalChannel = client.channels.cache.get('884592833787486320');
  if (generalChannel?.isText()) {
    generalChannel.send('Artillery ready to fire!');
  }
});

client.on('messageCreate', messageCreate);
client.on('interactionCreate', interactionCreate);

client.login(discordToken());
