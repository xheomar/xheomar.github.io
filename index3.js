var data = [
 { name: 'Сборные. Чемпионат мира', source: 'Марафон', type: 'Чемпионаты', gp: 532, avg: 2.925, over2: 53.95, over3: 32.52, over4: 17.48, over5: 9.21, aos: 19.92, threes: 0.00, twoes: 4.70, zeroes: 6.39, draw25: 4.70, bts: 36.47, bnts25: 25.00},
 { name: 'Швеция. Суперэттан', source: 'Марафон', type: 'Чемпионаты', gp: 176, avg: 2.943, over2: 60.23, over3: 30.11, over4: 15.91, over5: 7.39, aos: 13.64, threes: 0.57, twoes: 3.98, zeroes: 5.68, draw25: 4.55, bts: 57.95, bnts25: 15.34},
 { name: 'Сингапур. С-Лига', source: 'Марафон', type: 'Чемпионаты', gp: 69, avg: 2.855, over2: 47.83, over3: 28.99, over4: 15.94, over5: 8.70, aos: 17.39, threes: 0.00, twoes: 5.80, zeroes: 5.80, draw25: 5.80, bts: 40.58, bnts25: 13.04},
 { name: 'Сборные. Кубок Америки', source: 'Марафон', type: 'Кубки', gp: 56, avg: 2.857, over2: 57.14, over3: 33.93, over4: 17.86, over5: 8.93, aos: 23.21, threes: 0.00, twoes: 3.57, zeroes: 10.71, draw25: 3.57, bts: 39.29, bnts25: 21.43},
 { name: 'Англия. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 58, avg: 2.621, over2: 43.10, over3: 27.59, over4: 20.69, over5: 6.90, aos: 13.79, threes: 5.17, twoes: 0.00, zeroes: 6.90, draw25: 5.17, bts: 50.00, bnts25: 5.17},
 { name: 'Женщины. Норвегия. Топпсериен', source: 'Марафон', type: 'Чемпионаты', gp: 96, avg: 3.208, over2: 54.17, over3: 39.58, over4: 25.00, over5: 14.58, aos: 22.92, threes: 1.04, twoes: 6.25, zeroes: 4.17, draw25: 7.29, bts: 50.00, bnts25: 12.50},
 { name: 'Женщины. Швеция. Аллсвенскан', source: 'Марафон', type: 'Чемпионаты', gp: 84, avg: 2.988, over2: 57.14, over3: 34.52, over4: 22.62, over5: 9.52, aos: 13.10, threes: 4.76, twoes: 5.95, zeroes: 4.76, draw25: 10.71, bts: 50.00, bnts25: 13.10},
 { name: 'Республика Корея. K-лига. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 162, avg: 2.716, over2: 57.41, over3: 27.78, over4: 11.73, over5: 3.09, aos: 6.79, threes: 1.23, twoes: 6.79, zeroes: 6.79, draw25: 8.02, bts: 60.49, bnts25: 9.26},
 { name: 'Бразилия. Лига Минейро. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 69, avg: 2.435, over2: 44.93, over3: 14.49, over4: 4.35, over5: 0.00, aos: 7.25, threes: 0.00, twoes: 2.90, zeroes: 4.35, draw25: 2.90, bts: 55.07, bnts25: 7.25},
 { name: 'Ирландия. Кубок', source: 'Марафон', type: 'Кубки', gp: 21, avg: 3.333, over2: 66.67, over3: 42.86, over4: 23.81, over5: 19.05, aos: 14.29, threes: 9.52, twoes: 4.76, zeroes: 0.00, draw25: 14.29, bts: 38.10, bnts25: 28.57},
 { name: 'Бельгия. Кубок', source: 'Марафон', type: 'Кубки', gp: 35, avg: 3.086, over2: 57.14, over3: 42.86, over4: 20.00, over5: 5.71, aos: 11.43, threes: 2.86, twoes: 11.43, zeroes: 0.00, draw25: 14.29, bts: 54.29, bnts25: 11.43},
 { name: 'Бразилия. Лига Гаушу. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 81, avg: 2.123, over2: 30.86, over3: 13.58, over4: 4.94, over5: 3.70, aos: 6.17, threes: 1.23, twoes: 2.47, zeroes: 7.41, draw25: 3.70, bts: 48.15, bnts25: 4.94},
 { name: 'Норвегия. Кубок', source: 'Марафон', type: 'Кубки', gp: 123, avg: 3.642, over2: 65.04, over3: 50.41, over4: 26.83, over5: 17.89, aos: 31.71, threes: 1.63, twoes: 4.88, zeroes: 2.44, draw25: 6.50, bts: 52.85, bnts25: 18.70},
 { name: 'США. Оупен Кап', source: 'Марафон', type: 'Чемпионаты', gp: 30, avg: 2.933, over2: 60.00, over3: 43.33, over4: 20.00, over5: 0.00, aos: 10.00, threes: 0.00, twoes: 6.67, zeroes: 6.67, draw25: 6.67, bts: 60.00, bnts25: 6.67},
 { name: 'Норвегия. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 176, avg: 2.955, over2: 56.82, over3: 35.23, over4: 17.05, over5: 6.25, aos: 11.93, threes: 1.70, twoes: 6.82, zeroes: 5.11, draw25: 8.52, bts: 60.23, bnts25: 12.50},
 { name: 'Финляндия. Кубок', source: 'Марафон', type: 'Кубки', gp: 159, avg: 3.862, over2: 71.70, over3: 50.94, over4: 34.59, over5: 20.13, aos: 35.22, threes: 1.26, twoes: 3.77, zeroes: 2.52, draw25: 5.03, bts: 45.28, bnts25: 30.82},
 { name: 'Украина. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 90, avg: 2.356, over2: 42.22, over3: 23.33, over4: 10.00, over5: 2.22, aos: 4.44, threes: 0.00, twoes: 3.33, zeroes: 6.67, draw25: 3.33, bts: 40.00, bnts25: 7.78},
 { name: 'Клубы. Международные. Юношеская лига УЕФА', source: 'Марафон', type: 'Чемпионаты', gp: 255, avg: 3.667, over2: 67.84, over3: 46.67, over4: 32.55, over5: 14.90, aos: 25.88, threes: 1.57, twoes: 2.35, zeroes: 3.53, draw25: 3.92, bts: 59.61, bnts25: 16.47},
 { name: 'Турция. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 27, avg: 3.148, over2: 70.37, over3: 44.44, over4: 11.11, over5: 0.00, aos: 3.70, threes: 0.00, twoes: 18.52, zeroes: 0.00, draw25: 18.52, bts: 74.07, bnts25: 7.41},
 { name: 'Португалия. Примейра-лига', source: 'Марафон', type: 'Чемпионаты', gp: 36, avg: 2.389, over2: 44.44, over3: 19.44, over4: 11.11, over5: 0.00, aos: 8.33, threes: 0.00, twoes: 2.78, zeroes: 5.56, draw25: 2.78, bts: 41.67, bnts25: 16.67},
 { name: 'Греция. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 16, avg: 1.875, over2: 25.00, over3: 18.75, over4: 6.25, over5: 0.00, aos: 6.25, threes: 0.00, twoes: 6.25, zeroes: 25.00, draw25: 6.25, bts: 43.75, bnts25: 0.00},
 { name: 'Чехия. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 2.250, over2: 40.00, over3: 20.00, over4: 5.00, over5: 5.00, aos: 7.50, threes: 2.50, twoes: 2.50, zeroes: 12.50, draw25: 5.00, bts: 40.00, bnts25: 12.50},
 { name: 'Аргентина. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 13, avg: 3.308, over2: 61.54, over3: 23.08, over4: 15.38, over5: 15.38, aos: 15.38, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 7.69, bts: 69.23, bnts25: 15.38},
 { name: 'Австрия. Бундеслига', source: 'Марафон', type: 'Чемпионаты', gp: 30, avg: 2.933, over2: 56.67, over3: 40.00, over4: 23.33, over5: 6.67, aos: 13.33, threes: 0.00, twoes: 6.67, zeroes: 6.67, draw25: 6.67, bts: 53.33, bnts25: 6.67},
 { name: 'Швейцария. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 30, avg: 2.767, over2: 43.33, over3: 33.33, over4: 16.67, over5: 6.67, aos: 13.33, threes: 3.33, twoes: 6.67, zeroes: 6.67, draw25: 10.00, bts: 46.67, bnts25: 13.33},
 { name: 'Дания. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 49, avg: 2.612, over2: 46.94, over3: 22.45, over4: 18.37, over5: 4.08, aos: 14.29, threes: 0.00, twoes: 2.04, zeroes: 14.29, draw25: 2.04, bts: 48.98, bnts25: 10.20},
 { name: 'Сборные. Кубок африканских наций до 17 лет', source: 'Марафон', type: 'Кубки', gp: 28, avg: 2.750, over2: 53.57, over3: 39.29, over4: 21.43, over5: 14.29, aos: 28.57, threes: 0.00, twoes: 7.14, zeroes: 21.43, draw25: 7.14, bts: 46.43, bnts25: 14.29},
 { name: 'Сборные. Чемпионат АФК до 16 лет', source: 'Марафон', type: 'Чемпионаты', gp: 55, avg: 3.636, over2: 61.82, over3: 47.27, over4: 36.36, over5: 20.00, aos: 21.82, threes: 3.64, twoes: 0.00, zeroes: 5.45, draw25: 3.64, bts: 56.36, bnts25: 23.64},
 { name: 'Шотландия. Лига до 20 лет', source: 'Марафон', type: 'Чемпионаты', gp: 18, avg: 4.111, over2: 83.33, over3: 66.67, over4: 44.44, over5: 27.78, aos: 38.89, threes: 5.56, twoes: 11.11, zeroes: 5.56, draw25: 16.67, bts: 83.33, bnts25: 5.56},
 { name: 'Сборные. Кубок Азии', source: 'Марафон', type: 'Кубки', gp: 92, avg: 3.348, over2: 59.78, over3: 38.04, over4: 23.91, over5: 14.13, aos: 28.26, threes: 0.00, twoes: 5.43, zeroes: 7.61, draw25: 5.43, bts: 48.91, bnts25: 20.65},
 { name: 'Женщины. Летняя Универсиада', source: 'Марафон', type: 'Чемпионаты', gp: 46, avg: 3.696, over2: 54.35, over3: 36.96, over4: 19.57, over5: 13.04, aos: 19.57, threes: 0.00, twoes: 4.35, zeroes: 10.87, draw25: 4.35, bts: 36.96, bnts25: 23.91},
 { name: 'Сборные. Летняя Универсиада', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 2.857, over2: 57.14, over3: 25.00, over4: 19.64, over5: 5.36, aos: 16.07, threes: 0.00, twoes: 3.57, zeroes: 8.93, draw25: 3.57, bts: 33.93, bnts25: 26.79},
 { name: 'Австрия. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 2.925, over2: 62.50, over3: 45.00, over4: 15.00, over5: 2.50, aos: 17.50, threes: 0.00, twoes: 5.00, zeroes: 7.50, draw25: 5.00, bts: 52.50, bnts25: 20.00},
 { name: 'Украина. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 41, avg: 2.122, over2: 43.90, over3: 19.51, over4: 7.32, over5: 0.00, aos: 7.32, threes: 0.00, twoes: 2.44, zeroes: 17.07, draw25: 2.44, bts: 36.59, bnts25: 14.63},
 { name: 'Англия. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 30, avg: 2.433, over2: 36.67, over3: 23.33, over4: 13.33, over5: 6.67, aos: 13.33, threes: 3.33, twoes: 0.00, zeroes: 10.00, draw25: 3.33, bts: 30.00, bnts25: 16.67},
 { name: 'Швейцария. Челлендж-лига', source: 'Марафон', type: 'Чемпионаты', gp: 30, avg: 2.867, over2: 53.33, over3: 36.67, over4: 10.00, over5: 3.33, aos: 6.67, threes: 0.00, twoes: 10.00, zeroes: 0.00, draw25: 10.00, bts: 53.33, bnts25: 10.00},
 { name: 'Англия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 59, avg: 3.356, over2: 64.41, over3: 44.07, over4: 33.90, over5: 6.78, aos: 22.03, threes: 1.69, twoes: 3.39, zeroes: 1.69, draw25: 5.08, bts: 66.10, bnts25: 5.08},
 { name: 'Шотландия. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 24, avg: 3.000, over2: 62.50, over3: 33.33, over4: 16.67, over5: 4.17, aos: 12.50, threes: 0.00, twoes: 4.17, zeroes: 4.17, draw25: 4.17, bts: 66.67, bnts25: 4.17},
 { name: 'Германия. Бундеслига', source: 'Марафон', type: 'Чемпионаты', gp: 18, avg: 2.167, over2: 33.33, over3: 27.78, over4: 5.56, over5: 0.00, aos: 5.56, threes: 0.00, twoes: 11.11, zeroes: 5.56, draw25: 11.11, bts: 27.78, bnts25: 5.56},
 { name: 'Италия. Серия А', source: 'Марафон', type: 'Чемпионаты', gp: 20, avg: 2.700, over2: 70.00, over3: 25.00, over4: 10.00, over5: 5.00, aos: 5.00, threes: 0.00, twoes: 0.00, zeroes: 15.00, draw25: 0.00, bts: 55.00, bnts25: 20.00},
 { name: 'Сербия. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 54, avg: 2.500, over2: 50.00, over3: 25.93, over4: 11.11, over5: 1.85, aos: 14.81, threes: 0.00, twoes: 3.70, zeroes: 9.26, draw25: 3.70, bts: 40.74, bnts25: 14.81},
 { name: 'Испания. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 20, avg: 2.300, over2: 40.00, over3: 25.00, over4: 10.00, over5: 5.00, aos: 5.00, threes: 0.00, twoes: 15.00, zeroes: 5.00, draw25: 15.00, bts: 35.00, bnts25: 10.00},
 { name: 'Италия. Кубок', source: 'Марафон', type: 'Кубки', gp: 54, avg: 3.000, over2: 64.81, over3: 35.19, over4: 14.81, over5: 5.56, aos: 11.11, threes: 1.85, twoes: 1.85, zeroes: 3.70, draw25: 3.70, bts: 59.26, bnts25: 14.81},
 { name: 'Малайзия. ФА Кубок', source: 'Марафон', type: 'Кубки', gp: 43, avg: 3.070, over2: 51.16, over3: 34.88, over4: 18.60, over5: 16.28, aos: 23.26, threes: 0.00, twoes: 4.65, zeroes: 6.98, draw25: 4.65, bts: 48.84, bnts25: 13.95},
 { name: 'Нидерланды. Эредивизи', source: 'Марафон', type: 'Чемпионаты', gp: 27, avg: 3.333, over2: 70.37, over3: 37.04, over4: 22.22, over5: 7.41, aos: 14.81, threes: 3.70, twoes: 7.41, zeroes: 0.00, draw25: 11.11, bts: 66.67, bnts25: 11.11},
 { name: 'Сборные. Чемпионат AФК до 23 лет', source: 'Марафон', type: 'Чемпионаты', gp: 114, avg: 3.596, over2: 56.14, over3: 40.35, over4: 26.32, over5: 21.05, aos: 28.07, threes: 0.00, twoes: 1.75, zeroes: 7.02, draw25: 1.75, bts: 35.09, bnts25: 28.07},
 { name: 'Бельгия. 1-й дивизион A', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 3.075, over2: 57.50, over3: 37.50, over4: 25.00, over5: 10.00, aos: 17.50, threes: 2.50, twoes: 2.50, zeroes: 5.00, draw25: 5.00, bts: 50.00, bnts25: 15.00},
 { name: 'Мексика. Кубок', source: 'Марафон', type: 'Кубки', gp: 90, avg: 2.244, over2: 37.78, over3: 13.33, over4: 6.67, over5: 2.22, aos: 6.67, threes: 0.00, twoes: 2.22, zeroes: 4.44, draw25: 2.22, bts: 44.44, bnts25: 8.89},
 { name: 'Израиль. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 50, avg: 2.720, over2: 56.00, over3: 32.00, over4: 16.00, over5: 4.00, aos: 16.00, threes: 0.00, twoes: 4.00, zeroes: 8.00, draw25: 4.00, bts: 48.00, bnts25: 16.00},
 { name: 'Республика Корея. Kубок', source: 'Марафон', type: 'Чемпионаты', gp: 28, avg: 2.179, over2: 42.86, over3: 21.43, over4: 0.00, over5: 0.00, aos: 3.57, threes: 0.00, twoes: 3.57, zeroes: 10.71, draw25: 3.57, bts: 35.71, bnts25: 10.71},
 { name: 'Сборные. Чемпионат Южной Америки до 20 лет', source: 'Марафон', type: 'Чемпионаты', gp: 70, avg: 2.600, over2: 51.43, over3: 20.00, over4: 14.29, over5: 11.43, aos: 8.57, threes: 2.86, twoes: 5.71, zeroes: 14.29, draw25: 8.57, bts: 48.57, bnts25: 17.14},
 { name: 'Бразилия. Кубок', source: 'Марафон', type: 'Кубки', gp: 145, avg: 2.848, over2: 46.21, over3: 29.66, over4: 20.00, over5: 12.41, aos: 15.86, threes: 1.38, twoes: 2.07, zeroes: 8.28, draw25: 4.83, bts: 51.03, bnts25: 8.28},
 { name: 'Бельгия. 1-й дивизион B', source: 'Марафон', type: 'Чемпионаты', gp: 16, avg: 3.250, over2: 68.75, over3: 50.00, over4: 6.25, over5: 6.25, aos: 12.50, threes: 0.00, twoes: 25.00, zeroes: 6.25, draw25: 25.00, bts: 56.25, bnts25: 18.75},
 { name: 'Индонезия. Лига 1', source: 'Марафон', type: 'Чемпионаты', gp: 198, avg: 2.631, over2: 48.48, over3: 28.28, over4: 13.64, over5: 5.05, aos: 8.59, threes: 0.51, twoes: 6.06, zeroes: 6.57, draw25: 6.57, bts: 51.52, bnts25: 7.58},
 { name: 'Малайзия. Кубок', source: 'Марафон', type: 'Кубки', gp: 80, avg: 3.250, over2: 62.50, over3: 42.50, over4: 30.00, over5: 7.50, aos: 20.00, threes: 2.50, twoes: 2.50, zeroes: 10.00, draw25: 5.00, bts: 57.50, bnts25: 15.00},
 { name: 'Уэльс. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 12, avg: 3.250, over2: 66.67, over3: 33.33, over4: 16.67, over5: 16.67, aos: 16.67, threes: 0.00, twoes: 16.67, zeroes: 8.33, draw25: 16.67, bts: 58.33, bnts25: 8.33},
 { name: 'Чили. Кубок', source: 'Марафон', type: 'Кубки', gp: 72, avg: 3.583, over2: 62.50, over3: 44.44, over4: 29.17, over5: 15.28, aos: 30.56, threes: 0.00, twoes: 2.78, zeroes: 2.78, draw25: 2.78, bts: 55.56, bnts25: 13.89},
 { name: 'Сборные. Игры Юго-Восточной Азии', source: 'Марафон', type: 'Чемпионаты', gp: 54, avg: 2.648, over2: 53.70, over3: 27.78, over4: 7.41, over5: 3.70, aos: 14.81, threes: 0.00, twoes: 0.00, zeroes: 3.70, draw25: 0.00, bts: 31.48, bnts25: 25.93},
 { name: 'Германия. 2-я бундеслига', source: 'Марафон', type: 'Чемпионаты', gp: 36, avg: 2.750, over2: 52.78, over3: 27.78, over4: 8.33, over5: 5.56, aos: 8.33, threes: 0.00, twoes: 11.11, zeroes: 0.00, draw25: 11.11, bts: 58.33, bnts25: 8.33},
 { name: 'Россия. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 64, avg: 2.188, over2: 34.38, over3: 18.75, over4: 9.38, over5: 4.69, aos: 7.81, threes: 0.00, twoes: 3.13, zeroes: 10.94, draw25: 3.13, bts: 42.19, bnts25: 4.69},
 { name: 'Финляндия. Вейккауслига', source: 'Марафон', type: 'Чемпионаты', gp: 147, avg: 2.646, over2: 46.26, over3: 26.53, over4: 14.97, over5: 9.52, aos: 15.65, threes: 1.36, twoes: 4.08, zeroes: 8.84, draw25: 5.44, bts: 49.66, bnts25: 12.24},
 { name: 'Колумбия. Кубок', source: 'Марафон', type: 'Кубки', gp: 196, avg: 2.648, over2: 50.51, over3: 29.59, over4: 13.78, over5: 6.63, aos: 9.18, threes: 2.04, twoes: 6.63, zeroes: 7.14, draw25: 8.67, bts: 51.53, bnts25: 9.18},
 { name: 'Алжир. Кубок', source: 'Марафон', type: 'Кубки', gp: 31, avg: 2.258, over2: 38.71, over3: 25.81, over4: 6.45, over5: 3.23, aos: 16.13, threes: 0.00, twoes: 9.68, zeroes: 19.35, draw25: 9.68, bts: 41.94, bnts25: 12.90},
 { name: 'Сборные. Олимпийские игры. Мужчины', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 3.286, over2: 48.21, over3: 41.07, over4: 25.00, over5: 19.64, aos: 21.43, threes: 3.57, twoes: 10.71, zeroes: 10.71, draw25: 14.29, bts: 46.43, bnts25: 14.29},
 { name: 'Польша. Экстракласа', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 2.464, over2: 42.86, over3: 21.43, over4: 12.50, over5: 5.36, aos: 5.36, threes: 1.79, twoes: 0.00, zeroes: 7.14, draw25: 1.79, bts: 53.57, bnts25: 8.93},
 { name: 'Китай. Кубок', source: 'Марафон', type: 'Кубки', gp: 56, avg: 3.161, over2: 51.79, over3: 32.14, over4: 23.21, over5: 14.29, aos: 23.21, threes: 0.00, twoes: 1.79, zeroes: 5.36, draw25: 1.79, bts: 51.79, bnts25: 7.14},
 { name: 'Клубы. Международные. Кубок АФК', source: 'Марафон', type: 'Кубки', gp: 183, avg: 3.257, over2: 57.38, over3: 39.34, over4: 24.59, over5: 11.48, aos: 22.95, threes: 0.00, twoes: 1.64, zeroes: 3.28, draw25: 2.19, bts: 55.74, bnts25: 16.39},
 { name: 'Женщины. Международный турнир. Кубок Алгарве', source: 'Марафон', type: 'Кубки', gp: 40, avg: 2.300, over2: 37.50, over3: 17.50, over4: 17.50, over5: 10.00, aos: 10.00, threes: 0.00, twoes: 0.00, zeroes: 15.00, draw25: 0.00, bts: 35.00, bnts25: 10.00},
 { name: 'Азербайджан. Кубок', source: 'Марафон', type: 'Кубки', gp: 27, avg: 3.630, over2: 55.56, over3: 44.44, over4: 29.63, over5: 25.93, aos: 33.33, threes: 0.00, twoes: 3.70, zeroes: 7.41, draw25: 3.70, bts: 40.74, bnts25: 14.81},
 { name: 'Малайзия. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 114, avg: 3.132, over2: 54.39, over3: 37.72, over4: 22.81, over5: 12.28, aos: 15.79, threes: 0.88, twoes: 5.26, zeroes: 3.51, draw25: 7.02, bts: 59.65, bnts25: 9.65},
 { name: 'Женщины. Австралия. W-Лига', source: 'Марафон', type: 'Чемпионаты', gp: 43, avg: 3.465, over2: 76.74, over3: 41.86, over4: 27.91, over5: 6.98, aos: 20.93, threes: 0.00, twoes: 4.65, zeroes: 0.00, draw25: 4.65, bts: 72.09, bnts25: 16.28},
 { name: 'Индия. I-лига', source: 'Марафон', type: 'Чемпионаты', gp: 90, avg: 2.500, over2: 47.78, over3: 22.22, over4: 10.00, over5: 4.44, aos: 10.00, threes: 0.00, twoes: 3.33, zeroes: 13.33, draw25: 4.44, bts: 47.78, bnts25: 12.22},
 { name: 'Иран. Про-лига', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 2.350, over2: 45.00, over3: 17.50, over4: 7.50, over5: 0.00, aos: 5.00, threes: 0.00, twoes: 7.50, zeroes: 7.50, draw25: 7.50, bts: 50.00, bnts25: 10.00},
 { name: 'Вьетнам. Кубок', source: 'Марафон', type: 'Кубки', gp: 20, avg: 3.900, over2: 70.00, over3: 50.00, over4: 35.00, over5: 20.00, aos: 30.00, threes: 0.00, twoes: 0.00, zeroes: 5.00, draw25: 0.00, bts: 70.00, bnts25: 15.00},
 { name: 'Венгрия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 203, avg: 3.493, over2: 65.52, over3: 43.84, over4: 26.60, over5: 14.29, aos: 27.59, threes: 0.49, twoes: 2.46, zeroes: 4.43, draw25: 2.96, bts: 60.59, bnts25: 13.30},
 { name: 'Шотландия. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 20, avg: 3.300, over2: 60.00, over3: 35.00, over4: 25.00, over5: 15.00, aos: 20.00, threes: 0.00, twoes: 5.00, zeroes: 0.00, draw25: 5.00, bts: 55.00, bnts25: 15.00},
 { name: 'Шотландия. 2-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 20, avg: 3.100, over2: 60.00, over3: 40.00, over4: 20.00, over5: 10.00, aos: 15.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 60.00, bnts25: 15.00},
 { name: 'Алжир. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 10, avg: 2.300, over2: 40.00, over3: 10.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 60.00, bnts25: 10.00},
 { name: 'Таиланд. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 15, avg: 2.867, over2: 66.67, over3: 40.00, over4: 6.67, over5: 6.67, aos: 26.67, threes: 0.00, twoes: 6.67, zeroes: 13.33, draw25: 6.67, bts: 40.00, bnts25: 33.33},
 { name: 'Таиланд. Кубок', source: 'Марафон', type: 'Кубки', gp: 16, avg: 3.063, over2: 62.50, over3: 31.25, over4: 18.75, over5: 12.50, aos: 25.00, threes: 0.00, twoes: 6.25, zeroes: 0.00, draw25: 6.25, bts: 43.75, bnts25: 25.00},
 { name: 'Япония. Джей-лига. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 216, avg: 2.597, over2: 45.83, over3: 23.61, over4: 12.50, over5: 6.02, aos: 7.41, threes: 1.39, twoes: 4.17, zeroes: 3.70, draw25: 5.56, bts: 48.61, bnts25: 10.19},
 { name: 'Россия. 2-й дивизион. Центр', source: 'Марафон', type: 'Чемпионаты', gp: 49, avg: 2.673, over2: 55.10, over3: 20.41, over4: 10.20, over5: 4.08, aos: 12.24, threes: 2.04, twoes: 4.08, zeroes: 4.08, draw25: 6.12, bts: 48.98, bnts25: 16.33},
 { name: 'Аргентина. Примера B Насьональ', source: 'Марафон', type: 'Чемпионаты', gp: 506, avg: 2.136, over2: 34.78, over3: 17.98, over4: 7.51, over5: 2.17, aos: 5.93, threes: 0.20, twoes: 4.15, zeroes: 13.44, draw25: 4.35, bts: 42.49, bnts25: 7.51},
 { name: 'Беларусь. Высшая лига', source: 'Марафон', type: 'Чемпионаты', gp: 159, avg: 2.170, over2: 39.62, over3: 20.75, over4: 5.66, over5: 1.26, aos: 8.81, threes: 0.00, twoes: 6.29, zeroes: 11.95, draw25: 6.29, bts: 33.96, bnts25: 15.09},
 { name: 'Сборные. Исламские игры солидарности', source: 'Марафон', type: 'Чемпионаты', gp: 28, avg: 2.393, over2: 39.29, over3: 21.43, over4: 14.29, over5: 7.14, aos: 7.14, threes: 0.00, twoes: 7.14, zeroes: 17.86, draw25: 7.14, bts: 46.43, bnts25: 7.14},
 { name: 'Беларусь. Кубок', source: 'Марафон', type: 'Кубки', gp: 7, avg: 2.286, over2: 42.86, over3: 14.29, over4: 14.29, over5: 14.29, aos: 14.29, threes: 0.00, twoes: 0.00, zeroes: 14.29, draw25: 0.00, bts: 42.86, bnts25: 14.29},
 { name: 'Сборные. Чемпионат Европы до 17 лет', source: 'Марафон', type: 'Чемпионаты', gp: 307, avg: 3.173, over2: 59.93, over3: 39.09, over4: 18.89, over5: 10.42, aos: 20.20, threes: 1.30, twoes: 4.23, zeroes: 3.58, draw25: 5.54, bts: 42.35, bnts25: 21.50},
 { name: 'Перу. 2-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 133, avg: 3.113, over2: 54.89, over3: 34.59, over4: 21.80, over5: 13.53, aos: 18.80, threes: 0.75, twoes: 3.76, zeroes: 5.26, draw25: 5.26, bts: 58.65, bnts25: 11.28},
 { name: 'ЮАР. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 15, avg: 2.067, over2: 40.00, over3: 20.00, over4: 13.33, over5: 6.67, aos: 6.67, threes: 6.67, twoes: 0.00, zeroes: 33.33, draw25: 6.67, bts: 46.67, bnts25: 0.00},
 { name: 'Израиль. Лига Леумит', source: 'Марафон', type: 'Чемпионаты', gp: 23, avg: 2.087, over2: 26.09, over3: 17.39, over4: 0.00, over5: 0.00, aos: 4.35, threes: 0.00, twoes: 4.35, zeroes: 4.35, draw25: 4.35, bts: 26.09, bnts25: 13.04},
 { name: 'Тунис. Кубок', source: 'Марафон', type: 'Кубки', gp: 30, avg: 2.267, over2: 40.00, over3: 26.67, over4: 10.00, over5: 3.33, aos: 13.33, threes: 0.00, twoes: 3.33, zeroes: 16.67, draw25: 3.33, bts: 33.33, bnts25: 16.67},
 { name: 'Сборные. Кубок африканских наций до 20 лет', source: 'Марафон', type: 'Кубки', gp: 28, avg: 3.286, over2: 53.57, over3: 50.00, over4: 28.57, over5: 14.29, aos: 21.43, threes: 0.00, twoes: 0.00, zeroes: 10.71, draw25: 0.00, bts: 67.86, bnts25: 0.00},
 { name: 'Иран. Кубок', source: 'Марафон', type: 'Кубки', gp: 4, avg: 2.500, over2: 50.00, over3: 25.00, over4: 25.00, over5: 0.00, aos: 25.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 25.00, bnts25: 25.00},
 { name: 'ОАЭ. Арабиан Галф Лиг', source: 'Марафон', type: 'Чемпионаты', gp: 182, avg: 3.137, over2: 62.09, over3: 35.71, over4: 23.08, over5: 12.09, aos: 21.43, threes: 0.55, twoes: 4.40, zeroes: 9.34, draw25: 5.49, bts: 56.04, bnts25: 15.93},
 { name: 'Египет. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 306, avg: 2.255, over2: 38.56, over3: 18.30, over4: 7.52, over5: 3.92, aos: 5.56, threes: 0.98, twoes: 5.88, zeroes: 9.15, draw25: 6.86, bts: 44.77, bnts25: 7.52},
 { name: 'Женщины. Чемпионат Европы до 19 лет', source: 'Марафон', type: 'Чемпионаты', gp: 99, avg: 3.364, over2: 65.66, over3: 42.42, over4: 24.24, over5: 10.10, aos: 24.24, threes: 2.02, twoes: 6.06, zeroes: 4.04, draw25: 8.08, bts: 37.37, bnts25: 32.32},
 { name: 'Марокко. Ботола. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 240, avg: 2.229, over2: 42.92, over3: 18.75, over4: 8.75, over5: 1.25, aos: 8.33, threes: 0.00, twoes: 3.75, zeroes: 11.25, draw25: 3.75, bts: 48.33, bnts25: 7.50},
 { name: 'Женщины. Чемпионат мира до 17 лет', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 3.321, over2: 66.07, over3: 37.50, over4: 35.71, over5: 10.71, aos: 26.79, threes: 3.57, twoes: 0.00, zeroes: 5.36, draw25: 3.57, bts: 44.64, bnts25: 28.57},
 { name: 'Женщины. Чемпионат мира до 20 лет', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 3.518, over2: 60.71, over3: 48.21, over4: 28.57, over5: 17.86, aos: 25.00, threes: 0.00, twoes: 5.36, zeroes: 5.36, draw25: 5.36, bts: 44.64, bnts25: 25.00},
 { name: 'Оман. Профессиональная лига', source: 'Марафон', type: 'Чемпионаты', gp: 182, avg: 2.758, over2: 53.30, over3: 31.32, over4: 13.19, over5: 5.49, aos: 7.14, threes: 1.10, twoes: 7.69, zeroes: 7.69, draw25: 8.79, bts: 62.64, bnts25: 6.04},
 { name: 'Португалия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 16, avg: 2.063, over2: 43.75, over3: 6.25, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 6.25, draw25: 0.00, bts: 50.00, bnts25: 0.00},
 { name: 'Тунис. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 21, avg: 2.000, over2: 33.33, over3: 14.29, over4: 9.52, over5: 0.00, aos: 4.76, threes: 0.00, twoes: 0.00, zeroes: 19.05, draw25: 0.00, bts: 33.33, bnts25: 9.52},
 { name: 'Женщины. Лига чемпионов УЕФА', source: 'Марафон', type: 'Чемпионаты', gp: 91, avg: 4.286, over2: 71.43, over3: 54.95, over4: 39.56, over5: 27.47, aos: 40.66, threes: 1.10, twoes: 1.10, zeroes: 3.30, draw25: 3.30, bts: 51.65, bnts25: 24.18},
 { name: 'Таиланд. Лига 1', source: 'Марафон', type: 'Чемпионаты', gp: 226, avg: 3.332, over2: 63.27, over3: 44.25, over4: 24.34, over5: 13.72, aos: 20.80, threes: 0.88, twoes: 5.75, zeroes: 6.19, draw25: 7.08, bts: 54.87, bnts25: 15.04},
 { name: 'Израиль. Кубок', source: 'Марафон', type: 'Кубки', gp: 50, avg: 3.000, over2: 54.00, over3: 32.00, over4: 22.00, over5: 10.00, aos: 20.00, threes: 2.00, twoes: 0.00, zeroes: 8.00, draw25: 2.00, bts: 52.00, bnts25: 14.00},
 { name: 'Англия. Северная Премьер-лига. Премьер-дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 83, avg: 2.651, over2: 38.55, over3: 26.51, over4: 15.66, over5: 6.02, aos: 12.05, threes: 1.20, twoes: 2.41, zeroes: 2.41, draw25: 4.82, bts: 48.19, bnts25: 6.02},
 { name: 'Англия. Южная футбольная лига. Премьер-дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 60, avg: 3.100, over2: 61.67, over3: 38.33, over4: 25.00, over5: 10.00, aos: 18.33, threes: 1.67, twoes: 3.33, zeroes: 6.67, draw25: 5.00, bts: 50.00, bnts25: 21.67},
 { name: 'Женщины. Германия. Бундеслига', source: 'Марафон', type: 'Чемпионаты', gp: 6, avg: 3.333, over2: 66.67, over3: 33.33, over4: 33.33, over5: 16.67, aos: 33.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 16.67, bnts25: 50.00},
 { name: 'Англия. Истмийская лига. Премьер-дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 60, avg: 3.017, over2: 56.67, over3: 36.67, over4: 23.33, over5: 6.67, aos: 20.00, threes: 0.00, twoes: 5.00, zeroes: 3.33, draw25: 6.67, bts: 48.33, bnts25: 18.33},
 { name: 'Литва. Кубок', source: 'Марафон', type: 'Кубки', gp: 4, avg: 4.500, over2: 75.00, over3: 75.00, over4: 50.00, over5: 25.00, aos: 50.00, threes: 0.00, twoes: 25.00, zeroes: 0.00, draw25: 25.00, bts: 50.00, bnts25: 25.00},
 { name: 'Испания. Кубок', source: 'Марафон', type: 'Кубки', gp: 37, avg: 2.378, over2: 40.54, over3: 21.62, over4: 8.11, over5: 5.41, aos: 10.81, threes: 0.00, twoes: 2.70, zeroes: 8.11, draw25: 2.70, bts: 45.95, bnts25: 10.81},
 { name: 'Польша. Кубок', source: 'Марафон', type: 'Кубки', gp: 16, avg: 2.875, over2: 68.75, over3: 31.25, over4: 6.25, over5: 0.00, aos: 6.25, threes: 0.00, twoes: 6.25, zeroes: 6.25, draw25: 6.25, bts: 68.75, bnts25: 12.50},
 { name: 'Франция. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 17, avg: 2.412, over2: 41.18, over3: 29.41, over4: 17.65, over5: 5.88, aos: 11.76, threes: 0.00, twoes: 5.88, zeroes: 23.53, draw25: 11.76, bts: 47.06, bnts25: 5.88},
 { name: 'Шотландия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 168, avg: 3.351, over2: 66.07, over3: 42.26, over4: 26.79, over5: 16.07, aos: 29.17, threes: 0.00, twoes: 4.76, zeroes: 7.14, draw25: 5.95, bts: 49.40, bnts25: 25.00},
 { name: 'Португалия. Кубок', source: 'Марафон', type: 'Кубки', gp: 67, avg: 2.448, over2: 44.78, over3: 22.39, over4: 10.45, over5: 8.96, aos: 8.96, threes: 2.99, twoes: 2.99, zeroes: 10.45, draw25: 5.97, bts: 40.30, bnts25: 8.96},
 { name: 'Клубы. Международные. Чемпионат мира среди клубов', source: 'Марафон', type: 'Чемпионаты', gp: 8, avg: 3.250, over2: 75.00, over3: 37.50, over4: 12.50, over5: 0.00, aos: 12.50, threes: 0.00, twoes: 25.00, zeroes: 0.00, draw25: 25.00, bts: 62.50, bnts25: 12.50},
 { name: 'Кипр. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 9, avg: 1.667, over2: 22.22, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 11.11, draw25: 0.00, bts: 33.33, bnts25: 11.11},
 { name: 'Парагвай. Примера А', source: 'Марафон', type: 'Чемпионаты', gp: 170, avg: 2.553, over2: 50.59, over3: 20.59, over4: 12.94, over5: 5.29, aos: 8.24, threes: 1.76, twoes: 3.53, zeroes: 10.00, draw25: 5.29, bts: 51.76, bnts25: 14.71},
 { name: 'Боливия. LFPB', source: 'Марафон', type: 'Чемпионаты', gp: 32, avg: 2.563, over2: 43.75, over3: 21.88, over4: 12.50, over5: 9.38, aos: 9.38, threes: 0.00, twoes: 3.13, zeroes: 9.38, draw25: 3.13, bts: 56.25, bnts25: 6.25},
 { name: 'Марокко. Кубок', source: 'Марафон', type: 'Кубки', gp: 32, avg: 1.813, over2: 31.25, over3: 18.75, over4: 12.50, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 31.25, draw25: 0.00, bts: 43.75, bnts25: 0.00},
 { name: 'Эквадор. Серия А', source: 'Марафон', type: 'Чемпионаты', gp: 179, avg: 2.503, over2: 43.02, over3: 24.02, over4: 9.50, over5: 5.03, aos: 8.94, threes: 0.56, twoes: 5.59, zeroes: 10.06, draw25: 6.15, bts: 53.07, bnts25: 7.26},
 { name: 'Венесуэла. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 224, avg: 2.522, over2: 48.66, over3: 24.55, over4: 11.16, over5: 4.46, aos: 10.27, threes: 0.89, twoes: 3.57, zeroes: 11.61, draw25: 4.91, bts: 52.23, bnts25: 9.38},
 { name: 'Сингапур. Кубок', source: 'Марафон', type: 'Кубки', gp: 16, avg: 5.313, over2: 87.50, over3: 81.25, over4: 56.25, over5: 43.75, aos: 62.50, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 6.25, bts: 81.25, bnts25: 6.25},
 { name: 'Женщины. Бельгия. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 3, avg: 3.000, over2: 33.33, over3: 33.33, over4: 33.33, over5: 33.33, aos: 33.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 0.00, bnts25: 33.33},
 { name: 'Кипр. Кубок', source: 'Марафон', type: 'Кубки', gp: 52, avg: 3.692, over2: 61.54, over3: 44.23, over4: 30.77, over5: 23.08, aos: 30.77, threes: 0.00, twoes: 5.77, zeroes: 3.85, draw25: 5.77, bts: 53.85, bnts25: 23.08},
 { name: 'Колумбия. Примера В дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 181, avg: 2.492, over2: 44.75, over3: 24.31, over4: 11.05, over5: 4.97, aos: 6.63, threes: 0.00, twoes: 4.97, zeroes: 8.84, draw25: 4.97, bts: 54.70, bnts25: 2.76},
 { name: 'Женщины. Нидерланды. Эредивизи', source: 'Марафон', type: 'Чемпионаты', gp: 4, avg: 3.500, over2: 50.00, over3: 25.00, over4: 25.00, over5: 25.00, aos: 25.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 0.00, bnts25: 50.00},
 { name: 'Франция. Лига 1', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 2.825, over2: 52.50, over3: 25.00, over4: 15.00, over5: 7.50, aos: 10.00, threes: 2.50, twoes: 5.00, zeroes: 2.50, draw25: 7.50, bts: 42.50, bnts25: 20.00},
 { name: 'Женщины. Испания. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 8, avg: 3.125, over2: 50.00, over3: 25.00, over4: 12.50, over5: 12.50, aos: 12.50, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 62.50, bnts25: 12.50},
 { name: 'Румыния. Лига 1', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 2.143, over2: 35.71, over3: 10.71, over4: 3.57, over5: 3.57, aos: 3.57, threes: 0.00, twoes: 0.00, zeroes: 8.93, draw25: 0.00, bts: 41.07, bnts25: 7.14},
 { name: 'Румыния. Кубок', source: 'Марафон', type: 'Кубки', gp: 35, avg: 2.657, over2: 51.43, over3: 28.57, over4: 14.29, over5: 8.57, aos: 17.14, threes: 0.00, twoes: 0.00, zeroes: 14.29, draw25: 0.00, bts: 34.29, bnts25: 20.00},
 { name: 'Франция. Национальная лига', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 2.150, over2: 27.50, over3: 15.00, over4: 12.50, over5: 2.50, aos: 7.50, threes: 0.00, twoes: 0.00, zeroes: 5.00, draw25: 0.00, bts: 45.00, bnts25: 5.00},
 { name: 'Вьетнам. V-Лига', source: 'Марафон', type: 'Чемпионаты', gp: 112, avg: 2.786, over2: 50.89, over3: 27.68, over4: 14.29, over5: 8.04, aos: 8.04, threes: 1.79, twoes: 8.04, zeroes: 5.36, draw25: 9.82, bts: 61.61, bnts25: 7.14},
 { name: 'Испания. 2-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 33, avg: 2.061, over2: 39.39, over3: 12.12, over4: 3.03, over5: 0.00, aos: 3.03, threes: 0.00, twoes: 6.06, zeroes: 15.15, draw25: 6.06, bts: 42.42, bnts25: 12.12},
 { name: 'Франция. Лига 2', source: 'Марафон', type: 'Чемпионаты', gp: 50, avg: 2.360, over2: 44.00, over3: 22.00, over4: 14.00, over5: 4.00, aos: 10.00, threes: 0.00, twoes: 2.00, zeroes: 16.00, draw25: 2.00, bts: 42.00, bnts25: 8.00},
 { name: 'Норвегия. Элитсериен', source: 'Марафон', type: 'Чемпионаты', gp: 158, avg: 2.753, over2: 51.27, over3: 27.85, over4: 16.46, over5: 8.23, aos: 11.39, threes: 2.53, twoes: 2.53, zeroes: 8.23, draw25: 5.06, bts: 54.43, bnts25: 12.03},
 { name: 'Бразилия. Серия C', source: 'Марафон', type: 'Чемпионаты', gp: 170, avg: 2.118, over2: 32.94, over3: 14.71, over4: 5.88, over5: 1.76, aos: 2.94, threes: 0.59, twoes: 4.71, zeroes: 11.18, draw25: 5.29, bts: 46.47, bnts25: 7.06},
 { name: 'Женщины. Япония. Кубок Императрицы', source: 'Марафон', type: 'Кубки', gp: 7, avg: 1.143, over2: 0.00, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 28.57, draw25: 0.00, bts: 14.29, bnts25: 0.00},
 { name: 'Шотландия. Чемпион-лига', source: 'Марафон', type: 'Чемпионаты', gp: 20, avg: 3.050, over2: 60.00, over3: 50.00, over4: 20.00, over5: 5.00, aos: 30.00, threes: 0.00, twoes: 5.00, zeroes: 5.00, draw25: 5.00, bts: 60.00, bnts25: 15.00},
 { name: 'Франция. Кубок', source: 'Марафон', type: 'Кубки', gp: 125, avg: 2.832, over2: 54.40, over3: 28.00, over4: 16.00, over5: 6.40, aos: 16.80, threes: 0.80, twoes: 4.00, zeroes: 5.60, draw25: 4.80, bts: 41.60, bnts25: 20.00},
 { name: 'Сборные. Кубок африканских наций', source: 'Марафон', type: 'Кубки', gp: 57, avg: 2.702, over2: 50.88, over3: 29.82, over4: 17.54, over5: 8.77, aos: 12.28, threes: 0.00, twoes: 0.00, zeroes: 3.51, draw25: 0.00, bts: 40.35, bnts25: 15.79},
 { name: 'Узбекистан. Кубок', source: 'Марафон', type: 'Кубки', gp: 54, avg: 3.574, over2: 68.52, over3: 50.00, over4: 31.48, over5: 16.67, aos: 33.33, threes: 1.85, twoes: 7.41, zeroes: 11.11, draw25: 9.26, bts: 48.15, bnts25: 27.78},
 { name: 'Дания. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 3.250, over2: 70.00, over3: 40.00, over4: 22.50, over5: 10.00, aos: 10.00, threes: 2.50, twoes: 5.00, zeroes: 5.00, draw25: 7.50, bts: 65.00, bnts25: 7.50},
 { name: 'Черногория. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 25, avg: 2.280, over2: 40.00, over3: 20.00, over4: 12.00, over5: 4.00, aos: 12.00, threes: 4.00, twoes: 4.00, zeroes: 8.00, draw25: 8.00, bts: 48.00, bnts25: 8.00},
 { name: 'Шотландия. Кубок', source: 'Марафон', type: 'Кубки', gp: 78, avg: 3.269, over2: 57.69, over3: 42.31, over4: 23.08, over5: 12.82, aos: 23.08, threes: 0.00, twoes: 6.41, zeroes: 6.41, draw25: 6.41, bts: 52.56, bnts25: 15.38},
 { name: 'Мальта. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 14, avg: 3.286, over2: 57.14, over3: 57.14, over4: 28.57, over5: 7.14, aos: 35.71, threes: 0.00, twoes: 7.14, zeroes: 0.00, draw25: 7.14, bts: 42.86, bnts25: 21.43},
 { name: 'Ирландия. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 100, avg: 2.450, over2: 41.00, over3: 26.00, over4: 12.00, over5: 5.00, aos: 11.00, threes: 2.00, twoes: 4.00, zeroes: 9.00, draw25: 6.00, bts: 45.00, bnts25: 7.00},
 { name: 'Исландия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 127, avg: 3.598, over2: 72.44, over3: 51.97, over4: 30.71, over5: 14.17, aos: 23.62, threes: 1.57, twoes: 4.72, zeroes: 2.36, draw25: 7.87, bts: 66.14, bnts25: 12.60},
 { name: 'Саудовская Аравия. Кубок принца', source: 'Марафон', type: 'Кубки', gp: 15, avg: 2.800, over2: 40.00, over3: 26.67, over4: 20.00, over5: 13.33, aos: 13.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 46.67, bnts25: 6.67},
 { name: 'США. NASL', source: 'Марафон', type: 'Чемпионаты', gp: 91, avg: 2.604, over2: 46.15, over3: 26.37, over4: 12.09, over5: 7.69, aos: 6.59, threes: 3.30, twoes: 4.40, zeroes: 7.69, draw25: 7.69, bts: 58.24, bnts25: 5.49},
 { name: 'Англия. Трофей Футбольной ассоциации', source: 'Марафон', type: 'Чемпионаты', gp: 156, avg: 3.071, over2: 55.77, over3: 39.74, over4: 19.87, over5: 9.62, aos: 14.74, threes: 1.28, twoes: 8.97, zeroes: 3.85, draw25: 10.26, bts: 64.10, bnts25: 7.05},
 { name: 'Новая Зеландия. Премьер лига', source: 'Марафон', type: 'Чемпионаты', gp: 90, avg: 3.567, over2: 68.89, over3: 53.33, over4: 23.33, over5: 13.33, aos: 25.56, threes: 2.22, twoes: 5.56, zeroes: 2.22, draw25: 7.78, bts: 65.56, bnts25: 11.11},
 { name: 'Северная Ирландия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 16, avg: 3.375, over2: 68.75, over3: 50.00, over4: 37.50, over5: 12.50, aos: 43.75, threes: 0.00, twoes: 0.00, zeroes: 12.50, draw25: 0.00, bts: 37.50, bnts25: 37.50},
 { name: 'Сборные. Чемпионат Европы', source: 'Марафон', type: 'Чемпионаты', gp: 364, avg: 2.453, over2: 42.86, over3: 22.80, over4: 10.44, over5: 5.49, aos: 9.07, threes: 0.55, twoes: 2.47, zeroes: 8.79, draw25: 3.02, bts: 39.29, bnts25: 12.09},
 { name: 'Швеция. Аллсвенскан', source: 'Марафон', type: 'Чемпионаты', gp: 168, avg: 2.625, over2: 53.57, over3: 26.19, over4: 10.12, over5: 5.36, aos: 9.52, threes: 1.19, twoes: 7.14, zeroes: 8.93, draw25: 8.93, bts: 54.17, bnts25: 10.71},
 { name: 'Англия. Чемпион-лига', source: 'Марафон', type: 'Чемпионаты', gp: 60, avg: 2.400, over2: 40.00, over3: 20.00, over4: 10.00, over5: 5.00, aos: 10.00, threes: 0.00, twoes: 1.67, zeroes: 10.00, draw25: 1.67, bts: 48.33, bnts25: 6.67},
 { name: 'Израиль. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 14, avg: 2.857, over2: 64.29, over3: 28.57, over4: 7.14, over5: 0.00, aos: 7.14, threes: 0.00, twoes: 7.14, zeroes: 7.14, draw25: 7.14, bts: 71.43, bnts25: 7.14},
 { name: 'Бразилия. Примейра-лига', source: 'Марафон', type: 'Чемпионаты', gp: 54, avg: 1.778, over2: 24.07, over3: 12.96, over4: 3.70, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 5.56, zeroes: 18.52, draw25: 5.56, bts: 37.04, bnts25: 0.00},
 { name: 'Италия. Серия В', source: 'Марафон', type: 'Чемпионаты', gp: 22, avg: 2.727, over2: 45.45, over3: 31.82, over4: 27.27, over5: 18.18, aos: 13.64, threes: 4.55, twoes: 0.00, zeroes: 13.64, draw25: 4.55, bts: 50.00, bnts25: 4.55},
 { name: 'Турция. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 27, avg: 2.556, over2: 51.85, over3: 29.63, over4: 11.11, over5: 3.70, aos: 11.11, threes: 0.00, twoes: 14.81, zeroes: 11.11, draw25: 14.81, bts: 44.44, bnts25: 11.11},
 { name: 'Клубы. Международные. Кубок Либертадорес', source: 'Марафон', type: 'Кубки', gp: 229, avg: 3.004, over2: 55.46, over3: 34.50, over4: 22.71, over5: 8.30, aos: 15.28, threes: 0.44, twoes: 0.87, zeroes: 4.37, draw25: 1.31, bts: 57.64, bnts25: 10.04},
 { name: 'Австралия. Эй-лига', source: 'Марафон', type: 'Чемпионаты', gp: 135, avg: 3.030, over2: 60.00, over3: 35.56, over4: 17.78, over5: 6.67, aos: 14.81, threes: 2.22, twoes: 7.41, zeroes: 5.19, draw25: 9.63, bts: 59.26, bnts25: 12.59},
 { name: 'Бразилия. Лига Паулиста. Серия А1', source: 'Марафон', type: 'Чемпионаты', gp: 101, avg: 2.436, over2: 41.58, over3: 24.75, over4: 11.88, over5: 5.94, aos: 7.92, threes: 1.98, twoes: 3.96, zeroes: 10.89, draw25: 5.94, bts: 51.49, bnts25: 6.93},
 { name: 'Бразилия. Лига Кариока. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 183, avg: 2.645, over2: 50.27, over3: 33.33, over4: 12.57, over5: 2.73, aos: 9.84, threes: 1.64, twoes: 8.74, zeroes: 8.20, draw25: 10.38, bts: 49.73, bnts25: 11.48},
 { name: 'Россия. ФНЛ', source: 'Марафон', type: 'Чемпионаты', gp: 120, avg: 2.500, over2: 50.83, over3: 23.33, over4: 8.33, over5: 0.83, aos: 7.50, threes: 0.00, twoes: 6.67, zeroes: 5.00, draw25: 6.67, bts: 48.33, bnts25: 10.83},
 { name: 'США. MLS', source: 'Марафон', type: 'Чемпионаты', gp: 191, avg: 2.921, over2: 62.83, over3: 32.46, over4: 11.52, over5: 5.76, aos: 12.04, threes: 1.57, twoes: 7.85, zeroes: 4.19, draw25: 9.42, bts: 53.40, bnts25: 17.28},
 { name: 'Италия. Серия C', source: 'Марафон', type: 'Чемпионаты', gp: 53, avg: 2.358, over2: 45.28, over3: 18.87, over4: 7.55, over5: 1.89, aos: 0.00, threes: 1.89, twoes: 0.00, zeroes: 1.89, draw25: 1.89, bts: 52.83, bnts25: 3.77},
 { name: 'Германия. Региональная лига. Запад', source: 'Марафон', type: 'Чемпионаты', gp: 50, avg: 3.160, over2: 64.00, over3: 42.00, over4: 22.00, over5: 14.00, aos: 14.00, threes: 4.00, twoes: 12.00, zeroes: 10.00, draw25: 16.00, bts: 70.00, bnts25: 6.00},
 { name: 'Нидерланды. Kубок', source: 'Марафон', type: 'Чемпионаты', gp: 63, avg: 3.333, over2: 69.84, over3: 46.03, over4: 23.81, over5: 9.52, aos: 28.57, threes: 1.59, twoes: 3.17, zeroes: 6.35, draw25: 4.76, bts: 55.56, bnts25: 19.05},
 { name: 'Женщины. Германия. Кубок', source: 'Марафон', type: 'Кубки', gp: 7, avg: 2.286, over2: 28.57, over3: 14.29, over4: 0.00, over5: 0.00, aos: 14.29, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 28.57, bnts25: 14.29},
 { name: 'Германия. Региональная лига. Юго-Запад', source: 'Марафон', type: 'Чемпионаты', gp: 63, avg: 3.381, over2: 69.84, over3: 46.03, over4: 25.40, over5: 14.29, aos: 19.05, threes: 1.59, twoes: 4.76, zeroes: 11.11, draw25: 7.94, bts: 66.67, bnts25: 11.11},
 { name: 'Турция. Кубок', source: 'Марафон', type: 'Кубки', gp: 247, avg: 2.891, over2: 50.20, over3: 34.01, over4: 21.86, over5: 8.10, aos: 14.57, threes: 0.00, twoes: 4.45, zeroes: 8.50, draw25: 4.86, bts: 50.61, bnts25: 13.77},
 { name: 'Германия. Региональная лига. Северо-Восток', source: 'Марафон', type: 'Чемпионаты', gp: 45, avg: 2.822, over2: 55.56, over3: 37.78, over4: 17.78, over5: 8.89, aos: 17.78, threes: 4.44, twoes: 6.67, zeroes: 6.67, draw25: 11.11, bts: 48.89, bnts25: 13.33},
 { name: 'Коста-Рика. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 42, avg: 2.714, over2: 57.14, over3: 28.57, over4: 11.90, over5: 9.52, aos: 11.90, threes: 2.38, twoes: 7.14, zeroes: 14.29, draw25: 9.52, bts: 54.76, bnts25: 9.52},
 { name: 'Германия. Региональная лига. Бавария', source: 'Марафон', type: 'Чемпионаты', gp: 78, avg: 3.385, over2: 62.82, over3: 48.72, over4: 30.77, over5: 12.82, aos: 24.36, threes: 1.28, twoes: 5.13, zeroes: 6.41, draw25: 6.41, bts: 64.10, bnts25: 6.41},
 { name: 'Россия. Кубок', source: 'Марафон', type: 'Кубки', gp: 64, avg: 2.375, over2: 39.06, over3: 26.56, over4: 12.50, over5: 7.81, aos: 15.63, threes: 0.00, twoes: 1.56, zeroes: 12.50, draw25: 1.56, bts: 35.94, bnts25: 10.94},
 { name: 'Румыния. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 17, avg: 3.647, over2: 58.82, over3: 41.18, over4: 23.53, over5: 17.65, aos: 23.53, threes: 0.00, twoes: 5.88, zeroes: 5.88, draw25: 5.88, bts: 70.59, bnts25: 0.00},
 { name: 'Сербия. Кубок', source: 'Марафон', type: 'Кубки', gp: 35, avg: 2.914, over2: 54.29, over3: 34.29, over4: 22.86, over5: 14.29, aos: 28.57, threes: 0.00, twoes: 2.86, zeroes: 8.57, draw25: 2.86, bts: 40.00, bnts25: 20.00},
 { name: 'Филиппины. PFL', source: 'Марафон', type: 'Чемпионаты', gp: 64, avg: 3.172, over2: 60.94, over3: 35.94, over4: 21.88, over5: 14.06, aos: 17.19, threes: 0.00, twoes: 7.81, zeroes: 6.25, draw25: 7.81, bts: 64.06, bnts25: 7.81},
 { name: 'Сборные. Чемпионат Южной Америки до 17 лет', source: 'Марафон', type: 'Чемпионаты', gp: 70, avg: 2.571, over2: 48.57, over3: 28.57, over4: 11.43, over5: 2.86, aos: 8.57, threes: 0.00, twoes: 8.57, zeroes: 2.86, draw25: 8.57, bts: 40.00, bnts25: 17.14},
 { name: 'Исландия. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 117, avg: 2.966, over2: 59.83, over3: 32.48, over4: 14.53, over5: 5.13, aos: 7.69, threes: 1.71, twoes: 5.13, zeroes: 2.56, draw25: 6.84, bts: 57.26, bnts25: 10.26},
 { name: 'Венесуэла. Кубок', source: 'Марафон', type: 'Кубки', gp: 64, avg: 3.000, over2: 54.69, over3: 37.50, over4: 18.75, over5: 9.38, aos: 17.19, threes: 3.13, twoes: 9.38, zeroes: 7.81, draw25: 12.50, bts: 53.13, bnts25: 10.94},
 { name: 'Египет. Кубок', source: 'Марафон', type: 'Кубки', gp: 31, avg: 2.355, over2: 45.16, over3: 19.35, over4: 9.68, over5: 3.23, aos: 9.68, threes: 0.00, twoes: 0.00, zeroes: 12.90, draw25: 0.00, bts: 35.48, bnts25: 19.35},
 { name: 'Клубы. Международные. Лига Европы УЕФА', source: 'Марафон', type: 'Чемпионаты', gp: 402, avg: 3.284, over2: 58.21, over3: 39.55, over4: 25.87, over5: 15.17, aos: 21.89, threes: 1.74, twoes: 1.99, zeroes: 5.97, draw25: 4.23, bts: 50.25, bnts25: 15.67},
 { name: 'Англия. Премьер-лига до 21 года', source: 'Марафон', type: 'Чемпионаты', gp: 264, avg: 2.947, over2: 56.44, over3: 32.95, over4: 16.67, over5: 6.44, aos: 11.36, threes: 1.52, twoes: 3.79, zeroes: 4.92, draw25: 5.68, bts: 57.20, bnts25: 11.36},
 { name: 'Женщины. Чемпионат Европы', source: 'Марафон', type: 'Чемпионаты', gp: 258, avg: 3.609, over2: 65.50, over3: 46.12, over4: 29.46, over5: 17.83, aos: 37.60, threes: 0.78, twoes: 1.16, zeroes: 5.43, draw25: 1.94, bts: 28.29, bnts25: 40.31},
 { name: 'Женщины. Япония. Надэсико Лига. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 65, avg: 2.385, over2: 46.15, over3: 18.46, over4: 6.15, over5: 3.08, aos: 6.15, threes: 0.00, twoes: 6.15, zeroes: 4.62, draw25: 6.15, bts: 38.46, bnts25: 16.92},
 { name: 'Сборные. Чемпионат мира до 17 лет', source: 'Марафон', type: 'Чемпионаты', gp: 88, avg: 2.886, over2: 54.55, over3: 31.82, over4: 19.32, over5: 9.09, aos: 22.73, threes: 0.00, twoes: 2.27, zeroes: 10.23, draw25: 2.27, bts: 53.41, bnts25: 10.23},
 { name: 'Оман. Кубок Султана', source: 'Марафон', type: 'Кубки', gp: 27, avg: 2.963, over2: 55.56, over3: 33.33, over4: 18.52, over5: 7.41, aos: 14.81, threes: 0.00, twoes: 3.70, zeroes: 0.00, draw25: 3.70, bts: 51.85, bnts25: 7.41},
 { name: 'Женщины. Республика Корея. WK-лига', source: 'Марафон', type: 'Чемпионаты', gp: 84, avg: 3.060, over2: 59.52, over3: 35.71, over4: 21.43, over5: 8.33, aos: 20.24, threes: 0.00, twoes: 2.38, zeroes: 5.95, draw25: 2.38, bts: 58.33, bnts25: 13.10},
 { name: 'Женщины. Англия. Кубок', source: 'Марафон', type: 'Кубки', gp: 15, avg: 3.800, over2: 53.33, over3: 46.67, over4: 46.67, over5: 20.00, aos: 33.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 46.67, bnts25: 20.00},
 { name: 'Женщины. Нидерланды. Кубок', source: 'Марафон', type: 'Кубки', gp: 7, avg: 3.571, over2: 42.86, over3: 42.86, over4: 28.57, over5: 14.29, aos: 14.29, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 71.43, bnts25: 0.00},
 { name: 'Армения. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 12, avg: 2.833, over2: 66.67, over3: 33.33, over4: 8.33, over5: 8.33, aos: 8.33, threes: 0.00, twoes: 16.67, zeroes: 8.33, draw25: 16.67, bts: 66.67, bnts25: 8.33},
 { name: 'Чехия. Кубок', source: 'Марафон', type: 'Кубки', gp: 27, avg: 3.185, over2: 55.56, over3: 44.44, over4: 22.22, over5: 7.41, aos: 25.93, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 59.26, bnts25: 14.81},
 { name: 'Женщины. Норвегия. Кубок', source: 'Марафон', type: 'Кубки', gp: 12, avg: 2.833, over2: 58.33, over3: 16.67, over4: 8.33, over5: 8.33, aos: 16.67, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 58.33, bnts25: 16.67},
 { name: 'Швейцария. Кубок', source: 'Марафон', type: 'Кубки', gp: 32, avg: 5.656, over2: 78.13, over3: 65.63, over4: 46.88, over5: 43.75, aos: 53.13, threes: 0.00, twoes: 6.25, zeroes: 3.13, draw25: 6.25, bts: 50.00, bnts25: 37.50},
 { name: 'Австрия. Кубок', source: 'Марафон', type: 'Кубки', gp: 32, avg: 3.625, over2: 68.75, over3: 46.88, over4: 28.13, over5: 25.00, aos: 34.38, threes: 0.00, twoes: 0.00, zeroes: 3.13, draw25: 0.00, bts: 56.25, bnts25: 21.88},
 { name: 'Сборные. Кубок Центральной Америки', source: 'Марафон', type: 'Кубки', gp: 30, avg: 1.800, over2: 40.00, over3: 13.33, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 20.00, draw25: 0.00, bts: 40.00, bnts25: 6.67},
 { name: 'Англия. Премьер-лига 2. 2-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 18, avg: 3.833, over2: 77.78, over3: 50.00, over4: 27.78, over5: 22.22, aos: 38.89, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 55.56, bnts25: 22.22},
 { name: 'Дания. Кубок', source: 'Марафон', type: 'Кубки', gp: 25, avg: 4.120, over2: 64.00, over3: 56.00, over4: 44.00, over5: 36.00, aos: 28.00, threes: 12.00, twoes: 0.00, zeroes: 4.00, draw25: 12.00, bts: 64.00, bnts25: 8.00},
 { name: 'Катар. Старз Лига', source: 'Марафон', type: 'Чемпионаты', gp: 182, avg: 3.132, over2: 59.89, over3: 36.81, over4: 18.68, over5: 11.54, aos: 17.03, threes: 2.20, twoes: 6.59, zeroes: 4.40, draw25: 8.79, bts: 61.54, bnts25: 10.99},
 { name: 'Словакия. Кубок', source: 'Марафон', type: 'Кубки', gp: 19, avg: 2.368, over2: 47.37, over3: 21.05, over4: 10.53, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 5.26, draw25: 0.00, bts: 42.11, bnts25: 15.79},
 { name: 'Шотландия. Челлендж Кап', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 3.175, over2: 62.50, over3: 37.50, over4: 15.00, over5: 10.00, aos: 17.50, threes: 0.00, twoes: 5.00, zeroes: 2.50, draw25: 5.00, bts: 57.50, bnts25: 12.50},
 { name: 'ЮАР. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 16, avg: 2.063, over2: 25.00, over3: 12.50, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 6.25, zeroes: 6.25, draw25: 6.25, bts: 50.00, bnts25: 0.00},
 { name: 'Женщины. Англия. Суперлига 1', source: 'Марафон', type: 'Чемпионаты', gp: 36, avg: 3.389, over2: 55.56, over3: 50.00, over4: 33.33, over5: 22.22, aos: 36.11, threes: 0.00, twoes: 2.78, zeroes: 8.33, draw25: 5.56, bts: 44.44, bnts25: 22.22},
 { name: 'Женщины. Швеция. Кубок', source: 'Марафон', type: 'Кубки', gp: 15, avg: 3.733, over2: 60.00, over3: 40.00, over4: 26.67, over5: 13.33, aos: 40.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 26.67, bnts25: 46.67},
 { name: 'Клубы. Международные. Лига чемпионов УЕФА', source: 'Марафон', type: 'Чемпионаты', gp: 141, avg: 3.418, over2: 58.16, over3: 41.13, over4: 26.95, over5: 20.57, aos: 22.70, threes: 3.55, twoes: 6.38, zeroes: 4.96, draw25: 9.93, bts: 56.03, bnts25: 10.64},
 { name: 'Черногория. Кубок', source: 'Марафон', type: 'Кубки', gp: 19, avg: 3.000, over2: 47.37, over3: 26.32, over4: 15.79, over5: 10.53, aos: 15.79, threes: 0.00, twoes: 5.26, zeroes: 0.00, draw25: 5.26, bts: 57.89, bnts25: 5.26},
 { name: 'Женщины. Международный турнир. Открытый кубок Кипра', source: 'Марафон', type: 'Кубки', gp: 42, avg: 2.690, over2: 47.62, over3: 33.33, over4: 21.43, over5: 7.14, aos: 16.67, threes: 0.00, twoes: 4.76, zeroes: 16.67, draw25: 4.76, bts: 35.71, bnts25: 14.29},
 { name: 'Бразилия. Серия B', source: 'Марафон', type: 'Чемпионаты', gp: 223, avg: 2.220, over2: 40.36, over3: 17.94, over4: 7.17, over5: 0.90, aos: 4.48, threes: 0.00, twoes: 4.04, zeroes: 10.31, draw25: 4.04, bts: 45.74, bnts25: 7.17},
 { name: 'Россия. Кубок ФНЛ', source: 'Марафон', type: 'Кубки', gp: 64, avg: 2.641, over2: 43.75, over3: 23.44, over4: 10.94, over5: 10.94, aos: 7.81, threes: 3.13, twoes: 3.13, zeroes: 9.38, draw25: 6.25, bts: 50.00, bnts25: 3.13},
 { name: 'Англия. Северная Национальная лига', source: 'Марафон', type: 'Чемпионаты', gp: 99, avg: 2.899, over2: 53.54, over3: 31.31, over4: 19.19, over5: 8.08, aos: 19.19, threes: 1.01, twoes: 3.03, zeroes: 6.06, draw25: 4.04, bts: 46.46, bnts25: 17.17},
 { name: 'Англия. Премьер-лига 2. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 18, avg: 2.944, over2: 55.56, over3: 27.78, over4: 22.22, over5: 11.11, aos: 11.11, threes: 0.00, twoes: 5.56, zeroes: 11.11, draw25: 5.56, bts: 44.44, bnts25: 16.67},
 { name: 'Женщины. Китай. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 36, avg: 2.778, over2: 50.00, over3: 36.11, over4: 16.67, over5: 8.33, aos: 19.44, threes: 0.00, twoes: 5.56, zeroes: 5.56, draw25: 5.56, bts: 41.67, bnts25: 13.89},
 { name: 'Англия. Южная Национальная лига', source: 'Марафон', type: 'Чемпионаты', gp: 98, avg: 2.959, over2: 54.08, over3: 32.65, over4: 20.41, over5: 8.16, aos: 10.20, threes: 1.02, twoes: 8.16, zeroes: 5.10, draw25: 9.18, bts: 59.18, bnts25: 6.12},
 { name: 'Колумбия. Примера А дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 309, avg: 2.142, over2: 36.89, over3: 16.83, over4: 7.44, over5: 3.24, aos: 3.56, threes: 1.29, twoes: 3.88, zeroes: 12.62, draw25: 5.18, bts: 40.78, bnts25: 6.80},
 { name: 'Азербайджан. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 12, avg: 2.250, over2: 58.33, over3: 16.67, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 8.33, draw25: 0.00, bts: 50.00, bnts25: 8.33},
 { name: 'Узбекистан. ПФЛ', source: 'Марафон', type: 'Чемпионаты', gp: 153, avg: 2.438, over2: 43.79, over3: 22.88, over4: 11.11, over5: 3.92, aos: 8.50, threes: 0.65, twoes: 3.27, zeroes: 6.54, draw25: 3.92, bts: 46.41, bnts25: 11.76},
 { name: 'Австралия. Национальная Премьер-лига. Виктория', source: 'Марафон', type: 'Чемпионаты', gp: 182, avg: 2.841, over2: 53.85, over3: 31.87, over4: 14.84, over5: 7.14, aos: 13.19, threes: 1.10, twoes: 6.04, zeroes: 4.95, draw25: 7.69, bts: 51.65, bnts25: 14.29},
 { name: 'Македония. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 14, avg: 2.357, over2: 50.00, over3: 14.29, over4: 7.14, over5: 0.00, aos: 14.29, threes: 0.00, twoes: 0.00, zeroes: 14.29, draw25: 0.00, bts: 42.86, bnts25: 21.43},
 { name: 'Англия. Кубок', source: 'Марафон', type: 'Кубки', gp: 193, avg: 3.010, over2: 59.59, over3: 36.27, over4: 18.65, over5: 9.33, aos: 18.65, threes: 0.52, twoes: 7.25, zeroes: 8.81, draw25: 7.77, bts: 51.81, bnts25: 17.62},
 { name: 'Англия. Трофей Футбольной лиги', source: 'Марафон', type: 'Чемпионаты', gp: 58, avg: 3.483, over2: 62.07, over3: 44.83, over4: 24.14, over5: 17.24, aos: 13.79, threes: 3.45, twoes: 10.34, zeroes: 3.45, draw25: 13.79, bts: 72.41, bnts25: 3.45},
 { name: 'Германия. Кубок', source: 'Марафон', type: 'Кубки', gp: 32, avg: 3.406, over2: 71.88, over3: 43.75, over4: 21.88, over5: 6.25, aos: 28.13, threes: 0.00, twoes: 3.13, zeroes: 3.13, draw25: 3.13, bts: 50.00, bnts25: 28.13},
 { name: 'Казахстан. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 148, avg: 2.324, over2: 42.57, over3: 18.92, over4: 7.43, over5: 3.38, aos: 6.76, threes: 1.35, twoes: 4.73, zeroes: 7.43, draw25: 6.08, bts: 44.59, bnts25: 10.14},
 { name: 'Австралия. Национальная Премьер-лига. Новый Южный Уэльс', source: 'Марафон', type: 'Чемпионаты', gp: 132, avg: 3.288, over2: 65.91, over3: 41.67, over4: 25.76, over5: 9.09, aos: 17.42, threes: 2.27, twoes: 3.03, zeroes: 5.30, draw25: 5.30, bts: 56.06, bnts25: 14.39},
 { name: 'Индия. Кубок федерации', source: 'Марафон', type: 'Кубки', gp: 27, avg: 3.000, over2: 51.85, over3: 44.44, over4: 29.63, over5: 0.00, aos: 7.41, threes: 0.00, twoes: 0.00, zeroes: 11.11, draw25: 0.00, bts: 59.26, bnts25: 7.41},
 { name: 'Товарищеские турниры. Зимний кубок ЛФФ', source: 'Марафон', type: 'Кубки', gp: 50, avg: 3.280, over2: 64.00, over3: 52.00, over4: 20.00, over5: 4.00, aos: 16.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 68.00, bnts25: 12.00},
 { name: 'Япония. Джей-лига. 2-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 341, avg: 2.543, over2: 45.75, over3: 25.22, over4: 10.85, over5: 3.81, aos: 8.50, threes: 0.88, twoes: 4.99, zeroes: 6.45, draw25: 6.16, bts: 50.44, bnts25: 7.62},
 { name: 'ЮАР. Кубок', source: 'Марафон', type: 'Кубки', gp: 39, avg: 2.641, over2: 43.59, over3: 25.64, over4: 15.38, over5: 5.13, aos: 10.26, threes: 0.00, twoes: 2.56, zeroes: 5.13, draw25: 2.56, bts: 51.28, bnts25: 5.13},
 { name: 'Саудовская Аравия. Про-лига', source: 'Марафон', type: 'Чемпионаты', gp: 13, avg: 4.308, over2: 92.31, over3: 69.23, over4: 38.46, over5: 15.38, aos: 38.46, threes: 0.00, twoes: 7.69, zeroes: 0.00, draw25: 7.69, bts: 84.62, bnts25: 7.69},
 { name: 'Босния и Герцеговина. Кубок', source: 'Марафон', type: 'Кубки', gp: 61, avg: 4.131, over2: 63.93, over3: 52.46, over4: 40.98, over5: 29.51, aos: 36.07, threes: 0.00, twoes: 3.28, zeroes: 3.28, draw25: 3.28, bts: 55.74, bnts25: 16.39},
 { name: 'Босния и Герцеговина. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 36, avg: 2.028, over2: 36.11, over3: 16.67, over4: 2.78, over5: 0.00, aos: 2.78, threes: 0.00, twoes: 2.78, zeroes: 8.33, draw25: 2.78, bts: 36.11, bnts25: 8.33},
 { name: 'Женщины. Япония. Кубок лиги Надэсико. 1-й дивизион', source: 'Марафон', type: 'Кубки', gp: 53, avg: 3.094, over2: 62.26, over3: 28.30, over4: 18.87, over5: 18.87, aos: 18.87, threes: 3.77, twoes: 5.66, zeroes: 7.55, draw25: 9.43, bts: 58.49, bnts25: 11.32},
 { name: 'Китай. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 192, avg: 2.839, over2: 56.25, over3: 34.90, over4: 12.50, over5: 7.29, aos: 11.46, threes: 1.56, twoes: 8.33, zeroes: 6.25, draw25: 10.42, bts: 59.90, bnts25: 8.85},
 { name: 'Австралия. Национальная Премьер-лига. Западная Австралия', source: 'Марафон', type: 'Чемпионаты', gp: 182, avg: 3.363, over2: 65.38, over3: 43.96, over4: 25.27, over5: 10.99, aos: 20.33, threes: 0.55, twoes: 7.14, zeroes: 5.49, draw25: 8.24, bts: 59.34, bnts25: 12.09},
 { name: 'Россия. 2-й дивизион. Урал-Приволжье', source: 'Марафон', type: 'Чемпионаты', gp: 42, avg: 2.881, over2: 50.00, over3: 35.71, over4: 21.43, over5: 11.90, aos: 16.67, threes: 2.38, twoes: 4.76, zeroes: 9.52, draw25: 7.14, bts: 50.00, bnts25: 7.14},
 { name: 'Сборные. Кубок наций ОФК', source: 'Марафон', type: 'Кубки', gp: 27, avg: 3.407, over2: 55.56, over3: 51.85, over4: 29.63, over5: 14.81, aos: 29.63, threes: 0.00, twoes: 7.41, zeroes: 3.70, draw25: 7.41, bts: 40.74, bnts25: 29.63},
 { name: 'Исландия. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 101, avg: 3.010, over2: 61.39, over3: 35.64, over4: 16.83, over5: 5.94, aos: 12.87, threes: 0.00, twoes: 8.91, zeroes: 4.95, draw25: 8.91, bts: 63.37, bnts25: 9.90},
 { name: 'Чили. Примера B', source: 'Марафон', type: 'Чемпионаты', gp: 47, avg: 2.638, over2: 51.06, over3: 27.66, over4: 14.89, over5: 10.64, aos: 10.64, threes: 2.13, twoes: 0.00, zeroes: 10.64, draw25: 2.13, bts: 51.06, bnts25: 10.64},
 { name: 'Женщины. Чемпионат мира', source: 'Марафон', type: 'Чемпионаты', gp: 48, avg: 3.500, over2: 62.50, over3: 41.67, over4: 25.00, over5: 20.83, aos: 29.17, threes: 0.00, twoes: 4.17, zeroes: 8.33, draw25: 4.17, bts: 45.83, bnts25: 20.83},
 { name: 'Казахстан. Кубок', source: 'Марафон', type: 'Кубки', gp: 18, avg: 2.389, over2: 55.56, over3: 27.78, over4: 5.56, over5: 0.00, aos: 5.56, threes: 0.00, twoes: 5.56, zeroes: 16.67, draw25: 5.56, bts: 50.00, bnts25: 5.56},
 { name: 'Армения. Кубок', source: 'Марафон', type: 'Кубки', gp: 15, avg: 2.200, over2: 53.33, over3: 20.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 6.67, zeroes: 13.33, draw25: 6.67, bts: 53.33, bnts25: 6.67},
 { name: 'Перу. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 240, avg: 2.583, over2: 48.75, over3: 25.83, over4: 10.83, over5: 3.75, aos: 8.75, threes: 0.42, twoes: 6.25, zeroes: 8.33, draw25: 6.67, bts: 51.67, bnts25: 9.58},
 { name: 'Япония. Кубок Императора', source: 'Марафон', type: 'Кубки', gp: 48, avg: 2.938, over2: 54.17, over3: 35.42, over4: 22.92, over5: 8.33, aos: 20.83, threes: 0.00, twoes: 2.08, zeroes: 6.25, draw25: 2.08, bts: 47.92, bnts25: 18.75},
 { name: 'Исландия. Кубок', source: 'Марафон', type: 'Кубки', gp: 31, avg: 3.290, over2: 58.06, over3: 38.71, over4: 35.48, over5: 12.90, aos: 29.03, threes: 0.00, twoes: 0.00, zeroes: 3.23, draw25: 0.00, bts: 67.74, bnts25: 6.45},
 { name: 'Ирландия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 21, avg: 2.190, over2: 33.33, over3: 19.05, over4: 9.52, over5: 4.76, aos: 9.52, threes: 0.00, twoes: 0.00, zeroes: 14.29, draw25: 0.00, bts: 19.05, bnts25: 19.05},
 { name: 'Сборные. Чемпионат Европы до 19 лет', source: 'Марафон', type: 'Чемпионаты', gp: 267, avg: 2.963, over2: 58.05, over3: 35.21, over4: 20.22, over5: 4.49, aos: 23.22, threes: 0.00, twoes: 3.00, zeroes: 3.00, draw25: 3.00, bts: 40.07, bnts25: 23.97},
 { name: 'Клубы. Международные. Лига чемпионов АФК', source: 'Марафон', type: 'Чемпионаты', gp: 207, avg: 3.304, over2: 64.25, over3: 44.93, over4: 26.09, over5: 14.98, aos: 21.26, threes: 1.93, twoes: 7.73, zeroes: 8.70, draw25: 10.63, bts: 57.00, bnts25: 15.46},
 { name: 'Клубы. Международные. Лига чемпионов КАФ', source: 'Марафон', type: 'Чемпионаты', gp: 80, avg: 2.400, over2: 45.00, over3: 22.50, over4: 7.50, over5: 5.00, aos: 10.00, threes: 0.00, twoes: 5.00, zeroes: 12.50, draw25: 5.00, bts: 52.50, bnts25: 7.50},
 { name: 'Словакия. Фортуна-лига', source: 'Марафон', type: 'Чемпионаты', gp: 36, avg: 3.056, over2: 58.33, over3: 36.11, over4: 19.44, over5: 11.11, aos: 19.44, threes: 2.78, twoes: 2.78, zeroes: 2.78, draw25: 5.56, bts: 63.89, bnts25: 5.56},
 { name: 'Женщины. Испания. Кубок', source: 'Марафон', type: 'Кубки', gp: 7, avg: 3.000, over2: 71.43, over3: 42.86, over4: 14.29, over5: 0.00, aos: 14.29, threes: 0.00, twoes: 14.29, zeroes: 14.29, draw25: 14.29, bts: 71.43, bnts25: 0.00},
 { name: 'Словения. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 35, avg: 2.914, over2: 57.14, over3: 48.57, over4: 17.14, over5: 8.57, aos: 20.00, threes: 0.00, twoes: 8.57, zeroes: 11.43, draw25: 8.57, bts: 57.14, bnts25: 8.57},
 { name: 'Сборные. Кубок Солидарности АФК', source: 'Марафон', type: 'Кубки', gp: 22, avg: 2.727, over2: 59.09, over3: 22.73, over4: 13.64, over5: 0.00, aos: 18.18, threes: 0.00, twoes: 0.00, zeroes: 9.09, draw25: 0.00, bts: 50.00, bnts25: 27.27},
 { name: 'Женщины. Англия. Кубок Суперлиги', source: 'Марафон', type: 'Кубки', gp: 15, avg: 3.000, over2: 53.33, over3: 46.67, over4: 20.00, over5: 6.67, aos: 20.00, threes: 0.00, twoes: 6.67, zeroes: 13.33, draw25: 6.67, bts: 40.00, bnts25: 13.33},
 { name: 'Канада. CSL. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 53, avg: 4.340, over2: 71.70, over3: 56.60, over4: 43.40, over5: 32.08, aos: 43.40, threes: 1.89, twoes: 5.66, zeroes: 3.77, draw25: 11.32, bts: 58.49, bnts25: 18.87},
 { name: 'Женщины. Бельгия. Кубок', source: 'Марафон', type: 'Кубки', gp: 12, avg: 3.833, over2: 75.00, over3: 58.33, over4: 33.33, over5: 16.67, aos: 41.67, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 25.00, bnts25: 50.00},
 { name: 'Германия. 3-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 60, avg: 2.633, over2: 48.33, over3: 26.67, over4: 15.00, over5: 6.67, aos: 16.67, threes: 1.67, twoes: 5.00, zeroes: 8.33, draw25: 8.33, bts: 45.00, bnts25: 18.33},
 { name: 'Женщины. Олимпийские игры', source: 'Марафон', type: 'Чемпионаты', gp: 113, avg: 3.478, over2: 56.64, over3: 38.94, over4: 27.43, over5: 21.24, aos: 30.97, threes: 0.00, twoes: 3.54, zeroes: 5.31, draw25: 3.54, bts: 44.25, bnts25: 22.12},
 { name: 'Австралия. Национальная Премьер-лига. Квинсленд', source: 'Марафон', type: 'Чемпионаты', gp: 132, avg: 4.076, over2: 76.52, over3: 56.82, over4: 38.64, over5: 22.73, aos: 36.36, threes: 0.00, twoes: 6.82, zeroes: 3.03, draw25: 6.82, bts: 58.33, bnts25: 23.48},
 { name: 'Англия. Национальная лига', source: 'Марафон', type: 'Чемпионаты', gp: 96, avg: 2.573, over2: 45.83, over3: 27.08, over4: 14.58, over5: 7.29, aos: 8.33, threes: 3.13, twoes: 6.25, zeroes: 10.42, draw25: 9.38, bts: 53.13, bnts25: 4.17},
 { name: 'Клубы. Международные. Лига чемпионов КОНКАКАФ', source: 'Марафон', type: 'Чемпионаты', gp: 117, avg: 3.368, over2: 61.54, over3: 36.75, over4: 22.22, over5: 17.09, aos: 24.79, threes: 0.00, twoes: 1.71, zeroes: 5.98, draw25: 3.42, bts: 57.26, bnts25: 18.80},
 { name: 'Польша. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 58, avg: 2.534, over2: 44.83, over3: 24.14, over4: 13.79, over5: 6.90, aos: 10.34, threes: 1.72, twoes: 1.72, zeroes: 6.90, draw25: 3.45, bts: 51.72, bnts25: 5.17},
 { name: 'Фарерские острова. Кубок', source: 'Марафон', type: 'Кубки', gp: 11, avg: 3.000, over2: 54.55, over3: 36.36, over4: 9.09, over5: 9.09, aos: 9.09, threes: 0.00, twoes: 27.27, zeroes: 0.00, draw25: 27.27, bts: 63.64, bnts25: 9.09},
 { name: 'Сборные. Чемпионат КОНКАКАФ до 20 лет', source: 'Марафон', type: 'Чемпионаты', gp: 49, avg: 3.020, over2: 57.14, over3: 36.73, over4: 24.49, over5: 8.16, aos: 28.57, threes: 0.00, twoes: 0.00, zeroes: 2.04, draw25: 0.00, bts: 53.06, bnts25: 12.24},
 { name: 'Гондурас. Национальная лига', source: 'Марафон', type: 'Чемпионаты', gp: 19, avg: 2.105, over2: 36.84, over3: 21.05, over4: 10.53, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 5.26, zeroes: 10.53, draw25: 5.26, bts: 47.37, bnts25: 0.00},
 { name: 'Австралия. Кубок ФФА', source: 'Марафон', type: 'Кубки', gp: 22, avg: 3.091, over2: 59.09, over3: 45.45, over4: 27.27, over5: 13.64, aos: 18.18, threes: 4.55, twoes: 4.55, zeroes: 13.64, draw25: 9.09, bts: 45.45, bnts25: 18.18},
 { name: 'Сборные. Чемпионат Европы до 21 года', source: 'Марафон', type: 'Чемпионаты', gp: 108, avg: 2.685, over2: 55.56, over3: 24.07, over4: 14.81, over5: 7.41, aos: 12.96, threes: 0.00, twoes: 0.00, zeroes: 9.26, draw25: 0.00, bts: 38.89, bnts25: 27.78},
 { name: 'Македония. Кубок', source: 'Марафон', type: 'Кубки', gp: 40, avg: 3.900, over2: 72.50, over3: 60.00, over4: 35.00, over5: 20.00, aos: 32.50, threes: 5.00, twoes: 5.00, zeroes: 7.50, draw25: 10.00, bts: 60.00, bnts25: 12.50},
 { name: 'Словения. Кубок', source: 'Марафон', type: 'Кубки', gp: 14, avg: 3.571, over2: 85.71, over3: 42.86, over4: 28.57, over5: 14.29, aos: 28.57, threes: 0.00, twoes: 7.14, zeroes: 14.29, draw25: 7.14, bts: 64.29, bnts25: 21.43},
 { name: 'Венгрия. Лига NB I', source: 'Марафон', type: 'Чемпионаты', gp: 42, avg: 2.929, over2: 54.76, over3: 40.48, over4: 11.90, over5: 2.38, aos: 11.90, threes: 0.00, twoes: 14.29, zeroes: 2.38, draw25: 14.29, bts: 61.90, bnts25: 7.14},
 { name: 'Чехия. ФНЛ', source: 'Марафон', type: 'Чемпионаты', gp: 48, avg: 2.688, over2: 50.00, over3: 31.25, over4: 18.75, over5: 6.25, aos: 14.58, threes: 2.08, twoes: 4.17, zeroes: 14.58, draw25: 6.25, bts: 56.25, bnts25: 6.25},
 { name: 'Финляндия. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 61, avg: 2.033, over2: 36.07, over3: 13.11, over4: 3.28, over5: 3.28, aos: 0.00, threes: 3.28, twoes: 6.56, zeroes: 14.75, draw25: 9.84, bts: 42.62, bnts25: 6.56},
 { name: 'Фарерские острова. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 100, avg: 3.040, over2: 63.00, over3: 40.00, over4: 16.00, over5: 8.00, aos: 19.00, threes: 0.00, twoes: 12.00, zeroes: 6.00, draw25: 12.00, bts: 59.00, bnts25: 14.00},
 { name: 'Хорватия. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 35, avg: 2.771, over2: 54.29, over3: 31.43, over4: 5.71, over5: 0.00, aos: 8.57, threes: 0.00, twoes: 8.57, zeroes: 0.00, draw25: 8.57, bts: 51.43, bnts25: 14.29},
 { name: 'Женщины. Россия. Высший дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 38, avg: 2.500, over2: 36.84, over3: 21.05, over4: 15.79, over5: 5.26, aos: 10.53, threes: 0.00, twoes: 2.63, zeroes: 5.26, draw25: 2.63, bts: 39.47, bnts25: 10.53},
 { name: 'Венгрия. Кубок', source: 'Марафон', type: 'Кубки', gp: 59, avg: 3.627, over2: 62.71, over3: 38.98, over4: 30.51, over5: 13.56, aos: 25.42, threes: 0.00, twoes: 3.39, zeroes: 3.39, draw25: 3.39, bts: 57.63, bnts25: 13.56},
 { name: 'Республика Корея. K-лига. 2-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 139, avg: 2.583, over2: 46.04, over3: 25.18, over4: 12.95, over5: 7.19, aos: 7.19, threes: 3.60, twoes: 4.32, zeroes: 7.19, draw25: 7.91, bts: 52.52, bnts25: 6.47},
 { name: 'Финляндия. Юккенен', source: 'Марафон', type: 'Чемпионаты', gp: 105, avg: 2.733, over2: 54.29, over3: 30.48, over4: 13.33, over5: 6.67, aos: 12.38, threes: 1.90, twoes: 5.71, zeroes: 7.62, draw25: 7.62, bts: 48.57, bnts25: 16.19},
 { name: 'Сборные. Чемпионат мира до 20 лет', source: 'Марафон', type: 'Чемпионаты', gp: 88, avg: 2.591, over2: 47.73, over3: 27.27, over4: 15.91, over5: 9.09, aos: 10.23, threes: 3.41, twoes: 4.55, zeroes: 12.50, draw25: 7.95, bts: 40.91, bnts25: 14.77},
 { name: 'Австралия. Национальная Премьер-лига. Южная Австралия', source: 'Марафон', type: 'Чемпионаты', gp: 132, avg: 3.311, over2: 66.67, over3: 40.15, over4: 25.00, over5: 12.12, aos: 17.42, threes: 1.52, twoes: 3.03, zeroes: 3.03, draw25: 4.55, bts: 59.85, bnts25: 14.39},
 { name: 'Португалия. 2-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 50, avg: 2.560, over2: 58.00, over3: 18.00, over4: 4.00, over5: 2.00, aos: 4.00, threes: 0.00, twoes: 10.00, zeroes: 6.00, draw25: 10.00, bts: 56.00, bnts25: 12.00},
 { name: 'Хорватия. Кубок', source: 'Марафон', type: 'Кубки', gp: 35, avg: 3.400, over2: 68.57, over3: 45.71, over4: 25.71, over5: 17.14, aos: 25.71, threes: 2.86, twoes: 2.86, zeroes: 2.86, draw25: 5.71, bts: 57.14, bnts25: 22.86},
 { name: 'Сборные. Товарищеский турнир. Турнир памяти Гранаткина', source: 'Марафон', type: 'Чемпионаты', gp: 72, avg: 2.472, over2: 50.00, over3: 27.78, over4: 11.11, over5: 4.17, aos: 18.06, threes: 0.00, twoes: 6.94, zeroes: 15.28, draw25: 6.94, bts: 33.33, bnts25: 25.00},
 { name: 'Болгария. 1-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 48, avg: 2.563, over2: 41.67, over3: 25.00, over4: 16.67, over5: 6.25, aos: 18.75, threes: 0.00, twoes: 0.00, zeroes: 10.42, draw25: 0.00, bts: 47.92, bnts25: 12.50},
 { name: 'ЮАР. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 16, avg: 2.313, over2: 31.25, over3: 18.75, over4: 6.25, over5: 0.00, aos: 6.25, threes: 0.00, twoes: 6.25, zeroes: 0.00, draw25: 6.25, bts: 56.25, bnts25: 6.25},
 { name: 'Сборные. Кубок АФФ', source: 'Марафон', type: 'Кубки', gp: 33, avg: 2.970, over2: 63.64, over3: 36.36, over4: 21.21, over5: 12.12, aos: 12.12, threes: 3.03, twoes: 6.06, zeroes: 6.06, draw25: 9.09, bts: 57.58, bnts25: 6.06},
 { name: 'Сингапур. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 27, avg: 3.407, over2: 59.26, over3: 44.44, over4: 33.33, over5: 25.93, aos: 29.63, threes: 7.41, twoes: 7.41, zeroes: 11.11, draw25: 14.81, bts: 48.15, bnts25: 18.52},
 { name: 'Япония. Кубок лиги', source: 'Марафон', type: 'Кубки', gp: 88, avg: 2.795, over2: 50.00, over3: 28.41, over4: 18.18, over5: 10.23, aos: 17.05, threes: 0.00, twoes: 2.27, zeroes: 5.68, draw25: 4.55, bts: 51.14, bnts25: 3.41},
 { name: 'Сборные. Кубок наций Персидского залива', source: 'Марафон', type: 'Кубки', gp: 28, avg: 1.893, over2: 32.14, over3: 21.43, over4: 10.71, over5: 0.00, aos: 7.14, threes: 0.00, twoes: 7.14, zeroes: 28.57, draw25: 7.14, bts: 32.14, bnts25: 14.29},
 { name: 'Латвия. Высшая лига', source: 'Марафон', type: 'Чемпионаты', gp: 59, avg: 2.271, over2: 40.68, over3: 18.64, over4: 5.08, over5: 3.39, aos: 6.78, threes: 0.00, twoes: 1.69, zeroes: 10.17, draw25: 1.69, bts: 42.37, bnts25: 10.17},
 { name: 'Сборные. КОНКАКАФ Голд Кап', source: 'Марафон', type: 'Чемпионаты', gp: 43, avg: 2.256, over2: 37.21, over3: 13.95, over4: 9.30, over5: 4.65, aos: 4.65, threes: 0.00, twoes: 0.00, zeroes: 13.95, draw25: 0.00, bts: 37.21, bnts25: 13.95},
 { name: 'Индия. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 2.393, over2: 35.71, over3: 19.64, over4: 12.50, over5: 8.93, aos: 8.93, threes: 3.57, twoes: 3.57, zeroes: 8.93, draw25: 7.14, bts: 51.79, bnts25: 1.79},
 { name: 'Испания. 2-й дивизион B', source: 'Марафон', type: 'Чемпионаты', gp: 120, avg: 2.158, over2: 38.33, over3: 15.83, over4: 7.50, over5: 3.33, aos: 6.67, threes: 1.67, twoes: 3.33, zeroes: 10.83, draw25: 5.00, bts: 46.67, bnts25: 5.83},
 { name: 'Северная Ирландия. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 29, avg: 3.241, over2: 48.28, over3: 34.48, over4: 24.14, over5: 13.79, aos: 24.14, threes: 0.00, twoes: 3.45, zeroes: 0.00, draw25: 3.45, bts: 51.72, bnts25: 6.90},
 { name: 'Эстония. Премиум лига', source: 'Марафон', type: 'Чемпионаты', gp: 135, avg: 3.637, over2: 62.96, over3: 40.74, over4: 28.89, over5: 17.78, aos: 25.93, threes: 0.74, twoes: 1.48, zeroes: 2.22, draw25: 2.22, bts: 52.59, bnts25: 21.48},
 { name: 'Латвия. Кубок', source: 'Марафон', type: 'Кубки', gp: 9, avg: 3.556, over2: 55.56, over3: 33.33, over4: 33.33, over5: 22.22, aos: 33.33, threes: 0.00, twoes: 0.00, zeroes: 22.22, draw25: 0.00, bts: 22.22, bnts25: 33.33},
 { name: 'Россия. Молодежное первенство', source: 'Марафон', type: 'Чемпионаты', gp: 63, avg: 3.159, over2: 69.84, over3: 46.03, over4: 22.22, over5: 7.94, aos: 19.05, threes: 1.59, twoes: 9.52, zeroes: 11.11, draw25: 11.11, bts: 65.08, bnts25: 11.11},
 { name: 'Мексика. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 63, avg: 2.603, over2: 49.21, over3: 25.40, over4: 14.29, over5: 0.00, aos: 7.94, threes: 0.00, twoes: 6.35, zeroes: 7.94, draw25: 6.35, bts: 58.73, bnts25: 7.94},
 { name: 'Эстония. Кубок', source: 'Марафон', type: 'Кубки', gp: 54, avg: 6.444, over2: 79.63, over3: 70.37, over4: 59.26, over5: 50.00, aos: 59.26, threes: 1.85, twoes: 1.85, zeroes: 1.85, draw25: 3.70, bts: 50.00, bnts25: 35.19},
 { name: 'Нидерланды. 1-й дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 30, avg: 3.033, over2: 63.33, over3: 33.33, over4: 13.33, over5: 13.33, aos: 10.00, threes: 3.33, twoes: 13.33, zeroes: 6.67, draw25: 16.67, bts: 66.67, bnts25: 10.00},
 { name: 'ОАЭ. Кубок Президента', source: 'Марафон', type: 'Кубки', gp: 15, avg: 2.600, over2: 33.33, over3: 20.00, over4: 20.00, over5: 13.33, aos: 13.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 40.00, bnts25: 13.33},
 { name: 'Женщины. США. Национальная лига', source: 'Марафон', type: 'Чемпионаты', gp: 50, avg: 3.520, over2: 78.00, over3: 42.00, over4: 26.00, over5: 8.00, aos: 22.00, threes: 0.00, twoes: 4.00, zeroes: 0.00, draw25: 4.00, bts: 68.00, bnts25: 10.00},
 { name: 'Англия. 2-я лига', source: 'Марафон', type: 'Чемпионаты', gp: 60, avg: 2.933, over2: 51.67, over3: 36.67, over4: 20.00, over5: 10.00, aos: 13.33, threes: 1.67, twoes: 8.33, zeroes: 5.00, draw25: 10.00, bts: 53.33, bnts25: 6.67},
 { name: 'Аргентина. Кубок', source: 'Марафон', type: 'Кубки', gp: 46, avg: 2.435, over2: 43.48, over3: 21.74, over4: 15.22, over5: 6.52, aos: 13.04, threes: 0.00, twoes: 4.35, zeroes: 6.52, draw25: 4.35, bts: 45.65, bnts25: 10.87},
 { name: 'Китай. Суперлига', source: 'Марафон', type: 'Чемпионаты', gp: 181, avg: 2.906, over2: 55.25, over3: 31.49, over4: 16.02, over5: 7.18, aos: 13.81, threes: 0.00, twoes: 6.63, zeroes: 6.08, draw25: 6.63, bts: 60.22, bnts25: 10.50},
 { name: 'Греция. Кубок', source: 'Марафон', type: 'Кубки', gp: 139, avg: 2.827, over2: 57.55, over3: 33.09, over4: 15.83, over5: 11.51, aos: 20.86, threes: 1.44, twoes: 5.76, zeroes: 8.63, draw25: 7.19, bts: 35.25, bnts25: 26.62},
 { name: 'Литва. А-лига', source: 'Марафон', type: 'Чемпионаты', gp: 88, avg: 2.409, over2: 38.64, over3: 25.00, over4: 12.50, over5: 4.55, aos: 13.64, threes: 1.14, twoes: 2.27, zeroes: 9.09, draw25: 3.41, bts: 48.86, bnts25: 10.23},
 { name: 'Чили. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 40, avg: 2.025, over2: 35.00, over3: 17.50, over4: 5.00, over5: 0.00, aos: 5.00, threes: 0.00, twoes: 2.50, zeroes: 17.50, draw25: 2.50, bts: 47.50, bnts25: 2.50},
 { name: 'Украина. Кубок', source: 'Марафон', type: 'Кубки', gp: 13, avg: 2.615, over2: 46.15, over3: 38.46, over4: 15.38, over5: 0.00, aos: 15.38, threes: 0.00, twoes: 7.69, zeroes: 7.69, draw25: 7.69, bts: 38.46, bnts25: 15.38},
 { name: 'Уэльс. Премьер-лига', source: 'Марафон', type: 'Чемпионаты', gp: 18, avg: 2.833, over2: 55.56, over3: 27.78, over4: 11.11, over5: 5.56, aos: 16.67, threes: 0.00, twoes: 0.00, zeroes: 0.00, draw25: 0.00, bts: 38.89, bnts25: 27.78},
 { name: 'Сборные. Чемпионат КОНКАКАФ до 17 лет', source: 'Марафон', type: 'Чемпионаты', gp: 48, avg: 3.792, over2: 70.83, over3: 45.83, over4: 33.33, over5: 29.17, aos: 33.33, threes: 0.00, twoes: 0.00, zeroes: 4.17, draw25: 0.00, bts: 54.17, bnts25: 20.83},
 { name: 'Северная Ирландия. Кубок', source: 'Марафон', type: 'Кубки', gp: 30, avg: 2.933, over2: 53.33, over3: 26.67, over4: 23.33, over5: 6.67, aos: 26.67, threes: 0.00, twoes: 0.00, zeroes: 3.33, draw25: 0.00, bts: 46.67, bnts25: 20.00},
 { name: 'Швеция. Кубок', source: 'Марафон', type: 'Кубки', gp: 31, avg: 3.613, over2: 70.97, over3: 48.39, over4: 29.03, over5: 12.90, aos: 25.81, threes: 3.23, twoes: 6.45, zeroes: 3.23, draw25: 9.68, bts: 67.74, bnts25: 12.90},
 { name: 'Уругвай. Примера дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 144, avg: 2.729, over2: 56.25, over3: 30.56, over4: 11.11, over5: 4.86, aos: 10.42, threes: 0.00, twoes: 8.33, zeroes: 7.64, draw25: 9.03, bts: 52.78, bnts25: 12.50},
 { name: 'Бразилия. Северо-восточный кубок', source: 'Марафон', type: 'Кубки', gp: 121, avg: 2.661, over2: 48.76, over3: 23.97, over4: 14.05, over5: 8.26, aos: 14.88, threes: 0.00, twoes: 3.31, zeroes: 8.26, draw25: 4.13, bts: 40.50, bnts25: 14.05},
 { name: 'Сборные. Чемпионат АФК до 19 лет', source: 'Марафон', type: 'Чемпионаты', gp: 55, avg: 2.600, over2: 54.55, over3: 30.91, over4: 12.73, over5: 1.82, aos: 10.91, threes: 0.00, twoes: 1.82, zeroes: 16.36, draw25: 1.82, bts: 43.64, bnts25: 18.18},
 { name: 'Германия. Региональная лига. Север', source: 'Марафон', type: 'Чемпионаты', gp: 51, avg: 3.176, over2: 58.82, over3: 41.18, over4: 25.49, over5: 9.80, aos: 21.57, threes: 0.00, twoes: 5.88, zeroes: 5.88, draw25: 7.84, bts: 62.75, bnts25: 7.84},
 { name: 'Россия. 2-й дивизион. Запад', source: 'Марафон', type: 'Чемпионаты', gp: 49, avg: 2.735, over2: 46.94, over3: 32.65, over4: 18.37, over5: 8.16, aos: 12.24, threes: 4.08, twoes: 4.08, zeroes: 8.16, draw25: 8.16, bts: 34.69, bnts25: 18.37},
 { name: 'Болгария. Кубок', source: 'Марафон', type: 'Кубки', gp: 35, avg: 3.343, over2: 51.43, over3: 34.29, over4: 20.00, over5: 14.29, aos: 25.71, threes: 0.00, twoes: 2.86, zeroes: 0.00, draw25: 2.86, bts: 42.86, bnts25: 22.86},
 { name: 'Люксембург. Кубок', source: 'Марафон', type: 'Кубки', gp: 15, avg: 3.400, over2: 60.00, over3: 46.67, over4: 26.67, over5: 13.33, aos: 40.00, threes: 0.00, twoes: 6.67, zeroes: 6.67, draw25: 6.67, bts: 40.00, bnts25: 33.33},
 { name: 'Сборные. Чемпионат африканских наций', source: 'Марафон', type: 'Чемпионаты', gp: 56, avg: 2.429, over2: 48.21, over3: 32.14, over4: 17.86, over5: 3.57, aos: 17.86, threes: 0.00, twoes: 10.71, zeroes: 16.07, draw25: 10.71, bts: 48.21, bnts25: 8.93},
 { name: 'Италия. Кубок Серии C', source: 'Марафон', type: 'Кубки', gp: 58, avg: 2.655, over2: 55.17, over3: 31.03, over4: 10.34, over5: 3.45, aos: 13.79, threes: 0.00, twoes: 6.90, zeroes: 6.90, draw25: 6.90, bts: 41.38, bnts25: 24.14},
 { name: 'Сборные. Международный турнир до 21 года. Кубок Содружества', source: 'Марафон', type: 'Кубки', gp: 28, avg: 2.750, over2: 64.29, over3: 28.57, over4: 21.43, over5: 3.57, aos: 10.71, threes: 0.00, twoes: 7.14, zeroes: 14.29, draw25: 7.14, bts: 64.29, bnts25: 0.00},
 { name: 'Люксембург. Национальный дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 28, avg: 3.357, over2: 67.86, over3: 42.86, over4: 21.43, over5: 14.29, aos: 21.43, threes: 3.57, twoes: 3.57, zeroes: 7.14, draw25: 7.14, bts: 64.29, bnts25: 10.71},
 { name: 'Австрия. Региональная лига. Восток', source: 'Марафон', type: 'Чемпионаты', gp: 48, avg: 3.208, over2: 58.33, over3: 45.83, over4: 18.75, over5: 12.50, aos: 18.75, threes: 4.17, twoes: 2.08, zeroes: 6.25, draw25: 6.25, bts: 56.25, bnts25: 12.50},
 { name: 'Австрия. Региональная лига. Центр', source: 'Марафон', type: 'Чемпионаты', gp: 63, avg: 3.159, over2: 55.56, over3: 44.44, over4: 23.81, over5: 12.70, aos: 20.63, threes: 1.59, twoes: 6.35, zeroes: 4.76, draw25: 7.94, bts: 50.79, bnts25: 11.11},
 { name: 'Австрия. Региональная лига. Запад', source: 'Марафон', type: 'Чемпионаты', gp: 63, avg: 3.429, over2: 65.08, over3: 50.79, over4: 28.57, over5: 14.29, aos: 30.16, threes: 3.17, twoes: 7.94, zeroes: 6.35, draw25: 11.11, bts: 49.21, bnts25: 23.81},
 { name: 'Россия. 2-й дивизион. Юг', source: 'Марафон', type: 'Чемпионаты', gp: 54, avg: 2.611, over2: 44.44, over3: 24.07, over4: 14.81, over5: 11.11, aos: 11.11, threes: 3.70, twoes: 1.85, zeroes: 5.56, draw25: 5.56, bts: 46.30, bnts25: 11.11},
 { name: 'Сборные. Кубок вызова АФК', source: 'Марафон', type: 'Кубки', gp: 28, avg: 2.036, over2: 25.00, over3: 25.00, over4: 14.29, over5: 7.14, aos: 7.14, threes: 0.00, twoes: 3.57, zeroes: 25.00, draw25: 3.57, bts: 25.00, bnts25: 0.00},
 { name: 'Россия. 2-й дивизион. Восток', source: 'Марафон', type: 'Чемпионаты', gp: 18, avg: 1.556, over2: 22.22, over3: 5.56, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 5.56, zeroes: 16.67, draw25: 5.56, bts: 27.78, bnts25: 5.56},
 { name: 'Женщины. Чемпионат Европы до 17 лет', source: 'Марафон', type: 'Чемпионаты', gp: 99, avg: 2.727, over2: 48.48, over3: 24.24, over4: 16.16, over5: 10.10, aos: 20.20, threes: 0.00, twoes: 0.00, zeroes: 9.09, draw25: 0.00, bts: 45.45, bnts25: 12.12},
 { name: 'Бразилия. Серия А', source: 'Марафон', type: 'Чемпионаты', gp: 220, avg: 2.386, over2: 38.18, over3: 23.18, over4: 11.36, over5: 5.00, aos: 9.09, threes: 0.91, twoes: 4.55, zeroes: 9.55, draw25: 5.45, bts: 40.45, bnts25: 7.73},
 { name: 'Сборные. Кубок конфедераций', source: 'Марафон', type: 'Кубки', gp: 28, avg: 2.714, over2: 46.43, over3: 32.14, over4: 10.71, over5: 0.00, aos: 10.71, threes: 0.00, twoes: 7.14, zeroes: 3.57, draw25: 7.14, bts: 64.29, bnts25: 7.14},
 { name: 'Уэльс. Кубок', source: 'Марафон', type: 'Кубки', gp: 29, avg: 3.966, over2: 75.86, over3: 58.62, over4: 37.93, over5: 27.59, aos: 41.38, threes: 0.00, twoes: 6.90, zeroes: 3.45, draw25: 6.90, bts: 51.72, bnts25: 31.03},
 { name: 'Клубы. Международные. Южноамериканский кубок', source: 'Марафон', type: 'Кубки', gp: 120, avg: 3.433, over2: 55.83, over3: 37.50, over4: 25.83, over5: 18.33, aos: 20.83, threes: 2.50, twoes: 5.00, zeroes: 2.50, draw25: 7.50, bts: 63.33, bnts25: 7.50},
 { name: 'Ирландия. Премьер-дивизион', source: 'Марафон', type: 'Чемпионаты', gp: 161, avg: 2.752, over2: 52.80, over3: 27.33, over4: 13.04, over5: 3.73, aos: 14.29, threes: 0.00, twoes: 2.48, zeroes: 5.59, draw25: 2.48, bts: 50.93, bnts25: 15.53}
];


var render25 = function(o) {
  if (o.value < 25 ) { o.style = { color: 'Red'};}
  else if (o.value < 30 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 50 ) { o.style = { color: 'Orange'};}
  else if (o.value < 60 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 80 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 80 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var render35 = function(o) {
  if (o.value < 10 ) { o.style = { color: 'Red'};}
  else if (o.value < 20 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 35 ) { o.style = { color: 'Orange'};}
  else if (o.value < 45 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 65 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 65 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var render45 = function(o) {
  if (o.value <= 0 ) { o.style = { color: 'Red'};}
  else if (o.value < 10 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 15 ) { o.style = { color: 'Orange'};}
  else if (o.value < 20 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 25 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 25 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var render55 = function(o) {
  if (o.value <= 0 ) { o.style = { color: 'Red'};}
  else if (o.value < 5 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 10 ) { o.style = { color: 'Orange'};}
  else if (o.value < 15 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 20 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 20 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var renderLDS = function(o) {
  if (o.value <= 0 ) { o.style = { color: 'Red'};}
  else if (o.value < 5 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 10 ) { o.style = { color: 'Orange'};}
  else if (o.value < 15 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 20 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 20 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var renderChangesFn = function(o) {
  if (o.value < 10 ) { o.style = { color: 'Red'};}
  else if (o.value < 20 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 30 ) { o.style = { color: 'Orange'};}
  else if (o.value < 35 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 45 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 45 ) { o.style = { color: 'Green'};}
  o.value = o.value + '%';
  return o;
};

var renderAVG = function(o) {
  if (o.value < 2 ) { o.style = { color: 'Red'};}
  else if (o.value < 2.5 ) { o.style = { color: 'OrangeRed'};}
  else if (o.value < 3 ) { o.style = { color: 'Orange'};}
  else if (o.value < 3.5 ) { o.style = { color: 'Yellow'};}
  else if (o.value < 4 ) { o.style = { color: 'YellowGreen'};}
  else if (o.value >= 4 ) { o.style = { color: 'Green'};}
  // o.value = o.value + '%';
  return o;
};

$(function(){

  new FancyGrid({
    theme: 'dark',
    title: {
    text: 'Totals and any other score',
    style: {
      'text-align': 'center'
    }
  },
    renderTo: 'container',
    width: 'fit',
    height: 1000,
    data: data,
    selModel: 'rows',
    //multiSort: true,
    trackOver: true,
    textSelection: true,
    defaults: {
      type: 'string',
      resizable: true,
      sortable: true
    },
	grouping: 
	  {
		  by: 'type'
	  },
    columnLines: false,	  
    columns: [
	    {
		    index: 'name', 
		    title: 'League',
		    width: 300, 
		    filter: {
        		header: true,
        		emptyText: 'Поиск по лиге'
      			}
	    },
	    {index: 'source', title: 'Букмекер', width: 70, type: 'string'},
	    {index: 'gp', title: 'GP', width: 50, type: 'number'},
	    {index: 'avg', title: 'AVG', width: 50, type: 'number', render: renderAVG},
	    {index: 'over2', title: 'ТБ2.5', width: 60, type: 'number', render: render25},
	    {index: 'over3', title: 'ТБ3.5', width: 60, type: 'number', render: render35},
	    {index: 'over4', title: 'ТБ4.5', width: 60, type: 'number', render: render45},
	    {index: 'over5', title: 'ТБ5.5', width: 60, type: 'number', render: render55},
	    {index: 'aos', title: 'ЛДС', width: 60, type: 'number', render: renderLDS},
	    {index: 'threes', title: '3:3', width: 60, type: 'number', render: renderChangesFn},
	    {index: 'twoes', title: '2:2', width: 60, type: 'number', render: renderChangesFn},
	    {index: 'zeroes', title: '0:0', width: 60, type: 'number', render: renderChangesFn},
	    {index: 'draw25', title: 'Н+ТБ2.5', width: 75, type: 'number', render: renderChangesFn},
	    {index: 'bts', title: 'ОЗ', width: 60, type: 'number', render: renderChangesFn},
      {index: 'bnts25', title: '!ОЗ+ТБ2.5', width: 100, type: 'number', render: renderChangesFn}
    ]
  });

});
