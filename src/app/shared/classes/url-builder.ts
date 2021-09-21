import { QueryStringParameters } from "./query-string-parameters";

export class UrlBuilder {
    public url: string;
    public queryString:QueryStringParameters;

    constructor(
        private baseUrl: string,
        private action: string,
        queryString?: QueryStringParameters,
    ){
        // baseUrl =  https://domain.com/api
        // action = get-users
        this.url = [baseUrl, action].join('/');
        this.queryString = queryString || new QueryStringParameters();
    }

    public toString(): string {
        const qs = this.queryString ? this.queryString.toString() : '';
        return qs ? `${this.url}?${qs}` : this.url;
    }
}
