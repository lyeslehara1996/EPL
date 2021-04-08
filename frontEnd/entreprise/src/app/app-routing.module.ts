import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ListnavComponent } from './listnav/listnav.component';
import { AjouternavComponent } from './ajouternav/ajouternav.component';
import { ModifnavComponent } from './modifnav/modifnav.component';
import { SupprimernavComponent } from './supprimernav/supprimernav.component';
import { ListconsComponent } from './listcons/listcons.component';
import { AjouterconsComponent } from './ajoutercons/ajoutercons.component';
import { ModifierconsComponent } from './modifiercons/modifiercons.component';
import { SupprimerconsComponent } from './supprimercons/supprimercons.component';
import { ListligneComponent } from './listligne/listligne.component';
import { ModifierligneComponent } from './modifierligne/modifierligne.component';
import { AjouterligneComponent } from './ajouterligne/ajouterligne.component';
import { SupprimerligneComponent } from './supprimerligne/supprimerligne.component';
import { ModifieroprComponent } from './modifieropr/modifieropr.component';
import { AjouteroprComponent } from './ajouteropr/ajouteropr.component';
import { SupprimeroprComponent } from './supprimeropr/supprimeropr.component';





const routes: Routes = [

  {
    path:"accueil", 
    component:  AccueilComponent
    
  },
  {
    path:"listenav", 
    component:  ListnavComponent
    
  },
  {
    path:"ajouternav", 
    component:  AjouternavComponent
    
  },
  {
    path:"modifiernav/:id", 
    component:  ModifnavComponent
    
  },
  {
    path:"supprimernav", 
    component:  SupprimernavComponent
    
  },
  {
    path:"listcons", 
    component:  ListconsComponent
    
  },
  {
    path:"ajoutercons", 
    component:  AjouterconsComponent
    
  },
  {
    path:"modifiercons", 
    component:  ModifierconsComponent
    
  },
  {
    path:"supprimercons", 
    component:  SupprimerconsComponent
    
  }, 
  {
    path:"listeligne", 
    component:  ListligneComponent
    
  },
  {
    path:"ajouterligne", 
    component:  AjouterligneComponent
    
  },
  {
    path:"modifierligne", 
    component:  ModifierligneComponent
    
  },
  {
    path:"supprimerligne", 
    component:  SupprimerligneComponent
    
  },
  {
    path:"ajouteropr", 
    component:  AjouteroprComponent
    
  },
  {
    path:"modifieropr", 
    component:  ModifieroprComponent
    
  },
  {
    path:"supprimeropr", 
    component:  SupprimeroprComponent
    
  },
  {
    path:"modifopr", 
    component:  ModifieroprComponent
    
  },
  {
    path:"modifligne", 
    component:  ModifierligneComponent
    
  },
  {
    path:"modifcons", 
    component:  ModifierconsComponent
    
  },
  {
    path:"modifnav", 
    component:  ModifnavComponent
    
  },
  {
    path:"modifierligne/:id", 
    component:  ModifierligneComponent
    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
