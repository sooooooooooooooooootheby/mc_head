const sharp = require("sharp");
const axios = require("axios");

const cropWidth = 8;
const cropHeight = 8;
const back = 256;
const sizeA = 112;
const sizeB = 128;
// 裁切位置 left, top
const faceACoor = [8, 8];
const backACoor = [24, 8];
const topACoor = [8, 0];
const bottomACoor = [16, 0];
const leftACoor = [0, 8];
const rightACoor = [16, 8];
const faceBCoor = [40, 8];
const backBCoor = [56, 8];
const topBCoor = [40, 0];
const bottomBCoor = [48, 0];
const leftBCoor = [48, 8];
const rightBCoor = [48, 8];
// 倾斜参数
const affineFace = [
	[0.75, 0],
	[-0.3, 0.95],
];
const affineBack = [
	[0.75, 0],
	[-0.3, 0.95],
];
const affineTop = [
	[0.75, 0.75],
	[-0.3, 0.29],
];
const affineBottom = [
	[0.75, 0.75],
	[-0.3, 0.29],
];
const affineLeft = [
	[0.75, 0],
	[0.29, 0.95],
];
const affineRight = [
	[0.75, 0],
	[0.29, 0.95],
];
// 画布
const canvasW = 256;
const canvasH = 256;
const centerX = Math.round(canvasW / 2);
const centerY = Math.round(canvasH / 2) - 24;

const faceALeft = centerX;
const faceATop = centerY - 32;
const backALeft = centerX - 84;
const backATop = centerY - 64;
const topALeft = centerX - 84;
const topATop = centerY - 64;
const bottomALeft = centerX - 84;
const bottomATop = centerY + 42;
const leftALeft = centerX - 84;
const leftATop = centerY - 30;
const rightALeft = centerX;
const rightATop = centerY - 63;

const faceBLeft = centerX;
const faceBTop = centerY - 34;
const backBLeft = centerX - 96;
const backBTop = centerY - 70;
const topBLeft = centerX - 96;
const topBTop = centerY - 71;
const bottomBLeft = centerX - 96;
const bottomBTop = centerY + 51;
const leftBLeft = centerX - 96;
const leftBTop = centerY - 32;
const rightBLeft = centerX;
const rightBTop = centerY - 70;

const processImage = async (url) => {
	try {
		// 读取并转换
		const response = await axios.get(url, { responseType: "arraybuffer" });
		const imageBuffer = Buffer.from(response.data);

		const faceA = sharp(imageBuffer);
		const backA = sharp(imageBuffer);
		const topA = sharp(imageBuffer);
		const bottomA = sharp(imageBuffer);
		const leftA = sharp(imageBuffer);
		const rightA = sharp(imageBuffer);
		const faceB = sharp(imageBuffer);
		const backB = sharp(imageBuffer);
		const topB = sharp(imageBuffer);
		const bottomB = sharp(imageBuffer);
		const leftB = sharp(imageBuffer);
		const rightB = sharp(imageBuffer);

		// 裁切图片
		const imageFaceA = await faceA
			.extract({ left: faceACoor[0], top: faceACoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeA, sizeA, { kernel: "nearest" })
			.affine(affineFace, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.toBuffer();
		const imageBackA = await backA
			.extract({ left: backACoor[0], top: backACoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeA, sizeA, { kernel: "nearest" })
			.affine(affineBack, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.flop(true)
			.toBuffer();
		const imageTopA = await topA
			.extract({ left: topACoor[0], top: topACoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeA, sizeA, { kernel: "nearest" })
			.affine(affineTop, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.toBuffer();
		const imageBottomA = await bottomA
			.extract({ left: bottomACoor[0], top: bottomACoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeA, sizeA, { kernel: "nearest" })
			.affine(affineBottom, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.toBuffer();
		const imageLeftA = await leftA
			.extract({ left: leftACoor[0], top: leftACoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeA, sizeA, { kernel: "nearest" })
			.affine(affineLeft, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.toBuffer();
		const imageRightA = await rightA
			.extract({ left: rightACoor[0], top: rightACoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeA, sizeA, { kernel: "nearest" })
			.affine(affineRight, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.flop(true)
			.toBuffer();

		const imageFaceB = await faceB
			.extract({ left: faceBCoor[0], top: faceBCoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeB, sizeB, { kernel: "nearest" })
			.affine(affineFace, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.toBuffer();
		const imageBackB = await backB
			.extract({ left: backBCoor[0], top: backBCoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeB, sizeB, { kernel: "nearest" })
			.affine(affineBack, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.flop(true)
			.toBuffer();
		const imageTopB = await topB
			.extract({ left: topBCoor[0], top: topBCoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeB, sizeB, { kernel: "nearest" })
			.affine(affineTop, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.toBuffer();
		const imageBottomB = await bottomB
			.extract({ left: bottomBCoor[0], top: bottomBCoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeB, sizeB, { kernel: "nearest" })
			.affine(affineBottom, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.toBuffer();
		const imageLeftB = await leftB
			.extract({ left: leftBCoor[0], top: leftBCoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeB, sizeB, { kernel: "nearest" })
			.affine(affineLeft, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.flop(true)
			.toBuffer();
		const imageRightB = await rightB
			.extract({ left: rightBCoor[0], top: rightBCoor[1], width: cropWidth, height: cropHeight })
			.resize(sizeB, sizeB, { kernel: "nearest" })
			.affine(affineRight, { background: { r: 0, g: 0, b: 0, alpha: 0 }, interpolate: "nearest" })
			.flop(true)
			.toBuffer();

		const canvas = sharp({
			create: {
				width: canvasW,
				height: canvasH,
				channels: 4,
				background: { r: 0, g: 0, b: 0, alpha: 0 },
			},
		});

		const result = await canvas
			.composite([
				{ input: imageBottomA, left: bottomALeft, top: bottomATop },
				{ input: imageRightA, left: rightALeft, top: rightATop },
				{ input: imageBackA, left: backALeft, top: backATop },

				{ input: imageBottomB, left: bottomBLeft, top: bottomBTop },
				{ input: imageRightB, left: rightBLeft, top: rightBTop },
				{ input: imageBackB, left: backBLeft, top: backBTop },

				{ input: imageTopA, left: topALeft, top: topATop },
				{ input: imageLeftA, left: leftALeft, top: leftATop },
				{ input: imageFaceA, left: faceALeft, top: faceATop },

				{ input: imageTopB, left: topBLeft, top: topBTop },
				{ input: imageLeftB, left: leftBLeft, top: leftBTop },
				{ input: imageFaceB, left: faceBLeft, top: faceBTop },
			])
			.png()
			.toBuffer();

		return result;
	} catch (err) {
		console.error("处理图片时出错：", err);
	}
};

module.exports = processImage;
