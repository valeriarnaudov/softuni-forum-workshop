import { Router } from '@angular/router';
import { ThemeService } from './../theme.service';
import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss'],
})
export class NewThemeComponent {
  constructor(private themeService: ThemeService, private router: Router) {}

  newThemeHandler(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;

    this.themeService.createTheme(themeName, postText).subscribe(() => {
      this.router.navigate(['/theme/recent']);
    });
  }
}
