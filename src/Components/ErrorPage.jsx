import { FaSadCry } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <section className='flex items-center  p-16 text-gray-900 mt-20'>
                <div className='flex flex-col items-center justify-center px-5 mx-auto my-8 pb-20'>
                    <FaSadCry className='w-40 h-40 text-yellow-500' />
                    <div className='max-w-md text-center'>
                        <h2 className='mb-8 font-extrabold text-9xl text-yellow-500'>
                            <span className='sr-only'>Error</span>
                            {404}
                        </h2>
                        <p className='text-2xl font-semibold md:text-3xl mb-8 text-white'>
                            Error
                        </p>
                        <Link to='/' className='btn'>
                            Back to homepage
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;