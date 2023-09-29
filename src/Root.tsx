import { Video } from '@riunge/kid-motion';
import { HelloWorld } from './helloWorld';

export const RemotionRoot: React.FC = () => (
	<Video
		durationInMinutes={1}
		durationInSeconds={30}
		format="horizontal"
		name="HelloWorld"
		videoSource={HelloWorld}
	/>
);
