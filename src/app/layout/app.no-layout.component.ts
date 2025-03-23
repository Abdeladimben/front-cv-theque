import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeEnum } from '../core/enums/theme.enum';
import { ThemeService } from '../core/services/theme.service';
import { AppTopBarComponent } from './component/header/app.topbar.component';
import { AppFooterComponent } from './component/footer/app.footer.component';

@Component({
  selector: 'custom-no-layout',
  standalone: true,
  imports: [
    AppTopBarComponent,
    AppFooterComponent,
    RouterModule
  ],
  templateUrl: './app.no-layout.component.html'
})
export class AppNoLayoutComponent {

  currentTheme: string = ThemeEnum.LIGHT;

  constructor(
    private themeService:ThemeService
  ) {
    this.subscribeToTheme();
  }

  subscribeToTheme(){
    this.themeService.currentThemeObservable.subscribe((res:ThemeEnum)=>{
      console.log("res");
      console.log(res);
      this.currentTheme = res;
    })
  }

}
