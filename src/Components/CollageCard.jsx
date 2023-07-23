

const CollageCard = () => {
    return (
        <div className="py-10">
            
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border p-6 rounded-2xl  shadow-lg bg-cyan-300">
                    <div>
                        <img className="w-56 h-56 rounded-xl border-4 mx-auto" src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className="text-center space-y-3 text-orange-700 mt-4">
                        <h2 className="">{}</h2>
                        <p> XYZ collage</p>
                        <p> Admission Date : June 2023</p>
                        <p>Cultural Night, Tech Symposium, Sports Meet</p>
                        <p>Cricket, Badminton, Table Tennis</p>

                        <button className="btn btn-info">View Details</button>
                        


                    </div>
                </div>
                <div className="border p-6 rounded-2xl  shadow-lg bg-cyan-300">
                    <div>
                        <img className="w-56 h-56 rounded-xl border-4 mx-auto" src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className="text-center space-y-3 text-orange-700 mt-4">
                        <h2 className="">{}</h2>
                        <p> XYZ collage</p>
                        <p> Admission Date : June 2023</p>
                        <p>Cultural Night, Tech Symposium, Sports Meet</p>
                        <p>Cricket, Badminton, Table Tennis</p>
                        


                    </div>
                </div>
                <div className="border p-6 rounded-2xl  shadow-lg bg-cyan-300">
                    <div>
                        <img className="w-56 h-56 rounded-xl border-4 mx-auto" src="https://images.pexels.com/photos/207684/pexels-photo-207684.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                    </div>
                    <div className="text-center space-y-3 text-orange-700 mt-4">
                        <h2 className="">{}</h2>
                        <p> XYZ collage</p>
                        <p> Admission Date : June 2023</p>
                        <p>Cultural Night, Tech Symposium, Sports Meet</p>
                        <p>Cricket, Badminton, Table Tennis</p>
                        


                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollageCard;