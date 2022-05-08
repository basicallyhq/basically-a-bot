import { Client, Intents } from 'discord.js';
import path from 'path';
import HandleBot from './classes';

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_MEMBERS
	]
});

new HandleBot({
	client: client, // the client
	commandFileTypes: 'ts', // typescript or javascript
	commandsDir: path.join(__dirname, 'commands/slash'), // the directory of the commands (make sure to include the whole path)
	eventsDir: path.join(__dirname, 'events'), // event file directory (make sure to include the whole path)
	handleCommands: true, // whether to use the command handler or no
	handleEvents: true, // whether to use event handler or no
	jsonFilePathForRoleInfo: path.join(__dirname, 'roles.json'), // the directory for where to store the role info (should be a json file with the full path included)
	reactionRoles: true, // whether you want to handle reaction roles
	defaultPrefix: '.', // the default prefix
	handleTextCommands: true,
	textCommandsDir: path.join(__dirname, 'commands/text'), // the directory of the text commands (make sure to include the whole path)
	test: false
});
