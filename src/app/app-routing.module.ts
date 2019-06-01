import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: MyBarChartComponent},
  {path: 'pie-chart', component: MyPieChartComponent},
  {path: 'radar-chart', component: MyRadarChartComponent},
  {path: 'doughnut-chart', component: MyDoughnutChartComponent},
  // {path: '**', component: MyBarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
