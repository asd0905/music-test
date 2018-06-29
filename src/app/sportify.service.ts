import { Injectable } from '@angular/core';
import {
    Http,
    Headers,
    RequestOptions
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

export class SportifyService {
    constructor(private http: Http) {
    }

    searchTrack(query: string) {
        let params: string = [
            `q=${query}`,
            `type=track`
        ].join("&");
        let queryURL: string = `https://aip.spotify.com/v1/search?${params}`;
        return this.http
            .request(queryURL)
            .map((res: any) => res.json());
    }
}