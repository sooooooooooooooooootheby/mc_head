const getJavaUuid = require("../utils/java/getUuid");
const getJavaSkin = require("../utils/java/getSkin");
const getBedrockSkin = require("../utils/bedrock/getSkin");
const d2 = require("../utils/d2");
const axios = require("axios");
const cache = require("../cache");

// ===== Java =====
exports.java_username = async (req, res) => {
	const username = req.params.username;

	try {
		const cachedSkin = cache.get(username);
		if (cachedSkin) {
			res.set("Content-Type", "image/png");
			return res.send(cachedSkin);
		}

		const uuid = await getJavaUuid(username);
		const skinUrl = await getJavaSkin(uuid);
		const skin = await d2(skinUrl);

		cache.set(username, skin);
		cache.set(uuid, skin);

		res.set("Content-Type", "image/png");
		res.send(skin);
	} catch (error) {
		console.log(error);
		res.status(500).json({ succeed: false, error });
	}
};

exports.java_uuid = async (req, res) => {
	const uuid = req.params.uuid;

	try {
		const cachedSkin = cache.get(uuid);
		if (cachedSkin) {
			res.set("Content-Type", "image/png");
			return res.send(cachedSkin);
		}

		const skinUrl = await getJavaSkin(uuid);
		const skin = await d2(skinUrl);

		cache.set(uuid, skin);

		res.set("Content-Type", "image/png");
		res.send(skin);
	} catch (error) {
		console.log(error);
		res.status(500).json({ succeed: false, error });
	}
};

// ===== Bedrock =====
exports.bedrock_username = async (req, res) => {
	const username = req.params.username;

	try {
		const cachedSkin = cache.get(username);
		if (cachedSkin) {
			res.set("Content-Type", "image/png");
			return res.send(cachedSkin);
		}

		const xuidRes = await axios.get(`https://api.geysermc.org/v2/xbox/xuid/${username}`);
		const xuid = xuidRes.data.xuid;
		const skinUrl = await getBedrockSkin(xuid);
		const skin = await d2(skinUrl);

		cache.set(username, skin);
		cache.set(xuid, skin);

		res.set("Content-Type", "image/png");
		res.send(skin);
	} catch (error) {
		console.log(error);
		res.status(500).json({ succeed: false, error });
	}
};

exports.bedrock_uuid = async (req, res) => {
	const fuid = req.params.uuid;
	const uuid = parseInt(fuid.substring(22).replace(/-/g, ""), 16);

	try {
		const cachedSkin = cache.get(uuid);
		if (cachedSkin) {
			res.set("Content-Type", "image/png");
			return res.send(cachedSkin);
		}

		const skinUrl = await getBedrockSkin(uuid);
		const skin = await d2(skinUrl);

		cache.set(uuid, skin);

		res.set("Content-Type", "image/png");
		res.send(skin);
	} catch (error) {
		console.log(error);
		res.status(500).json({ succeed: false, error });
	}
};
