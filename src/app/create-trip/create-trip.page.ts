import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TripService } from '../services/trip.service';

@Component({
  selector: 'app-create-trip',
  templateUrl: './create-trip.page.html',
  styleUrls: ['./create-trip.page.scss'],
})
export class CreateTripPage {
  destination: string = '';
  time: string = '';
  cost: number | null = null;
  capacity: number | null = null;

  constructor(private tripService: TripService, private router: Router) {}

  createTrip() {
    if (this.destination && this.time && this.cost && this.capacity) {
      const driver = JSON.parse(localStorage.getItem('loggedInUser') || '{}').username; // Obtener el nombre del conductor
      this.tripService.addTrip(driver, this.destination, this.time, this.cost, this.capacity);
      alert('Viaje creado con éxito');
      this.router.navigate(['/home']); // Redirigir al inicio
    } else {
      alert('Por favor, complete todos los campos');
    }
  }
}
