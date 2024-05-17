import { Controller, Post, Body } from '@nestjs/common';
import { TopicoService } from './topico.service';

@Controller('topicos')
export class TopicoController {
  constructor(private readonly topicoService: TopicoService) {}

  @Post()
  createTopico(@Body() body: { Topico: string, CarpetaDestino: string }) {
    const { Topico, CarpetaDestino } = body;
    const resultado = this.topicoService.crearCarpeta(Topico, CarpetaDestino);
    return resultado;
  }
}