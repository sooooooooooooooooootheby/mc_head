const axios = require('axios');
const base64js = require('base64-js');

const getJavaSkin = async (uuid) => {
    try {
        const res = await axios.get(`https://sessionserver.mojang.com/session/minecraft/profile/${uuid}`);
        const base64 = res.data?.properties?.[0]?.value;

        if (!base64) return null;

        const decodedStr = new TextDecoder().decode(base64js.toByteArray(base64));
        const decoded = JSON.parse(decodedStr);

        return decoded?.textures?.SKIN?.url || null;
    } catch (error) {
        console.error('获取皮肤失败:', error);
        return null;
    }
};

module.exports = getJavaSkin;
