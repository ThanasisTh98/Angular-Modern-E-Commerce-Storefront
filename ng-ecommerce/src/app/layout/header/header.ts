import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderAction } from "../header-action/header-action";

@Component({
  selector: 'app-header',
  imports: [MatToolbarModule, HeaderAction],
  template: `
    <mat-toolbar class="w-full elevated py-2">
      <div class="max-w-[1200px] mx-auto w-full flex justify-between items-center">
        <span>My E-Commerce Store</span>
        <app-header-action></app-header-action>
      </div>
      
    </mat-toolbar>
  `,
  styles: ``,
})
export class Header {

}
