import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class LoginController {
    @Get()
    index() {
        return "登录页面"
    }
}
