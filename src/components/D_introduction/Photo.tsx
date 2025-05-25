import styles from '@styles/D_introduction.module.scss'
import clsx from 'clsx'
import { Canvas, useFrame } from '@react-three/fiber'
import { useEffect, useMemo, useRef } from 'react'
import * as THREE from 'three'
import { useTexture } from '@react-three/drei'
import vt from '@shaders/SlideVert.glsl?raw'
import fg from '@shaders/SlideFrag.glsl?raw'

interface PhotoProps {
    photos: string[]
    currIdx: number
    setCurrIdx: (idx: number) => void
}

const Slide = ({photos, currIdx}: PhotoProps) => {

    const meshRef = useRef<THREE.Mesh>(null);
    const tts = useTexture(photos);

    const material = useMemo(()=> new THREE.ShaderMaterial({
        uniforms: {
            uProgress: {value: 0},
            uTexture1: {value: new THREE.Texture()},
            uTexture2: {value: new THREE.Texture()},
        },
        vertexShader: vt,
        fragmentShader: fg,
        transparent: true,
        toneMapped: false,
    }),[]);

    useFrame(()=>{
        if(!meshRef.current) return;

        const mat = meshRef.current.material as THREE.ShaderMaterial;
        const progress = THREE.MathUtils.lerp(mat.uniforms.uProgress.value, 1., .02);
        mat.uniforms.uProgress.value = progress;
    });

    useEffect(() => {
        if(!meshRef.current) return;

        const mat = meshRef.current.material as THREE.ShaderMaterial;
        const prevIdx = (currIdx - 1 + photos.length) % photos.length;
        mat.uniforms.uTexture1.value = tts[prevIdx];
        mat.uniforms.uTexture2.value = tts[currIdx];
        mat.uniforms.uProgress.value = 0;
        
    }, [currIdx]);

    return (
        <mesh ref={meshRef}>
            <planeGeometry args={[1.414, 1]} />
            <primitive attach="material" object={material} />
        </mesh>
    )
}
const Thumbnail = ({photos, currIdx, setCurrIdx}: PhotoProps) => {
    return (
        <div className={styles.thumbnail}>
            {photos.map((photo, idx) => (
                <div key={idx} className={styles.item}
                    onClick={() => setCurrIdx(idx)}
                >
                    <img src={photo} alt={`photo-${idx}`} 
                        className={clsx(styles.item, currIdx === idx && styles.active)}
                    />
                </div>
            ))}
        </div>
    )
}
export const Photo = ({photos, currIdx, setCurrIdx}: PhotoProps) => {
    return (
        <div className={styles.photo}>
            <div className={styles.photoContainer}>
                <div className={styles.item}>
                    <Canvas  camera={{position: [0, 0, .8]}}>
                        <Slide photos={photos} currIdx={currIdx} setCurrIdx={setCurrIdx}/>
                    </Canvas>
                </div>
                <Thumbnail photos={photos} currIdx={currIdx} setCurrIdx={setCurrIdx}/>
            </div>
        </div>
    )
}
