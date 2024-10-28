"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsernames = getAllUsernames;
exports.getFilteredUsernames = getFilteredUsernames;
exports.insertUsername = insertUsername;
exports.deleteAllUsernames = deleteAllUsernames;
const pool_1 = __importDefault(require("./pool"));
function getAllUsernames() {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield pool_1.default.query("SELECT * FROM usernames");
        return rows;
    });
}
function getFilteredUsernames(query) {
    return __awaiter(this, void 0, void 0, function* () {
        const { rows } = yield pool_1.default.query("SELECT * FROM usernames WHERE username LIKE $1", [
            `%${query}%`
        ]);
        return rows;
    });
}
function insertUsername(username) {
    return __awaiter(this, void 0, void 0, function* () {
        yield pool_1.default.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
    });
}
function deleteAllUsernames() {
    return __awaiter(this, void 0, void 0, function* () {
        yield pool_1.default.query("TRUNCATE TABLE usernames");
    });
}
