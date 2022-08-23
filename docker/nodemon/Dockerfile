# 抓Node官方image
FROM node:18.5.0

# 建立資料夾給app使用
RUN mkdir -p /usr/src/express-mvc

# 轉換到app資料夾
WORKDIR /usr/src/express-mvc


# 安裝nodemon
RUN npm install -g nodemon


# 要執行的Port
EXPOSE 5001

# 執行
RUN ["chmod", "+x", "/usr/src/express-mvc"]
