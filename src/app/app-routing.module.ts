import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FloorComponent} from './main/floor/floor.component';
import {AuthGuard} from './security/_guards/auth.guard';
import {LoginComponent} from './security/login/login.component';
import {HomeComponent} from './main/home/home.component';
import {Role} from './security/_models/role';
import {RoomComponent} from './main/room/room.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

export const appRoutes: Routes = [
  {path: 'floors/:id', component: FloorComponent, canActivate: [AuthGuard]}, //
  {path: 'rooms/:id', component: RoomComponent, canActivate: [AuthGuard], data: {roles: [Role.Personeel]}},   // only personeel can edit rooms
  {path: 'login', component: LoginComponent},
  {path: '  ', component: HomeComponent, canActivate: [AuthGuard]},
  {path: '**', component: HomeComponent, canActivate: [AuthGuard]}
];

