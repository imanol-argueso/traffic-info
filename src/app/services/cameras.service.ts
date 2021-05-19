import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camera } from '../models/camera.interface';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CamerasService {

  constructor(private http: HttpClient) { }

/*
  getAllCameras(): Observable<any> {
    return this.http.get<any>('https://api.euskadi.eus/traffic/v1.0/cameras/')
    .pipe(
      map(camerasObject => camerasObject.cameras)
    ); 
  }
  */
  getAllCameras(totalPages: number): Observable<any> {
    return this.http.get<any>('https://api.euskadi.eus/traffic/v1.0/cameras?_page='+totalPages)
    .pipe(
      map(camerasObject => camerasObject.cameras)
    ); 
  }
  getCameraById(cameraId: string, sourceId: string): Observable<Camera> {
    return this.http.get<Camera>('https://api.euskadi.eus/traffic/v1.0/cameras/'+ cameraId +'/'+ sourceId)
  }
  getTotalPages(): Observable<any> {
    return this.http.get<any>('https://api.euskadi.eus/traffic/v1.0/cameras?_page=1')
    .pipe(
      map(pages => pages.totalPages)
    );
  }
  getAllCamerasOfPage(pageNumber: number): Observable<Camera[]> {
    return this.http.get<Camera[]>('https://api.euskadi.eus/traffic/v1.0/cameras?_page='+pageNumber);
  }
  /*
  getAllCameras(): Camera[] {
    let totalPages = this.getTotalPages();
    let cameras: Camera[];
    for (let element of totalPages) {

    }
    
    //return this.http.get<Camera[]>('https://api.euskadi.eus/traffic/v1.0/cameras?_page=1');
  }
  */
}
