export class CommonRespons<T> {
    code: String;
    message: String;
    data: T;

    constructor(code, message, data){
        this.code = code;
        this.message = message;
        this.data = data;
    }
}
