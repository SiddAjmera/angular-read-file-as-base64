import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('/assets/image.jpg', { responseType: 'blob' })
      .subscribe(res => {
        const reader = new FileReader();
        reader.onloadend = () => {
          var base64data = reader.result;                
              console.log(base64data);
        }

        reader.readAsDataURL(res); 
        console.log(res);
      });
  }
}
