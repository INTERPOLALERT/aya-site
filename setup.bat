@echo off
echo.
echo ========================================
echo   AYA LIONA WEBSITE - EASY SETUP
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

echo Step 1: Opening Supabase SQL Editor...
echo.
echo COPY THIS SQL CODE:
echo ===============================
type supabase\schema.sql
echo ===============================
echo.
echo Opening SQL Editor in Brave...
timeout /t 2 >nul
start brave.exe "https://supabase.com/dashboard/project/dkvapmdzddjnwwkpajww/sql/new"
echo.
echo INSTRUCTIONS:
echo 1. Paste the SQL code above into the editor
echo 2. Click the "Run" button
echo 3. You should see "Success. No rows returned"
echo.
pause

echo.
echo Step 2: Opening Storage page...
echo.
start brave.exe "https://supabase.com/dashboard/project/dkvapmdzddjnwwkpajww/storage/buckets"
echo.
echo INSTRUCTIONS:
echo 1. Click "Create a new bucket"
echo 2. Name it: news-images
echo 3. Turn ON "Public bucket" (toggle should be green)
echo 4. Click "Create bucket"
echo.
pause

echo.
echo ========================================
echo   SETUP COMPLETE!
echo ========================================
echo.
echo Starting your website...
echo.
echo Your website will open at: http://localhost:3000
echo Admin panel is at: http://localhost:3000/admin
echo Password: aya_admin_2024
echo.
echo Press Ctrl+C to stop the server when done.
echo.
timeout /t 3 >nul
call npm run dev
