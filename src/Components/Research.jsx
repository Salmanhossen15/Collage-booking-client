

const Research = () => {

    const research = [
        {
            "id": 1,
            "college_name": "University of ABC",
            "research_name": "Advancements in Renewable Energy",
            "research_link": "https://example.com/research-abc",
            "research_image": "https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            "id": 2,
            "college_name": "XYZ College",
            "research_name": "AI and its Impact on Society",
            "research_link": "https://example.com/research-xyz",
            "research_image": "https://images.pexels.com/photos/5726693/pexels-photo-5726693.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            "id": 3,
            "college_name": "ABC State University",
            "research_name": "The Future of Space Exploration",
            "research_link": "https://example.com/research-space",
            "research_image": "https://images.pexels.com/photos/3825560/pexels-photo-3825560.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            "id": 4,
            "college_name": "University of DEF",
            "research_name": "Climate Change Mitigation Strategies",
            "research_link": "https://example.com/research-def",
            "research_image": "https://images.pexels.com/photos/3825559/pexels-photo-3825559.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            "id": 5,
            "college_name": "PQR Institute of Technology",
            "research_name": "Machine Learning for Healthcare",
            "research_link": "https://example.com/research-pqr",
            "research_image": "https://images.pexels.com/photos/9431442/pexels-photo-9431442.jpeg?auto=compress&cs=tinysrgb&w=1600"
        },
        {
            "id": 6,
            "college_name": "LMN Research Center",
            "research_name": "Advances in Quantum Computing",
            "research_link": "https://example.com/research-lmn",
            "research_image": "https://images.pexels.com/photos/5553061/pexels-photo-5553061.jpeg?auto=compress&cs=tinysrgb&w=1600"
        }
    ]

    return (
        // <div >
        //     <h2 className="font-bold text-4xl text-center my-6">Popular Research Links That We Recommended To You</h2>
        //     <div className="flex justify-between gap-4">
        //         <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //             <figure><img src="https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Shoes" /></figure>
        //             <div className="card-body">
        //                 <h2 className="card-title">Shoes!</h2>
        //                 <p>If a dog chews shoes whose shoes does he choose?</p>
        //                 <div className="card-actions justify-end">
        //                     <button className="btn btn-primary">Buy Now</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="card card-compact w-96 bg-base-100 shadow-xl">
        //             <figure><img src="https://images.pexels.com/photos/3825539/pexels-photo-3825539.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="Shoes" /></figure>
        //             <div className="card-body">
        //                 <h2 className="card-title">Shoes!</h2>
        //                 <p>If a dog chews shoes whose shoes does he choose?</p>
        //                 <div className="card-actions justify-end">
        //                     <button className="btn btn-primary">Buy Now</button>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="py-10">

            <h2 className="text-center my-12 font-bold text-cyan-400 text-5xl ">Popular Research Links That We Recommended To You</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    research.map(({ id, college_name, research_name, research_link, research_image }) => (
                        <div key={id} className="border p-6 rounded-2xl  shadow-lg ">
                            <div>
                                <img className="w-56 h-56 rounded-xl border-4 mx-auto" src={research_image} alt="" />
                            </div>
                            <div className="text-center space-y-3 text-orange-700 mt-4">
                                <h2 className="">{college_name}</h2>
                                <p> {research_name}</p>
                                <p>{research_link}</p>
                                
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    );
};

export default Research;