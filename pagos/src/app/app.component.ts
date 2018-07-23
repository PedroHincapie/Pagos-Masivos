import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pagos Masivos';
  fecha_carga = '';
  num_lote = '';
  registros = [
    {
      "num_lote": 1,
      "nom_archivo": "Centro CC Los Molinos",
      "fec_carga": "17/09/2018",
      "num_total": 500,
      "num_pendientes": 200,
      "num_pagados": 200,
      "num_errores": 100
    },
    {
      "num_lote": 2,
      "nom_archivo": "Banco Falabella",
      "fec_carga": "16/09/2018",
      "num_total": 1000,
      "num_pendientes": 750,
      "num_pagados": 100,
      "num_errores": 150
    },
    {
      "num_lote": 3,
      "nom_archivo": "Ecopetrol",
      "fec_carga": "15/09/2018",
      "num_total": 500,
      "num_pendientes": 200,
      "num_pagados": 200,
      "num_errores": 100
    },
    {
      "num_lote": 4,
      "nom_archivo": "Centro CC Los Molinos",
      "fec_carga": "17/09/2018",
      "num_total": 500,
      "num_pendientes": 200,
      "num_pagados": 200,
      "num_errores": 100
    },
    {
      "num_lote": 5,
      "nom_archivo": "Banco Falabella",
      "fec_carga": "16/09/2018",
      "num_total": 1000,
      "num_pendientes": 750,
      "num_pagados": 100,
      "num_errores": 150
    },
    {
      "num_lote": 6,
      "nom_archivo": "Ecopetrol",
      "fec_carga": "15/09/2018",
      "num_total": 500,
      "num_pendientes": 200,
      "num_pagados": 200,
      "num_errores": 100
    },
    {
      "num_lote": 7,
      "nom_archivo": "Centro CC Los Molinos",
      "fec_carga": "17/09/2018",
      "num_total": 500,
      "num_pendientes": 200,
      "num_pagados": 200,
      "num_errores": 100
    },
    {
      "num_lote": 8,
      "nom_archivo": "Banco Falabella",
      "fec_carga": "16/09/2018",
      "num_total": 1000,
      "num_pendientes": 750,
      "num_pagados": 100,
      "num_errores": 150
    },
    {
      "num_lote": 9,
      "nom_archivo": "Ecopetrol",
      "fec_carga": "15/09/2018",
      "num_total": 500,
      "num_pendientes": 200,
      "num_pagados": 200,
      "num_errores": 100
    },
    {
      "num_lote": 10,
      "nom_archivo": "Ecopetrol",
      "fec_carga": "15/09/2018",
      "num_total": 500,
      "num_pendientes": 200,
      "num_pagados": 200,
      "num_errores": 100
    },

  ];

}
