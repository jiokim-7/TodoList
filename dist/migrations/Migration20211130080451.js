"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211130080451 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211130080451 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user" ("id" serial primary key, "createdat" timestamptz(0) not null, "updatedat" timestamptz(0) not null, "username" text not null, "password" text not null);');
        this.addSql('alter table "user" add constraint "user_username_unique" unique ("username");');
        this.addSql('alter table "post" drop constraint if exists "post_title_check";');
        this.addSql('alter table "post" alter column "title" type text using ("title"::text);');
    }
}
exports.Migration20211130080451 = Migration20211130080451;
//# sourceMappingURL=Migration20211130080451.js.map