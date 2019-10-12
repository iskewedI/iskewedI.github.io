particlesJS({
  particles: {
    number: {
      value: 0,
      density: {
        enable: false,
        value_area: 0
      }
    },
    color: {
      value: "#aca9a9"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#FFFFFF"
      },
      polygon: {
        nb_sides: 9
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.2683101981549727,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0,
        sync: false
      }
    },
    size: {
      value: 3.2,
      random: true,
      anim: {
        enable: false,
        speed: 34.107242916656496,
        size_min: 10.557003759917487,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 10,
      color: "#000000",
      opacity: 0.923302740709759,
      width: 12.942021322769273
    },
    move: {
      enable: true,
      speed: 4.810236182596568,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: true,
        rotateX: 721.5354273894853,
        rotateY: 400.8530152163807
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 250,
        size: 0,
        duration: 2,
        opacity: 0,
        speed: 3
      },
      repulse: {
        distance: 400,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
});
