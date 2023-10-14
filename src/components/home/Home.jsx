import { Link } from "react-router-dom";




const Home = () => {
    const handelSubmit = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const user = {name,email};
        console.log(user)
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert("successfully Update User")
                form.reset();
            }

        })

    }
    return (
        <div className="max-w-6xl mx-auto flex justify-center items-center mt-32">
            <div>
            <form  onSubmit={handelSubmit} className="space-y-3">
                <input className="border" name="name" placeholder="name" type="text" id="" />
                <br />
                <input className="border" name="email" placeholder="email" type="email" id=""/>
                <br />
                <input type="submit" value='add new user' />
            </form>
            </div>
            <Link to={"/users"}><button>userDetils</button></Link>
        </div>
    );
};

export default Home;