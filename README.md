# Setting up `Secret Escapes Search`

## Docker Setup (Requires docker to be installed)

Change into the project directory and run:

`docker-compose up --build`

The above will build and start containers for the `application`.

Once you can see the following on your terminal(command window):

```shell
    INFO: Accepting connections at http://localhost:3000.
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

Stop the application by typing `Ctrl+C`

## Manual Setup (Requires Node.js to be installed)

In the project directory, do the following:

- `yarn install`
- `yarn start`

The above should start the application on port `3000`.

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.
