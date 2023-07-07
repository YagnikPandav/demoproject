import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContectComponent } from './component/contect/contect.component';
import { HomeComponent } from './component/home/home.component';
import { PriceComponent } from './component/price/price.component';

const routes: Routes = [
  { path: "home", component: HomeComponent},
  { path: "about", component: AboutComponent },
  { path: "price", component: PriceComponent },
  { path: "contect", component: ContectComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
