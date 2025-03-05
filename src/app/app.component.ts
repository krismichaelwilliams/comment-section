import { Component } from '@angular/core';
import { ViewComponent } from './components/view/view.component';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [ViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
