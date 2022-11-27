import { CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

class BaseEntity {
  
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;
  
  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;
  
}

export default BaseEntity;