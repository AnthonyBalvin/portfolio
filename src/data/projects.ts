export interface Project {
    id: string;
    title: string;
    category: string;
    link: string;
    description: string;
    stack: string[];
    image: string;
    demoCredentials?: {
        user?: string;
        pass: string;
        note?: string;
    };
}

export const projectsData: Project[] = [
    {
        id: 'project-1',
        title: 'Chanell Tecnología',
        category: 'E-COMMERCE',
        link: 'https://chanell-tecnologia.vercel.app/',
        description: 'Plataforma web empresarial desarrollada para gestión y presencia digital de la marca Chanell Tecnología.',
        stack: ['React', 'Next.js', 'Tailwind', 'Stripe'],
        image: '/proyectos/chanell.png'
    },
    {
        id: 'project-2',
        title: 'Estrella Farma',
        category: 'SISTEMA ADMINISTRATIVO',
        link: 'https://sistema-estrellafarma.vercel.app/',
        description: 'Sistema administrativo para farmacia con gestión de productos, ventas y control interno.',
        stack: ['React', 'Node.js', 'Express', 'MySQL'],
        image: '/proyectos/estrellafarma.png',
        demoCredentials: {
            user: 'admin@estrellafarma.com',
            pass: 'password123'
        }
    },
    {
        id: 'project-3',
        title: 'UVK Cines',
        category: 'SISTEMA DE GESTIÓN',
        link: 'https://uvk.vercel.app/',
        description: 'Sistema web para gestión de cine con administración de películas, funciones y ventas.',
        stack: ['React', 'TypeScript', 'Tailwind', 'Supabase'],
        image: '/proyectos/uvkcine.png',
        demoCredentials: {
            user: 'demo@uvkcine.com',
            pass: 'demo12'
        }
    },
    {
        id: 'project-4',
        title: 'Puesto Web',
        category: 'PUNTO DE VENTA',
        link: 'https://puesto-web-murex.vercel.app/login',
        description: 'Sistema web adaptable para tiendas y pequeños negocios con panel administrativo.',
        stack: ['Vue', 'Firebase', 'Tailwind', 'Vite'],
        image: '/proyectos/puestoweb.png',
        demoCredentials: {
            user: 'anthony@gmail.com',
            pass: 'anthony'
        }
    }
];
