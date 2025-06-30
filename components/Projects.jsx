function Projects() {
    return (
        <section className="projects mb-20">
            <h1 className="text-4xl font-bold mb-10 text-center md:text-center font-mono">Projects</h1>
            <div className="flex flex-col md:flex-row justify-start items-center mb-20">
                <img src="./assets/projects/spark.png" className="w-full md:w-2/3"/>
                <div className="md:ml-20 sm:mt-10 flex flex-col flex-wrap items-start text-left">
                    <h2 className="text-2xl font-bold font-mono mb-5">SparkBytes!</h2>
                    <p className="font-mono">Full stack project utilizing React, Vite, TS, Firebase, and Mapbox API.</p>
                    <a href="https://681421597e29406dae061f0b--chic-griffin-d3de53.netlify.app/" target="_blank">
                        <div className="p-2 mt-5 hover:bg-gray-400 border-2 md:border-solid rounded font-mono">
                            <h3>Live App</h3>
                        </div>
                    </a>
                    <a href="https://github.com/simransingh19/sparkbytes" target="_blank">
                        <div className="p-2 mt-5 hover:bg-gray-400 border-2 md:border-solid rounded font-mono">
                            <h3>Learn More</h3>
                        </div>
                    </a>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-end items-center">
                <div className="md:mr-20 sm:mt-10 flex flex-col items-end text-right order-2 md:order-none">
                    <h2 className="text-2xl font-bold font-mono mb-5">Vapor</h2>
                    <p className="font-mono">Full stack project utilizing Django and its MVC architecture.</p>
                    <a href="https://young-depths-17182-3dc0071ad220.herokuapp.com/project/" target="_blank">
                        <div className="p-2 mt-5 hover:bg-gray-400 border-2 md:border-solid rounded font-mono">
                            <h3>Live App</h3>
                        </div>
                    </a>
                    <a href="https://github.com/yuribychkov15/Django/tree/main/project" target="_blank">
                        <div className="p-2 mt-5 hover:bg-gray-400 border-2 md:border-solid rounded font-mono">
                            <h3>Learn More</h3>
                        </div>
                    </a>
                </div>
                <img src="./assets/projects/vapor.png" className="w-full md:w-2/3 order-1 md:order-none"/>
            </div>
        </section>
    )
}

export default Projects