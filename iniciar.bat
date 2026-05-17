@echo off
cd /d "%~dp0"
echo Iniciando Monster Burguer en http://localhost:8080
start "" "http://localhost:8080"
py -m http.server 8080
