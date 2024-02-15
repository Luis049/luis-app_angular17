import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout';

@Component({
    selector: 'app-welcome',
    standalone: true,
    templateUrl: './welcome.component.html',
    styleUrl: './welcome.component.scss',
    imports: [MainContainerComponent]
})
export class WelcomeComponent {

}
