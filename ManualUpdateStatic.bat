@echo off
setlocal

:: Configure your project root here:
set "SOURCE=C:\1a"
set "TARGET=C:\1a\static-site"

echo 🗑️  Removing old static-site (if it exists)...
if exist "%TARGET%" rd /s /q "%TARGET%"

echo 📁  Recreating static-site folder...
mkdir "%TARGET%"

echo 🔄  Copying all files except .git, out, and static-site into new static-site...
robocopy "%SOURCE%" "%TARGET%" /E /XD "%SOURCE%\.git" "%SOURCE%\out" "%SOURCE%\static-site"

echo ✅  static-site is up to date!
pause
