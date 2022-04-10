import { memo } from 'react'
import Image from 'next/image'

const StoreCards = () => {
     return (
          <div className="store-cards">
               <div className="card orange radius-10">
                    <p className="card-title bold-22 mb-6">Sale Orange</p>
                    <p className="card-desc medium-14">Promocode down</p>
                    <div className="img-wrapper">
                         <Image src="/assets/images/orange.png" width={145} height={145} />
                    </div>
                    <button className="card-btn bold-12 pointer">Orange20</button>
               </div>
               <div className="card tomato radius-10">
                    <p className="card-title bold-22 mb-6">Tomato</p>
                    <p className="card-desc medium-14">Buy at <br /> affordable <br /> prices</p>
                    <div className="img-wrapper">
                         <Image src="/assets/images/tomato.png" width={155} height={155} />
                    </div>
               </div>
               <div className="card green radius-10">
                    <p className="card-title bold-22 mb-6">Sale 40%</p>
                    <p className="card-desc medium-14">Very tasty pasta</p>
                    <div className="img-wrapper">
                         <Image src="/assets/images/lagman.png" width={130} height={130} />
                    </div>
                    <button className="card-btn bold-12 pointer">Food40</button>
               </div>
               <div className="card blue radius-10">
                    <p className="card-title bold-22 mb-6">Collection</p>
                    <p className="card-desc medium-14">Sale full Pack</p>
                    <div className="img-wrapper">
                         <Image src="/assets/images/lagman.png" width={130} height={130} />
                    </div>
                    <button className="card-btn bold-12 pointer">Collect</button>
               </div>
               <div className="card purple radius-10">
                    <p className="card-title bold-22 mb-6">Sale 40%</p>
                    <p className="card-desc medium-14">Very tasty pasta</p>
                    <div className="img-wrapper">
                         <Image src="/assets/images/lagman.png" width={130} height={130} />
                    </div>
                    <button className="card-btn bold-12 pointer">Test40</button>
               </div>
               <div className="card green radius-10">
                    <p className="card-title bold-22 mb-6">Sale 40%</p>
                    <p className="card-desc medium-14">Very tasty pasta</p>
                    <div className="img-wrapper">
                         <Image src="/assets/images/lagman.png" width={130} height={130} />
                    </div>
                    <button className="card-btn bold-12 pointer">Food40</button>
               </div>
          </div>
     )
}

export default memo(StoreCards)
