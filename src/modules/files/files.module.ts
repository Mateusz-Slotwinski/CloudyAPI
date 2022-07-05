import { FilesController } from './files.controller'
import { FilesService } from './files.service'
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common'

@Module({
  imports: [],
  controllers: [FilesController],
  providers: [FilesService],
})
export class FilesModule {}
