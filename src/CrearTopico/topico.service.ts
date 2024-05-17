import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TopicoService {
  crearCarpeta(topico: string, carpetaDestino: string) {
    const rutaCarpetaDestino = path.join(process.cwd(), 'Ramos', carpetaDestino);
    const carpetaTopico = path.join(rutaCarpetaDestino, topico);

    if (!fs.existsSync(carpetaTopico)) {
      fs.mkdirSync(carpetaTopico);
      return { message: `Carpeta ${topico} creada exitosamente en ${carpetaDestino}` };
    } else {
      return { message: `La carpeta ${topico} ya existe en ${carpetaDestino}` };
    }
  }
}
