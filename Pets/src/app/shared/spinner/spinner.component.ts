import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared.module';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [SharedModule], //MatProgressBarModule, CommonModule, BrowserModule
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  loading = false;
}
