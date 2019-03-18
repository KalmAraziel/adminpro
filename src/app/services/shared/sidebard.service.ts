import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebardService {
  menu: any[] = [
    {
      titulo: 'Principal',
      icono: 'mdi mdi-gaugw',
      submenu: [
        { titulo: 'Dashboard', url: '/dashboard'},
        { titulo: 'ProgressBar', url: '/progress'},
        { titulo: 'Gráficas', url: '/graficas1'},
      ]
    }
  ];

  constructor() { }

}
