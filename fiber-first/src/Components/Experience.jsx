import { OrbitControls, ScrollControls } from "@react-three/drei"
import { Bonzo_main } from "./Bonzo_main"


export const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.15} />
            <OrbitControls />

            <ScrollControls pages={7} damping={0.25}>
                <Bonzo_main />
            </ScrollControls>
        </>
    )
}