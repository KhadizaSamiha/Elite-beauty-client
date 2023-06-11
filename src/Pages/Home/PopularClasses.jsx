import { useEffect, useState } from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

const PopularClasses = () => {
    const [PopularClasses, setPopularClasses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/classesPopular')
            .then(res => res.json())
            .then(data => {
                setPopularClasses(data)

            })
            .catch(error => console.log(error))
    }, [])
   
    return (
        <div className="text-center bg-sky-200 mx-6 rounded-lg ">
            <h1 className="text-6xl text-sky-600 my-10 ">Popular Class</h1>
            <Fade delay={1e3} cascade damping={1e-1}>
                <h3 className="text-xl mb-10 text-purple-800">This is our popular class section</h3>
            </Fade>
            <Bounce>
                <div className="grid grid-cols-3 h-1/2  gap-5 ml-8">
                    {
                        PopularClasses?.slice(0, 6).map(popular => <div key={popular._id} className="card w-80 rounded-full bg-purple-200 shadow-xl">
                            <figure><img className="h-24 w-24 mt-5 rounded-full" src={popular.images} /></figure>
                            <div className="card-body">
                                <h2 className="font-bold text-center">{popular.className}</h2>
                                <p className="font-medium text-purple-800">Instructor : {popular.teacherName}</p>
                                <p className="font-medium text-purple-800">Seats : {popular.availableSeats}</p>
                                <p className="font-medium text-purple-800">Price : ${popular.price}</p>
                            </div>
                        </div>)
                    }
                </div>
            </Bounce>
        </div>
    );
};

export default PopularClasses;