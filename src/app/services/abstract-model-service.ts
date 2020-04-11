import { Observable } from 'rxjs';
import { BaseApiService } from './base-api.service';
import { DjangoModel } from '../classes/django-model';

export abstract class AbstractModelService<T extends DjangoModel> {

    protected abstract prefix: string;

    constructor(
        protected api: BaseApiService
    ) {
    }

    public getAll(): Observable<Array<T>> {
        return this.api.get<Array<T>>(this.prefix);
    }

    public get(slug: string): Observable<T> {
        return this.api.get<T>(`${this.prefix}/${slug}`);
    }

    public edit(model: T) {
        return this.api.patch<T>(`${this.prefix}/${model.id}`, model);
    }

    public create(model: T) {
        return this.api.post<T>(`${this.prefix}`, model);
    }

    public delete(model: T) {
        return this.api.delete<T>(`${this.prefix}/${model.id}`);
    }
}

