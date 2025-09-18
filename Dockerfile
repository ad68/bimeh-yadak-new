
FROM node:20-alpine AS builder


ARG NEXT_PUBLIC_API_URL=https://api.tazminmashin.com/tazmin/tazmin-mashin/
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL


WORKDIR /app


COPY package*.json ./


RUN npm ci --legacy-peer-deps


COPY . .


RUN npm run build


FROM node:20-alpine AS runner

WORKDIR /app


COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public


EXPOSE 3000


CMD ["npm", "run", "start"]
