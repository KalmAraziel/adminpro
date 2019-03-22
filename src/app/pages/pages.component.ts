import { Component, OnInit } from '@angular/core';
// funcion que engloba todos los script m.ahumada custom.js aqui y en login
declare function init_plugins();

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {



  constructor() { }

  ngOnInit() {
    init_plugins();
  }

}
