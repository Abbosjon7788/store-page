import { memo, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Icon from '../../static/Icons'

const StoreHeader = () => {

     const [width, setWidth] = useState(0)

     useEffect(() => {
          if (typeof window === 'object') {
               setWidth(document.getElementById('navbar-wrapper').offsetWidth)
          }
     }, [])

     return (
          <div className="store-header">
               <div className="banner flex direction-column">
                    <div className="banner-logo flex items-center justify-center">
                         <Image src="/assets/images/banner-logo.svg" width={52} height={52} />
                    </div>
                    <div className="banner-top">
                         <Image src="/assets/images/header-img.png" width={width} height={200} />
                    </div>
                    <div className="banner-bottom flex items-center">
                         <span className="color-dark medium-28">Wallmart store</span>
                         <Link href="/stores">
                              <a className="banner-link flex items-center ml-24">
                                   <Icon icon="info" width={20} height={20} />
                                   <span className="medium-14 ml-12 color-dark link-name">Store info</span>
                              </a>
                         </Link>
                         <Link href="/stores">
                              <a className="banner-link flex items-center ml-24">
                                   <Icon icon="car" width={20} height={20} />
                                   <span className="medium-14 ml-12 color-dark link-name">Store delivery time</span>
                              </a>
                         </Link>
                         <Link href="/stores">
                              <a className="banner-link flex items-center ml-24">
                                   <Icon icon="saved" width={20} height={20} />
                                   <span className="medium-14 ml-12 color-dark link-name">Seved</span>
                              </a>
                         </Link>
                         <div className="flex ml-auto items-center">
                              <Icon icon="star" width={24} height={24} />
                              <span className="medium-16 color-dark ml-6 mr-8">4.5</span>
                         </div>
                    </div>
               </div>
               <div className="recipes bg-white box-shadow radius-10">
                    <div className="shop radius-10 flex direction-column justify-center items-center">
                         <Icon icon="store" width={32} height={32} />
                         <span className="medium-16 color-white mt-8">Shop</span>
                    </div>
                    <div className="recipes-bottom flex items-center direction-column justify-center">
                         <Icon icon="fork" width={32} height={32} className="light-icon" />
                         <span className="medium-16 name">Recipes</span>
                    </div>
               </div>
          </div>
     )
}

export default memo(StoreHeader)
