# SafeAura AI - Master Proje Planı & Mimari Yol Haritası

## 🏗️ Mimari Özet
- **Yapı:** pnpm Workspaces & Turborepo Monorepo
- **Frontend (apps/web):** Next.js 15 (App Router), TypeScript, Tailwind CSS v4
- **Backend (apps/api):** Node.js, NestJS (Modüler, DI Tabanlı)
- **Veritabanı:** PostgreSQL + Prisma ORM (PgBouncer Optimizasyonlu)
- **Kuyruk Yönetimi:** Redis + BullMQ (Asenkron PDF ve AI Analiz İşleri)
- **Kimlik Doğrulama:** Clerk (JWKS Token Doğrulama)

---

## 📍 Aşama 1: Monorepo İskeleti & Kurulum (Tamamlandı)
- [x] `pnpm` workspace ve `Turborepo` altyapısının kurulması.
- [x] Paylaşımlı paketlerin (`packages/typescript-config`, `packages/tailwind-config`, `packages/database`, `packages/types`) yapılandırılması.
- [x] Proje kök dizinine `.cursorrules` / `.antigravityrules` mimari kurallarının eklenmesi.

## 🔒 Aşama 2: Kimlik Doğrulama & DB Katmanı
- [x] PostgreSQL şemasının Prisma üzerinde modellenmesi (`User`, `Drone`, `ThermalImage`, `AIAnalysis`, `Report`).
- [x] NestJS tarafında `passport-jwt` ve `jwks-rsa` ile Clerk entegrasyonunun tamamlanması.
- [ ] Next.js 15 tarafında Clerk middleware ve korumalı rotaların ayarlanması.

## 🔄 Aşama 3: Ağır G/Ç ve Kuyruk Yönetimi (Dashboard Hazırlığı)
- [x] Redis ve BullMQ entegrasyonu (NestJS).
- [x] Puppeteer tabanlı asenkron PDF Rapor üretim servisinin (`PdfReportProcessor`) yazılması.
- [x] Mock AI analiz servisinin (ileride gerçek AI motoruna bağlanacak şekilde) kuyruğa bağlanması.

## 🚀 Aşama 4: DevOps & Canlıya Alım (Hetzner / Contabo)
- [ ] Multi-stage ve `standalone` Next.js 15 Dockerfile'larının hazırlanması.
- [ ] `docker-compose.production.yml` dosyasının VPS üzerinde test edilmesi.
- [ ] Veritabanı bağlantı limitlerinin formüle göre ayarlanması: $$C_{\text{limit}} \le \frac{M_{\text{connections}} - R_{\text{reserved}}}{W_{\text{processes}}}$$

---

<SECURITY_REVIEW>
### OWASP Security Review (Aşama 2 & 3 & 4 - Kısmi)
- **Kimlik Doğrulama (Authentication):** `apps/api/src/auth/jwt.strategy.ts` içerisinde Clerk üzerinden alınan JWT token'ları `jwks-rsa` kullanılarak kriptografik olarak doğrulanmaktadır. JWT payload içeriğinde zorunlu `sub` alan kontrolü yapılmıştır. Bu yaklaşım, sahte veya yetkisiz token kullanımını engeller.
- **Veri Doğrulama (Data Validation):** Veritabanı modellemesinde tüm kritik alanlara standart Prisma tipleri uygulanmıştır. Sonraki aşamalarda NestJS ValidationPipe ve Next.js Server Actions içinde Zod ile strict input validasyonu zorunludur.
- **Dış Kaynak Zafiyetleri (Puppeteer/PDF):** `PdfReportProcessor` içindeki Puppeteer kullanımı sırasında rastgele HTML içeriği enjekte edilmesine (XSS) karşı veri validasyonu gerekmektedir. Şu anki şablonda sadece güvenli ve yapılandırılmış JSON verisi eklenmiştir, ancak gelecekte `data` payload'ı sanitarizasyondan (DOMPurify vb.) geçirilmelidir.
- **Bağımlılık Güvenliği (Dependency Security):** Güncel kütüphane versiyonları (`lucide-react`, `bullmq` vb.) kullanılmış olup monorepo yapısında yetki aşımlarına mahal vermemek adına paketler izole tutulmuştur. 
</SECURITY_REVIEW>
