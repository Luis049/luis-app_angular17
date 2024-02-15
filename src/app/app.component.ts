import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/components/toolbar/toolbar.component';
import { WelcomeComponent } from './src/components/welcome/welcome.component';
import { SocialMediaComponent } from './src/components/social-media/social-media.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ToolbarComponent, WelcomeComponent, RouterOutlet, SocialMediaComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'luis_Ariza';
}
