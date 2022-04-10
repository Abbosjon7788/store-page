import { memo, useState } from 'react'
import Icon from '../../static/Icons'
import DeliveryTime from '../../components/DeliveryTime'
import { connect } from 'react-redux'

const Navbar = ({ totalPrice }) => {

     const [showDeliveryTime, setShowDeliveryTime] = useState(false)

     return (
          <div className="navbar items-center">
               <div className="nav-wrapper" id="navbar-wrapper">
                    <div className="arrow-left pointer flex items-center box-shadow bg-white justify-center radius-10">
                         <Icon icon="arrow-left" width={24} height={24} />
                    </div>
                    <div className="location bg-white pointer flex box-shadow items-center justify-center radius-10">
                         <Icon icon="location" width={20} height={20} />
                         <span className="medium-14 color-black ml-12">2972 Westheimer Rd. Santa Ana</span>
                         <Icon icon="chevron-down" width={20} height={20} className="ml-27" />
                    </div>
                    <div className="search-input bg-white flex items-center radius-10 box-shadow">
                         <Icon icon="search" width={20} height={20} className="light-icon pointer" />
                         <input type="text" placeholder="Search products in Wallmart" className="flex items-center color-black medium-14" />
                         <Icon icon="filter" width={20} height={20} className="light-icon pointer ml-auto" />
                    </div>
                    <div onClick={() => setShowDeliveryTime(true)} className="time pointer bg-white radius-10 box-shadow">
                         <div className="time-wrapper flex items-center justify-center">
                              <Icon icon="timer" width={20} height={20} />
                              <span className="ml-12 medium-14">By 09:00 — 23:00</span>
                         </div>
                    </div>
               </div>
               <div className="total-price flex items-center bg-white box-shadow radius-10">
                    <div className="backet-icon flex items-center justify-center">
                         <Icon icon="backet" width={20} height={20} />
                    </div>
                    <span className="ml-12 color-black medium-14">${totalPrice.toFixed(2)}</span>
               </div>
               {showDeliveryTime && <DeliveryTime setShowDeliveryTime={setShowDeliveryTime} />}
          </div>
     )
}

export default connect(({ reducer: { totalPrice } }) => ({ totalPrice }), null)(memo(Navbar))
