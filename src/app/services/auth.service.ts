import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly STORAGE_KEY = 'users';

  constructor() {
    if (!localStorage.getItem(this.STORAGE_KEY)) {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify([]));
    }
  }

  // Registrar usuario con rol
  register(username: string, password: string, role: 'conductor' | 'pasajero'): boolean {
    const users = this.getUsers();
    const userExists = users.some(user => user.username === username);

    if (!userExists) {
      users.push({ username, password, role });
      this.saveUsers(users);
      return true;
    }
    return false;
  }

  // Validar login y guardar el rol del usuario
  login(username: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user)); // Guardar el usuario autenticado
      return true;
    }
    return false;
  }

  // Obtener el rol del usuario autenticado
  getRole(): 'conductor' | 'pasajero' | null {
    const user = localStorage.getItem('loggedInUser');
    return user ? JSON.parse(user).role : null;
  }

  // Obtener usuarios
  private getUsers(): { username: string; password: string; role: 'conductor' | 'pasajero' }[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  // Guardar usuarios
  private saveUsers(users: { username: string; password: string; role: 'conductor' | 'pasajero' }[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
  }
}
