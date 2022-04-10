import { memo, useEffect, useState } from 'react'
import Icon from '../../static/Icons'

const DeliveryTime = ({ setShowDeliveryTime }) => {

     const [show, setShow] = useState(false)

     useEffect(() => {
          setTimeout(() => setShow(true), 1)
     }, [])

     const closeModal = () => {
          setShow(false)
          setTimeout(() => setShowDeliveryTime(false), 200)
     }


     return (
          <div className={`delivery-time ${show ? 'show' : ''}`}>
               <div className="wrapper">
                    <p className="medium-22 color-dark title">
                         Delivery time
                         <Icon onClick={closeModal} icon="close" width={24} height={24} className="pointer close-icon" />
                    </p>
                    <div className="scroll">
                         {
                              [0, 1, 2, 3, 4, 5].map(item => (
                                   <div key={item} className="date flex items-center justify-between radius-10">
                                        <div className="date-name flex items-center">
                                             <span className="dot"></span>
                                             <span className="ml-8 color-dark medium-16">10 October</span>
                                        </div>
                                        <div className="date-time color-dark medium-16">8:00 AM — 9:00 AM</div>
                                   </div>
                              ))
                         }

                    </div>
               </div>
               <div className="paper" onClick={closeModal}></div>
          </div>
     )
}

export default memo(DeliveryTime)
