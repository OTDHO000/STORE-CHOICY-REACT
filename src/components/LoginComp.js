import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function LoginComp(props) {

  const [username,setUsername] = useState('')
  const [password,setPassword] = useState('')
  const [errormsg,setErrormsg] = useState('')
  const [isloading,setIsloading] = useState(false)
  const [userid,setUserid] = useState('')

  const {islogin,setIslogin} = props

  const login = ([username, password]) =>{
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        const requestObject = {
          username : username,
          password : password,
        }
        axios.post('http://34.229.104.45:80/SCapi/login/userlogin', requestObject).then( (response) => { //http://localhost:5000/SCapi   8.134.162.73:80/SCapi

        if(response.data.status==="success"){
            setUserid(response.data.user.userid);           
            console.log("setUserid-------",userid)
            if(userid)  // (Object.is(username, 'Becky') && Object.is(password, 'becky123'))
            {
              resolve()
            }else{
              reject()
            } 
        }else{
            reject()
            window.confirm('login fail')
        }        
        }).catch( (error) =>  {
            reject()
            window.confirm('login fail')
            console.log(error);
        }).then(()=>{});
               
        // if (Object.is(username, 'Becky') && Object.is(password, 'becky123'))
        // {
        //   resolve()
        // }else{
        //   reject()
        // } 
      }, 3000)
    }
   )
  }
  
  const handlesubmit = async(e) =>{
    e.preventDefault()
    setIsloading(true)
    try{
      await login([username, password])
      console.log('success')
      setIslogin(true)
      setUsername('')
      setPassword('')
      setErrormsg('')
      setIsloading(false)
    }catch (error){
      console.log('error')
      setIslogin(true)
      setUsername('')
      setPassword('')
      setErrormsg('incorrect username or password')
      setIsloading(false)
    }
  }


  return (
    <div className="login">
      <div className="card container mt-5" >
        <div className="card-body">
          <h1 className="card-title">User login</h1> 
        </div>

        <form onSubmit={handlesubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">User Name</label>
            <input type="text" className="form-control" id="username" 
            value={username} onChange={e => setUsername(e.currentTarget.value)}/>
           
          </div>
          <div className="mb-3">
            <label htmlFor="InputPassword" className="form-label">Password</label>
            <input type="password" className="form-control" id="InputPassword" 
             value={password} onChange={e => setPassword(e.currentTarget.value)}/>
          </div>
          <div className="mb-3 form-check">           
          {errormsg && <label className="form-check-label" for="exampleCheck1">
                        {errormsg}
                      </label>
          }
          </div>
          <button type="submit" className="btn btn-primary"
          disabled ={isloading ? true : false}>
            { isloading ? 'logining' : 'login'}
          </button>
        </form>
      </div>
    </div>
  );
}


