


import PropTypes from 'prop-types'
import { useState } from 'react';

const UserDetils = ({user}) => {
    const {_id,name,email}=user;

    const [usUser , setUsUser]=useState(user)


    const handelDelete = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                alert("delete account")
                const remainingUsers = usUser.filter(user => user._id !== _id);
                setUsUser(remainingUsers);
            }
        })
        
        
    }

  return (
    <div className='border w-4/5 text-2xl font-bold' >
        <h3>
            Id:{_id}
        </h3>
        <h3>
            Name:{name}
        </h3>
        <h3>
            Email: {email}
        </h3>
        <button onClick={()=> handelDelete(user._id)} className='btn ' >X</button>
    </div>
  )
}

UserDetils.propTypes = {
    user : PropTypes.object.isRequired
}

export default UserDetils