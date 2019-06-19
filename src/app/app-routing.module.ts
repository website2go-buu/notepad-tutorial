import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'note', pathMatch: 'full' },
  { path: 'notes', loadChildren: './home/home.module#HomePageModule' },
  { path: 'notes/:id', loadChildren: './detail/detail.module#DetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
