import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
 import { retry, map , filter} from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  
  subscripcion: Subscription;

  constructor() {

    this.subscripcion = this.regresaObservable().subscribe(
      numero => console.log('Subs: ' + numero),
      error => console.error('Error en el obs ' + error),
      () => console.log('El observador termino')
    );
  }

  ngOnInit() {

  }

  ngOnDestroy(): void {
    console.log('la pagina se va a cerrar');
    // cuando salgo de la pagina dejo de estar suscrito
    this.subscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contador = 1;
      const intervalo = setInterval(() => {
        contador ++;
        const salida = {
          valor: contador
        };
        observer.next(salida);

        /**
        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }
        */
      }, 1000);
    }).pipe(
      map( resp => resp.valor ),
      filter( (valor, index) => {
        if ( (valor % 2) === 1 ) {
          // inpar
          return true;
        } else {
          // par
          return false;
        }
      })
    );
  }
}
