import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs'; 

@Injectable()
export class ContactService {
    private baseUrl = 'http://localhost:8080';

    constructor(private http: Http) { }

    getContacts():  Promise<Contact[]> {
        return this.http.get(this.baseUrl + '/api/contacts/')
            .toPromise()
            .then(response => response.json() as Contact[])
            .catch(this.handleError);
    }

    createCliente(contactData: Contact): Promise<Contact> {
        return this.http.post(this.baseUrl + '/api/contacts/', contactData)
            .toPromise().then(response => response.json() as Contact)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('Some error occured', error);
        return Promise.reject(error.message || error);
    }
}