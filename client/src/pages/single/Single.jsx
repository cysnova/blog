import './single.css'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlePost/SinglePost'

const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
        <SideBar/>
    </div>
  )
}

export default Single