import 'dotenv/config'

// import { configDotenv } from "dotenv";
import facebook from "./lib/facebook.js";
import instagram from "./lib/instagram.js";
import twitter from "./lib/twitter.js";
import youtube from "./lib/youtube.js";

const s = { twitter,instagram,youtube,facebook }
export default s;
