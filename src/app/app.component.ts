import { Component } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;

  constructor(private nasaService: NasaService) { }

  ngOnInit() {
    this.title = 'Nasa Pictures';
  }
}
