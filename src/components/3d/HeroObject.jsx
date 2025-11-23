import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Edges } from '@react-three/drei';

const Geometry = () => {
    const meshRef = useRef();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.2;
            meshRef.current.rotation.y += delta * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} scale={2.5} position={[2, 0, 0]}>
                <icosahedronGeometry args={[1, 1]} />
                <meshBasicMaterial color="black" transparent opacity={0.9} />
                <Edges
                    scale={1.0}
                    threshold={15} // Display edges only when angle between faces exceeds this value
                    color="#FF4655"
                    linewidth={10} // Thicker lines
                />
            </mesh>
        </Float>
    );
};

const HeroObject = () => {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-100">
            <Canvas camera={{ position: [3, 0, 6] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Geometry />
                <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
};

export default HeroObject;
