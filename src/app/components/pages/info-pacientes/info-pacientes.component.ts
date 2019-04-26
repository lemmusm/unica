import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-info-pacientes',
  templateUrl: './info-pacientes.component.html',
  styles: []
})
export class InfoPacientesComponent implements OnInit {
  constructor(private galleryService: GalleryService) { }

  masonryImages: any;

  getPacientes() {
    this.galleryService.getImgPacientes().subscribe((data: any) => {
      this.masonryImages = data;
    });
  }
  ngOnInit() {
    this.getPacientes();
  }

}
