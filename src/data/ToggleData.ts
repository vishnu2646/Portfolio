export interface ServiceData {
    id: number;
    title: string;
    description: string;
    points: string[];
}

export const Services: ServiceData[] = [
    { 
        id: 1,
        title:"Product Designer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni, accusamus quam quae architecto.",
        points: [
            "Project setup. Ensure your team has all the key information and assets.",
            "Research and concept. Collect insights and shape the product or its features.",
            "Wireframing. Transfer your ideas into connected wireflows.",
            "Testing & validation"
        ]
    },
    { 
        id: 2,
        title:"UX/UI Designer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni, accusamus quam quae architecto.",
        points: [
            "Custom Web Design & Development.",
            "Corporate Branding & Graphics Design",
            "Wireframing",
            "Mobile App Design",
            "Web App Design",
            "Product Design",
        ]
    },
    { 
        id: 3,
        title:"Visual Designer",
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae magni, accusamus quam quae architecto.",
        points: [
            "User interfaces on apps and websites",
            "All types of publications",
            "Wireframing",
            "Mobile App Design",
            "Advertisements and commercials",
        ]
    }
] 