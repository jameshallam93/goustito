import React from "react";

import "./notification.scss";

export enum MessageType {
	"error",
	"message"
}

export type NotificationType = {
	type: MessageType,
	message: string
}

type NotificationProps = {
	notification: NotificationType | null
}

const Notification: React.FunctionComponent<NotificationProps> = ({ notification }) => {

	const returnClassName = () => {
		return notification?.type === MessageType.message ?
			"message" :
			"error";
	};
	if (notification === null) {
		return null;
	}
	return (
		<div className={"notification"}>
			<h1 className={returnClassName()}>{notification.message}</h1>
		</div>
	);
};


export { Notification };