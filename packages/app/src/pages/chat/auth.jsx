/**
 * Will render a loader in an iframe inside the Rocket Chat Authentication Page
 */

import FullscreenLoader from "@/components/FullscreenLoader";

const ChatAuth = () => {
	return (
		<FullscreenLoader>
			<strong>Loading chat...</strong>
		</FullscreenLoader>
	);
};

export default ChatAuth;
