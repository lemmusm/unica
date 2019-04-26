import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-clinica',
  templateUrl: './clinica.component.html',
  styles: []
})
export class ClinicaComponent implements OnInit {

  clinica: any;

  constructor(private galleryservice: GalleryService) {
  }

  ngOnInit() {
    this.getClinica();
  }

  getClinica() {
    this.galleryservice.getClinica()
      .subscribe(
        data => {
          this.clinica = data;
        }
      );
  }
}
