import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';
@Component({
  selector: 'app-bateria-camera',
  templateUrl: './bateria-camera.page.html',
  styleUrls: ['./bateria-camera.page.scss'],
})
export class BateriaCameraPage implements OnInit {
  batterylevel: number = 0;
  batterycolor: string = 'green';
  imageUrl: string | null = null;

  constructor() { 
    this.checkBatteryStatus();
  }

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

  async checkBatteryStatus(){

    if('getBattery' in navigator) {
      try {
        const battery = await (navigator as any).getBattery();
        this.batterylevel = this.batterylevel * 100;

        //cambiar el color segun el nivel de bateria
        this.updateBatteryColor();

        battery.onlevelchange = ()=>{
          this.batterylevel = this.batterylevel * 100;
          this.updateBatteryColor();
        }
      }catch(error){
        console.error('error al obtener el estado de bateria ', error);
      }
    }else{
      console.error('batery status no es compatible con este dispositivo');
    }
  }
  // cambiar el color del texto segun el estado de la bateria
  updateBatteryColor(){
    if(this.batterylevel<=20){
      this.batterycolor='red';
    }else if (this.batterylevel<=50){
      this.batterycolor='orange';
    }else{
      this.batterycolor='green';
    }
  }

  ngOnInit() {
  }

}
