import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop()
  Name: string

  @Prop()
  Email: string

  @Prop()
  Login: string

  @Prop()
  Password: string
}

export const UserSchema = SchemaFactory.createForClass(User)
