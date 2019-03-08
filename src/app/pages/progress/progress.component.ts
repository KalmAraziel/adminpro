import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {
  progreso = 20;
  progreso2 = 30;
  constructor() { }

  ngOnInit() {

  }
}
