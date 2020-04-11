import { DjangoModel } from './django-model';

export interface User extends DjangoModel {
    username: string;
    first_name: string;
    last_name: string;
}
