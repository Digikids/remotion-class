import { AbsoluteFill } from 'remotion';

import { AnimatedRotation } from '@riunge/kid-motion';

export const HelloWorld: React.FC = () => {
	return (
		<AbsoluteFill style={{ backgroundColor: 'yellow' }}>
			<AnimatedRotation
				in={{
					startTime: 0,
					endTime: 10,
				}}
				out={{
					startTime: -10,
					endTime: 0,
				}}
				from={180}
				to={0}
			>
				Hello World
			</AnimatedRotation>
		</AbsoluteFill>
	);
};
