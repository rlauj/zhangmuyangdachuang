# 设置UTF-8编码
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$OutputEncoding = [System.Text.Encoding]::UTF8

# 获取脚本所在目录
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptPath

Write-Host "正在初始化Git仓库..." -ForegroundColor Green

# 初始化Git仓库
git init

Write-Host "正在添加文件..." -ForegroundColor Green

# 添加所有文件
git add .

Write-Host "正在提交..." -ForegroundColor Green

# 提交
git commit -m "Initial commit: 中国音乐文化地图项目"

Write-Host "正在设置主分支..." -ForegroundColor Green

# 重命名分支为main
git branch -M main

Write-Host "正在添加远程仓库..." -ForegroundColor Green

# 添加远程仓库
git remote add origin https://github.com/rlauj/CNculturemapoferhu.git

Write-Host "正在推送到GitHub..." -ForegroundColor Yellow
Write-Host "如果提示输入凭据，请输入你的GitHub用户名和Personal Access Token" -ForegroundColor Yellow

# 推送到远程仓库
git push -u origin main

Write-Host "`n上传完成！" -ForegroundColor Green
Write-Host "你的项目已上传到: https://github.com/rlauj/CNculturemapoferhu" -ForegroundColor Cyan

Read-Host "`n按Enter键退出"





