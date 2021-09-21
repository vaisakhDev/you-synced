import { Injectable } from "@angular/core";

@Injectable()
export class Constants {
    public readonly API_ENDPOINT: string = 'https://lyrfinder.herokuapp.com';
    public readonly LOCAL_API_ENDPOINT: string = 'http://127.0.0.1:5000';
}