/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/Schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:xUStbkpo1yr9@ep-raspy-paper-a52andwy.us-east-2.aws.neon.tech/wordsmith?sslmode=require',
    }
  };