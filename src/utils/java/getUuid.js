const axios = require('axios');

const getJavaUuid = async (username) => {
	try {
		const res = await axios.get(`https://api.mojang.com/users/profiles/minecraft/${username}`);
		return res.data?.id || null;
	} catch (error) {
        console.error('获取uuid失败:', error);
		return null;
	}
};

module.exports = getJavaUuid;