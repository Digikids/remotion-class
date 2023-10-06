import { AbsoluteFill } from 'remotion'

import { AnimatedRotation, AnimatedScale } from '@riunge/kid-motion'

export const HelloWorld: React.FC = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: 'yellow' }}>
      <AnimatedScale
        in={{
          startTime: 0,
          endTime: 20,
        }}
        out={{
          startTime: -20,
          endTime: 0,
        }}
        from={0}
        to={1}
        origin="left"
      >
        <AnimatedRotation
          in={{
            startTime: 0,
            endTime: 20,
          }}
          out={{
            startTime: -20,
            endTime: 0,
          }}
          from={-180}
          to={0}
        >
          <span
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontFamily: 'cursive',
              fontSize: 300,
            }}
          >
            Hello World
          </span>
        </AnimatedRotation>
      </AnimatedScale>
    </AbsoluteFill>
  )
}
