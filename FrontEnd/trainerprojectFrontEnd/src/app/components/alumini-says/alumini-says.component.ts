import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-alumini-says',
  templateUrl: './alumini-says.component.html',
  styleUrl: './alumini-says.component.css'
})
export class AluminiSaysComponent implements OnInit{
  @ViewChild('carousel') carousel!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  autoScroll(): void {
    const carouselElement = this.carousel.nativeElement;
    carouselElement.scrollLeft += 2; // Adjust scroll speed as needed
    // Check if end of carousel is reached, then reset scroll position
    if (carouselElement.scrollLeft >= (carouselElement.scrollWidth - carouselElement.offsetWidth)) {
      carouselElement.scrollLeft = 0;
    }
  }
}
