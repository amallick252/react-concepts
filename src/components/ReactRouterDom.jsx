import React from 'react'
import SyntaxWrap from './SyntaxWrap'

const appString= `import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Profiles from './pages/Profiles'
import ErrorPage from './pages/ErrorPage'
import UserProfile from './pages/UserProfile'

function App() {
const route = createBrowserRouter([
  {path: '/', element: <Home/>, errorElement:<ErrorPage/>},
  {path: '/profiles', element: <Profiles/>, children: [{path: '/profiles/:userid', element:<UserProfile/>}]},
  
])
  return (
    <>
      {/* <Home/> */}
      <RouterProvider router={route}/>
    </>
  )
}

export default App`

const profilesString= `import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profiles() {
  const users = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Profiles</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
      {users.map((user)=><Link to=/{user} key={user}>user:{user}</Link></div>)}
      // map function returning Link tag to the path
      <Outlet/>
    </div>
  );
}

export default Profiles;
//Note: Outlet lets us render the children of this component render at the specified place in this component
//We can use absolute path(eg: /profiles/user) or relative path(eg: 'user') with <Link to='...'> tag 
depending on whether we want to navigate to an absolute path regardless of the current route or we want to
nagigate relative to the route where the Link component is rendered.`

const errorPageString=`import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
        <h1>404 Not Found!</h1>
        <button><Link to='/'>Go Home</Link></button>
    </div>
  )
}

export default ErrorPage
// Note: <Link> is used because it prevents from refreshing the whole page, unlike <a> tag
//<NavLink> can also be used instead of <Link>, which provides other functionalities like, highlight active link()`

const userProfileString= `import React from 'react'
import { useParams } from 'react-router-dom'

function UserProfile() {
    const param = useParams()
  return (
    <h1>User Profile: {param.userid}</h1>
  )
}

export default UserProfile

//Note: useParams hook gets the all the parameters available(eg: url) for the component where it is used`

const ReactRouterDom = () => {
  return (
    <div style={{backgroundColor: '#eaeaea'}}><h2>ReactRouterDom</h2>
        <SyntaxWrap children={appString}/>
        <p>Note: The path slugs in App.jsx(ie: profiles) and the page where the code <code>{' <Link to={`/profiles/${user}`} /> '}</code> tag, to the dynamic route is present must match. ie: "profiles" word must match`</p>
        <SyntaxWrap children={profilesString}/>
        <SyntaxWrap children={errorPageString}/>
        <SyntaxWrap children={userProfileString}/>
    </div>
  )
}

export default ReactRouterDom