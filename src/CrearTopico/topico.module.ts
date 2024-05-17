import { Module } from '@nestjs/common';
import { TopicoController } from './topico.controller';
import { TopicoService } from './topico.service';

@Module({
  controllers: [TopicoController],
  providers: [TopicoService],
})
export class TopicoModule {}