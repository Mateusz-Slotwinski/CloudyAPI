import * as bcrypt from 'bcrypt'

import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import jwt from 'jsonwebtoken'

import * as Requests from './types/requests'
import { User, UserDocument } from '@/models/user'
import { AuthConfig } from '@/config/auth.config'

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(userData: Requests.Register): Promise<UserDocument> {
    const newUser = new this.userModel(userData)
    const salt = await bcrypt.genSalt()
    newUser.Password = await bcrypt.hash(userData.Password, salt)

    return await newUser.save()
  }

  login() {
    return 'Hello WORLD!!!!!'
  }

  logout() {
    return 'Bye!'
  }

  async checkIfExist(userData: Requests.Register): Promise<boolean> {
    const existsLogin = await this.userModel.exists({ Login: userData.Login })
    const existsEmail = await this.userModel.exists({ Email: userData.Email })

    return existsLogin != null || existsEmail != null
  }

  CreateToken(user: string | object): string {
    return jwt.sign({ user }, AuthConfig.jwt.secret, {
      expiresIn: AuthConfig.jwt.expiresIn,
    })
  }
}
