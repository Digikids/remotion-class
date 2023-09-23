import { AbsoluteFill, useCurrentFrame, useVideoConfig } from 'remotion';

export const HelloWorld: React.FC = () => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();
	const animatedOpacity = (frame * 2) / durationInFrames;

	return (
		<AbsoluteFill style={{ backgroundColor: 'white' }}>
			<AbsoluteFill style={{ opacity: animatedOpacity }}>
				Hello World
			</AbsoluteFill>
		</AbsoluteFill>
	);
};
