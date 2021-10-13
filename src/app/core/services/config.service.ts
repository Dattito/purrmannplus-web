import { Injectable } from '@angular/core';
import { WindowRefService } from './window-ref.service';

@Injectable({
    providedIn: 'root',
})
export class ConfigService {
    apiUrl: string = 'http://localhost/';

    constructor(private window: WindowRefService) {
        this.apiUrl = window.nativeWindow.env.apiUrl;
    }

}