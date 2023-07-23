const images = [
    'https://images.pexels.com/photos/207691/pexels-photo-207691.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/8199762/pexels-photo-8199762.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/15953913/pexels-photo-15953913/free-photo-of-cityscape-of-oxford.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1579708/pexels-photo-1579708.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3747505/pexels-photo-3747505.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/1106468/pexels-photo-1106468.jpeg?auto=compress&cs=tinysrgb&w=1600',
];


const Gallery = () => {
    return (
        <div className="container mx-auto py-8">

            <div>
                <h2 className="text-center my-12 font-bold text-cyan-400 text-5xl">Visit Our Collages gallery</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {images.map((imageUrl, index) => (
                    <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            className="w-full h-40 object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;