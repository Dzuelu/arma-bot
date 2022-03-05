import { Message } from 'discord.js';
import { anyContent } from 'reactions';
import { chance } from 'utils';

export const messageCreate = async (message: Message<boolean>): Promise<void> => {
  // console.log('messageCreate', message);

  // chance(0.5, () => iSleep(message));
  anyContent(message);
};
