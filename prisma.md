# init migrations folder
bunx prisma migrate dev --name init

# to migrate
npx prisma migrate dev

# refresh models schema.prisma
bunx prisma db push

# flow
api -> services -> repositories