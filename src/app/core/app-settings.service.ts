import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppSettings {

  static settings: IAppSettings;

  static proxyOptions = {
    withCredentials: true,
    headers: new HttpHeaders({
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT',
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  loadAppSettings(): Promise<IAppSettings> {

    const promise = this.http.get<IAppSettings>('config/appsettings.json')
      .toPromise()
      .then(response => {
        if (!environment.production) { console.log(response); }
        AppSettings.settings = response;
        return response;
      });

    return promise;
  }
}


export interface IAppSettings {
  env: {
      name: string;
      version: string;
      releaseDate: Date
  };
  logging: {
      console: boolean;
  };
  apiServer: {
      proxy: string;
  };
}