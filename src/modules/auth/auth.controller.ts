import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
} from '@nestjs/common'
import { AuthService } from './auth.service'
import * as Requests from './types/requests'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async register(@Body() userData: Requests.Register) {
    if (await this.authService.checkIfExist(userData)) {
      throw new HttpException('existing_data', HttpStatus.BAD_REQUEST)
    }

    return await this.authService.register(userData)
  }

  @Post('login')
  login() {
    return this.authService.login()
  }

  @Post('logout')
  logout() {
    return this.authService.logout()
  }
}
