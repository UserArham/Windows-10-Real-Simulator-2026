export interface AppTile {
    id: string;
    label: string;
    color: string;
    size: 'small' | 'medium' | 'wide';
}

export interface WindowState {
    id: number;
    title: string;
    zIndex: number;
    isMinimized: boolean;
}
