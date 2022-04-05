import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';

const MaterialComponents = [
  MatSidenavModule,
  MatDialogModule
];

@NgModule({
  imports: [ MaterialComponents],
  exports : [ MaterialComponents]
})
export class MaterialModule { }