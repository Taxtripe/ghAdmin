import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ImgUploaderService {
     constructor(private _http: Http) {

    }
    
    public uploadImage(formdata: any ) {
        let _url: string = 'https://www.somebby.co.kr/resource/event';
        return this._http.post(_url, formdata)
        .catch(this._errorHandler) ;
    }

    private _errorHandler(error: Response) {
        console.error('Error Occured: ' + error);
        return Observable.throw(error || 'Some Error on Server Occured');

    }

       public  getFilesList() {
        let _url: string = 'https://www.somebby.co.kr/resource/event';
        return this._http.get(_url)
        .catch(this._errorHandler) ;
    }
}