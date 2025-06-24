import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function Contact() {
    const [state, handleSubmit] = useForm("xgvypeey");
    if (state.succeeded) {
        return <h2 className="mb-20 font-mono font-bold font-2xl">Thanks for contacting me!</h2>;
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <form 
                onSubmit={handleSubmit} 
                action="https://formspree.io/f/xgvypeey" 
                method="POST" 
                className="p-6 w-full max-w-sm"
            >
                <h2 className="text-2xl font-bold font-mono mb-4 text-center">Contact Me</h2>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        name="name"
                        placeholder="Name"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Name'}
                    />
                </div>
                <div className="mb-4">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        name="email"
                        placeholder="Email"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Email'}
                    />
                    <ValidationError 
                        prefix="Email" 
                        field="email"
                        errors={state.errors}
                    />
                </div>
                <div className="mb-6">
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
                        name="message"
                        placeholder="Message"
                        rows="4"
                        onFocus={(e) => e.target.placeholder = ''}
                        onBlur={(e) => e.target.placeholder = 'Message'}
                    ></textarea>
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold font-mono py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        disabled={state.submitting}
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}


export default Contact