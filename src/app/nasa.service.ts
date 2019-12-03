import { NasaPic } from './nasa-pic';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  API_KEY = 'DEMO_KEY';
  public firstPage: string = '';
  public prevPage: string = '';
  public nextPage: string = '';
  public lastPage: string = '';

  apiURL: string = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=900&api_key=DEMO_KEY';
  constructor(private httpClient: HttpClient) { }

  public getPhotos(): Observable<NasaPic[]> {
    return this.httpClient.get<NasaPic[]>(this.apiURL);
  }

}
