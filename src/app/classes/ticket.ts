import { DjangoModel } from './django-model';
import { User } from './user';

export interface Ticket  extends DjangoModel {
    title: string;
    description: string;
    owner: User;
}
