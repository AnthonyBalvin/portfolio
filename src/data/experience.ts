export interface Experience {
    id: string;
    companyName: string;
    role: string;
    period: string;
    description: string;
}

export const experienceData: Experience[] = [
    {
        id: 'exp-1',
        companyName: 'Google',
        role: 'Lead Software Engineer at Google',
        period: 'Nov 2019 - Present',
        description: "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide."
    },
    {
        id: 'exp-2',
        companyName: 'Apple',
        role: 'Junior Software Engineer at Apple',
        period: 'Jan 2018 - Dec 2017',
        description: 'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.'
    },
    {
        id: 'exp-3',
        companyName: 'Meta',
        role: 'Software Engineer at Meta',
        period: 'Jan 2017 - Oct 2019',
        description: "At Meta, I served as a Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability."
    }
];
