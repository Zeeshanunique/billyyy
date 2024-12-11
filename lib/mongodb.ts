// First, create a new file: lib/mongodb.ts
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

// Use modern module augmentation
declare global {
  interface GlobalThis {
    mongoose: MongooseCache;
  }
}

// Create a type-safe global reference
const globalWithMongoose = globalThis as typeof globalThis & {
  mongoose: MongooseCache;
};

let cached: MongooseCache = globalWithMongoose.mongoose;

if (!cached) {
  cached = globalWithMongoose.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error('Please define MONGODB_URI in your environment');
  }

  cached.promise = mongoose.connect(process.env.MONGODB_URI);
  cached.conn = await cached.promise;
  return cached.conn;
}