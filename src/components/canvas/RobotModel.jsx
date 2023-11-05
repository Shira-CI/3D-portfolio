import { useGLTF } from '@react-three/drei'

const RobotModel = ({ isMobile }) => {
    const robot = useGLTF('./robot/scene.gltf')

    return (
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
                scale={isMobile ? 2 : 2.5}
                position={isMobile ? [0.2, -2, 0] : [3, -2.5, 2]}
                rotation={[-0.01, -0.2, 0.2]}
            />
        </mesh>
    )
}
export default RobotModel