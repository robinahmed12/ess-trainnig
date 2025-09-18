interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
    timestamp: string;
}

interface User {
    id: number;
    name: string;
    email: string;
}

interface Product {
    id: number;
    title: string;
    price: number;
}

// Generic function to make API calls
function fetchData<T>(url: string): Promise<ApiResponse<T>> {
    return fetch(url)
        .then(response => response.json())
        .then(data => ({
            data,
            status: 200,
            message: "Success",
            timestamp: new Date().toISOString()
        }));
}

// Generic Cache Manager
class CacheManager<T> {
    private cache: Map<string, T>;

    constructor() {
        this.cache = new Map();
    }

    set(key: string, value: T): void {
        this.cache.set(key, value);
    }

    get(key: string): T | undefined {
        return this.cache.get(key);
    }

    clear(): void {
        this.cache.clear();
    }
}

// Generic State Manager for any type of data
interface State<T> {
    data: T;
    loading: boolean;
    error: string | null;
}

function createState<T>(initialData: T): State<T> {
    return {
        data: initialData,
        loading: false,
        error: null
    };
}

// Generic Queue implementation
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    peek(): T | undefined {
        return this.items[0];
    }

    size(): number {
        return this.items.length;
    }
}

// Example usage:

// 1. API Response handling
async function getUserData(userId: number) {
    const response = await fetchData<User>(`/api/users/${userId}`);
    console.log(response.data.name); // TypeScript knows this is a User
}

async function getProductData(productId: number) {
    const response = await fetchData<Product>(`/api/products/${productId}`);
    console.log(response.data.price); // TypeScript knows this is a Product
}

// 2. Cache usage
const userCache = new CacheManager<User>();
userCache.set("user1", { id: 1, name: "John", email: "john@example.com" });

const productCache = new CacheManager<Product>();
productCache.set("prod1", { id: 1, title: "Laptop", price: 999 });

// 3. State Management
const userState = createState<User>({ id: 1, name: "John", email: "john@example.com" });
const productState = createState<Product[]>([]); // For a list of products

// 4. Queue usage
const taskQueue = new Queue<() => void>();
taskQueue.enqueue(() => console.log("Task 1"));
taskQueue.enqueue(() => console.log("Task 2"));

// Generic function to handle different types of lists
function sortList<T>(items: T[], compareFunction: (a: T, b: T) => number): T[] {
    return [...items].sort(compareFunction);
}

// Usage examples
const numbers = [5, 2, 8, 1, 9];
const sortedNumbers = sortList(numbers, (a, b) => a - b);

const users = [
    { name: "John", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 35 }
];

const sortedByAge = sortList(users, (a, b) => a.age - b.age);
const sortedByName = sortList(users, (a, b) => a.name.localeCompare(b.name));
