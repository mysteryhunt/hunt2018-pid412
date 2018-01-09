#!/bin/bash

set -eu

cd "$(dirname "$0")"/..

mkdir -p out

emcc src/*.c -s WASM=1 -O1 -o out/main.html -Wno-pointer-sign -Wno-int-conversion

sigil -f js/worker.js | uglifyjs --compress --mangle > out/worker.js
sigil -f js/makeworker.js > ../frontend/src/makeworker.js

#sigil -f js/worker.js | uglifyjs --compress --mangle > dist/worker.js
