import React from 'react'
import { sidebarLinks } from '../data/dashboardLinks'
import { VscSignOut } from "react-icons/vsc";
import { useNavigate } from 'react-router-dom'
import SidebarLink from './SidebarLink';

const Sidebar = () => {
    // console.log(sidebarLinks)
  return (
    <div className=''>
        <div className='flex min-w-[222px] flex-col  h-[calc(100vh-3.5rem)] py-10'>

            <div className='flex flex-col'>
                {
                    sidebarLinks.map((link)=>{
                        
                        return (
                            <SidebarLink key={link.id} link={link.path} iconName={link.icon} name={link.name}/>
                        )

                    })
                }
            </div>
            <div className='mx-auto mt-6 mb-6 h[1px] w-10/12 bg-[#E6EFF5]'></div>

            <div className='flex flex-col'>
                <SidebarLink link={{name:"Settings",path:"dashboard/settings"}} iconName="VscSettingsGear"/>

                {/* <button 
                    onClick={()=>setConfirmationModal({
                        text1:"Are You Sure ?",
                        text2:"You will be logged out of your Account",
                        btn1Text:"Logout",
                        btn2Text:"Cancel",
                        btn1Handler:()=>dispatch(logout(navigate)),
                        btn2Handler:()=>setConfirmationModal(null)
                    })}
                    className='px-8 py-2 text-sm font-medium text-richblack-300'
                    >
                    <div className='flex items-center gap-x-2'>
                        <VscSignOut className='text-lg'/>
                        <span>Logout</span>
                    </div>

                </button> */}
            </div>
        
        </div>
        {/* {
            confirmationModal && <ConfirmationModal modalData={confirmationModal}/>
        } */}
    
    </div>
  )
}

export default Sidebar