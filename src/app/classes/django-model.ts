export interface DjangoModel {
    id: number;
}

export interface DjangoPaginationResult<T extends DjangoModel> {
    count: number;
    next: string;
    previous: string;
    results: Array<T>;
}