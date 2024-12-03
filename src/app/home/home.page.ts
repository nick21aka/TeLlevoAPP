import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  role: 'conductor' | 'pasajero' | null = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      this.role = user.role; // Asignar el rol del usuario
    } else {
      this.role = null;
    }
  }

  logout() {
    localStorage.removeItem('loggedInUser'); // Eliminar sesión
    this.router.navigate(['/login']);
  }

  goToCreateTrip() {
    if (this.role === 'conductor') {
      this.router.navigate(['/create-trip']);
    } else {
      alert('Solo los conductores pueden crear viajes.');
    }
  }
  

  searchTrips() {
    this.router.navigate(['/search-trips']);
  }
}

