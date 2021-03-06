import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class UserInfo {

    @Field()
    @PrimaryKey()
    id!: number;
   
    @Field(() => String)
    @Property({type: "date"})
    createdat = new Date();
  
    @Field(() => String)
    @Property({type: "date", onUpdate: () => new Date() })
    updatedat = new Date();
   
    @Field()
    @Property({ type: "text", unique: true })
    username!: string;

    @Property({ type: "text" })
    password!: string;

}