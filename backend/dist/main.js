"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const cookieParser = require("cookie-parser");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, { cors: true });
    app.use(cookieParser());
    app.enableCors({
        origin: ['http://localhost:3000'],
        methods: ['GET', 'POST'],
        credentials: true,
    });
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map