import { MikroORM } from "mikro-orm";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
import { User } from "./entities/User";


export default {
    entities: [Post, User],
    dbName: "tododb",
    debug: !__prod__,
    type: "postgresql",
    migrations: {
        path: path.join(__dirname, "./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    }
    
} as Parameters<typeof MikroORM.init>[0];