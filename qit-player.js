const Queue = require('./queue');

class QItPlayer {
    constructor(member){
        this.member = member;
        this.queue = new Queue.Queue();
    }
}

module.exports.QItPlayer = QItPlayer;