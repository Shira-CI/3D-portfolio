import { useGLTF, PresentationControls, Float } from '@react-three/drei'

const RobotModel = ({ isMobile }) => {
    const robot = useGLTF('./robot/scene.gltf')
    // console.log('render RobotModel')
    return (
        <>
            <Float
                rotationIntensity={1}
                floatIntensity={2}
            >
                <PresentationControls
                    enabled={true}
                    global={false}
                    cursor={true}
                >
                    <mesh >
                        <hemisphereLight intensity={0.5} groundColor='black' />
                        <pointLight intensity={2} />
                        <spotLight
                            position={[-20, 50, 10]}
                            angle={0.12}
                            penumbra={1}
                            intensity={1}
                            castShadow
                            shadow-mapSize={1024}
                        />
                        <primitive
                            object={robot.scene}
                            scale={isMobile ? 2 : 2}
                            position={isMobile ? [0.2, -2, 0] : [0, -1.2, 3]}
                            // position={isMobile ? [0.2, -2, 0] : [0, -, 0]}
                            rotation={[-0.01, -0.2, 0.2]}
                        />
                    </mesh>
                </PresentationControls>
            </Float>
        </>
    )
}
export default RobotModel