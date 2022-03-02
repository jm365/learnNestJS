import { Controller, Get, Render, Request, Response } from '@nestjs/common';
import { ToolsService } from '../../../service/tools/tools.service';

@Controller('admin/login')
export class LoginController {
  constructor(private toolsService: ToolsService) {}

  @Get('index')
  @Render('admin/login')
  index() {
    return {};
  }

  @Get('code')
  getCode(@Request() req, @Response() res) {
    const svgCaptcha = this.toolsService.getCaptcha();
    req.session.code = svgCaptcha.text;
    res.type('svg');
    res.send(svgCaptcha.data);
  }
}
