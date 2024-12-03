import { Injectable } from '@angular/core';

export interface Trip {
  id: number;
  driver: string;
  destination: string;
  time: string;
  cost: number;
  capacity: number;
}

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private trips: Trip[] = [
    { id: 1, driver: 'Juan', destination: 'Centro', time: '18:00', cost: 2000, capacity: 3 },
    { id: 2, driver: 'Ana', destination: 'Estación', time: '19:00', cost: 1500, capacity: 2 },
  ];

  getTrips(): Trip[] {
    return this.trips.filter(trip => trip.capacity > 0); // Retorna viajes con capacidad disponible
  }

  bookTrip(tripId: number): boolean {
    const trip = this.trips.find(t => t.id === tripId);
    if (trip && trip.capacity > 0) {
      trip.capacity -= 1; // Reduce la capacidad disponible
      return true;
    }
    return false;
  }
  addTrip(driver: string, destination: string, time: string, cost: number, capacity: number): void {
  const newTrip = {
    id: this.trips.length + 1,
    driver,
    destination,
    time,
    cost,
    capacity,
  };
  this.trips.push(newTrip);
}

}



