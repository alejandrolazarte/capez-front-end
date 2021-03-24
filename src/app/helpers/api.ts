import { environment } from "../../environments/environment"


export class Api{
    public static  CreateUrl(url: string): string {
        return `${environment.apiUrl}/api/${url}`
    }
}