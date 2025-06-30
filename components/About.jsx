function About() {

    return (
        // profile image and about myself
        <section id="about" className="mb-40">
            <h1 className="text-4xl font-bold mb-6 text-center md:text-center font-mono">About</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center"> 
                    <img 
                        src="/assets/DSC01953.jpg"
                        className="w-64 h-64 rounded-full object-cover mb-10"
                    />
                    <h2 className="font-mono">
                    I’m a full stack developer who genuinely loves learning and exploring new ideas, both in and outside of tech. 
                    What draws me to web development is the perfect mix of creativity and logic—it’s a space where there’s always something new to build or improve. 
                    I have a particular passion for JavaScript, React, and the dynamic nature of the modern web, and I find real joy in solving problems and bringing ideas to life through code. 
                    Outside of work, I try to keep a good balance—I enjoy reading, staying active, and playing soccer whenever I can.
                    </h2>
                </div>
                <div className="grid grid-cols-3 items-center gap-x-4 sm:mt-10">
                    <div className="flex flex-col items-center">
                        <img src="/assets/icons/html.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">HTML</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/icons/css.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">CSS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/icons/js.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">JS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/icons/react.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/icons/nodejs.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">NodeJS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/assets/icons/git.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">Git</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About