import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouternavComponent } from './ajouternav/ajouternav.component';
import { ListnavComponent } from './listnav/listnav.component';
import { ModifnavComponent } from './modifnav/modifnav.component';
import { SupprimernavComponent } from './supprimernav/supprimernav.component';
import { ListconsComponent } from './listcons/listcons.component';
import { AjouterconsComponent } from './ajoutercons/ajoutercons.component';
import { ModifierconsComponent } from './modifiercons/modifiercons.component';
import { SupprimerconsComponent } from './supprimercons/supprimercons.component';
import { AjouterligneComponent } from './ajouterligne/ajouterligne.component';
import { ListligneComponent } from './listligne/listligne.component';
import { ModifierligneComponent } from './modifierligne/modifierligne.component';
import { SupprimerligneComponent } from './supprimerligne/supprimerligne.component';
import { SupprimeroprComponent } from './supprimeropr/supprimeropr.component';
import { ModifieroprComponent } from './modifieropr/modifieropr.component';
import { AjouteroprComponent } from './ajouteropr/ajouteropr.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { HttpClientModule } from  '@angular/common/http';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    AjouternavComponent,
    ListnavComponent,
    ModifnavComponent,
    SupprimernavComponent,
    ListconsComponent,
    AjouterconsComponent,
    ModifierconsComponent,
    SupprimerconsComponent,
    AjouterligneComponent,
    ListligneComponent,
    ModifierligneComponent,
    SupprimerligneComponent,
    SupprimeroprComponent,
    ModifieroprComponent,
    AjouteroprComponent,
    AuthentificationComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
