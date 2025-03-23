import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ThemeEnum } from '../enums/theme.enum';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentThemeSubject = new BehaviorSubject<ThemeEnum>(ThemeEnum.LIGHT);

  constructor() { }

  get currentThemeObservable(){
    return this.currentThemeSubject.asObservable();
  }

  setCurrentThemeObservable(themeEnum:ThemeEnum){
    this.currentThemeSubject.next(themeEnum);
  }
}
