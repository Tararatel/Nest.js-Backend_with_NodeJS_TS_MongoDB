"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuthGuard = void 0;
const passport_1 = require("@nestjs/passport");
class JwtAuthGuard extends passport_1.AuthGuard('jwt') {
}
exports.JwtAuthGuard = JwtAuthGuard;
//# sourceMappingURL=gwt.guard.js.map