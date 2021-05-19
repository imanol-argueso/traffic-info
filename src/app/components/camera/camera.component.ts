import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CamerasService } from 'src/app/services/cameras.service';
import { Camera } from '../../models/camera.interface';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  camera: Camera;
  sourceName: string;

  constructor(
    private camerasService: CamerasService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const cameraId = this.activatedRoute.snapshot.paramMap.get('cameraId');
    const sourceId = this.activatedRoute.snapshot.paramMap.get('sourceId');
    

    this.camerasService.getCameraById(cameraId, sourceId).subscribe((camera) => {
      if(!camera){
        return this.router.navigateByUrl('/');
      } else {
        
        this.camera = camera;
         return this.camera; 
      }
    });
    
 
  }
}
