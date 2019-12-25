#!/usr/bin/env sh
# 发生错误时停止
set -e
# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'leix.wang' > CNAME

git init
git add -A
git config --local user.name "Richard Wang"
git config --local user.email wangleihd@gmail.com
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io，去掉下面这一行的注释
git push -f https://${leix}@github.com/leixwang/leixwang.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>，去掉下面这一行的注释
# git push -f https://${token}@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -