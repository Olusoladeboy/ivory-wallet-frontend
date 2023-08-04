export interface IError extends Error {
    statusText: string;
}

export interface DataType {
    id?: number;
    userId: number;
    userToId: number;
    amount: number;
    bank: string;
    accountNumber: string;
    reference: string;
    type: string;
    status: string;
}