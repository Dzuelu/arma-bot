import { Message } from 'discord.js';

const reactWith = async (content: string, keyWords: string[], message: Message<boolean>): Promise<void> => {
  const keyWordsFound = keyWords.filter(keyWord => message.content.includes(keyWord));
  if (keyWordsFound.length > 0) {
    await message.react(content);
  }
};

export const anyContent = async (message: Message<boolean>): Promise<void> => {
  await Promise.all([
    // reactWith('809906065247436830', ['brain', 'bot', 'coc'], message),
    // reactWith('676623420997238784', ['69', 'nice'], message)
  ]);
};
