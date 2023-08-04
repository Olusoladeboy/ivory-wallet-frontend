import { MenuProps } from "antd";

export type MenuItem = Required<MenuProps>['items'][number];

export const getMenuItem = (
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem => {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

export const currencyFormatter = (currency: string, amount: number) => {
    return Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        useGrouping: true,
        // maximumSignificantDigits: 3,
    }).format(amount);
}

export const Storage = {
    saveItem: (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    },
    getItem: (key: string) => {
        const value = localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }

        return null;
    },
    deleteItem: (key: string) => {
        localStorage.removeItem(key);
    },
};

export enum StorageKeys {
    UserToken = 'IvoryUserToken',
}