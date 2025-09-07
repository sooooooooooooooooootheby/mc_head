// cache.js
class Cache {
	constructor(ttl = 12 * 60 * 60 * 1000) {
		// 默认 TTL 12小时
		this.ttl = ttl;
		this.map = new Map();
		this.cleanInterval = 60 * 60 * 1000; // 每小时清理一次
		this.startCleaner();
	}

	set(key, value) {
		this.map.set(key, { value, timestamp: Date.now() });
	}

	get(key) {
		const entry = this.map.get(key);
		if (!entry) return null;

		if (Date.now() - entry.timestamp > this.ttl) {
			this.map.delete(key);
			return null;
		}
		return entry.value;
	}

	delete(key) {
		this.map.delete(key);
	}

	startCleaner() {
		setInterval(() => {
			const now = Date.now();
			for (const [key, entry] of this.map.entries()) {
				if (now - entry.timestamp > this.ttl) {
					this.map.delete(key);
				}
			}
		}, this.cleanInterval);
	}
}

module.exports = new Cache();
