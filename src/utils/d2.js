const sharp = require("sharp");
const axios = require("axios");

const processImage = async (url) => {
	try {
		const response = await axios.get(url, { responseType: "arraybuffer" });
		const imageBuffer = Buffer.from(response.data);

		const imagea = sharp(imageBuffer);
		const imageb = sharp(imageBuffer);
		const cropWidth = 8;
		const cropHeight = 8;

		const imageA = await imagea
			.extract({ left: 8, top: 8, width: cropWidth, height: cropHeight })
			.resize(112, 112, { kernel: "nearest" })
			.toBuffer();

		const imageB = await imageb
			.extract({ left: 40, top: 8, width: cropWidth, height: cropHeight })
			.resize(128, 128, { kernel: "nearest" })
			.toBuffer();

		const transparentImage = sharp({
			create: {
				width: 128,
				height: 128,
				channels: 4,
				background: { r: 0, g: 0, b: 0, alpha: 0 },
			},
		}).png();

		const outputBuffer = await transparentImage
			.composite([
				{ input: imageA, top: 8, left: 8 },
				{ input: imageB, top: 0, left: 0 },
			])
			.png()
			.toBuffer();

		return outputBuffer;
	} catch (err) {
		console.error("处理图片时出错：", err);
	}
};

module.exports = processImage;
