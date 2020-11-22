const Queue = require('./queue');
const QItPlayer = require('./qit-player');

class QIt {
    constructor() {
        this.queue = new Queue.Queue();
        this.players = [];
    }
    pollPlayers() {
        for(const player of this.players){
            player.send("send song requests here!");
        }
    }
}

module.exports.QIt = QIt;