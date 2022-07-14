
import { UserContext } from '../components/UserContext'

const Login = () => {
  return (
    <>
      <div className='m-8'>
        <h1 className='text-4xl'>Login page</h1>
        <UserContext.Consumer>
          { ({user, login, logout}) => (
            <>
            { user ? 
              <>
                <div className="font-bold text-xl mt-8">Welcome {user}</div> 
                <button className='bg-gray-800 text-gray-200 rounded py-4 px-8' onClick={logout}>Logout</button>
              </>
              : 
              <section className='my-8'>
                <p>This is a fake login page. </p>
                <button className='bg-gray-800 text-gray-200 rounded py-4 px-8' onClick={login}>
                    Please let me enter
                </button>
              </section>
            }
           </>
          )}
        </UserContext.Consumer>
      </div>
    </>
  )    
}

export default Login