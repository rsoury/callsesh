import { customAlphabet } from "nanoid";

// Keep all lowercase to prevent issues when using genereated ids to search Auth0 which is non case-sensitive
const alphabet = "0123456789_abcdefghijklmnopqrstuvwxyz-";
const generateId = (size = 21) => customAlphabet(alphabet, size)();

export default generateId;
