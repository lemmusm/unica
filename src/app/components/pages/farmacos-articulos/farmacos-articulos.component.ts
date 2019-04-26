import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-farmacos-articulos',
  templateUrl: './farmacos-articulos.component.html',
  styles: []
})
export class FarmacosArticulosComponent implements OnInit {
  constructor(private galleryService: GalleryService) { }

  masonryImages: any;

  getComodin() {
    this.galleryService.getComodin().subscribe((data: any) => {
      this.masonryImages = data;
    });
  }
  ngOnInit() {
    this.getComodin();
  }
}
