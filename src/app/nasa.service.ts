import { NasaPic } from "./nasa-pic";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class NasaService {
  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {}

  public firstPage = "";
  public prevPage = "";
  public nextPage = "";
  public lastPage = "";

  apiKey = "gECkrxXkxPgh7m8P089iohsascxtdXzpExd9nBVK";
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

    // tslint:disable-next-line: max-line-length
    this.apiURL = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?earth_date=${year}-${month}-${day}&api_key=${this.apiKey}`;
    return this.apiURL;
  }

  public allowModal(event: any) {
    let id = "modal-" + event.target.id;
    document.getElementById(id).style.display = "block";
  }
}
