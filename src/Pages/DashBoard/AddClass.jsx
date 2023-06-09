import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
    const {user } = useContext(AuthContext);
   
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;


    const onSubmit = data => {
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url, {
            method : "POST",
            body: formData
        })
        .then(res => res.json())
        .then(imgResponse =>{
            if(imgResponse.success){
                const imgUrl = imgResponse.data.display_url;
                console.log(data, imgUrl);
                const {name, insName, price, seats } = data;
                // console.log(name);
                const newClass = {className : name, teacherName : insName, price : parseFloat(price), availableSeats : seats, image: imgUrl};
                console.log(newClass);
            }
        })
    };
    console.log(watch("example"));
    return (
        <div className="w-1/2">
            <h2 className='text-4xl m-3 text-center text-emerald-400 text-medium underline'>Add A Class</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Class Name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                        {errors.name && <span className="text-red-600">Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Class Image</span>
                        </label>
                        <input type="file"  {...register("image", { required: true })} name="image" placeholder="image" className="input input-bordered file-input  w-full max-w-xs" />
                        {errors.image && <span className="text-red-600">Image is required</span>}
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Instructor Name</span>
                        </label>
                        <input type="text" defaultValue={user?.displayName} {...register("insName", { required: true })} name="insName" placeholder="insName" className="input input-bordered" />
                        {errors.insName && <span className="text-red-600">Instructor Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Instructor Email</span>
                        </label>
                        <input type="Email" defaultValue={user?.email} {...register("email", { required: true })} name="email" placeholder="email" className="input input-bordered file-input  w-full max-w-xs" />
                        {errors.email && <span className="text-red-600">Email is required</span>}
                    </div>
                </div>
                <div className="flex gap-4 mb-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Available Seats</span>
                        </label>
                        <input type="text"  {...register("seats", { required: true })} name="seats" placeholder="available seats" className="input input-bordered" />
                        {errors.seats && <span className="text-red-600">Seats is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-lg font-medium">Price</span>
                        </label>
                        <input type="number"  {...register("price", { required: true })} name="price" placeholder="price" className="input input-bordered file-input  w-full max-w-xs" />
                        {errors.price && <span className="text-red-600">Price is required</span>}
                    </div>
                </div>
                <input className="btn btn-outline w-full" type="submit" value='Add Class' />
            </form>
        </div>
    );
};

export default AddClass;