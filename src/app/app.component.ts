import { Component } from '@angular/core';
import { RouterOutlet, provideRouter } from '@angular/router';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Import HttpClientModule

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    HttpClientModule, // Add HttpClientModule here
  ],
})
export class AppComponent {
  title = 'Trello';
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient()],
});
