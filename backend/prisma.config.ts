import { defineConfig } from '@prisma/config';

export default defineConfig({
  datasource: {
    url: 'postgresql://a@localhost:5432/umkm_grow_db?schema=public',
  },
});