import { Component, OnInit } from '@angular/core';
import { SidebardService } from '../../services/service.index';

@Component({
  selector: 'app-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrls: ['./sidebard.component.css']
})
export class SidebardComponent implements OnInit {

  constructor(public _sidebar: SidebardService) { }

  ngOnInit() {
  }

}
