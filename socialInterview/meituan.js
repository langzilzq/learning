// first
class LRUCache {
  constructor(size) {
    this.size = size
    this.cache = new Map()
  }
  get(key) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      const val = this.cache.get(key)
      this.cache.delete(key)
      this.cache.set(key, val)
      return val
    }
    return null
  }
  set(key, value) {
    const hasKey = this.cache.has(key)
    if (hasKey) {
      this.cache.delete(key)
    }
    this.cache.set(key, value)
    if (this.cache.size > this.size) {
      this.cache.delete(this.cache.keys().next().value)
    }
  }
}

const lru = new LRUCache(4)
lru.set(1, 1)
lru.set(2, 2)
lru.set(3, 3)
lru.set(4, 3)
lru.set(5, 3)
lru.set(6, 3)
lru.get(1)
lru.get(6)
