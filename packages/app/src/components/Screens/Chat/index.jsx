/**
 * Shim the ChatScreen to Dynamically import it for speed's sake
 */

import React from "react";
import dynamic from "next/dynamic";

import FullscreenLoader from "@/components/FullscreenLoader";

const DynamicChat = dynamic(() => import("./Chat"), {
	loading() {
		return (
			<FullscreenLoader>
				<strong>Loading chat...</strong>
			</FullscreenLoader>
		);
	}
});

export default DynamicChat;
