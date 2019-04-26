import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../../services/gallery.service';

@Component({
  selector: 'app-instalaciones',
  templateUrl: './instalaciones.component.html',
  styles: []
})
export class InstalacionesComponent implements OnInit {
  constructor(private galleryService: GalleryService) { }

  masonryImages: any;

  getInstalaciones() {
    this.galleryService.getImgInstalaciones().subscribe(data => {
      this.masonryImages = data;
    });
  }
  ngOnInit() {
    this.getInstalaciones();
  }

}
