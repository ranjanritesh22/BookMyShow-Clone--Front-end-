import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { CitiesComponent, LoginComponent } from '../../components';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Output() openSideNavEvent = new EventEmitter();
  @Input()  isOpened : boolean | undefined;
  city = "";

  constructor(public dialog : MatDialog ) { }

  ngOnInit(): void { }

  openSideNav(e:Event){
      this.openSideNavEvent.emit(e);
  }

  selectCity(){
    let dialogRef = this.dialog.open(CitiesComponent,{
      width : '1100px',
    })
    dialogRef.afterClosed().subscribe((res)=>{
      this.city = res;
    })
  }

  signIn(){
      this.dialog.open(LoginComponent, {
      height : '550px',
      width : '440px',
    })
  }
}