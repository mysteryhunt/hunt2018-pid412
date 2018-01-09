(function() {
  var Module = {};

  Module.preRun = [];
  Module.onInit = [];

  // FROM: https://github.com/niklasvh/base64-arraybuffer/blob/master/lib/base64-arraybuffer.js

  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

  // Use a lookup table to find the index.
  var lookup = new Uint8Array(256);
  for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
  }

  function decode(base64) {
    var bufferLength = base64.length * 0.75,
    len = base64.length, i, p = 0,
    encoded1, encoded2, encoded3, encoded4;

    if (base64[base64.length - 1] === "=") {
      bufferLength--;
      if (base64[base64.length - 2] === "=") {
        bufferLength--;
      }
    }

    var arraybuffer = new ArrayBuffer(bufferLength),
    bytes = new Uint8Array(arraybuffer);

    for (i = 0; i < len; i+=4) {
      encoded1 = lookup[base64.charCodeAt(i)];
      encoded2 = lookup[base64.charCodeAt(i+1)];
      encoded3 = lookup[base64.charCodeAt(i+2)];
      encoded4 = lookup[base64.charCodeAt(i+3)];

      bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
      bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
      bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }

    return bytes;
  };

  Module.wasmBinary = decode('{{ sh "base64 -i out/main.wasm" | trim }}')

  var listeners = {};
  function addListener(evt, fn) {
    if (!listeners[evt]) {
      listeners[evt] = [];
    }

    listeners[evt].push(fn);
  }
  function dispatch(evt, data) {
    if (listeners[evt]) {
      listeners[evt].forEach(function(fn) {
        fn(data);
      });
    }
  }

  var isReady = false;
  function notifyReady() {
    isReady = true;

    var event = new Event("wasmLoaded");
    dispatch(event);
  }

  Module.postRun=[notifyReady];

  function mallocStr(str) {
    var buffer = Module._malloc(str.length+1);
    Module.writeStringToMemory(str, buffer);

    return buffer;
  }

  var sess;

  function runCmd(sessionId, challenge) {
    if (!sess) {
      sess = sessionId;
    }

    return new Promise(function(resolve) {
      function runInner() {
        Module._setSessionId(mallocStr(sess));
        resolve(Pointer_stringify(Module._doIt(mallocStr(challenge))));
      }

      if (isReady) {
        runInner();
      } else {
        global.addListener("wasmLoaded", runInner);
      }
    });
  }

  onmessage = function(e) {
    runCmd(e.data.sess, e.data.chall).then(function(r) {
      postMessage(r);
    });
  }

  {{ file "../out/main.js" }}
})();
