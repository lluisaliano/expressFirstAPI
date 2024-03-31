export interface Activity {
    id: number
    name: string
    location: string
    information: string
    category: 'water' | 'mountain' | 'exploring'
    price: number
}

export type noIDActivity = Omit<Activity, 'id'>