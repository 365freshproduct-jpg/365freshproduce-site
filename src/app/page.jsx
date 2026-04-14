import React from "react";

const stats = [
  { value: "15000 м2", label: "Площадь тепличного комплекса" },
  { value: "Альбион", label: "Сорт клубники в производстве" },
  { value: "140000 кг/год", label: "Стабильный объем поставок" },
  { value: "8 лет", label: "Опыт промышленного выращивания" },
];

const greenhouseTech = [
  {
    title: "Локация",
    text: "Армавирский регион, деревня Воскеат, 44/2, теплица. Удобная логистика для поставок в торговые сети и дистрибьюторам.",
  },
  {
    title: "Масштаб",
    text: "Современный комплекс площадью 15000 м2 с отдельными зонами выращивания, сортировки и упаковки.",
  },
  {
    title: "Технологии",
    text: "Капельный полив, климат-контроль, мониторинг влажности и температуры, досветка в переходные сезоны.",
  },
  {
    title: "Условия выращивания",
    text: "Контроль питания растений, санитарные стандарты и бережный сбор для сохранения свежести и вкуса.",
  },
];

const products = [
  {
    name: "Альбион",
    image: "/albion-photo.jpg",
    description:
      "Основной сорт в производстве для регулярных отгрузок в ритейл и оптовые каналы.",
    taste: "Сладкий, освежающий вкус с легкой ягодной кислинкой.",
    season: "Доступность: март - июнь",
  },
];

const advantages = [
  {
    title: "Свежая продукция",
    text: "Сбор и отгрузка в короткие сроки для максимальной свежести на полке.",
    icon: (
      <path
        d="M12 2c3.2 0 5.8 2.6 5.8 5.8 0 5-5.8 10.2-5.8 10.2S6.2 12.8 6.2 7.8C6.2 4.6 8.8 2 12 2zm0 3.2a2.6 2.6 0 100 5.2 2.6 2.6 0 000-5.2z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Современная теплица",
    text: "Инженерная инфраструктура и автоматизация ключевых процессов выращивания.",
    icon: (
      <path
        d="M3 10l9-6 9 6v9a1 1 0 01-1 1h-5v-6H9v6H4a1 1 0 01-1-1v-9z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Контроль качества",
    text: "Единые стандарты сортировки, визуального контроля и упаковки на каждом этапе.",
    icon: (
      <path
        d="M12 2l8 3v6c0 5.2-3.4 9.2-8 11-4.6-1.8-8-5.8-8-11V5l8-3zm-1.2 12.2l5-5-1.4-1.4-3.6 3.6-1.8-1.8-1.4 1.4 3.2 3.2z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Стабильные поставки",
    text: "Плановое производство и прогнозируемый объем под контракты партнеров.",
    icon: (
      <path
        d="M4 7h10v6H4V7zm11 2h2.5l2.5 2.8V13h-5V9zM7 18a2 2 0 110-4 2 2 0 010 4zm10 0a2 2 0 110-4 2 2 0 010 4z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Экологичный подход",
    text: "Рациональное использование воды и ресурсов, безопасные агротехнологии.",
    icon: (
      <path
        d="M12 2C8 5.6 6 8.6 6 12a6 6 0 0012 0c0-3.4-2-6.4-6-10zm0 16a4 4 0 01-4-4c0-1.8 1-3.7 4-6.8 3 3.1 4 5 4 6.8a4 4 0 01-4 4z"
        fill="currentColor"
      />
    ),
  },
  {
    title: "Профессиональная команда",
    text: "Агрономы, технологи и специалисты по качеству с практическим опытом.",
    icon: (
      <path
        d="M12 3a4 4 0 110 8 4 4 0 010-8zm0 10c4.4 0 8 2.2 8 5v2H4v-2c0-2.8 3.6-5 8-5z"
        fill="currentColor"
      />
    ),
  },
];

const gallery = [
  {
    title: "Теплица внутри",
    image: "/gallery-1.jpeg",
  },
  {
    title: "Ряды клубники",
    image: "/gallery-2.jpeg",
  },
  {
    title: "Сбор урожая",
    image: "/gallery-3.jpeg",
  },
  {
    title: "Готовая продукция",
    image: "/gallery-4.jpeg",
  },
];

const navItems = [
  { title: "О компании", href: "#about" },
  { title: "Теплица", href: "#greenhouse" },
  { title: "Продукция", href: "#products" },
  { title: "Преимущества", href: "#advantages" },
  { title: "Контакты", href: "#contacts" },
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 inline-flex rounded-full border border-rose-200/70 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-rose-700 backdrop-blur">
        {eyebrow}
      </p>
      <h2 className="font-['Playfair_Display'] text-3xl font-bold leading-tight text-zinc-900 md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-zinc-600 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function SocialIcon({ type }) {
  if (type === "telegram") {
    return (
      <path
        d="M21.4 4.6L2.8 11.7c-1.3.5-1.3 1.2-.2 1.6l4.8 1.5 1.9 5.8c.2.7.1 1 .9 1 .6 0 .9-.3 1.2-.6l2.3-2.2 4.8 3.6c.9.5 1.5.2 1.7-.8l3.2-15c.3-1.2-.5-1.8-1.5-1.4z"
        fill="currentColor"
      />
    );
  }
  if (type === "instagram") {
    return (
      <>
        <rect x="4" y="4" width="16" height="16" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="17.2" cy="6.8" r="1" fill="currentColor" />
      </>
    );
  }
  return (
    <path
      d="M14 8h3V4h-3c-3.3 0-6 2.7-6 6v2H5v4h3v6h4v-6h3l1-4h-4v-2c0-1.1.9-2 2-2z"
      fill="currentColor"
    />
  );
}

export default function Landing365FreshProduce() {
  return (
    <div className="font-['Manrope'] bg-stone-50 text-zinc-800">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700&display=swap');
        @keyframes floatSlow {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes reveal {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="text-xl font-extrabold tracking-tight text-white drop-shadow">
            365 Fresh Produce
          </a>
          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-white/90 transition hover:text-white"
              >
                {item.title}
              </a>
            ))}
          </nav>
          <a
            href="#contacts"
            className="rounded-full border border-white/50 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white hover:text-rose-700"
          >
            Запрос
          </a>
        </div>
      </header>

      <section className="relative isolate flex min-h-[96vh] items-center overflow-hidden">
        <img
          src="/hero-strawberry.jpg"
          alt="Тепличный комплекс с клубникой"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-950/75 via-rose-900/65 to-emerald-900/55" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.23),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(187,247,208,0.20),transparent_35%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 pt-32 md:px-8 md:pt-40">
          <div className="max-w-3xl text-white" style={{ animation: "reveal 900ms ease-out both" }}>
            <p className="mb-5 inline-flex rounded-full border border-white/40 bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] backdrop-blur">
              Современное агропроизводство
            </p>
            <h1 className="font-['Playfair_Display'] text-5xl font-bold leading-[1.05] md:text-7xl">
              365 Fresh Produce
            </h1>
            <p className="mt-5 text-xl font-medium text-rose-100 md:text-2xl">
              Современная теплица по выращиванию свежей клубники
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
              Мы выращиваем качественную свежую клубнику в современных тепличных условиях с контролем
              качества, стабильным объемом и профессиональным подходом.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#about"
                className="rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(225,29,72,0.75)] transition hover:-translate-y-0.5 hover:bg-rose-500"
              >
                О компании
              </a>
              <a
                href="#contacts"
                className="rounded-full border border-white/50 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white hover:text-rose-700"
              >
                Связаться с нами
              </a>
            </div>
          </div>

          <div
            className="mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4"
            style={{ animation: "reveal 1000ms ease-out both", animationDelay: "0.2s" }}
          >
            {stats.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/30 bg-white/15 p-4 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/25"
              >
                <p className="text-lg font-extrabold text-white md:text-xl">{item.value}</p>
                <p className="mt-1 text-xs leading-relaxed text-rose-50/90 md:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="h-20 bg-[linear-gradient(180deg,rgba(9,9,11,0)_0%,rgba(250,250,249,1)_100%)]" />

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="О компании"
          title="Надежный партнер в поставках свежей клубники"
          subtitle="365 Fresh Produce развивает промышленное выращивание клубники в закрытом грунте, сочетая аграрную экспертизу и технологичную инфраструктуру. Мы работаем на долгосрочный результат: стабильный объем, предсказуемое качество и прозрачные процессы для партнеров."
        />

        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <article
              key={item.label}
              className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-[0_20px_45px_-35px_rgba(15,23,42,0.65)] transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:shadow-[0_24px_50px_-30px_rgba(190,24,93,0.35)]"
            >
              <p className="text-3xl font-extrabold text-rose-600 transition group-hover:text-rose-700">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="greenhouse" className="relative overflow-hidden bg-white py-16 md:py-24">
        <div className="absolute -right-28 top-8 h-80 w-80 rounded-full bg-emerald-100 blur-3xl" />
        <div className="absolute -left-24 bottom-8 h-80 w-80 rounded-full bg-rose-100 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:px-8">
          <div>
            <SectionHeading
              eyebrow="О теплице"
              title="Современный агро-комплекс с технологичным управлением"
              subtitle="Мы используем контролируемую среду выращивания, чтобы обеспечивать одинаково высокое качество ягоды в течение всего производственного цикла."
            />
            <div className="space-y-4">
              {greenhouseTech.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition hover:border-emerald-300 hover:bg-white"
                  style={{ animation: "reveal 800ms ease-out both", animationDelay: `${0.15 * index}s` }}
                >
                  <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl bg-rose-500/20"
              style={{ animation: "floatSlow 6s ease-in-out infinite" }}
            />
            <img
              src="/greenhouse-real.jpg"
              alt="Современная теплица"
              className="relative z-10 h-[520px] w-full rounded-[2rem] object-cover shadow-[0_35px_70px_-40px_rgba(15,23,42,0.55)]"
            />
            <div className="absolute -bottom-5 left-6 z-20 max-w-xs rounded-2xl border border-white/50 bg-white/90 p-4 shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Smart Greenhouse
              </p>
              <p className="mt-1 text-sm text-zinc-700">
                Единая система мониторинга параметров микроклимата и питания растений в режиме реального времени.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Наша продукция"
          title="Сорт клубники в текущем производстве"
          subtitle="Сейчас мы выращиваем один ключевой сорт - Альбион. Он обеспечивает стабильное качество ягоды и предсказуемый объем поставок."
        />
        <div className="mx-auto grid max-w-md gap-6">
          {products.map((item) => (
            <article
              key={item.name}
              className="group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_25px_45px_-35px_rgba(15,23,42,0.6)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_55px_-30px_rgba(190,24,93,0.28)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{item.name}</h3>
              </div>
              <div className="space-y-3 p-5">
                <p className="text-sm leading-relaxed text-zinc-600">{item.description}</p>
                <div className="rounded-xl bg-rose-50 p-3 text-sm text-rose-900">
                  <span className="font-semibold">Вкус:</span> {item.taste}
                </div>
                <p className="text-xs font-semibold uppercase tracking-wide text-emerald-700">{item.season}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="advantages" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Преимущества"
            title="Почему партнеры выбирают 365 Fresh Produce"
            subtitle="Мы объединяем сельскохозяйственную экспертизу и производственную дисциплину, чтобы гарантировать надежный результат для бизнеса."
          />

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {advantages.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl border border-stone-200 bg-stone-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-rose-200 hover:bg-white"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rose-600 to-rose-500 text-white shadow-lg shadow-rose-200">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
                    {item.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-zinc-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Локация"
          title="Где находится теплица"
          subtitle="Производство расположено по адресу: Армавирский регион, деревня Воскеат, 44/2, теплица. Это обеспечивает удобную логистику и стабильные поставки."
        />
        <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
          <div className="relative min-h-[300px] overflow-hidden rounded-[2rem] border border-stone-200 bg-gradient-to-br from-emerald-50 via-white to-rose-50 p-8 shadow-[0_30px_60px_-40px_rgba(15,23,42,0.45)]">
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-rose-200/70 blur-2xl" />
            <div className="absolute -bottom-14 -left-14 h-40 w-40 rounded-full bg-emerald-200/70 blur-2xl" />
            <div className="relative z-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Карта / регион</p>
              <h3 className="mt-2 text-2xl font-bold text-zinc-900">Армавирский регион, деревня Воскеат</h3>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-zinc-600">
                Тепличный комплекс расположен в аграрной зоне с благоприятной транспортной доступностью.
                Блок может быть заменен на интерактивную карту (Google Maps / Yandex Maps) при интеграции в
                рабочий проект.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100/80 px-4 py-2 text-sm font-semibold text-emerald-800">
                <span className="h-2 w-2 rounded-full bg-emerald-600" />
                Геолокация подтверждена для партнерских поставок
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_25px_55px_-38px_rgba(15,23,42,0.55)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-zinc-500">Адрес производства</p>
            <p className="mt-4 text-lg font-bold text-zinc-900">
              365 Fresh Produce, Армавирский регион, деревня Воскеат, 44/2, теплица
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              При необходимости добавим точный юридический и фактический адрес, координаты и схему проезда для
              поставщиков и партнеров.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading
            eyebrow="Галерея"
            title="Галерея"
            subtitle="Визуальные материалы о теплице, выращивании, сборе и готовой продукции."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:grid-rows-2">
            {gallery.map((item, idx) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl ${
                  idx === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full min-h-[220px] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
                {idx === 0 && (
                  <p className="absolute bottom-4 left-4 text-sm font-semibold text-white md:text-base">{item.title}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="rounded-[2rem] border border-stone-200 bg-gradient-to-br from-rose-50 via-white to-emerald-50 p-8 shadow-[0_28px_60px_-40px_rgba(15,23,42,0.45)] md:p-12">
          <SectionHeading
            eyebrow="Почему выбирают нас"
            title="Партнерство, построенное на доверии и предсказуемом результате"
            subtitle="Мы ориентированы на B2B-клиентов, которым важны прозрачность процессов, регулярность поставок и уверенность в качестве каждой партии."
          />
          <div className="grid gap-3 md:grid-cols-2">
            {[
              "Надежная контрактная модель и соблюдение графиков поставок.",
              "Единые стандарты качества для каждой партии клубники.",
              "Прозрачные процессы выращивания, сортировки и упаковки.",
              "Стабильные объемы производства под потребности сети.",
              "Современный агротехнологичный подход к управлению урожаем.",
              "Гибкость в коммуникации и персональный подход к партнерам.",
            ].map((line) => (
              <div key={line} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4">
                <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-emerald-600 text-xs font-bold text-white">
                  ✓
                </span>
                <p className="text-sm leading-relaxed text-zinc-700">{line}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-zinc-900 py-16 md:py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(244,63,94,0.35),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(16,185,129,0.35),transparent_35%)]" />
        <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-rose-200">Сотрудничество</p>
          <h3 className="mt-3 font-['Playfair_Display'] text-3xl font-bold text-white md:text-5xl">
            Готовы обсудить поставки клубники для вашего бизнеса
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-200 md:text-base">
            Оставьте заявку и получите предложение с учетом объемов, сезона, требований к калибру и формату
            упаковки.
          </p>
          <a
            href="#contacts"
            className="mt-8 inline-flex rounded-full bg-rose-600 px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_-10px_rgba(244,63,94,0.8)] transition hover:-translate-y-0.5 hover:bg-rose-500"
          >
            Перейти к форме запроса
          </a>
        </div>
      </section>

      <section id="contacts" className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <SectionHeading
          eyebrow="Контакты"
          title="Свяжитесь с нами"
          subtitle="Открыты к сотрудничеству с торговыми сетями, дистрибьюторами и перерабатывающими компаниями."
        />
        <div className="grid gap-6 md:grid-cols-[1fr_1.15fr]">
          <aside className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_25px_55px_-38px_rgba(15,23,42,0.55)]">
            <h3 className="text-2xl font-bold text-zinc-900">365 Fresh Produce</h3>
            <p className="mt-4 text-sm text-zinc-600">Свежесть. Качество. Доверие.</p>
            <div className="mt-8 space-y-4 text-sm">
              <p>
                <span className="font-semibold text-zinc-900">Телефон:</span> +37496401101
              </p>
              <p>
                <span className="font-semibold text-zinc-900">Email:</span> 365freshproduct@gmail.com
              </p>
              <p>
                <span className="font-semibold text-zinc-900">Адрес:</span> Армавирский регион, деревня Воскеат, 44/2, теплица
              </p>
            </div>
            <a
              href="mailto:365freshproduct@gmail.com"
              className="mt-8 inline-flex rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(5,150,105,0.8)] transition hover:-translate-y-0.5 hover:bg-emerald-500"
            >
              Отправить запрос
            </a>
          </aside>

          <form className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-[0_25px_55px_-38px_rgba(15,23,42,0.55)]">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm font-medium text-zinc-700">
                Имя
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-200"
                />
              </label>
              <label className="text-sm font-medium text-zinc-700">
                Телефон
                <input
                  type="tel"
                  placeholder="+37496401101"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-200"
                />
              </label>
              <label className="text-sm font-medium text-zinc-700 md:col-span-2">
                Email
                <input
                  type="email"
                  placeholder="example@company.com"
                  className="mt-2 w-full rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-200"
                />
              </label>
              <label className="text-sm font-medium text-zinc-700 md:col-span-2">
                Сообщение
                <textarea
                  rows={5}
                  placeholder="Опишите запрос: объем, формат поставки, периодичность."
                  className="mt-2 w-full resize-none rounded-xl border border-stone-300 bg-stone-50 px-4 py-3 text-sm outline-none transition focus:border-rose-400 focus:bg-white focus:ring-2 focus:ring-rose-200"
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-6 rounded-full bg-rose-600 px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-12px_rgba(225,29,72,0.8)] transition hover:-translate-y-0.5 hover:bg-rose-500"
            >
              Отправить запрос
            </button>
          </form>
        </div>
      </section>

      <footer className="border-t border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-8 text-center md:flex-row md:px-8 md:text-left">
          <div>
            <p className="text-lg font-extrabold text-zinc-900">365 Fresh Produce</p>
            <p className="mt-1 text-sm text-zinc-600">Свежесть. Качество. Доверие.</p>
          </div>
          <div className="text-sm text-zinc-600">
            <p>+37496401101</p>
            <p>365freshproduct@gmail.com</p>
          </div>
          <div className="flex items-center gap-3">
            {["telegram", "instagram", "facebook"].map((social) => (
              <a
                key={social}
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-stone-300 text-zinc-600 transition hover:border-rose-300 hover:text-rose-600"
                aria-label={social}
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5">
                  <SocialIcon type={social} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
