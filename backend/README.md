Copy the `.env.example` and create a new `.env.local` with the necessary environment variables filled.

Run `docker compose up -d` to start the PostgreSQL service.

Run the sh command to apply the migrations onto the database `init-db.sh`.

Other:

- `sudo docker exec -it film-db psql -U user -d db`
- To generate prisma schema from a psql db schema `npx prisma db pull`.
- To generate migrations
