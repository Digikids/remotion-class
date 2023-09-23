import { Composition } from 'remotion';
import { HelloWorld } from './helloWorld';

export const RemotionRoot: React.FC = () => (
	<Composition
		id="HelloWorld"
		component={HelloWorld}
		durationInFrames={150}
		fps={30}
		width={1920}
		height={1080}
	/>
);
