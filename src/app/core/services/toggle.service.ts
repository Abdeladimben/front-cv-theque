import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ToggleService {

    private isToggled = new BehaviorSubject<boolean>(false);

    isViewer = new BehaviorSubject<boolean>(true);

    get isToggled$() {
        return this.isToggled.asObservable();
    }

    get isViewer$() {
        return this.isViewer.asObservable();
    }

    toggle() {
        if(this.isToggled.value==false)
            this.isViewer.next(false)
        else{
            this.isViewer.next(true)
        }
        this.isToggled.next(!this.isToggled.value);
    }

}
