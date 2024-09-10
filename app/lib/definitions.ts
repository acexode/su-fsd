export interface Item {
    createdAt: string;
    fileName: string;
}

export type SortMethod = 'createdAtAsc' | 'filenameAsc' | 'filenameDesc';
