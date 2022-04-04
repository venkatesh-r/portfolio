import { Outlet } from 'react-router-dom';
import Sidebar from '../SideBar/Sidebar';
import './Layout.scss';
import Loader from "react-loaders";

const Layout = () =>{
    return (
        <>
        <div className='App'>
            <Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Outlet/>
                <span className='tags bottom-tags'>
                  &lt;body&gt;
                  <br/>
                  <span className='bottom-tag-html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
        <Loader type="ball-scale-ripple"/>
        </>
    )
}

export default Layout;