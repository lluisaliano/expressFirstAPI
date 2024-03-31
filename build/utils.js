"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addActivity = void 0;
const model_1 = require("./model");
function addActivity(newActivity) {
    model_1.data.push(newActivity);
    return newActivity;
}
exports.addActivity = addActivity;
