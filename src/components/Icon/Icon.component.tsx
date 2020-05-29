import * as React from "react";

import { library, IconProp } from "@fortawesome/fontawesome-svg-core";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fab } from "@fortawesome/fontawesome-free-brands";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//@ts-ignore
library.add(fal, fad, fas, far, fab);

export type IconName = string;

export interface IconProps {
	name: IconName;
	iconColor?: string;
}

function mapNamePropToFaNames(iconName: IconName): string | string[] {
	switch (iconName) {
		case "github":
			return ["fab", "github-square"];
		case "linkedin":
			return ["fab", "linkedin"];

		default:
			return iconName;
	}
}

const Icon: React.FC<IconProps> = (props: IconProps): JSX.Element => {
	const { name, iconColor } = props;

	const iconName = mapNamePropToFaNames(name);

	return <FontAwesomeIcon color={iconColor} icon={iconName as IconProp} />;
};

export default Icon;
