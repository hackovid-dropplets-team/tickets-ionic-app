import { DjangoModel } from './django-model';

export interface User extends DjangoModel {
    username: string;
}
