FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install --include=dev
RUN npm install react-i18next i18next
RUN npm install --save-dev @types/react-i18next
# 新增安装 next-i18next
RUN npm install next-i18next
# 新增安装 sharp
RUN npm install sharp
# 更新 Browserslist 数据库
RUN npx update-browserslist-db@latest
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
COPY --from=builder /app/.next/standalone .
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
