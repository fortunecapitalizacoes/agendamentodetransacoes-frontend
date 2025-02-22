import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './banner-menu.component.html',
  styleUrl: './banner-menu.component.css'
})
export class BannerMenuComponent {
  images = [
    'https://img.freepik.com/fotos-premium/pessoas-de-negocios-no-escritorio-moderno_52137-27682.jpg?w=1060',
    'https://st3.depositphotos.com/4218696/13304/i/1600/depositphotos_133042414-stock-photo-group-of-busy-business-people.jpg',
    'https://img.freepik.com/fotos-gratis/grupo-de-pessoas-trabalhando-no-plano-de-negocios-em-um-escritorio_1303-15779.jpg?t=st=1740245076~exp=1740248676~hmac=dc96b07a4a769d2a220ba8e7d9a01fa348be15872e26deb4ac41bd1e206336dc&w=1060'
  ]; 

  currentIndex = 0;
  intervalId: any;
  
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }
}
