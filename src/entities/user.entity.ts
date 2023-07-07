import { UserStatus } from "src/auth/user-status.enum";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Item } from "./item.entity";
import { Exclude } from "class-transformer";

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  @Exclude({ toPlainOnly: true }) //パスワードをレスポンスから外す対象として指定する
  password: string;

  @Column()
  status: UserStatus;

  // 第一引数には関連先の型を返すコールバック関数を渡す
  // 第二引数には関連先で紐づけられるプロパティを返すコールバック関数を渡す
  @OneToMany(() => Item, (item) => item.user)
  items: Item[];
}