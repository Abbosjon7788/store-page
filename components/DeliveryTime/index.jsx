import { memo, useEffect, useState, useMemo } from 'react'
import Icon from '../../static/Icons'
import { Calendar } from 'react-multi-date-picker';

const CustomNavigation = ({ direction, handleClick, disabled }) => {
     return (
          <div className={`${!disabled && 'hover'} navigation-button`}>
               {direction === 'right' ? (
                    <Icon icon="chevron-right"
                         onClick={handleClick}
                         className={`${disabled ? 'disabled' : 'cursor-pointer'} icon`}
                    />
               ) : (
                    <Icon icon="chevron-left"
                         onClick={handleClick}
                         className="icon cursor-pointer"
                    />
               )}
          </div>
     );
};


const DeliveryTime = ({ setShowDeliveryTime }) => {

     const [show, setShow] = useState(false)
     let newDate = new Date()
     let currentDate = newDate.getDate();
     let currentMonth = newDate.getMonth() + 1;

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
                         <div className="calendar-wrapper">
                              <Calendar
                                   // weekDays={weekDays}
                                   // months={months}
                                   showOtherDays={true}
                                   disableYearPicker={true}
                                   disableMonthPicker={true}
                                   readOnly={true}
                                   weekStartDayIndex={1}
                                   maxDate={new Date()}
                                   renderButton={<CustomNavigation />}
                                   mapDays={props => {
                                        const { date } = props;
                                        let color = '';
                                        if (
                                             date.day > currentDate + 1 &&
                                             date.month.number === currentMonth
                                        )
                                             color = 'green';
                                        if (color) return { className: 'highlight-' + color };
                                   }}
                              />

                         </div>
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
