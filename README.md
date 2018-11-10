# is-socket-reset-error

**Checks if the provided error is socket reset error.**

## Example

```javascript
const { createServer, createConnection } = require("net");
const isSocketResetError = require("is-socket-reset-error");

var server = createServer(socket => {
    socket.on("error", err => {
        if (isSocketResetError(err)) {
            try {
                socket.destroy();
                socket.unref();
            } finally { }
        } else {
            // TODO...
        }
    });
});
server.listen(3000);

var socket = createConnection(3000);
socket.on("error", err => {
    if (isSocketResetError(err)) {
        // use some machanism to reconnect
    } else {
        // TODO...
    }
));

```
