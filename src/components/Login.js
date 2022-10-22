import React, {useState} from 'react';



export default function Login() {
    const [loginDetail, setLoginDetail] = useState("email")
    console.log(loginDetail)

    const updateName = () =>{
        setLoginDetail('Sameer')
        console.log(setLoginDetail)
    }   

    return (
            <div className="container mt-5" id="form"> 
                <form className="mt-5" method="post">
                    <div className="my-5">
                        <label htmlFor="userName" className="form-label">Email</label>
                        <input type="email" className="form-control" id="userName"/>
                    </div>
                    <div className="mb-3 my-5">
                        <label htmlFor="password" className="form-label">password</label>
                        <input type="password" className="form-control" id="password"/>
                    </div>

                    <div className="text-center"> 
                        <button onClick={updateName} type="submit" className="btn btn-primary my-5 px-5 " >LOGIN</button>
                    </div>
                </form>
            </div>
    )
}