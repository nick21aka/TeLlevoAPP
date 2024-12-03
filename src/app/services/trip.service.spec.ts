import { TestBed } from '@angular/core/testing';
import { TripService } from './trip.service';

describe('TripService', () => {
  let service: TripService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripService);
  });

  it('debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('debería agregar un viaje', () => {
    service.addTrip('Juan', 'Centro', '10:00', 2000, 3);
    expect(service.getTrips().length).toBe(1);
  });

  it('debería reservar un viaje', () => {
    service.addTrip('Ana', 'Estación', '11:00', 1500, 2);
    const result = service.bookTrip(1);
    expect(result).toBeTrue();
    expect(service.getTrips()[0].capacity).toBe(1);
  });
});
