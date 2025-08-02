import { Exclude } from 'class-transformer';
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  @Exclude()
  password: string;

  @AfterInsert()
  private logInsert() {
    console.log(`Inserted user with id ${this.id}`);
  }
  @AfterRemove()
  private logRemove() {
    console.log(`Removed user with id ${this.id}`);
  }

  @AfterUpdate()
  private logUpdate() {
    console.log(`Updated user with email ${this.email}`);
  }
}
