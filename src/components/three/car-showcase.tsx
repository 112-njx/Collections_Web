"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  ContactShadows,
  Float,
  OrbitControls,
  RoundedBox,
  useGLTF,
} from "@react-three/drei";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

/* ============================================================================
 * 车模模型接入方案（两步即可接入真实模型）
 * ----------------------------------------------------------------------------
 * 1) 将你的 GLB / GLTF 车模文件放入  public/models/car.glb
 *    （推荐格式 .glb；若为 .gltf + 贴图，请把贴图一并放入同目录）
 * 2) 将下方 USE_GLTF_MODEL 改为 true，并按需调整 GLTF_SCALE / GLTF_POSITION
 *
 * 组件会自动加载 /models/car.glb 并替换下方的程序化占位车模，
 * 场景灯光、自动旋转、拖拽观察、地面投影等效果无需改动。
 * ==========================================================================*/
const USE_GLTF_MODEL = false;
const GLTF_PATH = "/models/car.glb";
const GLTF_SCALE = 1;
const GLTF_POSITION: [number, number, number] = [0, 0, 0];

/* ---------- 程序化占位车模（GLB 未接入时展示，保证 3D 展示始终可见） ---------- */
function ProceduralCar({ bodyColor, glassColor }: { bodyColor: string; glassColor: string }) {
  const groupRef = useRef<THREE.Group>(null);
  const wheelRefs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.28;
    }
    // 车轮滚动动画
    for (const wheel of wheelRefs.current) {
      if (wheel) wheel.rotation.x -= delta * 1.6;
    }
  });

  const tire = (
    <mesh castShadow>
      <cylinderGeometry args={[0.27, 0.27, 0.2, 24]} />
      <meshStandardMaterial color="#161616" roughness={0.9} metalness={0.1} />
    </mesh>
  );

  return (
    <group ref={groupRef} position={[0, -0.15, 0]}>
      {/* 底盘 */}
      <RoundedBox args={[1.45, 0.14, 3.1]} radius={0.05} smoothness={4} position={[0, 0.12, 0]}>
        <meshStandardMaterial color={bodyColor} metalness={0.65} roughness={0.28} />
      </RoundedBox>
      {/* 车身主体 */}
      <RoundedBox args={[1.4, 0.38, 2.1]} radius={0.08} smoothness={4} position={[0, 0.42, 0.18]}>
        <meshStandardMaterial color={bodyColor} metalness={0.7} roughness={0.22} />
      </RoundedBox>
      {/* 引擎盖 */}
      <RoundedBox args={[1.32, 0.16, 0.95]} radius={0.06} smoothness={4} position={[0, 0.5, -1.05]}>
        <meshStandardMaterial color={bodyColor} metalness={0.7} roughness={0.22} />
      </RoundedBox>
      {/* 前翼 */}
      <RoundedBox args={[1.36, 0.1, 0.3]} radius={0.05} smoothness={4} position={[0, 0.36, -1.35]}>
        <meshStandardMaterial color={bodyColor} metalness={0.6} roughness={0.3} />
      </RoundedBox>
      {/* 驾驶舱玻璃 */}
      <RoundedBox args={[0.98, 0.3, 0.95]} radius={0.1} smoothness={4} position={[0, 0.78, 0.32]}>
        <meshStandardMaterial
          color={glassColor}
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0.88}
        />
      </RoundedBox>
      {/* 挡风玻璃前倾面 */}
      <RoundedBox args={[1.05, 0.05, 0.72]} radius={0.02} smoothness={2} position={[0, 0.62, -0.28]} rotation={[-0.5, 0, 0]}>
        <meshStandardMaterial
          color={glassColor}
          metalness={0.9}
          roughness={0.05}
          transparent
          opacity={0.85}
        />
      </RoundedBox>
      {/* 尾翼 */}
      <RoundedBox args={[1.18, 0.06, 0.34]} radius={0.02} smoothness={2} position={[0, 0.86, 1.18]}>
        <meshStandardMaterial color={bodyColor} metalness={0.6} roughness={0.3} />
      </RoundedBox>
      {/* 尾翼支架 */}
      {[-0.55, 0.55].map((x) => (
        <mesh key={x} position={[x, 0.7, 1.18]}>
          <boxGeometry args={[0.05, 0.28, 0.05]} />
          <meshStandardMaterial color={bodyColor} metalness={0.5} roughness={0.4} />
        </mesh>
      ))}
      {/* 前大灯 */}
      {[-0.5, 0.5].map((x) => (
        <mesh key={`head-${x}`} position={[x, 0.42, -1.48]}>
          <boxGeometry args={[0.3, 0.09, 0.05]} />
          <meshStandardMaterial
            color="#fff7e0"
            emissive="#ffe9a8"
            emissiveIntensity={1.6}
            roughness={0.2}
          />
        </mesh>
      ))}
      {/* 尾灯 */}
      {[-0.5, 0.5].map((x) => (
        <mesh key={`tail-${x}`} position={[x, 0.52, 1.49]}>
          <boxGeometry args={[0.3, 0.09, 0.05]} />
          <meshStandardMaterial
            color="#ff3030"
            emissive="#ff2222"
            emissiveIntensity={1.2}
            roughness={0.2}
          />
        </mesh>
      ))}
      {/* 后视镜 */}
      {[-0.62, 0.62].map((x) => (
        <mesh key={`mirror-${x}`} position={[x * 0.92, 0.72, -0.1]} rotation={[0, x > 0 ? -0.6 : 0.6, 0]}>
          <boxGeometry args={[0.14, 0.05, 0.07]} />
          <meshStandardMaterial color={bodyColor} metalness={0.7} roughness={0.25} />
        </mesh>
      ))}

      {/* 四个车轮：轮胎 + 轮毂 */}
      {(
        [
          [-0.72, 1.05],
          [0.72, 1.05],
          [-0.72, -1.05],
          [0.72, -1.05],
        ] as const
      ).map(([x, z], i) => (
        <group key={`wheel-${i}`} position={[x, 0.3, z]}>
          <mesh
            ref={(el) => {
              wheelRefs.current[i] = el;
            }}
            rotation={[0, 0, Math.PI / 2]}
            castShadow
          >
            <cylinderGeometry args={[0.27, 0.27, 0.22, 24]} />
            <meshStandardMaterial color="#161616" roughness={0.85} metalness={0.15} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.14, 0.14, 0.24, 16]} />
            <meshStandardMaterial color="#d6d6d6" metalness={0.9} roughness={0.25} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

/* ---------- 已接入 GLB 模型时的加载器 ---------- */
function GltfCar() {
  const { scene } = useGLTF(GLTF_PATH);
  const model = useMemo(() => scene.clone(true), [scene]);
  return (
    <group scale={GLTF_SCALE} position={GLTF_POSITION}>
      <primitive object={model} />
    </group>
  );
}

/* ---------- 3D 场景容器 ---------- */
export default function CarShowcase() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const bodyColor = isDark ? "#8ea8ff" : "#3b5bdb";
  const glassColor = isDark ? "#0b1026" : "#16233f";

  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[500px] rounded-3xl border border-border/60 bg-gradient-to-b from-muted/40 to-background overflow-hidden">
      <Canvas
        camera={{ position: [5.2, 3.4, 6.4], fov: 38 }}
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.55} />
          <directionalLight
            position={[5, 7, 4]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[1024, 1024]}
          />
          <pointLight position={[-4, 3, -3]} intensity={0.6} color="#9db4ff" />
          <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.7}>
            {USE_GLTF_MODEL ? <GltfCar /> : <ProceduralCar bodyColor={bodyColor} glassColor={glassColor} />}
          </Float>
          <ContactShadows
            position={[0, -0.55, 0]}
            opacity={isDark ? 0.55 : 0.35}
            scale={9}
            blur={2.6}
            far={3.2}
            color={isDark ? "#000000" : "#1a1a2e"}
          />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            minPolarAngle={Math.PI / 3.2}
            maxPolarAngle={Math.PI / 1.9}
            autoRotate
            autoRotateSpeed={1.1}
          />
        </Suspense>
      </Canvas>

      {/* 底部提示条 */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 rounded-full border border-border/70 bg-background/70 backdrop-blur px-4 py-1.5 text-xs text-muted-foreground">
        <span className="inline-block size-1.5 rounded-full bg-emerald-500 animate-pulse" />
        模型接入中
      </div>
    </div>
  );
}
