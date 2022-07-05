import * as dotenv from 'dotenv'
dotenv.config()

export const AppConfig = {
  port: process.env.PORT,
}
