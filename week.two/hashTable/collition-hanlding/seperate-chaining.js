class HashTable {
    constructor(capacity) {
        this.buckets = new Array(capacity); // Array to hold key-value pairs (chaining method)
        this.capacity = capacity;           // Maximum number of slots in the hash table
    }

    // Hash function: convert a key string into an index
    hash(key) {
        let total = 0;
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i); // Sum ASCII values of characters
        }
        return total % this.capacity; // Ensure index falls within capacity
    }

    // Insert or update a key-value pair
    set(key, value) {
        const index = this.hash(key);
        let bucket = this.buckets[index];

        if (!bucket) {
            // No bucket exists here, create one and store the key-value pair
            this.buckets[index] = [[key, value]];
        } else {
            // Bucket exists, check if key already present
            let existingEntry = bucket.find(entry => entry[0] === key);

            if (existingEntry) {
                // Update existing key with new value
                existingEntry[1] = value;
            } else {
                // Insert new key-value pair in the same bucket (collision handled)
                bucket.push([key, value]);
            }
        }
    }

    // Retrieve the value for a given key
    get(key) {
        const index = this.hash(key);
        let bucket = this.buckets[index];

        if (bucket) {
            // Search inside bucket
            let entry = bucket.find(item => item[0] === key);
            return entry ? entry[1] : null; // Return value if found, else null
        }
        return null; // Key not found
    }

    // Delete a key-value pair
    delete(key) {
        const index = this.hash(key);
        let bucket = this.buckets[index];

        if (bucket) {
            // Find the entry inside bucket
            let entry = bucket.find(item => item[0] === key);
            if (entry) {
                // Remove entry from bucket
                bucket.splice(bucket.indexOf(entry), 1);
                return entry; // Return deleted entry
            }
        }
        return null; // Key not found
    }

    // Print all key-value pairs
    print() {
        console.log("HashTable contents:");
        for (let i = 0; i < this.buckets.length; i++) {
            if (this.buckets[i]) {
                console.log(`Index ${i}:`, this.buckets[i]);
            }
        }
    }
}


// Example usage
const table = new HashTable(4);

table.set("name", "sanu");
table.set("place", "palakkad");
table.set("work", "developer");

table.print();
console.log("Get 'name':", table.get("name"));
console.log("Deleted:", table.delete("name"));
table.print();
