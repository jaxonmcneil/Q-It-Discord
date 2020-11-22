module.exports = {
    name: 'it',
    description: 'Q-It joins the voice channel and begins a game of Q-It with other users in the same channel',
    async execute(msg, qit, args) {
        if (msg.member.voice.channel) {
            const connection = await msg.member.voice.channel.join();
            qit.channel = msg.member.voice.channel;
        }
        for (const member of qit.channel.members) {
            player = new Player(memberID, member);
            qit.players.push(player);
        }
    },
};