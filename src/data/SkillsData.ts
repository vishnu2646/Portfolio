export interface IFrontend {
    technology: string
    level: string
}

export interface IBackend {
    technology: string
    level: string
}

export const frontend: IFrontend[] = [
    {
        technology: 'HTML',
        level: 'Advance',
    },
    {
        technology: 'CSS',
        level: 'Intermediate',
    },
    {
        technology: 'Js',
        level: 'Intermediate',
    },
    {
        technology: 'React',
        level: 'Intermediate'
    },
    {
        technology: 'Git',
        level: 'Intermediate'
    },
    {
        technology: 'vue',
        level: 'Beginner'
    }
] 

export const backend: IBackend[] = [
    {
        technology: 'Python',
        level: 'Intermediate'
    },
    {
        technology: 'Node',
        level: 'Intermediate'
    },
    {
        technology: 'Sqlite3',
        level: 'Intermediate'
    },
    {
        technology: 'Django',
        level: 'Intermediate'
    }
]