# 📚 Kutubxona Boshqaruv Tizimi (Library Management System)

Bu loyiha `NestJS`, `Prisma ORM`, va `PostgreSQL` (yoki `SQLite`) asosida yozilgan kutubxona boshqaruv tizimi bo‘lib, foydalanuvchilar kitoblarni ijaraga olishlari va qaytarishlari mumkin.

## 🛠 Texnologiyalar

- [NestJS](https://nestjs.com/)
- [Prisma ORM](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/) yoki [SQLite](https://www.sqlite.org/)
- [Swagger](https://swagger.io/) — API hujjatlar uchun
- [Winston](https://github.com/winstonjs/winston) — Loglar uchun

---

## 📂 Loyihani Tuzilishi

``` file structure
src/
├── books/ # Kitoblar moduli
├── users/ # Foydalanuvchilar moduli
├── borrow/ # Ijaralar moduli
├── common/ # Logger va umumiy util fayllar
├── prisma/ # PrismaClient va konfiguratsiya
├── app.module.ts # Bosh modul
└── main.ts # Entry point
```


---

## ⚙️ O‘rnatish

```bash
# 1. Loyihani klonlash
git clone https://github.com/username/library-management.git
cd library-management

# 2. Paketlarni o‘rnatish
npm install

# 3. .env faylini yaratish
cp .env.example .env

# 4. Prisma migratsiya
npx prisma migrate dev --name init

# 5. Serverni ishga tushirish
npm run start:dev
```

# API Swagger Endpoint
```url
http://localhost:port/docs
```

