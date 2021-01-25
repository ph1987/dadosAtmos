import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AnoAtualComponent } from './ano-atual/ano-atual.component';
import { AnosAnterioresComponent } from './anos-anteriores/anos-anteriores.component';
import { InicialComponent } from './inicial/inicial.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { AdmAnosAnterioresComponent } from './admin/adm-anos-anteriores/adm-anos-anteriores.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtilService } from './services/util.service';

@NgModule({
  declarations: [
    AppComponent,
    AnoAtualComponent,
    AnosAnterioresComponent,
    InicialComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    AdmAnosAnterioresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatTableModule,
    NgbModule,
    MatSelectModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatSnackBarModule
  ],
  providers: [UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
