import { Component, OnInit } from '@angular/core';
import { CamerasService } from 'src/app/services/cameras.service';
import { Camera } from '../../models/camera.interface';

@Component({
  selector: 'app-cameras',
  templateUrl: './cameras.component.html',
  styleUrls: ['./cameras.component.css']
})
export class CamerasComponent implements OnInit {

  cameras: Camera[] = [];
  totalPages: number;

  constructor(private camerasService: CamerasService) { }

  ngOnInit(): void {
    this.camerasService
    .getTotalPages()
    .subscribe((total) => {
      this.totalPages = total;
      for (let i = 1; i < this.totalPages; i++){
        this.camerasService
        .getAllCameras(i)
        .subscribe((cameras) => { 
          cameras.forEach(element => {
            this.cameras.push(element);
          });
        });
      }
    })    
  }
  
}
