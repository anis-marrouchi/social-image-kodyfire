// We keep it dead simple.
// @todo dynamic doodle
const doodles = (
  name: string,
  bgColor = "#12152f",
  range = { start: 0xfbb2, end: 0xfbbf}
) => {
  const doodles = {
    unicode: {
      style: `:doodle {
            @grid: 20 / 100vmax;
            background: ${bgColor};
          }
          :after {
            content: '\\@hex(@rand(${range.start}, ${range.end}))';
            font-size: 10vmax; 
            color: hsla(
              @rand(360), 70%, 70%, @rand(.9)
            );
          }`,
    },
    neon: {
      style: `:doodle {
            @grid: 30x1 / 100vmax; 
            background: #673ab7;
            overflow: hidden;
          }
          :container {
            transform: scale(4);
          }
          @place-cell: center;
          outline: 1vmin @p(dotted, dashed)
            @p(#F5C8E5, #74DCE3, #137EC7, #65D7E1);
          outline-offset: 5vmin;
          filter: blur(calc(.012vmin * @i()));
          mix-blend-mode: overlay; 
        
          transform:
            scale(calc(1 / @size() * @i()))
            rotate(45deg)
            skew(-20deg);
        
          :after {
            content: '';
            @size: 50%;
            position: absolute;
            outline: 1vmin dotted
              @p(#F5C8E5, #74DCE3, #137EC7, #65D7E1);
          }`,
    },
    strings: {
      style: `:doodle {
            @grid: 25x1 / 18vmin;
          }
          :container {
            perspective: 30vmin;
          }
        
          @place-cell: center;
          @size: 100%;
        
          border: @r(2px) solid @pd(
            #00b8a9, #f8f3d4, #f6416c, #ffde7d
          );
          @random(.1) { border-style: dashed; }
          @random(.1) { border-style: dotted; }
          @random(.1) {
            border-width: @p(3px, 4px);
            border-style: double;
          }
        
          border-radius: 50%;
          transform-style: preserve-3d;
          will-change: transform, opacity;
          animation: scale-up 7s linear infinite;
          animation-delay: calc(-7s / @size() * @i());
        
          @keyframes scale-up {
            0%, 100% {
              transform: translate3d(0, 0, 0) rotate(0);
              opacity: 0;
            }
            10% {
              opacity: 1;
            }
            95% {
              transform:
                translate3d(0, 0, 45vmin)
                rotateX(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateY(calc(@p(-1, 1) * @r(30deg, 330deg)))
                rotateZ(calc(@p(-1, 1) * @r(30deg, 330deg)))
            }
          }`,
    },
    fakeBox: {
      style: `:doodle {
        @grid: 20x20 / 100vmax;
        background: #fff;
        padding: 2vmin;
        box-shadow: 0 .5em .5em rgba(125, 125, 125, .7);
      }
    
      background: @p(#ffecbaaa, #ff8d68aa, #a10054aa, #001f52aa);
      transform: scale(@r(0.6, 0.9)) translate(-80%, -80%);
      margin: 2vmin;
      
      box-shadow:
        4.2vmin 4.2vmin 0 8vmin
        @pd(#bff4edaa, #280f34aa, #b30753aa, #f6c667aa);
    
      :after, :before {
        content: '';
        position: absolute;
        @size: 100%;
        transform-origin: 0 0;
      }
      :after {
        background: @p(#bff4ed, #280f34, #b30753, #f6c667);
        transform: translateX(100%) skewY(45deg);
      }
      :before {
        background: @p(#ffecba, #ff8d68, #a10054, #001f52);
        transform: translateY(100%) skewX(45deg);
      }`,
    },
    seeding: {
      style: `<style>
              @grid: 50x1 / 50vmin;
              :container {
                perspective: 23vmin;
              }
              background: @m(
                @r(200, 240), 
                radial-gradient(
                  @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d) 15%,
                  transparent 50%
                ) @r(100%) @r(100%) / @r(1%, 3%) @lr no-repeat
              );
          
              @size: 80%;
              @place-cell: center;
          
              border-radius: 50%;
              transform-style: preserve-3d;
              animation: scale-up 20s linear infinite;
              animation-delay: calc(@i * -.4s);
          
              @keyframes scale-up {
                0% {
                  opacity: 0;
                  transform: translate3d(0, 0, 0) rotate(0);
                }
                10% { 
                  opacity: 1; 
                }
                95% {
                  transform:
                    translate3d(0, 0, @r(50vmin, 55vmin))
                    rotate(@r(-360deg, 360deg));
                }
                100% {
                  opacity: 0;
                  transform: translate3d(0, 0, 1vmin);
                }
              }
            </style>`,
    },
    timeTravel: {
      style: `
          :doodle {
              @grid: 500x1/ 40vmin;
            }
            :container {
              perspective: 10vmin;
            }
            
            @place-cell: center;
            @size: 40% 1px;
            
            will-change: transform, opacity;
            transform-style: preserve-3d;
            
            background: linear-gradient(to left,
              @multi(@p([2-4]), @p(#00b8a9, #f8f3d4, #f6416c, #ffde7d)),
              transparent @r(50%)
            );
          
            animation: move @r(1s, 2s, .1) linear infinite;
            animation-delay: -@r(.1s, 2s);
          
            --trans:
              translateX(50%)
              rotateX(@r(-180deg, 180deg))
              rotateY(@r(-180deg, 180deg))
              rotateZ(@r(-180deg, 180deg));
          
            transform-origin: 0 center;
            transform: var(--trans) scale(2);
            opacity: 0;
          
            @keyframes move {
              20% { opacity: 1; }
              100% { transform: var(--trans) scale(0); }
            }`,
    },
    tubes: {
      style: `:doodle {
            @grid: 20 / 100vmax;
            background: #12152f;
          }
          :after {
            content: '\\@hex(@rand(0x2500, 0x257f))';
            font-size: 5vmax; 
            color: hsla(
              @rand(360), 70%, 70%, @rand(.9)
            );
          }`,
    },
  };
  if (Object.keys(doodles).includes(name)) {
    // We start simple and just return the doodle
    // @ts-ignore
    return doodles[name];
  }
  return doodles.unicode;
};

export default doodles;
