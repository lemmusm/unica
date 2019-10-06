import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';
import { map } from 'rxjs/operators';

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
    this.getClinicaFix();
  }

  getClinica() {
    this.galleryservice.getClinica()
      .subscribe(
        data => {
          this.clinica = data;
        }
      );
  }

  getClinicaFix() {
    let resultado;
    this.galleryservice.getClinica()
      .pipe(
        map(res => res['cirugia_corta_estancia'])
      ).subscribe( res => {
        resultado = res;

      console.log(resultado);
      });
  }

}
