import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CamerasComponent } from './components/cameras/cameras.component';
import { CameraComponent } from './components/camera/camera.component';

const routes: Routes = [
  { path: '', component: CamerasComponent},
  { path: 'camera/:cameraId/:sourceId', component: CameraComponent},
  { path: '**', component: CamerasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
