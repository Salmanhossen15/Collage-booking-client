

const SearchCollages = () => {
    return (

        <div className="bg-gray-100">
            <div className="container mx-auto py-8">
                <div className="max-w-md mx-auto p-4">
                   
                    <div className="relative">
                       
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M11 18a7 7 0 100-14 7 7 0 000 14z"></path>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M21 21l-4.35-4.35"></path>
                            </svg>
                        </div>
                        
                        <input className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-300 focus:placeholder-gray-400 sm:text-sm" type="search" placeholder="Search Collages"/>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchCollages;