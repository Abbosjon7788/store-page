import StoreHeader from "../../components/StoreHeader"
import StoreCards from "../../components/StoreCards"
import StoreTabMenu from "../../components/StoreTabMenu"

const Stores = () => {
     return (
          <div className="store">
               <StoreHeader />
               <StoreCards />
               <StoreTabMenu />
          </div>
     )
}

export default Stores
