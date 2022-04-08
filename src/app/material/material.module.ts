import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

const MaterialComponents = [
  MatSidenavModule,
  MatDialogModule,
  MatIconModule
];

@NgModule({
  imports: [ MaterialComponents],
  exports : [ MaterialComponents]
})
export class MaterialModule { }