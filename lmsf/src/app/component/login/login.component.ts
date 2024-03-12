import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
    selector: 'app-login',
    standalone: true,
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
    imports: [SharedModule,]
})
export class LoginComponent {

}
