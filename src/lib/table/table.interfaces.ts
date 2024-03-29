export interface IPlexTableColumns {
    key: string;
    label: string;
    sorteable?: boolean;
    opcional?: boolean;
    width?: string | number;
    right?: boolean;
    sort?: (a: any, b: any) => number;
    filterBy?: (a: any) => any;
}

export interface IPlexSortData {
    sortBy?: string;
    sortOrder?: 'DESC' | 'ASC';
}


export interface IPlexColumnDisplay { [key: string]: boolean; }
