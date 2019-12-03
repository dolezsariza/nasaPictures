import { NasaService } from './../nasa.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  photos;
  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.nasaService.getPhotos().subscribe((data) => {
      this.photos = data['photos'];
      console.log(this.photos);

    });
  }

}
