import { MikroORM } from "mikro-orm";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import path from "path";
import { UserInfo } from "./entities/UserInfo";


export default {
    entities: [Post, UserInfo],
    dbName: "tododb",
    debug: !__prod__,
    type: "postgresql",
    migrations: {
        path: path.join(__dirname, "./migrations"), // path to the folder with migrations
        pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
    }
    
} as Parameters<typeof MikroORM.init>[0];