import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableExporterModule } from 'mat-table-exporter';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableExporterModule
  ],
  exports: [
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatTableExporterModule
  ]
})
export class MaterialModule { }
