
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const Sculpture = () => {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
        }
    });

    return (
        <group ref={groupRef}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
                {/* Main Vertical Plaster Blocks (Ver 3 Style) */}
                {/* Center Block */}
                <mesh position={[0, 0, 0]} castShadow>
                    <boxGeometry args={[0.4, 4, 0.4]} />
                    <meshStandardMaterial color="#f5f5f5" roughness={0.8} />
                </mesh>

                {/* Lateral Block 1 */}
                <mesh position={[-0.5, -0.4, 0.2]} castShadow>
                    <boxGeometry args={[0.35, 3.2, 0.35]} />
                    <meshStandardMaterial color="#ffffff" roughness={0.9} />
                </mesh>

                {/* Lateral Block 2 */}
                <mesh position={[0.5, 0.3, -0.2]} castShadow>
                    <boxGeometry args={[0.3, 3.8, 0.3]} />
                    <meshStandardMaterial color="#eeeeee" roughness={0.85} />
                </mesh>

                {/* Thin, Elegant Metal Rings */}
                {/* Main Large Ring */}
                <mesh rotation={[Math.PI / 3.5, 0.3, 0]} castShadow>
                    <torusGeometry args={[1.7, 0.02, 32, 200]} />
                    <meshStandardMaterial color="#666666" metalness={1} roughness={0.2} />
                </mesh>

                {/* Secondary Tilted Ring */}
                <mesh rotation={[-Math.PI / 4, -0.5, 0.2]} castShadow>
                    <torusGeometry args={[1.9, 0.015, 32, 200]} />
                    <meshStandardMaterial color="#888888" metalness={1} roughness={0.15} />
                </mesh>

                {/* Dynamic Inner Ring */}
                <mesh rotation={[0.2, Math.PI / 2.2, -0.4]} castShadow>
                    <torusGeometry args={[1.3, 0.018, 32, 200]} />
                    <meshStandardMaterial color="#555555" metalness={1} roughness={0.25} />
                </mesh>
            </Float>
        </group>
    );
};

interface SculptureSceneProps {
    isDark: boolean;
}

const SculptureScene: React.FC<SculptureSceneProps> = ({ isDark }) => {
    return (
        <div className="w-full h-[60vh] md:h-screen absolute inset-0 z-0">
            <Canvas shadows>
                <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

                {/* Museum Lighting */}
                <ambientLight intensity={isDark ? 0.2 : 0.5} />
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={isDark ? 2 : 1}
                    castShadow
                />
                <pointLight position={[-10, -10, -10]} intensity={isDark ? 0.5 : 0.2} />

                <Sculpture />

                <Environment preset="studio" />
                <ContactShadows
                    position={[0, -2.5, 0]}
                    opacity={0.4}
                    scale={10}
                    blur={2}
                    far={4.5}
                />

                <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    minDistance={3}
                    maxDistance={10}
                    autoRotate={false}
                />
            </Canvas>
        </div>
    );
};

export default SculptureScene;
