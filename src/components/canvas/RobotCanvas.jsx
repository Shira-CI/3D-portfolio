import DynCanvas from './DynCanvas'

const RobotCanvas = () => {

  const robotProps = {
    camera: {
      position: [-20, 10, 10], fov: 25
    },
    gl: { preserveDrawingBuffer: true },
    model: 'robot'
  }

  return (
    <DynCanvas props={robotProps} />
  )
}

export default RobotCanvas