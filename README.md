# ExportTeble

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## dev-Dependecies

> npm i @types/file-saver -D

### Otras instalaciones

> npm i mat-table-exporter

```TypeScript
import { MatTableExporterModule } from 'mat-table-exporter';

@NgModule({
  imports: [
    MatTableExporterModule
  ],
 ]})

<mat-table matTableExporter [dataSource]="dataSource" #exporter="matTableExporter">
<button mat-button (click)="exporter.exportTable('csv')"></button>
```


## Autor

Alejandro Soto
