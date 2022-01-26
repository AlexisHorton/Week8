import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PaupersRedditLab';

  info: any = null;
  constructor(private http: HttpClient) { }

	loadData() {
		var req = this.http.get<any>('https://www.reddit.com/r/aww/.json?limit=10');
		req.subscribe(
			result => {
				console.log(result);
				this.info = result;
			}
		);
	}
}
