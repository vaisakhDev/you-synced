import { Injectable } from "@angular/core";
import { Constants } from "src/app/config/constants";
import { QueryStringParameters } from "src/app/shared/classes/query-string-parameters";
import { UrlBuilder } from "src/app/shared/classes/url-builder";

@Injectable()
export class ApiEndpointsService {
    constructor(private constants: Constants){
    }

    private createUrl(action: string, queryParameters?: QueryStringParameters): string{
        const urlBuilder = new UrlBuilder(this.constants.API_ENDPOINT, action, queryParameters);
        return urlBuilder.toString();
    }

    public getLyricsEndpoint(songName: string, artistName: string): string{
        const qp = new QueryStringParameters();
        qp.push('song', songName);
        qp.push('artist', artistName)
        return this.createUrl('get-lyrics', qp)
    }
}