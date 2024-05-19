import { saveAs } from "file-saver";

export const downloadImage = (url: string) => {
	const fileName = url.substring(url.lastIndexOf("/") + 1);
	saveAs(url, fileName);
};
