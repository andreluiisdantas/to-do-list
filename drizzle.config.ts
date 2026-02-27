import { defineConfig } from 'drizzle-kit'

export default defineConfig({
    out: "./drizzle",
    dialect: "postgresql",
    schema: "./app/backend/db/schema.ts",
    
    dbCredentials: {
        url: "postgres://postgres:root@localhost:5432/to_do_list"
    },

    extensionsFilters: ["postgis"],
    schemaFilter: "public",
    tablesFilter: "*",
    introspect: {
        casing: "camel",
    },
    migrations: {
        prefix: "timestamp",
        table: "__drizzle_migrations__",
        schema: "public",
    },
    
    breakpoints: true,
})