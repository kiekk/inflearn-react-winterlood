import {Link} from "react-router-dom";

const RouterTest = () => {
    return <>
        <Link to={'/'}>Home</Link>
        <br/>
        <Link to={'/edit'}>Edit</Link>
        <br/>
        <Link to={'/new'}>New</Link>
        <br/>
        <Link to={'/diary'}>Diary</Link>
    </>
}

export default RouterTest