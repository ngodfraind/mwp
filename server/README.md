## Installing the database

Install postgresql, then create a user accordingly.

```bash
$ npx prisma migrate dev --name init
$ npx prisma db seed
```

## Resources

https://www.section.io/engineering-education/implementing-a-graphql-server-using-prisma-sqlite-and-nestjs-with-typescript/

## Running the server

You need to export the `DATABASE_URL` env var in your terminal.
.env file is not supported (yet)

for instance:

`export DATABASE_URL=postgresql://postgres:nico@localhost:5433/mywaypro`

```bash
$ npm install
$ npx run start:dev
```

## Access the GUI

http://localhost:3000/graphql


