import { Routes } from '@angular/router';

// Components
import { ListPetComponent } from './components/list-pet/list-pet.component';
import { AddEditPetComponent } from './components/add-edit-pet/add-edit-pet.component';
import { ViewPetComponent } from './components/view-pet/view-pet.component';


export const routes: Routes = [

    { path: '', redirectTo: 'listPets', pathMatch: 'full' },
    { path: 'listPets', component: ListPetComponent },
    { path: 'addPet', component: AddEditPetComponent },
    { path: 'viewPet/:id', component: ViewPetComponent },
    { path: 'editPet/:id', component: AddEditPetComponent },
    { path: '**', redirectTo: 'listPets', pathMatch: 'full'}
];
