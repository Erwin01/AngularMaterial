import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { RouterLink, } from '@angular/router';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '../../shared/shared.module';



@Component({
  selector: 'app-view-pet',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './view-pet.component.html',
  styleUrl: './view-pet.component.css'
})
export class ViewPetComponent {

}
