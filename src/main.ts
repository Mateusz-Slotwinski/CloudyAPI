import { NestFactory } from '@nestjs/core'

import { AppModule } from './modules/app.module'
import { AppConfig } from './config/app.config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  await app.listen(AppConfig.port)
}
bootstrap()
