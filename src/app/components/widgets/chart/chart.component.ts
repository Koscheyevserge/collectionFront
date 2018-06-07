import { Component, Input } from '@angular/core';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent { 
  @Input()
  data: any;
  options: any;

  constructor() {
    this.options = {
      chart: {
        type: 'lineChart',
        height: 400,
        y: function (d) {
          return d.y;
        },
        x: function (d) {
          return d.x;
        },
        showLabels: true,
        duration: 500,
        labelThreshold: 0.01,
        labelSunbeamLayout: true,
        xScale: d3.time.scale(),
        yScale: d3.scale.linear().domain([0, 7000]),
        useInteractiveGuideline: true,
        xAxis: {
          ticks: d3.time.days,
          axisLabel: '',
          tickFormat: function (d) {
            return d3.time.format('%d.%m.%Y')(new Date(d));
          },
          showMaxMin: false,
        },        
      }
    };
  }
}
