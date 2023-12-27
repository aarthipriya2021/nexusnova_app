import images from './images';

const Menu = [
    {
        text: 'About us',
        link: '#team',
    },
    {
        text: 'Services',
        link: '#services',
    },
    {
        text: 'Use Cases',
        link: '#use-cases',
    },
    {
        text: 'Process',
        link: '#process',
    },

    {
        text: 'Testimonials',
        link: '#testimonials',
    },
    {
        text: 'Request a quote',
        link: '#quote',
    }
];
const ServicesData = [
    {
        titleone: 'Search engine',
        titletwo: 'optimization',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services01,
    },
    {
        titleone: 'Pay-per-click',
        titletwo: 'advertising',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services02,
    },
    {
        titleone: 'Social Media',
        titletwo: 'Marketing',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services03,
    },
    {
        titleone: 'Email',
        titletwo: 'Marketing',
        link: '#',
        itemclass: 'blight',
        imgURL: images.services04,
    },
    {
        titleone: 'Content',
        titletwo: 'Creation',
        link: '#',
        itemclass: 'bgreen',
        imgURL: images.services05,
    },
    {
        titleone: 'Analytics and',
        titletwo: 'Tracking',
        link: '#',
        itemclass: 'bdark',
        imgURL: images.services06,
    },
]
const CaseStudies = [
    {
        text: 'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
        link: '#',
    },
    {
        text: 'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
        link: '#',
    },
    {
        text: 'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.',
        link: '#',
    },
];

const WorkingProcess = [
    {
        title: 'Consultation',
        description: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.',
    },
    {
        title: 'Research and Strategy Development',
        description: 'In the Research and Strategy Development phase, we meticulously explore market dynamics and consumer insights, laying the foundation for a robust digital roadmap. Our approach blends data-driven analysis with creative ingenuity, ensuring your brand\'s strategy is not only strategic but also resonates with your audience\'s evolving needs.',
    },
    {
        title: 'Implementation',
        description: 'During the Implementation phase, we bring your digital strategy to life, executing with precision and agility. From seamless website launches to targeted campaigns, our hands-on approach ensures every element aligns to propel your brand towards success in the digital realm.',
    },
    {
        title: 'Monitoring and Optimization',
        description: 'In the Monitoring and Optimization stage, we vigilantly track performance metrics, fine-tuning strategies for continual improvement. Our proactive approach ensures that your digital presence evolves dynamically, staying ahead of trends and maximizing impact for sustained success.',
    },
    {
        title: 'Reporting and Communication',
        description: 'In the Reporting and Communication phase, transparency is our commitment. We provide comprehensive insights, distilling complex data into actionable strategies, and maintain open channels to ensure your goals align seamlessly with our collaborative efforts, fostering a partnership rooted in clarity and success.',
    },
    {
        title: 'Continual Improvement',
        description: 'In our Continual Improvement phase, we iterate and innovate, consistently refining strategies to adapt to dynamic digital landscapes. Embracing change as an opportunity, we ensure your brand stays at the forefront, delivering sustained growth and relevance in an ever-evolving digital ecosystem.',
    },

];

const Team = [
    {
        name: 'John Smith',
        position: 'CEO and Founder',
        info: '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        foto: images.team01,
        linkedin: '#',
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations',
        info: '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        foto: images.team02,
        linkedin: '#',
    },
    {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        info: '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        foto: images.team03,
        linkedin: '#',
    },
    {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        info: '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        foto: images.team04,
        linkedin: '#',
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        info: '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        foto: images.team05,
        linkedin: '#',
    },
    {
        name: 'Sarah Kim',
        position: 'Content Creator',
        info: '2+ years of experience in writing and editing Skilled in creating compelling, SEO-optimized content for various industries',
        foto: images.team06,
        linkedin: '#',
    },

];

const Testimonials = [
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
    {
        name: 'John Smith',
        position: 'Marketing Director at XYZ Corp',
        testimonial: '"We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence."',
    },
];
// eslint-disable-next-line import/no-anonymous-default-export
export default { Menu, CaseStudies, WorkingProcess, Team, Testimonials, ServicesData };
