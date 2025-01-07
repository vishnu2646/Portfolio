export interface Experience {
    id:number;
    title: string;
    subtitle: string;
    time: string;
}

export interface Education {
    id: number;
    title: string;
    subtitle: string;
    time: string;
}

export type ExperienceData = {
    id: number;
    experience: Experience[];
}

export type Educationdata = {
    id: number;
    education: Education[];
}

export type Group = {
    experienceData: ExperienceData;
    educationData: Educationdata;
}

export const QualificationData: Group = {
    experienceData: {
        id: 0,
        experience: [
            {
                id: 1,
                title: 'Applied Materials',
                subtitle: 'Software Developer',
                time: '2022 - 2024'
            },
            {
                id: 2,
                title: 'Incresco',
                subtitle: 'Software Developer (intern)',
                time: '2022 (3 months)'
            },
            {
                id: 3,
                title: 'Sezzle',
                subtitle: 'Product Engineer (intern)',
                time: '2021 - 2022'
            },
        ]
    },
    educationData: {
        id: 1,
        education: [
            {
                id: 1,
                title: 'Bachelor of Computer Science Engineering',
                subtitle: 'Sri Krishna College of Techonology, Coimbatore',
                time: '2018 - 2022'
            },
            {
                id: 2,
                title: 'Secondary School Leaving Certificate',
                subtitle: 'Sri Vijay Vidhyalaya, Hosur',
                time: '2017 - 2018'
            },
            {
                id: 3,
                title: 'Higher Secondary',
                subtitle: 'Sri Vijay Vidhyalaya, Hosur',
                time: '2015 - 2016'
            }
        ]
    }
}
