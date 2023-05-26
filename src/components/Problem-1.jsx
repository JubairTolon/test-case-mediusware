import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuid } from 'uuid';



const Problem1 = () => {
    const { register, handleSubmit, reset } = useForm();
    let _id = 0
    const [show, setShow] = useState('all');
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    const handleClick = (val) => {
        setShow(val);
        if (val === 'all') {
            setFilteredPosts(posts)
        }
        else if (val === 'active') {
            setFilteredPosts(posts.filter(post => post.isActive === 1))

        } else {
            setFilteredPosts(posts.filter(post => post.isComplete === 1))
        }
    }

    const onSubmit = async (data) => {
        const post = {
            _id: uuid(),
            name: data.name,
            status: data.status,
            isActive: Math.floor(Math.random() * 2),
            isComplete: Math.floor(Math.random() * 2)
        }
        setPosts(posts => [...posts, post]);
        reset();
    }
    console.log(posts)

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form className="row gy-2 gx-3 align-items-center mb-4" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-auto">
                            <input {...register("name")} type="text" className="form-control" placeholder="Name" />
                        </div>
                        <div className="col-auto">
                            <input {...register("status")} type="text" className="form-control" placeholder="Status" />
                        </div>
                        <div className="col-auto">
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'all' && 'active'}`} type="button" onClick={() => handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'active' && 'active'}`} type="button" onClick={() => handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show === 'completed' && 'active'}`} type="button" onClick={() => handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filteredPosts.map(post =>
                                    <tr key={post._id}>
                                        <td>{post.name}</td>
                                        <td>{post.status}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;