FROM oven/bun:1.2.2

WORKDIR /app

ARG PORT=3000
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=${NEXT_PUBLIC_API_URL}

COPY package.json bun.lock ./

COPY . .

RUN bun install

RUN bun next build

EXPOSE ${PORT}

CMD [ "bun", "next", "start" ]