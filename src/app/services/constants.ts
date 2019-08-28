import { environment } from "../../environments/environment";

export class Constants{
    static readonly BASE_URL: string = environment.BASE_URL;
    static readonly API_BASE_URL: string = `${environment.BASE_URL}${environment.API_PATH}`;
}

