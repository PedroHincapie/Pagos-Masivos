import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterRegistro',
  pure: false
})
export class AppFilter implements PipeTransform {
  transform(registros: any[], filter: Object): any {
    if (!registros || !filter) {
      return registros;
    }
    return registros.filter(registro => registro.num_lote == filter);
  }
}
