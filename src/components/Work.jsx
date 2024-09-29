/**
 * @copyright 2024 firedfrogg
 * @license Apache-2.0
 */

/**
 * Node modules
 */
import ProjectCard from "./ProjectCard";


const works = [
    {
        imgSrc: '/images/project-coming-soon.jpg',
        title: 'Coming Soon',
        tags: ['API', 'SPA'],
        projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        imgSrc: '/images/project-coming-soon.jpg',
        title: 'Coming Soon',
        tags: ['API', 'SPA'],
        projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        imgSrc: '/images/project-coming-soon.jpg',
        title: 'Coming Soon',
        tags: ['API', 'SPA'],
        projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        imgSrc: '/images/project-1.jpg',
        title: 'Personal Website',
        tags: ['Web-Design', 'Development'],
        projectLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
    },
    {
        imgSrc: '/images/project-2.jpg',
        title: 'Database Final Project',
        tags: ['Database', 'Development'],
        projectLink: 'https://github.com/tk3-basdat-marmut/marmut'
    },
    {
        imgSrc: '/images/project-not-available.jpg',
        title: 'WebDev Final Term Project',
        tags: ['API', 'Flutter'],
        projectLink: 'https://github.com/PBP-F07/finals-project'
    },
    {
        imgSrc: '/images/project-not-available.jpg',
        title: 'WebDev Assignment',
        tags: ['API', 'Flutter'],
        projectLink: 'https://github.com/firedfrogg/stardew_tracker'
    },
    {
        imgSrc: '/images/project-not-available.jpg',
        title: 'WebDev Midterm Project',
        tags: ['API', 'Django'],
        projectLink: 'https://github.com/PBP-F07/midterm-project'
    },
];

const Work = () => {
    return (
        <section className="section" id="work">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    Portfolios
                </h2>
                <p className="text-zinc-400 mt-3 mb-8 max-w-[100ch]">
                    Sorted by the <strong>most recent project.</strong>
                </p>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink },
                        key) => (
                            <ProjectCard key={key} imgSrc={imgSrc} title={title}
                            tags={tags} projectLink={projectLink} classes="reveal-up"/>
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Work