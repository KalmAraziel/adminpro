import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styleUrls: ['./grafico-dona.component.css']
})
export class GraficoDonaComponent implements OnInit {
  // Doughnut

  @Input() graficos: any;
  public leyenda: string;
  public chartLabels: string[] = [];
  public chartData: number[] = [];
  public chartType  = 'doughnut';
  public chartColors: Array<any> = [];
  /*
  // tslint:disable-next-line: no-input-rename
  @Input('chartLabels') doughnutchartLabels: Label[] = [];
  // tslint:disable-next-line: no-input-rename
  @Input('chartType') doughnutChartData: MultiDataSet [] = [];
  // tslint:disable-next-line: no-input-rename
  @Input('chartData') doughnutChartType: ChartType;
  */


  constructor() { }

  ngOnInit() {
    console.log( this.graficos );

    this.leyenda = this.graficos.leyenda;
    this.chartLabels = this.graficos.labels;
    this.chartData = this.graficos.data;
    this.chartType = this.graficos.type;
    this.chartColors = this.graficos.colors;
  }

}
