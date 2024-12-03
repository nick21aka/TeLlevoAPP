import { Component, OnInit } from '@angular/core';
import { TripService } from '../services/trip.service'; // Asegúrate de importar el servicio
import { Trip } from '../services/trip.service'; // Importa la interfaz Trip si está definida
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-trips', // Nombre único para el selector del componente
  templateUrl: './search-trips.page.html', // Ruta al archivo HTML
  styleUrls: ['./search-trips.page.scss'], // Ruta al archivo SCSS
})
export class SearchTripPage implements OnInit {
  trips: Trip[] = []; // Define la propiedad trips como un arreglo de tipo Trip
  
  constructor(private tripService: TripService,  private router: Router) {} // Inyecta el servicio de viajes

  ngOnInit() {
    this.loadTrips(); // Carga los viajes al iniciar el componente
  }

  loadTrips() {
    this.trips = this.tripService.getTrips(); // Obtén los viajes disponibles desde el servicio
  }
  
  bookTrip(tripId: number) {
    if (this.tripService.bookTrip(tripId)) {
      alert('Reserva realizada con éxito');
      this.router.navigate(['/home']);
      this.loadTrips(); // Actualiza la lista de viajes después de reservar
    }  else {
      alert('No se pudo realizar la reserva');
    }
  }
}