<script lang="ts" setup>
const particlesLoaded = async (container: unknown) => {
  console.log("Particles container loaded", container);
};
</script>

<template>
  <div id="app">
    <vue-particles id="tsparticles" @particles-loaded="particlesLoaded" :options="{
      background: {
        color: {
          value: 'transparent'
        }
      },
      fpsLimit: 60, // Reduzido para movimento mais suave
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: 'bubble'
          },
        },
        modes: {
          bubble: {
            distance: 100,
            duration: 2,
            opacity: 0.8,
            size: 10
          },
          repulse: {
            distance: 100,
            duration: 0.4
          }
        }
      },
      particles: {
        color: {
          value: ['#4caf50'] // Tons suaves de branco/cinza
        },
        move: {
          direction: 'top', // Movimento ascendente
          enable: true,
          outModes: {
            default: 'out', // Partículas saem pela parte superior
            bottom: 'none',
            left: 'none',
            right: 'none',
            top: 'none'
          },
          random: true, // Adiciona variação suave no movimento
          speed: {
            min: 0.5,
            max: 2 // Velocidade bem suave
          },
          straight: false, // Permite movimento orgânico
          warp: false,
          // Adiciona oscilação suave
          path: {
            enable: true,
            options: {
              sides: 6,
              turnSteps: 30,
              angle: 30
            }
          }
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080
          },
          value: 50 // Quantidade reduzida para movimento mais visível
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.6
          },
          animation: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: {
            min: 1,
            max: 4
          },
          animation: {
            enable: true,
            speed: 2,
            size_min: 0.5,
            sync: false
          }
        },
        // Adiciona rotação suave
        rotate: {
          value: {
            min: 0,
            max: 360
          },
          direction: 'random',
          animation: {
            enable: true,
            speed: 2,
            sync: false
          }
        }
      },
      detectRetina: true,
      // Configuração para regenerar partículas na parte inferior
      emitters: {
        direction: 'top',
        life: {
          count: 0,
          duration: 0.1,
          delay: 0.1
        },
        rate: {
          delay: 0.1,
          quantity: 1
        },
        shape: 'square',
        startCount: 0,
        size: {
          mode: 'percent',
          height: 0,
          width: 100
        },
        position: {
          x: 50,
          y: 100
        }
      }
    }" />
  </div>
</template>
