export class UserModel {
    public id?: number;
    public username: string;
    public password: string;

    public token?: string; // todo create jwt tokens
}