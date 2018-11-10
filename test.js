const assert = require("assert");
const isSocketResetError = require(".");

var err = "an error string";
assert.strictEqual(isSocketResetError(err), false);

var err2 = new Error("a normal error");
assert.strictEqual(isSocketResetError(err2), false);

var err3 = new Error("Socket is closed");
assert.strictEqual(isSocketResetError(err3), true);

var err4 = new Error("socket has been ended by the other peer");
assert.strictEqual(isSocketResetError(err4), true);

var err5 = new Error("some message");
err5["code"] = "ECONNRESET";
assert.strictEqual(isSocketResetError(err5), true);

console.log("#### OK ####");
