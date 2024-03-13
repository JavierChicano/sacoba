import { createClient } from "@libsql/client/.";
import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";
// const client = new Client({
//   url: process.env.DATABASE_URL,
// });
const client = createClient ({url: process.env.DATABASE_URL!, authToken: process.env.DATABASE_AUTH_TOKEN!});

export const db = drizzle(client);

