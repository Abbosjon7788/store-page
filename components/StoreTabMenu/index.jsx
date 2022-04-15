import { memo, useState, useMemo } from 'react'
import Icon from '../../static/Icons'
import Link from 'next/link'
import Image from 'next/image'
import { connect } from 'react-redux'
import { setTotalPrice } from '../../redux/reducer'

const StoreTabMenu = ({ setTotalPrice }) => {

     const [tab, setTab] = useState({ index: 1, title: 'Fruits and Vegetables' })

     const tabList = useMemo(() => {
          return [
               'Pantrys', 'Fruits and Vegetables', 'Eggs and Dairys', 'Frozens', 'Beverange', 'Snacks', 'Households'
          ]
     }, [])

     const product = useMemo(() => {
          return [
               {
                    img: {
                         url: "/assets/images/avocado-bag.png",
                         width: 131,
                         height: 131
                    },
                    name: 'Calavo Hass Avocados',
                    price: 5.99

               },
               {
                    img: {
                         url: "/assets/images/lemons.png",
                         width: 129,
                         height: 130
                    },
                    name: 'Lemons (Large) 8',
                    price: 3.89
               },
               {
                    img: {
                         url: "/assets/images/melon.png",
                         width: 129,
                         height: 130
                    },
                    name: 'Jumbo Cantaloupe',
                    price: 10.5
               },
               {
                    img: {
                         url: "/assets/images/kiwi.png",
                         width: 113,
                         height: 113
                    },
                    name: 'Zespri Kiwifruit 2 lb',
                    price: 4.90
               },
               {
                    img: {
                         url: "/assets/images/avocado.png",
                         width: 108,
                         height: 108
                    },
                    name: 'Hass Large Avocado',
                    price: 4.90
               },
          ]
     }, [])

     return (
          <div className="store-tab-menu">
               <div className="tab-menu-list flex items-center">
                    <div className="filter-icon bg-white box-shadow pointerf radius-10 flex items-center item justify-center">
                         <Icon icon="filter" width={20} height={20} />
                    </div>
                    {
                         tabList.map((item, i) => (
                              <div key={i} onClick={() => setTab({ index: i, title: item })} className={`tab-menu ${tab.index === i && 'active'} pointer radius-10 flex item items-center medium-14`}>
                                   {item}
                              </div>
                         ))
                    }
                    <div className="tab-menu pointer radius-10 flex items-center medium-14">
                         More
                         <Icon icon="chevron-down" width={20} height={20} className="ml-auto" />
                    </div>
               </div>
               <div className="flex items-center justify-between menu-title">
                    <p className="color-dark medium-22">{tab.title}</p>
                    <div className="flex items-center">
                         <Link href="/stores">
                              <a className="medium-18 color-dark flex items-center">
                                   See all
                                   <Icon icon="chevron-right" width={24} height={24} className="ml-8" />
                              </a>
                         </Link>
                    </div>
               </div>
               <div className="bg-white radius-10 box-shadow product-list">
                    {
                         product.map((item, index) => (
                              <div key={index} className="product">
                                   <div className="img-wrapper flex justify-center">
                                        <Image src={item.img.url} width={item.img.width} height={item.img.height} />
                                   </div>
                                   <p className="color-dark regular-14 mb-4">{item.name}</p>
                                   <div className="flex justify-between items-center">
                                        <span className="semibold-20">${item.price}</span>
                                        <div onClick={() => setTotalPrice(parseFloat(item.price))} className="plus-btn pointer flex items-center justify-center">
                                             <Icon icon="plus" width={24} height={24} />
                                        </div>
                                   </div>
                                   <div className="top-icons flex justify-between items-center">
                                        <div className="percent flex items-center justify-center">
                                             <Icon icon="percentage" width={20} height={20} />
                                        </div>
                                        <Icon icon="heart" width={24} height={24} className="pointer heart-icon" />
                                   </div>
                              </div>
                         ))
                    }
               </div>
          </div>
     )
}

export default connect(null, { setTotalPrice })(memo(StoreTabMenu))
