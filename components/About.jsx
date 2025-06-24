function About() {

    return (
        // profile image and about myself
        <section className="about mb-40">
            <h1 className="text-4xl font-bold mb-6 text-center md:text-center font-mono">About</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col justify-center items-center"> 
                    <img 
                        src="./assets/DSC01953.jpg"
                        className="w-64 h-64 rounded-full object-cover mb-10"
                    />
                    <h2 className="font-mono">
                        Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React and all things web development. 
                        The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. 
                        When I’m not at my computer I like to spend my time reading, keeping fit and playing soccer.
                    </h2>
                </div>
                <div className="grid grid-cols-3 items-center gap-x-4 sm:mt-10">
                    <div className="flex flex-col items-center">
                        <img src="./assets/icons/html.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">HTML</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/icons/css.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">CSS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/icons/js.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">JS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/icons/react.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">React</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/icons/nodejs.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">NodeJS</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="./assets/icons/git.png" className="pb-2 w-32 h-32"/>
                        <span className="font-mono">Git</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About