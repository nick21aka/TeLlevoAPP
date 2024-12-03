import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SearchTripPageRoutingModule } from './search-trips-routing.module';
import { SearchTripPage } from './search-trips.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTripPageRoutingModule,
  ],
  declarations: [SearchTripPage], // Declara SearchTripPage como un componente
})
export class SearchTripsPageModule {}
