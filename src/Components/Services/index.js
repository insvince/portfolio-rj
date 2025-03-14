import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        url: 'https://images.ctfassets.net/l3bopzzawli1/1nZDHo6PA7SpTQq4VECOhT/ce782df920e48a114e3aa6e7668150d6/service-ux.svg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias iusto provident.',
        children: [
            { icon: faCheck, content: 'example 1' },
            { icon: faCheck, content: 'example 1' },
            { icon: faCheck, content: 'example 1' },
            { icon: faCheck, content: 'example 1' },
        ],
    },
    {
        url: 'https://images.ctfassets.net/l3bopzzawli1/4Dfr9VTehS5OlKVv8GVzOB/113e4c884590fc58009099448edc02e5/service-ui.svg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias iusto provident.',
        children: [
            { icon: faCheck, content: 'example 1' },
            { icon: faCheck, content: 'example 1' },
            { icon: faCheck, content: 'example 1' },
        ],
    },
    {
        url: 'https://images.ctfassets.net/l3bopzzawli1/4zMCq0MxSCCXOnUqZHc6Re/42a0be5daa02968f7c8de5786f9df226/service-brand.svg',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis molestias iusto provident.',
        children: [
            { icon: faCheck, content: 'example 1' },
            { icon: faCheck, content: 'example 1' },
            { icon: faCheck, content: 'example 1' },
        ],
    },
];

const Service = ({ item, children }) => {
    return (
        <div className="text-center bg-gradient-to-br to-blue-600 from-cyan-500 rounded-2xl h-[450px] text-black w-[30%] flex flex-col justify-start items-center duration-500  xl:h-[400px] xl:w-[28%]xl:px-2 md:w-[350px] md:h-[420px] md:mb-12 md:px-2 sm:w-[280px]">
            <img className="w-[100px] py-8 xl:w-[80px]" src={item.url} alt="feature" />
            <h2 className="text-2xl font-bold xl:text-lg">Title</h2>
            <span className="pt-5">{item.detail}</span>
            <div className="flex flex-wrap pt-5 list-none xl:pt-2 xl:justify-center">{children}</div>
        </div>
    );
};

const IconService = ({ icon, content }) => {
    return (
        <li className="w-[40%] pr-3 border-solid border border-black rounded-xl mx-4 mt-5 xl:mx-2 xl:w-[42%] xl:pr-1 ">
            <FontAwesomeIcon className="mr-1" icon={icon} />
            {content}
        </li>
    );
};

function Services({ status, idComponent }) {
    return (
        <div
            className={`reveal flex justify-center relative min-h-[650px] pointer-events-none select-none  ${
                status.animate === 'true' && 'animate-translateY'
            }`}
            id={idComponent}
        >
            <div className="absolute text-7xl font-bold top-[50%] z-10 duration-500 xl:text-5xl sm:text-4xl ">Coming Soon</div>
            <div className="w-3/4 duration-500 xl:w-[90%] lg:w-full">
                <h2 className="text-4xl font-bold underline text-center mb-12 mt-12 xl:text-3xl ">Services</h2>
                <div className="flex justify-evenly items-center opacity-25 md:flex-col">
                    {data.map((item, index) => (
                        <Service key={index} item={item}>
                            {item.children.map((child, index) => (
                                <IconService key={index} content={child.content} icon={child.icon} />
                            ))}
                        </Service>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
