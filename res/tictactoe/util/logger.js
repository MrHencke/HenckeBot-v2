class Logger {

    constructor() {
        this._prefix = console.log('TicTacToe Bot | ');
        this._silent = false;
    }

    setSilent(silent) {
        this._silent = silent;
    }

    log(message) {
        if (!this._silent) {
            console.log(this._prefix + message);
        }
    }

    success(message) {
        if (!this._silent) {
            console.log(this._prefix + console.log(message));
        }
    }

    error(message) {
        console.log(this._prefix + console.log(message));
    }

}

module.exports = new Logger();