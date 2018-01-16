# Twitch Plays Mystery Hunt

- Puzzle Authors: Ryan Veeder, Hubert Hwang
- Tech Authors: Ben Weissmann (backend & dirty wasm tricks), Xavid (frontend)

## Getting it running

1) `cd backend; docker-compose build && docker-compose up`
2) `cd frontend; yarn install; yarn run build-watch` (you'll need [yarn](https://yarnpkg.com/en/), [sigil](https://github.com/gliderlabs/sigil), [uglifyjs](https://github.com/mishoo/UglifyJS2), and [emcc](https://github.com/kripken/emscripten) installed and on your `$PATH`)
2) Open `frontend/index.html` in your browser
