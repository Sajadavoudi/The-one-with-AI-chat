import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
  const mountRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    const techWords = [
      "JavaScript",
      "Python",
      "React",
      "Angular",
      "Node.js",
      "HTML",
      "CSS",
      "Java",
      "C++",
      "PHP",
      "Algorithm",
      "Database",
      "API",
      "Frontend",
      "Backend",
      "Framework",
      "Library",
      "Function",
      "Variable",
      "Array",
      "Object",
      "Class",
      "Method",
      "Loop",
      "Recursion",
      "Binary",
      "Git",
      "Linux",
      "Docker",
      "Cloud",
      "AWS",
      "Azure",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Machine Learning",
      "AI",
      "Neural Network",
      "Data Science",
      "Blockchain",
      "Cybersecurity",
      "DevOps",
      "Microservices",
      "GraphQL",
      "REST",
      "JSON",
      "HTTP",
      "TCP",
      "Compiler",
      "Debugger",
      "IDE",
      "VSCode",
      "Terminal",
      "Shell",
      "Agile",
      "Scrum",
      "CI/CD",
      "Testing",
      "Unit Test",
      "Integration",
      "Deployment",
      "Responsive",
      "Web App",
      "SPA",
      "PWA",
      "Performance",
      "Optimization",
      "Authentication",
      "Authorization",
      "Encryption",
      "Hash",
      "Token",
      "Thread",
      "Process",
      "Memory",
      "CPU",
      "GPU",
      "Cache",
      "Queue",
      "Stack",
    ];

    // Matrix green color palette
    const matrixColors = [
      "#00FF41",
      "#00FF00",
      "#39FF14",
      "#00CC00",
      "#00DD00",
    ];

    const createTypingTexture = (fullText, currentLength, color) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      const fontSize = Math.min(80, Math.max(24, 700 / fullText.length));
      ctx.font = `bold ${fontSize}px "Orbitron", "Share Tech Mono", "Courier New", monospace`;

      // Measure full text to maintain consistent canvas size
      const fullTextMetrics = ctx.measureText(fullText);
      canvas.width = fullTextMetrics.width + 80;
      canvas.height = fontSize + 60;

      ctx.font = `bold ${fontSize}px "Orbitron", "Share Tech Mono", "Courier New", monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (currentLength > 0) {
        const displayText = fullText.substring(0, currentLength);

        // Add typing cursor at the end
        const textWithCursor =
          currentLength < fullText.length ? displayText + "_" : displayText;

        ctx.fillStyle = color;

        // Soft glow effect
        ctx.globalAlpha = 0.3;
        ctx.filter = "blur(20px)";
        ctx.fillText(textWithCursor, canvas.width / 2, canvas.height / 2);
        ctx.globalAlpha = 0.6;
        ctx.filter = "blur(10px)";
        ctx.fillText(textWithCursor, canvas.width / 2, canvas.height / 2);
        ctx.globalAlpha = 1;
        ctx.filter = "none";
        ctx.fillText(textWithCursor, canvas.width / 2, canvas.height / 2);
      }

      return new THREE.CanvasTexture(canvas);
    };

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 500;

    const wordObjects = [];

    // Create floating words with typing animation
    for (let i = 0; i < 150; i++) {
      const word = techWords[Math.floor(Math.random() * techWords.length)];
      const color =
        matrixColors[Math.floor(Math.random() * matrixColors.length)];
      const texture = createTypingTexture(word, 0, color);

      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthTest: false,
      });

      const sprite = new THREE.Sprite(material);

      sprite.position.set(
        (Math.random() - 0.5) * window.innerWidth * 1.5,
        (Math.random() - 0.5) * window.innerHeight * 1.5,
        (Math.random() - 0.5) * 800
      );

      const baseScale = 0.3 + Math.random() * 0.6;
      sprite.scale.set(
        texture.image.width * baseScale,
        texture.image.height * baseScale,
        1
      );

      sprite.userData = {
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3,
          (Math.random() - 0.5) * 0.3
        ),
        baseScale,
        baseOpacity: 0.2 + Math.random() * 0.4,
        fullWord: word,
        currentLength: 0,
        typingSpeed: 50 + Math.random() * 100, // milliseconds between characters
        lastTypingTime: 0,
        color: color,
        isTyping: false,
        startTime: Date.now() + Math.random() * 3000,
        retypeDelay: 2000 + Math.random() * 3000, // Delay before retyping
        lastCompleteTime: 0,
      };

      wordObjects.push(sprite);
      scene.add(sprite);
    }

    // Mouse interaction
    const mouse = new THREE.Vector2(1, 1);
    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      const currentTime = Date.now();

      // Get scroll position to determine blur level
      const scrollY = window.scrollY;
      const blurFactor = Math.min(scrollY / (window.innerHeight * 0.8), 1);

      wordObjects.forEach((wordObj) => {
        const userData = wordObj.userData;

        // Handle typing animation
        if (currentTime > userData.startTime) {
          if (!userData.isTyping && userData.currentLength === 0) {
            userData.isTyping = true;
            userData.lastTypingTime = currentTime;
          }

          if (
            userData.isTyping &&
            userData.currentLength < userData.fullWord.length
          ) {
            if (currentTime - userData.lastTypingTime > userData.typingSpeed) {
              userData.currentLength++;
              userData.lastTypingTime = currentTime;

              // Update texture with new typed length
              const newTexture = createTypingTexture(
                userData.fullWord,
                userData.currentLength,
                userData.color
              );
              wordObj.material.map = newTexture;
              wordObj.material.needsUpdate = true;

              if (userData.currentLength >= userData.fullWord.length) {
                userData.isTyping = false;
                userData.lastCompleteTime = currentTime;
              }
            }
          }

          // Reset after word is complete and delay has passed
          if (
            userData.currentLength >= userData.fullWord.length &&
            currentTime - userData.lastCompleteTime > userData.retypeDelay
          ) {
            userData.currentLength = 0;
            userData.isTyping = false;
            userData.startTime = currentTime + Math.random() * 2000;
            userData.retypeDelay = 2000 + Math.random() * 3000;

            // Sometimes change to a new word
            if (Math.random() < 0.3) {
              userData.fullWord =
                techWords[Math.floor(Math.random() * techWords.length)];
              userData.color =
                matrixColors[Math.floor(Math.random() * matrixColors.length)];
            }
          }
        }

        // Smooth drift
        wordObj.position.add(userData.velocity);

        // Mouse repulsion - ENHANCED
        const screenPos = wordObj.position.clone().project(camera);
        const distanceToMouse = new THREE.Vector2(
          screenPos.x,
          screenPos.y
        ).distanceTo(mouse);
        if (distanceToMouse < 0.3) {
          const repelForce = (0.3 - distanceToMouse) * 15;
          wordObj.position.x += (screenPos.x - mouse.x) * repelForce;
          wordObj.position.y += (screenPos.y - mouse.y) * repelForce;
        }

        // Screen wrapping
        const screenWidth = window.innerWidth * 1.2;
        const screenHeight = window.innerHeight * 1.2;
        if (Math.abs(wordObj.position.x) > screenWidth / 2)
          wordObj.position.x *= -1;
        if (Math.abs(wordObj.position.y) > screenHeight / 2)
          wordObj.position.y *= -1;
        if (wordObj.position.z > 400) wordObj.position.z = -400;
        if (wordObj.position.z < -400) wordObj.position.z = 400;

        // Depth-based scale and opacity with blur effect
        const scaleFactor = (wordObj.position.z + 500) / 1000;
        const scale = userData.baseScale * scaleFactor;
        wordObj.scale.set(
          wordObj.material.map.image.width * scale,
          wordObj.material.map.image.height * scale,
          1
        );

        // Apply blur effect based on scroll position
        const finalOpacity =
          userData.baseOpacity * scaleFactor * (1 - blurFactor * 0.7);
        wordObj.material.opacity = Math.max(0.05, finalOpacity);
      });

      camera.position.x += (mouse.x * 30 - camera.position.x) * 0.03;
      camera.position.y += (-mouse.y * 30 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (
        currentMount &&
        renderer.domElement &&
        currentMount.contains(renderer.domElement)
      ) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 z-0"
      style={{ pointerEvents: "none" }}
    />
  );
}
