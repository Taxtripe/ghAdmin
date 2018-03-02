import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class DataService {
    
    private dataSource = new BehaviorSubject<any>({});
    
    constructor() {}
}