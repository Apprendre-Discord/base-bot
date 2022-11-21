const { Client, Events, GatewayIntentBits, REST, Routes, SlashCommandBuilder } = require('discord.js');
const { token, clientId, guildId } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// Deploy command
const pingCommand = new SlashCommandBuilder()
		.setName('ping')
		.setDescription('🏓 Répond pong !');
const rest = new REST({ version: '10' }).setToken(token);
(async () => { 
    try {
        console.log(`Début du chargement de la slash commande.`);

        const data = await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: [pingCommand.toJSON()] },
        );

        console.log(`Chargement de la slash commande effectuée avec succès.`);
    } catch (error) {
        console.error(error);
    }
})();


client.once(Events.ClientReady, c => {
	console.log(`${c.user.tag} est connecté !`);
});

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.commandName == 'ping'){
        await interaction.reply({ content: '🏓 Pong !', ephemeral: true });
    }
});

client.login(token);

