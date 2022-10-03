import React,{useRef,useState,useEffect} from 'react'
import axios from 'axios'
import About from './pages/About';


const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [users, setUsers] = useState([])


    const [user, setUser] = useState();
    const [pwd,setPwd] = useState();
    const [errMsg, setErrMsg] = useState('');
    const [success,setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[])

    useEffect(() => {
        setErrMsg('');
    },[user,pwd])




    useEffect(() => {
        loadUser()
}, [])

const loadUser = async()=>{
    const result = await axios.get("http://localhost:8080/users")
    setUsers(result.data)
    console.log(result);
}

const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(user,pwd);
    setUser(user);
    setPwd(pwd);
    let [a,b] = [users.map((user)=>(user.name) ),users.map((user)=>(user.password) )]
    console.log("bu a",a,b);
    for (let index = 0; index < a.length; index++) {
        if (user==a[index] && pwd == b[index]) {
            setSuccess(true)
        }
    }
    console.log(a.forEach(Alisher));
    console.log(users.forEach());
    //  if(user==users.find(users.map((user)=>(user.name)))&&pwd==users.find(users.map((user)=>(user.password)))){
    //     setSuccess(true)
    //  }
} 

  return (
    <>
    {
        success ? ( 
            <section>
                <About/>
            </section>
        ):(
            <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscren"} aria-live="assertive">{errMsg}</p>
            <h1>Sign in</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor='username'>username:</label>
                <input
                    type="text"
                    id="username"
                    ref={userRef}
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                 <label htmlFor='password'>password:</label>
                <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign in</button>
            </form>
            <p>
                Need an Account? <br/>
                <span className='line'>
                    <a href='#'>Sign up</a>
                </span>
            </p>
       
        </section>
        )
    }
    </>
  )
}

export default Login
