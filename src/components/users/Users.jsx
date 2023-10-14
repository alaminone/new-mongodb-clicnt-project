import { useLoaderData } from "react-router-dom";
import UserDetils from "./UserDetils";



const Users = () => {

    const users = useLoaderData();
    return (
        <div className="max-w-6xl mx-auto">
            <h3>
                user : {users.length}
            </h3>
            <div className='grid grid-cols-2 space-y-5'>
            {(users.map(user => 
                    <UserDetils 
                    key={user._id} 
                    user={user}
                    ></UserDetils>))
                   
                }
                
            </div>
        </div>
    );
};

export default Users;