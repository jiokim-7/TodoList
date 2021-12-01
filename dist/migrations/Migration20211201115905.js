"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20211201115905 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20211201115905 extends migrations_1.Migration {
    async up() {
        this.addSql('create table "user_info" ("id" serial primary key, "createdat" timestamptz(0) not null, "updatedat" timestamptz(0) not null, "username" text not null, "password" text not null);');
        this.addSql('alter table "user_info" add constraint "user_info_username_unique" unique ("username");');
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20211201115905 = Migration20211201115905;
//# sourceMappingURL=Migration20211201115905.js.map