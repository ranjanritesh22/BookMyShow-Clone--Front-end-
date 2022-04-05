import { Component, OnInit, ViewChild , ElementRef } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
})
export class EventsComponent implements OnInit {
  
  @ViewChild('slider', { read: ElementRef })
  public slider!: ElementRef<any>;
   
  events = [
    "../../../assets/images/events/workshop.avif",
    "../../../assets/images/events/upskill.avif",
    "../../../assets/images/events/music.avif",
    "../../../assets/images/events/kid.jpg",
    "../../../assets/images/events/esport.avif",
    "../../../assets/images/events/games.avif",
    "../../../assets/images/events/fit.avif",
    "../../../assets/images/events/comedy.avif",
    "../../../assets/images/events/arts.avif",
    "../../../assets/images/events/cooking.jpg",
  ]
  btnPrev :boolean = false;
  btnNext : boolean = true;
  changeLeft : boolean = false;
  changeRight : boolean = true;

  constructor() { }

  ngOnInit(): void {}

  public scrollLeft(): void {
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft - 1320), behavior: 'smooth' });
    this.btnNext = true;
    this.btnPrev = false;
  }

  public scrollRight(): void {
    this.slider.nativeElement.scrollTo({ left: (this.slider.nativeElement.scrollLeft + 1320), behavior: 'smooth' });
    this.btnNext = false;
    this.btnPrev = true;
    this.changeLeft = true;
  }
}