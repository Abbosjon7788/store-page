import { useMemo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../../static/Icons'

const Sidebar = () => {

     const router = useRouter()

     const menuList = useMemo(() => {
          return [
               {
                    link: '/stores',
                    name: 'Stores',
                    icon: 'store'
               },
               {
                    link: '/order-history',
                    name: 'Order history',
                    icon: 'order'
               },
               {
                    link: '/saved-stores',
                    name: 'Saved stores',
                    icon: 'saved'
               },
               {
                    link: '/liked-products',
                    name: 'Liked products',
                    icon: 'heart'
               },
               {
                    link: '/viewed-products',
                    name: 'Viwed Products',
                    icon: 'view'
               },
               {
                    link: '/wallet-history',
                    name: 'Wallet history',
                    icon: 'wallet'
               },
               {
                    link: '/profil-setting',
                    name: 'Profil setting',
                    icon: 'user'
               }

          ]
     }, [])

     return (
          <div className="sidebar">
               <div className="sidebar-top box-shadow radius-10 bg-white flex items-center">
                    <Icon icon="burger" width={20} height={20} />
                    <Link href="/stores">
                         <a className="title semibold-20 color-black">GMarket</a>
                    </Link>
               </div>
               <div className="sidebar-menus flex direction-column justify-between sidebar-shadow bg-white radius-10">
                    <div className="user-info">
                         <div className="flex items-center justify-center">
                              <Icon icon="settings" width={24} height={24} className="pointer light-icon" />
                              <div className="user-img radius-10">
                                   <Image src="/assets/images/avatar.png" width={64} height={64} />
                              </div>
                              <Icon icon="notification" width={24} height={24} className="pointer light-icon" />
                         </div>
                         <div className="user-name">
                              <p className="color-dark medium-18 mb-6">Roberto Cavanali</p>
                              <span className="color-dark regular-14">(+99893) 100-00-00</span>
                         </div>
                         <div className="balance">
                              <div className="wallet radius-10 flex items-center justify-between">
                                   <div className="flex direction-column">
                                        <span className="color-dark regular-14 mb-6">Wallet balance</span>
                                        <span className="color-dark bold-20">$425,97</span>
                                   </div>
                                   <div className="flex items-center justify-center plus-icon pointer">
                                        <Icon icon="plus" width={18} height={18} />
                                   </div>
                              </div>
                              <button type="button" className="flex items-center justify-center radius-10 share-wallet pointer">
                                   <Icon icon="share" width={20} height={20} />
                                   <span className="medium-14 ml-12">Share wallet</span>
                              </button>
                         </div>
                    </div>
                    <div className="scrolling">
                         <div className="menu-list">
                              <ul>
                                   {
                                        menuList.map((item, index) => (
                                             <li key={index}>
                                                  <Link href={item.link} passHref>
                                                       <a className={`flex items-center ${router.pathname === item.link && 'active'}`}>
                                                            <Icon icon={item.icon} width={24} height={24} />
                                                            <span className="ml-24 color-dark medium-14">{item.name}</span>
                                                       </a>
                                                  </Link>
                                             </li>
                                        ))
                                   }
                              </ul>
                         </div>
                    </div>
                    <div className="menu-list">
                         <ul className="pr-23">
                              <li>
                                   <Link href="/help-center" passHref>
                                        <a className={`flex items-center border-top ${router.pathname === '/help-center' && 'active'}`}>
                                             <Icon icon={'microphone'} width={24} height={24} />
                                             <span className="ml-24 color-dark medium-14">Help center</span>
                                             <Icon icon="chevron-right" width={20} height={20} className="ml-auto" />
                                        </a>
                                   </Link>
                              </li>
                              <li>
                                   <Link href="/logout" passHref>
                                        <a className={`flex items-center border-top ${router.pathname === "/logout" && 'active'}`}>
                                             <Icon icon="log-out" width={24} height={24} />
                                             <span className="ml-24 color-dark medium-14">Logout</span>
                                             <Icon icon="chevron-right" width={20} height={20} className="ml-auto" />
                                        </a>
                                   </Link>
                              </li>
                         </ul>

                    </div>
               </div>
          </div>
     )
}

export default Sidebar
