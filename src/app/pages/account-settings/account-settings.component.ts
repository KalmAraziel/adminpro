import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  // tslint:disable-next-line: deprecation
  constructor(@Inject(DOCUMENT) private _document) { }

  ngOnInit() {
  }

  cambiarColor(tema: string, link: any) {

    const url = `assets/css/colors/${tema}.css`;
    this._document.getElementById('tema').setAttribute('href', url);
    this.aplicarCheck(link);
  }

  aplicarCheck(link: any) {

    // tslint:disable-next-line: prefer-const
    let selectores: any = document.getElementsByClassName('selector');
    // tslint:disable-next-line: prefer-const
    for (let ref of selectores) {
      ref.classList.remove('working');
    }

    link.classList.add('working');
  }
}
