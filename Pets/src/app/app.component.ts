import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';

// Components
import { ListPetComponent } from "./components/list-pet/list-pet.component";
import { AddEditPetComponent } from './components/add-edit-pet/add-edit-pet.component';
import { ViewPetComponent } from './components/view-pet/view-pet.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ListPetComponent,
    AddEditPetComponent,
    ViewPetComponent,
    SharedModule    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pets';
}
