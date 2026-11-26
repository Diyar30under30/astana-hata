# Хата на четверых · Астана

Поиск квартиры на месяц для 4 человек до 300 000 ₸ рядом с MNU (Коргалжинское ш., 8) и Coventry University Kazakhstan (Коргалжинское ш., 13А).

**Сайт:** https://site-tau-three-89.vercel.app

- `PROMPT.md` — промт для AI-поиска на krisha.kz и olx.kz
- `data/*.json` — объявления по районам (Нура, Есиль/EXPO, центр левого берега) + координаты вузов
- `merge.mjs` — собирает `data/` в `site/listings.json`
- `site/` — статичный сайт (Leaflet + OpenStreetMap)

Обновить данные и задеплоить:

```
node merge.mjs
cd site && vercel deploy --prod
```

> Объявления собраны из поисковой выдачи (ноябрь 2026) и не проверены вручную; координаты примерные.
