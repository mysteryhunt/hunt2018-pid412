# Twitch Plays Mystery Hunt Backend

## Give it a test

Run `docker-compose up` to start running your puzzle (you'll need to have
[Docker](https://www.docker.com/community-edition#/download) installed). It will
take a minute or two to start up, but then  when you change any of the files in
the `src` directory, the server will automatically restart to pick up the
changes. Your app will be available at http://localhost:8000.

Note that changes to files outside of the `src` directory, including
changes to `package.json` (if you added a new dependency) required rebuilding
and restarting. Kill your `docker-compose` session and run
`docker-compose build && docker-compose up` to rebuild and restart.


## Handling development MySQL data

If you want to interact with MySQL directly, run:
`docker-compose exec db mysql  -u puzzle -D puzzle -p puzzle`
and enter `puzzle` when prompted for a password.

MySQL data persists even when you restart Docker. If you want to clear out
your MySQL data, connect to MySQL as above and run
`TRUNCATE TABLE session_data; TRUNCATE TABLE team_data;`


# Handling development Redis data

You probably won't need to inspect Redis data (it's just used for rate
limiting), but if you need to, you just connect like with:
`docker-compose exec redis redis-cli`


## A few notes

- To install NPM packages, use [Yarn](https://yarnpkg.com/en/). For example,
  to install Lodash, run `yarn add lodash`.

- This template uses that latest version of node (8.5), so you can use
  the latest features of Javascript (like arrow functions, classes, template
  string, destructuring, async/await, and more) without needing Babel or any
  other transpiler. The major missing feature is `import`/`export`, so you'll
  need to use `require` and `module.exports`. Check out http://node.green/
  for a full listing of supported features.

- This template is set up with eslint, configured with the
  [AirBNB Style Guide](https://github.com/airbnb/javascript). You can run the
  linter with `yarn lint`, or
  [set up your editor to show eslint warnings](https://eslint.org/docs/user-guide/integrations).
