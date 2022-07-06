import Kitchen from "./Kitchen"
import Bedroom from "./Bedroom"
import Bath from "./Bath"
import LivingRoom from "./LivingRoom"

const FloorPlan = (props) => {
  return(
    <>
      <h2>This is the floor plan</h2>
      <Bedroom bedNum={1} />
      <Kitchen />
      <Bath size={'Full'} />
      <Bedroom bedNum={2} />
      <LivingRoom />
      <Bath size={'Half'} />
      <Bedroom bedNum={3} />
    </>
  )
}

export default FloorPlan