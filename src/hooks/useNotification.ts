import { useState } from "react";

import { NotificationType } from "../components/pageElements/notification/Notification";

export const useNotification = (): [
	NotificationType | null,
	(notification: NotificationType | null) => void
] => {

	const [value, setValue] = useState<NotificationType | null>(null);

	const setOnTimer = (notification: NotificationType | null) => {
		console.log(notification);
		setValue(notification);
		setTimeout(() => setValue(null), 5000);
	};

	return [value, setOnTimer];
};

