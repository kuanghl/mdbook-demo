@echo off
setlocal enabledelayedexpansion

REM 获取脚本当前路径
set "_SCRIPT_DIR=%~dp0"
set "SCRIPT_DIR=%_SCRIPT_DIR:~0,-1%"
set "TEXTYP_ROOT_DIR=%SCRIPT_DIR%\src\images"

REM 设置环境变量
set "PATH=%PATH%;%SCRIPT_DIR%\bin_win;%SCRIPT_DIR%\bin_win\tools;%SCRIPT_DIR%\bin_win\tools\pdftocairo"

REM 递归遍历images目录下所有.tex和.typ文件
for /R "%TEXTYP_ROOT_DIR%" %%f in (*.tex, *.typ) do (
    set "file=%%f"
    set "dir_path=%%~dpf"
    set "filename=%%~nxf"
    
    REM 进入文件所在目录
    pushd "!dir_path!"
    if not errorlevel 1 (
        if "%%~xf"==".tex" (
            REM 使用tectonic编译.tex文件
            set "output_pdf=!filename:.tex=!.pdf"
            tectonic.exe "!filename!"
            pdftocairo.exe "!output_pdf!" "!filename:.tex=!.svg" -svg -r 600
            echo [TECTONIC] Compiled %%f → !output_pdf!
        ) else if "%%~xf"==".typ" (
            REM 使用typst编译.typ文件
            set "output_pdf=!filename:.typ=!.pdf"
            typst.exe compile "!filename!" "!output_pdf!"
            pdftocairo.exe "!output_pdf!" "!filename:.typ=!.svg" -svg -r 600
            echo [TYPST] Compiled %%f → !output_pdf!
        )
        popd
    ) else (
        echo [ERROR] Failed to enter directory: !dir_path!
    )
)
endlocal