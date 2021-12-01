import { Migration } from '@mikro-orm/migrations';

export class Migration20211201115905 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user_info" ("id" serial primary key, "createdat" timestamptz(0) not null, "updatedat" timestamptz(0) not null, "username" text not null, "password" text not null);');
    this.addSql('alter table "user_info" add constraint "user_info_username_unique" unique ("username");');

    this.addSql('drop table if exists "user" cascade;');
  }

}
