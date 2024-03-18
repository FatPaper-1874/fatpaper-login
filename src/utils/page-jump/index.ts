import { __MONOPOLYPAGEURL__ } from "@/bace";

export function jumpTo(url: string, data: Record<string, string>) {
	const query = Array.from(Object.keys(data))
		.map((key) => `${key}=${data[key]}`)
		.join("&");
	location.assign(`${url}?${query}`);
}

export function jumpToMonopoly(token: string) {
	jumpTo(__MONOPOLYPAGEURL__, { token });
}

export function jumpBack(token: string) {
	let preUrl = document.referrer;
	if (preUrl) {
		jumpTo(preUrl, { token });
	}
}
