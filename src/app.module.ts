import { Module } from '@nestjs/common';
import { TopicoController } from './CrearTopico/topico.controller';
import { TopicoService } from './CrearTopico/topico.service';


@Module({
  imports: [],
  controllers: [TopicoController],
  providers: [TopicoService],
})
export class TopicoModule {}
