import * as dotenv from 'dotenv'
dotenv.config()

export const DatabaseConfig = {
  url: process.env.DB_URL,
}
