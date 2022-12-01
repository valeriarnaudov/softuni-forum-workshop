import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss']
})
export class NewThemeComponent {

  constructor () {}

  newThemeHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }
  }
}
