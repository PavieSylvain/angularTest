import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppleService {
  configUrl = 'http://localhost/api/apple';

  constructor(private http: HttpClient) { }

  sentCustom( text: string, color: string, size: number){
    let data = {
      "texte": text,
      "color": color,
      "size": size,
    }

    return this.http.post(this.configUrl, data).subscribe(res=>{
      console.log(res);
    });
  };

}
