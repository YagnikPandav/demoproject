import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { ContectComponent } from './component/contect/contect.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { PriceComponent } from './component/price/price.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from './component/sidebar/sidebar.module';
import { CommanService } from './services/comman.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    PriceComponent,
    ContectComponent,
  ],

  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule,
    RouterModule.forRoot([]),
    HttpClientModule,


  ],
  providers: [CommanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
