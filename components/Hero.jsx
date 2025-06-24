function Hero() {
    return (
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1 className='text-4xl font-mono'>
            Hello, I'm Yuri.<br />
            I'm a full stack web developer.
        </h1>
        <a href="#about" className="flex items-center hover:scale-150 font-mono mt-10">
            View my work
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-2"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="m18.294 16.793-5.293 5.293V1h-1v21.086l-5.295-5.294-.707.707L12.501 24l6.5-6.5-.707-.707z" />
            </svg>
        </a>


    </div>
    )
}

export default Hero
