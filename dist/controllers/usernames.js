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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsernames = getUsernames;
exports.filterUsernames = filterUsernames;
exports.createUsernameGet = createUsernameGet;
exports.createUsernamePost = createUsernamePost;
exports.deleteAllUsers = deleteAllUsers;
const queries_1 = require("../db/queries");
function getUsernames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // get all usernames
        const usernames = yield (0, queries_1.getAllUsernames)();
        res.render("users", { users: usernames });
    });
}
function filterUsernames(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        if (req.query.filter) {
            const { filter } = req.query;
            const usernames = yield (0, queries_1.getFilteredUsernames)(filter);
            res.render("filter", { users: usernames });
        }
        else {
            const { filter } = req.body;
            const usernames = yield (0, queries_1.getFilteredUsernames)(filter);
            res.render("filter", { users: usernames });
        }
    });
}
function createUsernameGet(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        // render the form
        res.render("form");
    });
}
function createUsernamePost(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { username } = req.body;
        yield (0, queries_1.insertUsername)(username);
        res.redirect("/users");
    });
}
function deleteAllUsers(_, res) {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, queries_1.deleteAllUsernames)();
        res.redirect("/users");
    });
}
