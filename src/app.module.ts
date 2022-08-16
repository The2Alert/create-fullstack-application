import {Module} from "@nestjs/common";
import {ServeStaticModule} from "@nestjs/serve-static";
import {join} from "path";
import {appRootPath} from "@config";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(appRootPath, "./public")
        })
    ],
    providers: [AppService],
    controllers: [AppController]
})
export class AppModule {}
