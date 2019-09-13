import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule, FormsModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatInputModule, MatIconModule]
})
export class MaterialComponentsModule { }
