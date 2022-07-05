import { Module } from '@nestjs/common'

import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'

import { UploadModule } from './upload/upload.module'
import { UsersModule } from './users/users.module'
import { FilesModule } from './files/files.module'
import { AuthModule } from './auth/auth.module'

import { DatabaseConfig } from '@/config/database.config'

@Module({
  imports: [
    ConfigModule.forRoot({}),
    MongooseModule.forRoot(DatabaseConfig.url),

    AuthModule,
    UsersModule,
    UploadModule,
    FilesModule,
  ],
})
export class AppModule {}
