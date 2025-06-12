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
      fpsLimit: 60,
      particles: {
        color: {
          value: ['#fff']
        },
        move: {
          direction: 'top',
          enable: true,
          outModes: {
            default: 'out',
            top: 'out', // Permite que as partículas saiam pelo topo
            bottom: 'none',
            left: 'bounce', // Reduz movimento no eixo X
            right: 'bounce' // Reduz movimento no eixo X
          },
          random: false, // Reduz variação aleatória no movimento
          speed: {
            min: 0.5,
            max: 2
          },
          straight: true, // Movimento mais linear
          warp: false,
          // Remove oscilação para movimento mais reto
          angle: {
            offset: 0,
            value: 90 // Movimento vertical
          },
          // Reduz deriva lateral
          drift: 0,
          gravity: {
            enable: false
          }
        },
        number: {
          density: {
            enable: true,
            width: 1920,
            height: 1080
          },
          value: 500
        },
        opacity: {
          value: {
            min: 0.1,
            max: 0.6
          },
          animation: {
            enable: true,
            speed: 1,
            minimumValue: 0.1,
            sync: false
          }
        },
        shape: {
          type: 'circle'
        },
        size: {
          value: 1, // Tamanho fixo
          // Remove animação de tamanho
          animation: {
            enable: false
          }
        },
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
      // Configuração corrigida do emitter
      emitters: {
        autoPlay: true,
        fill: true,
        life: {
          wait: false
        },
        rate: {
          delay: 0.1,
          quantity: 20
        },
        shape: {
          type: 'square'
        },
        startCount: 0,
        size: {
          mode: 'percent',
          height: 1,
          width: 100
        },
        position: {
          x: 50,
          y: 100
        },
        particles: {
          move: {
            direction: 'top'
          }
        }
      }
    }" />
  </div>
</template>
