export interface IError extends Error {
    statusText: string;
}

export interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}