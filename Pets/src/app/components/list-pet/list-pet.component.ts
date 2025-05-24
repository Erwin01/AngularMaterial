import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Pet } from '../../interfaces/pet';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatInput, MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { SpinnerComponent } from "../../shared/spinner/spinner.component";


const lisPets: Pet[] = [
  { name: 'Luna', age: 3, colorcast: 'Golden', color: 'Dorado', weigth: 44 },
  { name: 'Lukas', age: 6, colorcast: 'Dogo Argentino', color: 'Dorado', weigth: 13 },
  { name: 'Zeus', age: 5, colorcast: 'Terrier', color: 'Blanco', weigth: 37 },
  { name: 'Canela', age: 1, colorcast: 'Ovejero Alemán', color: 'negro', weigth: 63 },
  { name: 'Kiara', age: 2, colorcast: 'Labrador', color: 'Negro/blanco', weigth: 44 },
  { name: 'Mateo', age: 1, colorcast: 'Criollo', color: 'Café', weigth: 25 },
  { name: 'Mike', age: 8, colorcast: 'Criollo', color: 'Negro', weigth: 34 },
];

@Component({
  selector: 'app-list-pet',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginator,
    MatSortModule,
    MatSort,
    MatFormFieldModule,
    MatInputModule,
    MatLabel,
    MatInput,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    RouterModule,
    MatProgressBarModule,
    SpinnerComponent,
    
],
  templateUrl: './list-pet.component.html',
  styleUrl: './list-pet.component.css'
})
export class ListPetComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['name', 'age', 'colorcast', 'color', 'weigth', 'actions'];
  dataSource = new MatTableDataSource<Pet>(lisPets);
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private snackBar: MatSnackBar) {

  }

    ngOnInit(): void {   
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Items por página';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deletePet() {
    this.loading = true;

    setTimeout(() => {
      this.loading = false;
      this.snackBar.open('La mascota fue eliminada', '', {
      duration: 4000,
      horizontalPosition: 'center',
    });
    }, 3000);

    
  }

}
