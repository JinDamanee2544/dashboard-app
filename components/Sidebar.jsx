import Link from 'next/link';
import {FaUserAlt,FaHome} from 'react-icons/fa'
const Sidebar = () =>{
    return (
        <aside className="bg-black p-10 text-white flex flex-col justify-between items-center">
            <div className='icon-bg-gray'><FaUserAlt/></div>
            <div className='icon-bg-gray'>
                <Link href={'/'}>
                    <a>
                        <FaHome/>
                    </a>
                </Link>
            </div>
        </aside>
    )
}
export default Sidebar;