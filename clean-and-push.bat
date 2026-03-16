@echo off
chcp 65001
cd /d "%~dp0"

echo ========== 彻底清除密钥并重新推送 ==========
echo.

echo 步骤1: 删除所有包含密钥的脚本文件
if exist git-setup.bat del git-setup.bat
if exist git-fix-and-push.bat del git-fix-and-push.bat
if exist git-push-update.bat del git-push-update.bat
if exist git-push-final.bat del git-push-final.bat
if exist upload.bat del upload.bat
if exist fix-and-push.bat del fix-and-push.bat
if exist final-push.bat del final-push.bat

echo 已删除所有包含密钥的脚本

echo.
echo 步骤2: 添加删除操作
git add .

echo.
echo 步骤3: 提交删除
git commit -m "Remove scripts containing secrets"

echo.
echo 步骤4: 使用 git filter-branch 清除历史中的密钥
echo 这可能需要一些时间...
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch git-setup.bat git-fix-and-push.bat git-push-update.bat git-push-final.bat upload.bat fix-and-push.bat final-push.bat" -- --all

echo.
echo 步骤5: 清理引用日志
for /d %%x in (.git\refs\original\**) do @rd /s /q "%%x"
git reflog expire --expire=now --all
git gc --prune=now --aggressive

echo.
echo 步骤6: 强制推送到GitHub
git push origin main --force

echo.
echo ========== 完成！==========
echo.
echo 重要提示：
echo 1. 立即访问 https://github.com/settings/tokens
echo 2. 撤销所有泄露的token
echo 3. 创建新的token
echo 4. 以后不要在脚本中写入密钥！
echo.
pause

