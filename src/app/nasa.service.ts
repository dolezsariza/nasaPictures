import { NasaPic } from './nasa-pic';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NasaService {
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) { }

  public firstPage = '';
  public prevPage = '';
  public nextPage = '';
  public lastPage = '';

  apiKey = 'gECkrxXkxPgh7m8P089iohsascxtdXzpExd9nBVK';
  apiURL: string;
  apiURL2 = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=800&api_key=${this.apiKey}`;

  counter = 0;

  public getPhotos(apiUrl: string): Observable<NasaPic[]> {
    return this.httpClient.get<NasaPic[]>(apiUrl);
  }

  public getUrl(result: any) {
    const rover = result.nasaPic.roverName;
    const year = result.nasaPic.year;
    const month = result.nasaPic.month;
    const day = result.nasaPic.day;

    this.apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${this.apiKey}`;
    return (this.apiURL);

    }

  /*public writeMessage(event: any) {
    let id = event.target.id;
    let url = event.target.src;
    let template = `
        <div id="${id}" class="w3-modal" onclick="this.style.display='none'">
          <span class="w3-button w3-hover-red w3-xlarge w3-display-topright">&times;</span>
          <div class="w3-modal-content w3-animate-zoom">
            <img src="${url}" style="width:100%">
          </div>
        </div>
        `;
    console.log("hello");
    console.log(document.getElementById('photoModal').innerHTML);
    document.getElementById('photoModal').innerHTML = template;
    console.log(document.getElementById('photoModal').innerHTML);

  }*/

}
