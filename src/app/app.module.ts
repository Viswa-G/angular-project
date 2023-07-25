import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import{MatCardModule} from'@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardComponent } from './card/card.component';
import { MatSliderModule } from '@angular/material/slider'; // Import MatSliderModule
import { MatIconModule } from '@angular/material/icon';




@NgModule({
  declarations: [
    AppComponent,
   
    NavbarComponent,
    SidenavComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatFormFieldModule,
    NgbModule,
    DragDropModule,
    MatSliderModule,
    MatIconModule
    


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
