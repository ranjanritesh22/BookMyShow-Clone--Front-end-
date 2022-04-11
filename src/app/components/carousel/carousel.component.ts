import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
})
export class CarouselComponent implements OnInit {
  @Input() autoSlide = false;

  slides  = [
    "../../../assets/images/slider/slide 1.avif",
    "../../../assets/images/slider/slide 2.avif",
    "../../../assets/images/slider/slide 3.avif",
  ]
  selectedIndex = 0

  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages(){
    setInterval(()=>{
      this.nextSlide();
    },3000);
  }

  selectedImage(index : number){
    this.selectedIndex = index;
  }

  prevSlide(){
    if(this.selectedIndex === 0){
      this.selectedIndex = this.slides.length-1;
    }
    else{
      this.selectedIndex--;
    }
  }

  nextSlide(){
    if(this.selectedIndex === this.slides.length -1){
      this.selectedIndex = 0;
    }
    else{
      this.selectedIndex++;
    }
  }
}