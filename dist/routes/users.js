"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usernames_1 = require("../controllers/usernames");
const router = express_1.default.Router();
/* GET users listing. */
router.get("/", usernames_1.getUsernames);
/* POST filtered users. */
router.post("/", usernames_1.filterUsernames);
/* Get filtered users using queries lik: /users/search?filter=.... */
router.get("/search", usernames_1.filterUsernames);
/* DELETE filtered users. */
router.get("/delete", usernames_1.deleteAllUsers);
/* GET add users form. */
router.get("/new", usernames_1.createUsernameGet);
/* POST add new users. */
router.post("/new", usernames_1.createUsernamePost);
exports.default = router;
