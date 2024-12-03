import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  username: string = '';
  password: string = '';
  role: 'conductor' | 'pasajero' | null = null;
  imageUrl: string | null = null;
  
  async openCamera(){

    try{
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,    
      });

      this.imageUrl = image.webPath ?? null;
    }catch(error){
      console.error('error al abrir la camara: ', error);
    }
  }

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    if (this.role) {
      if (this.authService.register(this.username, this.password, this.role)) {
        alert('Usuario registrado con éxito');
        this.router.navigate(['/login']);
      } else {
        alert('El usuario ya existe');
      }
    } else {
      alert('Debe seleccionar un rol');
    }
  }
  ngOnInit() {
  }
}
