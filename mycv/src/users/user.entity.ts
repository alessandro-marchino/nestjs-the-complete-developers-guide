import { Report } from '../reports/report.entity';
import { AfterInsert, AfterRemove, AfterUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: false })
  admin: boolean;

  @OneToMany(() => Report, report => report.user)
  reports: Report[];

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
