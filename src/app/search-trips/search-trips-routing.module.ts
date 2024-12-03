import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchTripPage } from './search-trips.page'; // Usa SearchTripPage

const routes: Routes = [
  {
    path: '',
    component: SearchTripPage, // Usa SearchTripPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTripPageRoutingModule {}
