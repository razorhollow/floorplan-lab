import Oven from "./Oven"
import Sink from "./Sink"

const Kitchen = (props) => {
  return (
    <>
      <div>
        <h3>Kichin</h3>
        <Oven />
        <Sink />
      </div>
    </>
  )
}

export default Kitchen