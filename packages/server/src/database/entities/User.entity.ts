import { Nullable } from 'src/@types';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export interface IUser {
  id?: Nullable<number>;
  username?: Nullable<string>;
  password?: Nullable<string>;
}

@Entity({ name: 'User' })
export class User implements IUser {
  @PrimaryGeneratedColumn({
    name: 'id',
  })
  id?: number;

  @Column('varchar', {
    nullable: false,
  })
  username?: string;

  @Column('varchar', {
    nullable: false,
  })
  password?: string;
}
