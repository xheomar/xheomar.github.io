var data = [
 { name: 'Чемпионат Франции. Национальная лига', gp: 32, avg: 2.188, over2: 31.25, over3: 15.63, over4: 12.50, over5: 3.13, aos: 9.38, threes: 0.00, twoes: 0.00, zeroes: 6.25, bts: 46.88},
 { name: 'Чемпионат NASL (США)', gp: 22, avg: 2.864, over2: 54.55, over3: 36.36, over4: 13.64, over5: 4.55, aos: 0.00, threes: 4.55, twoes: 9.09, zeroes: 4.55, bts: 77.27},
 { name: 'Чемпионат Исландии. 1-й дивизион', gp: 108, avg: 2.880, over2: 57.41, over3: 30.56, over4: 13.89, over5: 4.63, aos: 6.48, threes: 1.85, twoes: 5.56, zeroes: 2.78, bts: 57.41},
 { name: 'Чемпионат Азербайджана', gp: 12, avg: 2.250, over2: 58.33, over3: 16.67, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 8.33, bts: 50.00},
 { name: 'Чемпионат Армении', gp: 11, avg: 2.909, over2: 72.73, over3: 36.36, over4: 9.09, over5: 9.09, aos: 9.09, threes: 0.00, twoes: 18.18, zeroes: 9.09, bts: 63.64},
 { name: 'Чемпионат Алжира', gp: 8, avg: 2.500, over2: 50.00, over3: 12.50, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 62.50},
 { name: 'Чемпионат Китая', gp: 181, avg: 2.906, over2: 55.25, over3: 31.49, over4: 16.02, over5: 7.18, aos: 13.81, threes: 0.00, twoes: 6.63, zeroes: 6.08, bts: 60.22},
 { name: 'Чемпионат Австралии. Премьер-лига Квинсленда', gp: 132, avg: 4.076, over2: 76.52, over3: 56.82, over4: 38.64, over5: 22.73, aos: 36.36, threes: 0.00, twoes: 6.82, zeroes: 3.03, bts: 58.33},
 { name: 'Чемпионат Польши. 1-й дивизион', gp: 48, avg: 2.458, over2: 43.75, over3: 25.00, over4: 12.50, over5: 6.25, aos: 8.33, threes: 2.08, twoes: 2.08, zeroes: 6.25, bts: 43.75},
 { name: 'Чемпионат Англии. Премьер-лига', gp: 26, avg: 2.423, over2: 38.46, over3: 23.08, over4: 15.38, over5: 7.69, aos: 11.54, threes: 3.85, twoes: 0.00, zeroes: 11.54, bts: 26.92},
 { name: 'Чемпионат Англии. Национальная лига. Север.', gp: 66, avg: 2.970, over2: 56.06, over3: 31.82, over4: 21.21, over5: 9.09, aos: 22.73, threes: 1.52, twoes: 1.52, zeroes: 3.03, bts: 42.42},
 { name: 'Чемпионат Кувейта. 1-й дивизион.', gp: 60, avg: 2.217, over2: 45.00, over3: 16.67, over4: 6.67, over5: 3.33, aos: 6.67, threes: 0.00, twoes: 5.00, zeroes: 13.33, bts: 36.67},
 { name: 'Чемпионат Южной Кореи. 3-я лига', gp: 84, avg: 2.429, over2: 45.24, over3: 21.43, over4: 14.29, over5: 4.76, aos: 5.95, threes: 1.19, twoes: 4.76, zeroes: 13.10, bts: 52.38},
 { name: 'Чемпионат Англии. Национальная лига. Юг.', gp: 66, avg: 2.924, over2: 51.52, over3: 31.82, over4: 21.21, over5: 7.58, aos: 6.06, threes: 1.52, twoes: 9.09, zeroes: 6.06, bts: 54.55},
 { name: 'Чемпионат Германии. Бундеслига', gp: 16, avg: 2.063, over2: 31.25, over3: 25.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 12.50, zeroes: 6.25, bts: 25.00},
 { name: 'Женщины. Чемпионат Южной Америки (до 20 лет)', gp: 12, avg: 1.833, over2: 50.00, over3: 33.33, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 16.67, zeroes: 50.00, bts: 50.00},
 { name: 'Женщины. Чемпионат Восточной Азии', gp: 12, avg: 3.167, over2: 50.00, over3: 33.33, over4: 33.33, over5: 16.67, aos: 16.67, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 50.00},
 { name: 'Чемпионат Никарагуа', gp: 54, avg: 2.444, over2: 40.74, over3: 22.22, over4: 7.41, over5: 3.70, aos: 14.81, threes: 0.00, twoes: 0.00, zeroes: 3.70, bts: 48.15},
 { name: 'Чемпионат Южной Америки До 20 лет', gp: 30, avg: 2.867, over2: 73.33, over3: 20.00, over4: 6.67, over5: 6.67, aos: 6.67, threes: 0.00, twoes: 13.33, zeroes: 6.67, bts: 46.67},
 { name: 'Чемпионат Бангладеш', gp: 110, avg: 3.018, over2: 57.27, over3: 36.36, over4: 20.00, over5: 10.00, aos: 19.09, threes: 0.00, twoes: 5.45, zeroes: 9.09, bts: 53.64},
 { name: 'Чемпионат Австралии. Премьер-лига Брисбена', gp: 133, avg: 3.970, over2: 75.94, over3: 58.65, over4: 35.34, over5: 20.30, aos: 24.06, threes: 3.76, twoes: 6.77, zeroes: 2.26, bts: 71.43},
 { name: 'Чемпионат Германии. 3-я бундеслига', gp: 58, avg: 2.672, over2: 50.00, over3: 27.59, over4: 15.52, over5: 6.90, aos: 17.24, threes: 1.72, twoes: 5.17, zeroes: 8.62, bts: 44.83},
 { name: 'Чемпионат Ирана', gp: 39, avg: 2.333, over2: 43.59, over3: 17.95, over4: 7.69, over5: 0.00, aos: 5.13, threes: 0.00, twoes: 7.69, zeroes: 7.69, bts: 51.28},
 { name: 'Чемпионат Германии. Региональная лига. Юго-Запад', gp: 49, avg: 3.245, over2: 65.31, over3: 42.86, over4: 22.45, over5: 12.24, aos: 16.33, threes: 2.04, twoes: 4.08, zeroes: 12.24, bts: 67.35},
 { name: 'Чемпионат Германии. Региональная лига. Северо-Восток', gp: 41, avg: 2.878, over2: 56.10, over3: 36.59, over4: 19.51, over5: 9.76, aos: 19.51, threes: 4.88, twoes: 4.88, zeroes: 4.88, bts: 48.78},
 { name: 'Чемпионат Малайзии. Суперлига', gp: 114, avg: 3.132, over2: 54.39, over3: 37.72, over4: 22.81, over5: 12.28, aos: 15.79, threes: 0.88, twoes: 5.26, zeroes: 3.51, bts: 59.65},
 { name: 'Чемпионат Германии. Региональная лига. Бавария', gp: 71, avg: 3.479, over2: 64.79, over3: 49.30, over4: 32.39, over5: 14.08, aos: 25.35, threes: 1.41, twoes: 5.63, zeroes: 4.23, bts: 64.79},
 { name: 'Чемпионат Японии. 2-й дивизион', gp: 326, avg: 2.549, over2: 45.40, over3: 25.15, over4: 11.35, over5: 3.99, aos: 8.90, threes: 0.92, twoes: 4.29, zeroes: 6.44, bts: 50.00},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 1', gp: 124, avg: 2.895, over2: 58.06, over3: 30.65, over4: 16.94, over5: 8.87, aos: 13.71, threes: 1.61, twoes: 8.06, zeroes: 6.45, bts: 51.61},
 { name: 'Чемпионат Португалии. 2-й дивизион', gp: 38, avg: 2.579, over2: 63.16, over3: 13.16, over4: 2.63, over5: 0.00, aos: 2.63, threes: 0.00, twoes: 5.26, zeroes: 7.89, bts: 60.53},
 { name: 'Чемпионат Кувейта', gp: 210, avg: 3.048, over2: 54.76, over3: 32.86, over4: 20.00, over5: 12.38, aos: 19.52, threes: 2.38, twoes: 2.86, zeroes: 5.24, bts: 52.38},
 { name: 'Чемпионат Южной Америки До 17 лет', gp: 30, avg: 2.933, over2: 66.67, over3: 40.00, over4: 13.33, over5: 6.67, aos: 20.00, threes: 0.00, twoes: 13.33, zeroes: 6.67, bts: 40.00},
 { name: 'Чемпионат Черногории', gp: 25, avg: 2.280, over2: 40.00, over3: 20.00, over4: 12.00, over5: 4.00, aos: 12.00, threes: 4.00, twoes: 4.00, zeroes: 8.00, bts: 48.00},
 { name: 'Чемпионат Бразилии. Серия C', gp: 155, avg: 2.065, over2: 30.97, over3: 13.55, over4: 5.16, over5: 1.29, aos: 1.94, threes: 0.65, twoes: 4.52, zeroes: 10.97, bts: 45.81},
 { name: 'Чемпионат Украины (до 19 лет)', gp: 96, avg: 3.240, over2: 56.25, over3: 37.50, over4: 25.00, over5: 13.54, aos: 22.92, threes: 0.00, twoes: 1.04, zeroes: 4.17, bts: 52.08},
 { name: 'Чемпионат Шотландии. 2-я лига', gp: 20, avg: 3.100, over2: 60.00, over3: 40.00, over4: 20.00, over5: 10.00, aos: 15.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 60.00},
 { name: 'Чемпионат Германии. Региональная лига. Север', gp: 41, avg: 3.366, over2: 63.41, over3: 43.90, over4: 29.27, over5: 9.76, aos: 24.39, threes: 0.00, twoes: 4.88, zeroes: 4.88, bts: 65.85},
 { name: 'Чемпионат России. Турнир молодёжных команд', gp: 62, avg: 3.145, over2: 69.35, over3: 45.16, over4: 22.58, over5: 8.06, aos: 19.35, threes: 1.61, twoes: 9.68, zeroes: 11.29, bts: 64.52},
 { name: 'Чемпионат Германии. Региональная лига. Юг', gp: 306, avg: 2.987, over2: 58.17, over3: 36.27, over4: 17.65, over5: 5.88, aos: 15.03, threes: 0.65, twoes: 4.90, zeroes: 4.58, bts: 56.54},
 { name: 'Чемпионат Англии. Национальная лига', gp: 71, avg: 2.732, over2: 50.70, over3: 28.17, over4: 16.90, over5: 9.86, aos: 8.45, threes: 4.23, twoes: 7.04, zeroes: 9.86, bts: 57.75},
 { name: 'Чемпионат Болгарии', gp: 44, avg: 2.568, over2: 40.91, over3: 25.00, over4: 15.91, over5: 6.82, aos: 18.18, threes: 0.00, twoes: 0.00, zeroes: 9.09, bts: 47.73},
 { name: 'Чемпионат Израиля. 2-й дивизион', gp: 13, avg: 2.000, over2: 23.08, over3: 15.38, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 7.69, zeroes: 0.00, bts: 15.38},
 { name: 'Чемпионат Перу', gp: 16, avg: 3.125, over2: 75.00, over3: 37.50, over4: 25.00, over5: 0.00, aos: 25.00, threes: 0.00, twoes: 0.00, zeroes: 12.50, bts: 50.00},
 { name: 'Чемпионат Колумбии', gp: 186, avg: 2.124, over2: 32.80, over3: 16.13, over4: 7.53, over5: 3.23, aos: 4.30, threes: 0.00, twoes: 3.23, zeroes: 10.75, bts: 40.32},
 { name: 'Чемпионат Ирландии. 1-й дивизион', gp: 96, avg: 2.490, over2: 42.71, over3: 27.08, over4: 12.50, over5: 5.21, aos: 11.46, threes: 2.08, twoes: 4.17, zeroes: 9.38, bts: 45.83},
 { name: 'Чемпионат USL Pro (США)', gp: 352, avg: 2.716, over2: 49.43, over3: 30.97, over4: 13.92, over5: 6.25, aos: 11.65, threes: 1.14, twoes: 5.11, zeroes: 7.10, bts: 51.70},
 { name: 'Чемпионат Бразилии. Серия B', gp: 220, avg: 2.241, over2: 40.91, over3: 18.18, over4: 7.27, over5: 0.91, aos: 4.55, threes: 0.00, twoes: 4.09, zeroes: 10.00, bts: 46.36},
 { name: 'Женщины. Лига Чемпионов УЕФА', gp: 72, avg: 4.611, over2: 77.78, over3: 63.89, over4: 50.00, over5: 36.11, aos: 61.11, threes: 0.00, twoes: 0.00, zeroes: 5.56, bts: 25.00},
 { name: 'Чемпионат Турции. 2-й дивизион', gp: 19, avg: 2.684, over2: 52.63, over3: 31.58, over4: 10.53, over5: 5.26, aos: 10.53, threes: 0.00, twoes: 15.79, zeroes: 5.26, bts: 47.37},
 { name: 'Чемпионат Тринидада и Тобаго', gp: 68, avg: 2.324, over2: 45.59, over3: 26.47, over4: 10.29, over5: 1.47, aos: 13.24, threes: 0.00, twoes: 4.41, zeroes: 14.71, bts: 51.47},
 { name: 'Чемпионат Кипра', gp: 6, avg: 1.500, over2: 16.67, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 16.67, bts: 33.33},
 { name: 'Чемпионат Финляндии. 2-й дивизион', gp: 99, avg: 2.606, over2: 51.52, over3: 27.27, over4: 12.12, over5: 6.06, aos: 12.12, threes: 2.02, twoes: 6.06, zeroes: 9.09, bts: 45.45},
 { name: 'Чемпионат Греции. 2-й дивизион', gp: 284, avg: 2.338, over2: 44.01, over3: 21.83, over4: 8.80, over5: 3.17, aos: 10.21, threes: 0.00, twoes: 2.46, zeroes: 11.27, bts: 37.68},
 { name: 'Чемпионат России. Женщины', gp: 35, avg: 2.486, over2: 37.14, over3: 20.00, over4: 14.29, over5: 5.71, aos: 11.43, threes: 0.00, twoes: 2.86, zeroes: 5.71, bts: 37.14},
 { name: 'Чемпионат Сальвадора', gp: 26, avg: 2.115, over2: 30.77, over3: 11.54, over4: 7.69, over5: 3.85, aos: 3.85, threes: 0.00, twoes: 3.85, zeroes: 19.23, bts: 42.31},
 { name: 'Чемпионат Гондураса', gp: 13, avg: 2.308, over2: 38.46, over3: 30.77, over4: 15.38, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 7.69, zeroes: 7.69, bts: 53.85},
 { name: 'Чемпионат Панамы', gp: 33, avg: 1.939, over2: 27.27, over3: 9.09, over4: 3.03, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 3.03, zeroes: 9.09, bts: 42.42},
 { name: 'Чемпионат Боливии', gp: 30, avg: 2.633, over2: 46.67, over3: 23.33, over4: 13.33, over5: 10.00, aos: 10.00, threes: 0.00, twoes: 3.33, zeroes: 10.00, bts: 56.67},
 { name: 'Чемпионат Гонконга', gp: 3, avg: 1.333, over2: 0.00, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 33.33},
 { name: 'Чемпионат Швейцарии. 1-й дивизион', gp: 28, avg: 2.857, over2: 53.57, over3: 35.71, over4: 10.71, over5: 3.57, aos: 7.14, threes: 0.00, twoes: 10.71, zeroes: 0.00, bts: 53.57},
 { name: 'Чемпионат Беларуси', gp: 156, avg: 2.122, over2: 38.46, over3: 19.87, over4: 5.13, over5: 0.64, aos: 7.69, threes: 0.00, twoes: 6.41, zeroes: 12.18, bts: 33.33},
 { name: 'Чемпионат Италии. Серия C1-C', gp: 8, avg: 2.625, over2: 37.50, over3: 25.00, over4: 12.50, over5: 12.50, aos: 0.00, threes: 12.50, twoes: 0.00, zeroes: 0.00, bts: 62.50},
 { name: 'Чемпионат Норвегии. Женщины', gp: 85, avg: 3.129, over2: 54.12, over3: 37.65, over4: 22.35, over5: 12.94, aos: 20.00, threes: 1.18, twoes: 7.06, zeroes: 4.71, bts: 50.59},
 { name: 'Чемпионат Бразилии. Молодёжная лига', gp: 80, avg: 2.450, over2: 45.00, over3: 30.00, over4: 15.00, over5: 7.50, aos: 5.00, threes: 2.50, twoes: 5.00, zeroes: 17.50, bts: 50.00},
 { name: 'Чемпионат Швеции. Женщины', gp: 77, avg: 2.987, over2: 57.14, over3: 33.77, over4: 23.38, over5: 9.09, aos: 12.99, threes: 3.90, twoes: 5.19, zeroes: 5.19, bts: 50.65},
 { name: 'Чемпионат Эквадора. Серия А', gp: 42, avg: 2.595, over2: 50.00, over3: 19.05, over4: 9.52, over5: 7.14, aos: 9.52, threes: 0.00, twoes: 4.76, zeroes: 11.90, bts: 52.38},
 { name: 'Чемпионат Австралии. Премьер-лига Нового Южного Уэльса.', gp: 132, avg: 3.295, over2: 65.91, over3: 42.42, over4: 25.76, over5: 9.09, aos: 17.42, threes: 2.27, twoes: 3.03, zeroes: 5.30, bts: 56.82},
 { name: 'Чемпионат Таиланда', gp: 226, avg: 3.332, over2: 63.27, over3: 44.25, over4: 24.34, over5: 13.72, aos: 20.80, threes: 0.88, twoes: 5.75, zeroes: 6.19, bts: 54.87},
 { name: 'Чемпионат Чехии. 2-й дивизион', gp: 42, avg: 2.857, over2: 52.38, over3: 35.71, over4: 21.43, over5: 7.14, aos: 16.67, threes: 2.38, twoes: 4.76, zeroes: 11.90, bts: 61.90},
 { name: 'Чемпионат Уэльса', gp: 18, avg: 2.833, over2: 55.56, over3: 27.78, over4: 11.11, over5: 5.56, aos: 16.67, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 38.89},
 { name: 'Чемпионат Туниса', gp: 21, avg: 2.000, over2: 33.33, over3: 14.29, over4: 9.52, over5: 0.00, aos: 4.76, threes: 0.00, twoes: 0.00, zeroes: 19.05, bts: 33.33},
 { name: 'Чемпионат Марокко', gp: 240, avg: 2.229, over2: 42.92, over3: 18.75, over4: 8.75, over5: 1.25, aos: 8.33, threes: 0.00, twoes: 3.75, zeroes: 11.25, bts: 48.33},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 4', gp: 182, avg: 3.962, over2: 75.82, over3: 57.14, over4: 37.91, over5: 22.53, aos: 32.42, threes: 1.10, twoes: 4.40, zeroes: 3.85, bts: 67.58},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 3', gp: 182, avg: 3.566, over2: 63.74, over3: 46.70, over4: 27.47, over5: 19.23, aos: 30.77, threes: 1.10, twoes: 5.49, zeroes: 3.85, bts: 56.04},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 2', gp: 122, avg: 3.189, over2: 59.02, over3: 38.52, over4: 23.77, over5: 13.11, aos: 18.03, threes: 2.46, twoes: 4.10, zeroes: 4.10, bts: 59.84},
 { name: 'Чемпионат Сингапура', gp: 69, avg: 2.855, over2: 47.83, over3: 28.99, over4: 15.94, over5: 8.70, aos: 17.39, threes: 0.00, twoes: 5.80, zeroes: 5.80, bts: 40.58},
 { name: 'Чемпионат Финляндии. 3-й дивизион', gp: 302, avg: 3.361, over2: 65.23, over3: 43.71, over4: 27.15, over5: 14.90, aos: 23.84, threes: 0.99, twoes: 4.97, zeroes: 6.29, bts: 60.26},
 { name: 'Чемпионат Чили', gp: 37, avg: 1.946, over2: 35.14, over3: 16.22, over4: 2.70, over5: 0.00, aos: 2.70, threes: 0.00, twoes: 2.70, zeroes: 18.92, bts: 45.95},
 { name: 'Чемпионат Узбекистана', gp: 364, avg: 2.989, over2: 57.14, over3: 36.26, over4: 18.68, over5: 8.24, aos: 17.58, threes: 0.55, twoes: 2.20, zeroes: 4.95, bts: 52.75},
 { name: 'Чемпионат Нидерландов. 2-й дивизион', gp: 17, avg: 3.294, over2: 64.71, over3: 41.18, over4: 17.65, over5: 17.65, aos: 17.65, threes: 0.00, twoes: 17.65, zeroes: 5.88, bts: 70.59},
 { name: 'Чемпионат Бельгии. 2-й дивизион', gp: 12, avg: 3.500, over2: 75.00, over3: 50.00, over4: 8.33, over5: 8.33, aos: 8.33, threes: 0.00, twoes: 25.00, zeroes: 0.00, bts: 66.67},
 { name: 'Чемпионат Австрии. 1-я лига', gp: 40, avg: 2.925, over2: 62.50, over3: 45.00, over4: 15.00, over5: 2.50, aos: 17.50, threes: 0.00, twoes: 5.00, zeroes: 7.50, bts: 52.50},
 { name: 'Чемпионат Хорватии', gp: 32, avg: 2.781, over2: 53.13, over3: 34.38, over4: 6.25, over5: 0.00, aos: 9.38, threes: 0.00, twoes: 9.38, zeroes: 0.00, bts: 53.13},
 { name: 'Чемпионат Норвегии. 1-й дивизион', gp: 168, avg: 3.000, over2: 57.74, over3: 35.71, over4: 17.26, over5: 6.55, aos: 12.50, threes: 1.79, twoes: 7.14, zeroes: 4.17, bts: 60.71},
 { name: 'Чемпионат Австралии. Т-Лига', gp: 84, avg: 4.036, over2: 71.43, over3: 54.76, over4: 44.05, over5: 20.24, aos: 36.90, threes: 1.19, twoes: 3.57, zeroes: 3.57, bts: 50.00},
 { name: 'Чемпионат Англии. Истмийская Лига. Премьер Дивизион', gp: 48, avg: 2.917, over2: 54.17, over3: 35.42, over4: 18.75, over5: 6.25, aos: 16.67, threes: 0.00, twoes: 6.25, zeroes: 4.17, bts: 50.00},
 { name: 'Чемпионат Швеции. 2-й дивизион.', gp: 214, avg: 3.075, over2: 62.15, over3: 33.64, over4: 21.03, over5: 10.28, aos: 13.08, threes: 3.27, twoes: 2.80, zeroes: 4.67, bts: 59.35},
 { name: 'Чемпионат Германии. Бундеслига. Женщины', gp: 132, avg: 2.811, over2: 53.79, over3: 28.79, over4: 14.39, over5: 9.85, aos: 15.91, threes: 1.52, twoes: 3.03, zeroes: 3.79, bts: 40.15},
 { name: 'Чемпионат Алжира. 2-й дивизион', gp: 8, avg: 2.125, over2: 37.50, over3: 25.00, over4: 12.50, over5: 12.50, aos: 0.00, threes: 12.50, twoes: 12.50, zeroes: 25.00, bts: 50.00},
 { name: 'Чемпионат Дании. 1-й дивизион', gp: 30, avg: 3.500, over2: 76.67, over3: 43.33, over4: 26.67, over5: 13.33, aos: 13.33, threes: 3.33, twoes: 3.33, zeroes: 3.33, bts: 70.00},
 { name: 'Чемпионат Филиппин', gp: 64, avg: 3.172, over2: 60.94, over3: 35.94, over4: 21.88, over5: 14.06, aos: 17.19, threes: 0.00, twoes: 7.81, zeroes: 6.25, bts: 64.06},
 { name: 'Чемпионат Чехии (до 21 года)', gp: 40, avg: 3.800, over2: 70.00, over3: 52.50, over4: 32.50, over5: 20.00, aos: 32.50, threes: 0.00, twoes: 7.50, zeroes: 2.50, bts: 60.00},
 { name: 'Чемпионат Австралии. Западная Премьер-лига', gp: 182, avg: 3.363, over2: 64.84, over3: 44.51, over4: 25.27, over5: 10.99, aos: 20.33, threes: 0.55, twoes: 7.69, zeroes: 5.49, bts: 60.44},
 { name: 'Чемпионат Аргентины. 4-й дивизион', gp: 385, avg: 2.205, over2: 37.14, over3: 18.18, over4: 8.57, over5: 2.86, aos: 6.23, threes: 0.52, twoes: 3.90, zeroes: 12.99, bts: 42.08},
 { name: 'Чемпионат Италии. Серия C2-B', gp: 306, avg: 2.255, over2: 39.54, over3: 18.95, over4: 8.82, over5: 3.27, aos: 7.52, threes: 0.33, twoes: 4.25, zeroes: 12.42, bts: 46.41},
 { name: 'Чемпионат Чили. 1-й дивизион.', gp: 54, avg: 2.111, over2: 40.74, over3: 14.81, over4: 7.41, over5: 7.41, aos: 7.41, threes: 0.00, twoes: 0.00, zeroes: 18.52, bts: 44.44},
 { name: 'Чемпионат Мира. Отборочные матчи. Океания.', gp: 12, avg: 2.500, over2: 50.00, over3: 25.00, over4: 8.33, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 8.33, zeroes: 8.33, bts: 50.00},
 { name: 'Чемпионат Финляндии. Женщины', gp: 90, avg: 3.333, over2: 61.11, over3: 44.44, over4: 25.56, over5: 14.44, aos: 21.11, threes: 1.11, twoes: 3.33, zeroes: 2.22, bts: 50.00},
 { name: 'Чемпионат Мексики. 2-й дивизион', gp: 96, avg: 2.208, over2: 43.75, over3: 16.67, over4: 4.17, over5: 0.00, aos: 4.17, threes: 0.00, twoes: 4.17, zeroes: 10.42, bts: 50.00},
 { name: 'Чемпионат Ямайки. Премьер-лига', gp: 198, avg: 2.192, over2: 39.39, over3: 16.67, over4: 8.59, over5: 1.52, aos: 6.57, threes: 1.01, twoes: 1.52, zeroes: 10.10, bts: 40.91},
 { name: 'Чемпионат Северной Ирландии', gp: 24, avg: 3.417, over2: 54.17, over3: 37.50, over4: 25.00, over5: 12.50, aos: 25.00, threes: 0.00, twoes: 4.17, zeroes: 0.00, bts: 58.33},
 { name: 'Чемпионат Казахстана', gp: 132, avg: 2.379, over2: 44.70, over3: 19.70, over4: 8.33, over5: 3.79, aos: 7.58, threes: 1.52, twoes: 4.55, zeroes: 6.82, bts: 45.45},
 { name: 'Чемпионат Англии. 2-я лига', gp: 48, avg: 3.229, over2: 58.33, over3: 41.67, over4: 22.92, over5: 12.50, aos: 14.58, threes: 2.08, twoes: 10.42, zeroes: 2.08, bts: 58.33},
 { name: 'Чемпионат Мира. Отборочные матчи. CONCACAF', gp: 18, avg: 2.333, over2: 38.89, over3: 22.22, over4: 5.56, over5: 5.56, aos: 11.11, threes: 0.00, twoes: 5.56, zeroes: 11.11, bts: 38.89},
 { name: 'Чемпионат Мира. Отборочные матчи. Азия', gp: 48, avg: 2.167, over2: 35.42, over3: 20.83, over4: 8.33, over5: 0.00, aos: 4.17, threes: 0.00, twoes: 6.25, zeroes: 8.33, bts: 35.42},
 { name: 'Чемпионат Мира. Отборочные матчи. Южная Америка', gp: 70, avg: 2.929, over2: 64.29, over3: 32.86, over4: 11.43, over5: 2.86, aos: 11.43, threes: 0.00, twoes: 12.86, zeroes: 2.86, bts: 45.71},
 { name: 'Чемпионат Мира. Отборочные матчи. Африка', gp: 20, avg: 2.000, over2: 35.00, over3: 15.00, over4: 0.00, over5: 0.00, aos: 5.00, threes: 0.00, twoes: 0.00, zeroes: 20.00, bts: 45.00},
 { name: 'Чемпионат Мира. Отборочные матчи. Европа', gp: 162, avg: 2.975, over2: 54.94, over3: 36.42, over4: 20.37, over5: 6.79, aos: 22.84, threes: 0.00, twoes: 4.32, zeroes: 6.79, bts: 41.36},
 { name: 'Чемпионат Гватемалы', gp: 32, avg: 2.125, over2: 31.25, over3: 18.75, over4: 12.50, over5: 3.13, aos: 15.63, threes: 0.00, twoes: 3.13, zeroes: 12.50, bts: 31.25},
 { name: 'Чемпионат Боснии и Герцеговины', gp: 33, avg: 2.000, over2: 36.36, over3: 15.15, over4: 3.03, over5: 0.00, aos: 3.03, threes: 0.00, twoes: 0.00, zeroes: 9.09, bts: 33.33},
 { name: 'Чемпионат Австралии. SAPL лига', gp: 132, avg: 3.318, over2: 66.67, over3: 40.91, over4: 25.00, over5: 12.12, aos: 17.42, threes: 1.52, twoes: 3.79, zeroes: 3.03, bts: 60.61},
 { name: 'Чемпионат Македонии', gp: 13, avg: 2.308, over2: 46.15, over3: 15.38, over4: 7.69, over5: 0.00, aos: 15.38, threes: 0.00, twoes: 0.00, zeroes: 15.38, bts: 38.46},
 { name: 'Чемпионат Румынии', gp: 53, avg: 2.132, over2: 35.85, over3: 11.32, over4: 3.77, over5: 3.77, aos: 3.77, threes: 0.00, twoes: 0.00, zeroes: 9.43, bts: 41.51},
 { name: 'Чемпионат Румынии. 2-я лига', gp: 300, avg: 2.770, over2: 56.00, over3: 27.00, over4: 14.67, over5: 5.67, aos: 12.33, threes: 0.33, twoes: 3.67, zeroes: 6.00, bts: 46.00},
 { name: 'Чемпионат России. 2-й див. Восток', gp: 12, avg: 1.583, over2: 16.67, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 8.33, bts: 33.33},
 { name: 'Чемпионат Китая. 1-я лига', gp: 181, avg: 2.845, over2: 56.35, over3: 35.36, over4: 12.71, over5: 7.18, aos: 11.60, threes: 1.66, twoes: 8.29, zeroes: 6.08, bts: 60.22},
 { name: 'Чемпионат Швеции. 1-й дивизион', gp: 162, avg: 2.944, over2: 61.11, over3: 29.63, over4: 16.05, over5: 7.41, aos: 13.58, threes: 0.62, twoes: 3.70, zeroes: 6.17, bts: 58.02},
 { name: 'Чемпионат Исландии', gp: 94, avg: 2.989, over2: 61.70, over3: 34.04, over4: 15.96, over5: 6.38, aos: 12.77, threes: 0.00, twoes: 8.51, zeroes: 5.32, bts: 63.83},
 { name: 'Чемпионат Шотландии. 1-я лига', gp: 20, avg: 3.300, over2: 60.00, over3: 35.00, over4: 25.00, over5: 15.00, aos: 20.00, threes: 0.00, twoes: 5.00, zeroes: 0.00, bts: 55.00},
 { name: 'Чемпионат Израиля', gp: 11, avg: 2.545, over2: 54.55, over3: 18.18, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 9.09, zeroes: 9.09, bts: 63.64},
 { name: 'Чемпионат России. 2-й див. Запад', gp: 39, avg: 2.821, over2: 51.28, over3: 33.33, over4: 17.95, over5: 7.69, aos: 12.82, threes: 2.56, twoes: 2.56, zeroes: 7.69, bts: 33.33},
 { name: 'Чемпионат России. 2-й див. Центр', gp: 37, avg: 2.541, over2: 56.76, over3: 13.51, over4: 5.41, over5: 0.00, aos: 8.11, threes: 0.00, twoes: 5.41, zeroes: 2.70, bts: 54.05},
 { name: 'Чемпионат России. 2-й див. Юг', gp: 44, avg: 2.682, over2: 43.18, over3: 25.00, over4: 18.18, over5: 13.64, aos: 11.36, threes: 4.55, twoes: 2.27, zeroes: 4.55, bts: 52.27},
 { name: 'Чемпионат Франции. Лига 1', gp: 37, avg: 2.757, over2: 54.05, over3: 24.32, over4: 13.51, over5: 5.41, aos: 8.11, threes: 2.70, twoes: 5.41, zeroes: 2.70, bts: 40.54},
 { name: 'Чемпионат Индонезии. Лига 1.', gp: 184, avg: 2.641, over2: 49.46, over3: 28.80, over4: 13.04, over5: 4.35, aos: 8.15, threes: 0.00, twoes: 6.52, zeroes: 6.52, bts: 52.17},
 { name: 'Чемпионат Нидерландов', gp: 23, avg: 3.391, over2: 73.91, over3: 39.13, over4: 21.74, over5: 8.70, aos: 13.04, threes: 4.35, twoes: 8.70, zeroes: 0.00, bts: 73.91},
 { name: 'Чемпионат Италии. Серия A', gp: 13, avg: 2.538, over2: 61.54, over3: 23.08, over4: 7.69, over5: 7.69, aos: 7.69, threes: 0.00, twoes: 0.00, zeroes: 15.38, bts: 46.15},
 { name: 'Чемпионат России. Премьер-лига', gp: 61, avg: 2.246, over2: 36.07, over3: 19.67, over4: 9.84, over5: 4.92, aos: 8.20, threes: 0.00, twoes: 3.28, zeroes: 9.84, bts: 44.26},
 { name: 'Чемпионат Англии. Чемпион-Лига', gp: 60, avg: 2.400, over2: 40.00, over3: 20.00, over4: 10.00, over5: 5.00, aos: 10.00, threes: 0.00, twoes: 1.67, zeroes: 10.00, bts: 48.33},
 { name: 'Чемпионат Греции', gp: 11, avg: 2.000, over2: 27.27, over3: 18.18, over4: 9.09, over5: 0.00, aos: 9.09, threes: 0.00, twoes: 9.09, zeroes: 18.18, bts: 45.45},
 { name: 'Чемпионат Австрии. Бундеслига', gp: 27, avg: 3.037, over2: 59.26, over3: 40.74, over4: 25.93, over5: 7.41, aos: 14.81, threes: 0.00, twoes: 7.41, zeroes: 7.41, bts: 55.56},
 { name: 'Чемпионат Бельгии', gp: 37, avg: 3.027, over2: 56.76, over3: 35.14, over4: 24.32, over5: 8.11, aos: 13.51, threes: 2.70, twoes: 2.70, zeroes: 2.70, bts: 51.35},
 { name: 'Чемпионат Чехии', gp: 36, avg: 2.139, over2: 36.11, over3: 16.67, over4: 5.56, over5: 5.56, aos: 5.56, threes: 2.78, twoes: 2.78, zeroes: 13.89, bts: 41.67},
 { name: 'Чемпионат Дании', gp: 46, avg: 2.630, over2: 47.83, over3: 23.91, over4: 19.57, over5: 4.35, aos: 15.22, threes: 0.00, twoes: 2.17, zeroes: 15.22, bts: 50.00},
 { name: 'Чемпионат Финляндии', gp: 142, avg: 2.648, over2: 46.48, over3: 26.06, over4: 14.79, over5: 9.15, aos: 15.49, threes: 1.41, twoes: 3.52, zeroes: 9.15, bts: 50.00},
 { name: 'Чемпионат Франции. Лига 2', gp: 49, avg: 2.367, over2: 44.90, over3: 22.45, over4: 14.29, over5: 4.08, aos: 10.20, threes: 0.00, twoes: 2.04, zeroes: 16.33, bts: 42.86},
 { name: 'Чемпионат Германии. 2-я бундеслига', gp: 32, avg: 2.719, over2: 53.13, over3: 28.13, over4: 6.25, over5: 6.25, aos: 9.38, threes: 0.00, twoes: 12.50, zeroes: 0.00, bts: 53.13},
 { name: 'Чемпионат Англии. 1-я лига', gp: 48, avg: 2.708, over2: 43.75, over3: 29.17, over4: 22.92, over5: 6.25, aos: 14.58, threes: 6.25, twoes: 0.00, zeroes: 4.17, bts: 50.00},
 { name: 'Чемпионат Италии. Серия B', gp: 8, avg: 2.625, over2: 37.50, over3: 25.00, over4: 25.00, over5: 12.50, aos: 12.50, threes: 0.00, twoes: 0.00, zeroes: 12.50, bts: 50.00},
 { name: 'Чемпионат России. ФНЛ', gp: 90, avg: 2.511, over2: 52.22, over3: 20.00, over4: 5.56, over5: 0.00, aos: 6.67, threes: 0.00, twoes: 6.67, zeroes: 3.33, bts: 47.78},
 { name: 'Чемпионат России. 2-й див. Урал-Поволжье', gp: 34, avg: 2.647, over2: 44.12, over3: 32.35, over4: 17.65, over5: 8.82, aos: 17.65, threes: 0.00, twoes: 2.94, zeroes: 11.76, bts: 44.12},
 { name: 'Чемпионат Украины', gp: 38, avg: 2.053, over2: 42.11, over3: 18.42, over4: 5.26, over5: 0.00, aos: 5.26, threes: 0.00, twoes: 2.63, zeroes: 18.42, bts: 36.84},
 { name: 'Чемпионат MLS (США)', gp: 185, avg: 2.924, over2: 62.70, over3: 32.43, over4: 11.89, over5: 5.95, aos: 11.89, threes: 1.62, twoes: 8.11, zeroes: 4.32, bts: 54.05},
 { name: 'Чемпионат Аргентины', gp: 3, avg: 4.333, over2: 66.67, over3: 66.67, over4: 33.33, over5: 33.33, aos: 33.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 100.00},
 { name: 'Чемпионат Бразилии. Серия A', gp: 212, avg: 2.368, over2: 37.74, over3: 23.11, over4: 10.85, over5: 4.72, aos: 8.49, threes: 0.94, twoes: 4.72, zeroes: 9.91, bts: 40.09},
 { name: 'Чемпионат Ирландии', gp: 157, avg: 2.732, over2: 52.87, over3: 26.75, over4: 12.74, over5: 3.18, aos: 14.01, threes: 0.00, twoes: 2.55, zeroes: 5.73, bts: 50.96},
 { name: 'Чемпионат Испании. Примера дивизион', gp: 16, avg: 2.438, over2: 43.75, over3: 25.00, over4: 12.50, over5: 6.25, aos: 6.25, threes: 0.00, twoes: 12.50, zeroes: 6.25, bts: 37.50},
 { name: 'Чемпионат Испании. Сегунда дивизион', gp: 17, avg: 2.059, over2: 41.18, over3: 11.76, over4: 5.88, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 5.88, zeroes: 17.65, bts: 47.06},
 { name: 'Чемпионат Норвегии', gp: 158, avg: 2.753, over2: 51.27, over3: 27.85, over4: 16.46, over5: 8.23, aos: 11.39, threes: 2.53, twoes: 2.53, zeroes: 8.23, bts: 54.43},
 { name: 'Чемпионат Польши', gp: 53, avg: 2.434, over2: 39.62, over3: 22.64, over4: 13.21, over5: 5.66, aos: 5.66, threes: 1.89, twoes: 0.00, zeroes: 7.55, bts: 52.83},
 { name: 'Чемпионат Португалии', gp: 32, avg: 2.438, over2: 43.75, over3: 21.88, over4: 12.50, over5: 0.00, aos: 9.38, threes: 0.00, twoes: 3.13, zeroes: 6.25, bts: 40.63},
 { name: 'Чемпионат Венгрии', gp: 40, avg: 2.850, over2: 52.50, over3: 37.50, over4: 10.00, over5: 2.50, aos: 10.00, threes: 0.00, twoes: 15.00, zeroes: 2.50, bts: 60.00},
 { name: 'Чемпионат Словакии', gp: 35, avg: 3.000, over2: 57.14, over3: 34.29, over4: 17.14, over5: 11.43, aos: 17.14, threes: 2.86, twoes: 2.86, zeroes: 2.86, bts: 62.86},
 { name: 'Чемпионат Словении', gp: 32, avg: 2.938, over2: 59.38, over3: 50.00, over4: 15.63, over5: 6.25, aos: 18.75, threes: 0.00, twoes: 9.38, zeroes: 9.38, bts: 59.38},
 { name: 'Чемпионат Мексики', gp: 122, avg: 2.623, over2: 49.18, over3: 26.23, over4: 14.75, over5: 0.00, aos: 8.20, threes: 0.00, twoes: 6.56, zeroes: 8.20, bts: 59.02},
 { name: 'Чемпионат Молдавии', gp: 39, avg: 2.538, over2: 46.15, over3: 25.64, over4: 12.82, over5: 5.13, aos: 15.38, threes: 0.00, twoes: 7.69, zeroes: 0.00, bts: 41.03},
 { name: 'Чемпионат Швейцарии', gp: 27, avg: 2.778, over2: 44.44, over3: 33.33, over4: 18.52, over5: 7.41, aos: 14.81, threes: 3.70, twoes: 3.70, zeroes: 7.41, bts: 40.74},
 { name: 'Чемпионат Шотландии. Премьер-лига', gp: 22, avg: 3.000, over2: 63.64, over3: 31.82, over4: 18.18, over5: 4.55, aos: 13.64, threes: 0.00, twoes: 4.55, zeroes: 4.55, bts: 63.64},
 { name: 'Чемпионат Италии. Серия C2-A', gp: 306, avg: 2.601, over2: 48.37, over3: 26.47, over4: 13.73, over5: 5.23, aos: 9.80, threes: 1.31, twoes: 6.86, zeroes: 9.15, bts: 53.92},
 { name: 'Чемпионат Албании', gp: 180, avg: 1.889, over2: 29.44, over3: 13.89, over4: 6.11, over5: 2.22, aos: 6.11, threes: 0.00, twoes: 3.33, zeroes: 18.33, bts: 32.22},
 { name: 'Чемпионат Омана.', gp: 182, avg: 2.758, over2: 53.30, over3: 31.32, over4: 13.19, over5: 5.49, aos: 7.14, threes: 1.10, twoes: 7.69, zeroes: 7.69, bts: 62.64},
 { name: 'Чемпионат Иордании', gp: 132, avg: 2.235, over2: 43.18, over3: 16.67, over4: 6.06, over5: 2.27, aos: 6.06, threes: 0.76, twoes: 2.27, zeroes: 15.91, bts: 45.45},
 { name: 'Чемпионат стран Южной Африки (до 20 лет)', gp: 34, avg: 2.941, over2: 58.82, over3: 41.18, over4: 11.76, over5: 11.76, aos: 23.53, threes: 0.00, twoes: 5.88, zeroes: 11.76, bts: 41.18},
 { name: 'Чемпионат Парагвая', gp: 31, avg: 2.581, over2: 48.39, over3: 25.81, over4: 16.13, over5: 0.00, aos: 9.68, threes: 0.00, twoes: 0.00, zeroes: 12.90, bts: 54.84},
 { name: 'Чемпионат Индии', gp: 90, avg: 2.500, over2: 47.78, over3: 22.22, over4: 10.00, over5: 4.44, aos: 10.00, threes: 0.00, twoes: 3.33, zeroes: 13.33, bts: 47.78},
 { name: 'Чемпионат Индонезии. Суперлига', gp: 19, avg: 3.053, over2: 47.37, over3: 31.58, over4: 21.05, over5: 15.79, aos: 15.79, threes: 5.26, twoes: 5.26, zeroes: 0.00, bts: 52.63},
 { name: 'Чемпионат Коста-Рики', gp: 28, avg: 2.607, over2: 57.14, over3: 28.57, over4: 10.71, over5: 7.14, aos: 14.29, threes: 0.00, twoes: 7.14, zeroes: 17.86, bts: 50.00},
 { name: 'Чемпионат Англии. Премьер-лига (до 21-го года).', gp: 264, avg: 2.947, over2: 56.44, over3: 32.95, over4: 16.67, over5: 6.44, aos: 11.36, threes: 1.52, twoes: 3.79, zeroes: 4.92, bts: 57.20},
 { name: 'Чемпионат Колумбии. 1-й дивизион', gp: 118, avg: 2.288, over2: 38.98, over3: 17.80, over4: 7.63, over5: 3.39, aos: 5.08, threes: 1.69, twoes: 3.39, zeroes: 5.93, bts: 44.92},
 { name: 'Чемпионат Литвы', gp: 88, avg: 2.409, over2: 38.64, over3: 25.00, over4: 12.50, over5: 4.55, aos: 13.64, threes: 1.14, twoes: 2.27, zeroes: 9.09, bts: 48.86},
 { name: 'Чемпионат Азии (до 23 лет)', gp: 114, avg: 3.596, over2: 56.14, over3: 40.35, over4: 26.32, over5: 21.05, aos: 28.07, threes: 0.00, twoes: 1.75, zeroes: 7.02, bts: 35.09},
 { name: 'Чемпионат Украины. Турнир молодёжных команд', gp: 41, avg: 3.122, over2: 58.54, over3: 41.46, over4: 17.07, over5: 12.20, aos: 19.51, threes: 2.44, twoes: 12.20, zeroes: 2.44, bts: 46.34},
 { name: 'Чемпионат Мальты', gp: 14, avg: 3.286, over2: 57.14, over3: 57.14, over4: 28.57, over5: 7.14, aos: 35.71, threes: 0.00, twoes: 7.14, zeroes: 0.00, bts: 42.86},
 { name: 'Чемпионат Украины. Первая лига', gp: 77, avg: 2.234, over2: 38.96, over3: 20.78, over4: 10.39, over5: 0.00, aos: 1.30, threes: 0.00, twoes: 3.90, zeroes: 6.49, bts: 38.96},
 { name: 'Чемпионат Ирана. 2-я лига', gp: 17, avg: 2.353, over2: 41.18, over3: 35.29, over4: 5.88, over5: 5.88, aos: 11.76, threes: 0.00, twoes: 11.76, zeroes: 5.88, bts: 41.18},
 { name: 'Чемпионат Исландии. Женщины', gp: 70, avg: 3.214, over2: 60.00, over3: 44.29, over4: 24.29, over5: 8.57, aos: 25.71, threes: 1.43, twoes: 2.86, zeroes: 1.43, bts: 45.71},
 { name: 'Чемпионат Австралии. Премьер-лига Столичной территории', gp: 85, avg: 4.176, over2: 78.82, over3: 57.65, over4: 38.82, over5: 29.41, aos: 38.82, threes: 4.71, twoes: 3.53, zeroes: 2.35, bts: 49.41},
 { name: 'Чемпионат Малайзии. Премьер-лига', gp: 114, avg: 3.430, over2: 66.67, over3: 42.11, over4: 20.18, over5: 12.28, aos: 16.67, threes: 1.75, twoes: 4.39, zeroes: 1.75, bts: 69.30},
 { name: 'Чемпионат Эстонии', gp: 135, avg: 3.637, over2: 62.96, over3: 40.74, over4: 28.89, over5: 17.78, aos: 25.93, threes: 0.74, twoes: 1.48, zeroes: 2.22, bts: 52.59},
 { name: 'Чемпионат Армении. 1-й дивизион', gp: 12, avg: 2.833, over2: 50.00, over3: 33.33, over4: 25.00, over5: 8.33, aos: 25.00, threes: 0.00, twoes: 8.33, zeroes: 8.33, bts: 50.00},
 { name: 'Чемпионат Аргентины. 2-й дивизион', gp: 506, avg: 2.142, over2: 34.98, over3: 17.98, over4: 7.51, over5: 2.17, aos: 5.93, threes: 0.20, twoes: 4.15, zeroes: 13.24, bts: 42.69},
 { name: 'Женщины. Летняя Универсиада', gp: 30, avg: 4.133, over2: 60.00, over3: 33.33, over4: 13.33, over5: 13.33, aos: 13.33, threes: 0.00, twoes: 6.67, zeroes: 6.67, bts: 40.00},
 { name: 'Чемпионат Испании. Сегунда дивизион Б', gp: 57, avg: 1.912, over2: 31.58, over3: 12.28, over4: 5.26, over5: 0.00, aos: 3.51, threes: 0.00, twoes: 1.75, zeroes: 12.28, bts: 40.35},
 { name: 'Чемпионат Бахрейна', gp: 90, avg: 2.556, over2: 45.56, over3: 24.44, over4: 14.44, over5: 5.56, aos: 10.00, threes: 1.11, twoes: 4.44, zeroes: 10.00, bts: 52.22},
 { name: 'Чемпионат Эквадора. Серия B', gp: 167, avg: 2.186, over2: 37.72, over3: 19.16, over4: 11.38, over5: 2.99, aos: 5.39, threes: 1.20, twoes: 1.20, zeroes: 10.78, bts: 38.92},
 { name: 'Женщины. BeNe League', gp: 156, avg: 3.154, over2: 59.62, over3: 33.33, over4: 21.79, over5: 10.26, aos: 21.79, threes: 0.64, twoes: 1.28, zeroes: 2.56, bts: 44.23},
 { name: 'Чемпионат Южной Кореи. Женщины', gp: 72, avg: 3.153, over2: 59.72, over3: 41.67, over4: 25.00, over5: 9.72, aos: 23.61, threes: 0.00, twoes: 2.78, zeroes: 6.94, bts: 59.72},
 { name: 'Чемпионат Венесуэлы', gp: 110, avg: 2.255, over2: 47.27, over3: 16.36, over4: 5.45, over5: 1.82, aos: 3.64, threes: 0.00, twoes: 3.64, zeroes: 12.73, bts: 47.27},
 { name: 'Чемпионат Вьетнама', gp: 112, avg: 2.786, over2: 50.89, over3: 27.68, over4: 14.29, over5: 8.04, aos: 8.04, threes: 1.79, twoes: 8.04, zeroes: 5.36, bts: 61.61},
 { name: 'Чемпионат Уругвая', gp: 24, avg: 3.167, over2: 75.00, over3: 41.67, over4: 8.33, over5: 0.00, aos: 16.67, threes: 0.00, twoes: 8.33, zeroes: 0.00, bts: 41.67},
 { name: 'Чемпионат Океании (до 20 лет)', gp: 30, avg: 3.667, over2: 66.67, over3: 53.33, over4: 26.67, over5: 20.00, aos: 40.00, threes: 0.00, twoes: 6.67, zeroes: 6.67, bts: 40.00},
 { name: 'Чемпионат Англии. Южная Премьер-лига. Премьер Дивизион', gp: 48, avg: 3.229, over2: 64.58, over3: 41.67, over4: 27.08, over5: 10.42, aos: 18.75, threes: 2.08, twoes: 4.17, zeroes: 4.17, bts: 56.25},
 { name: 'Чемпионат Англии. Северная Премьер-лига. Премьер Дивизион', gp: 60, avg: 2.500, over2: 36.67, over3: 23.33, over4: 13.33, over5: 5.00, aos: 10.00, threes: 1.67, twoes: 1.67, zeroes: 3.33, bts: 46.67},
 { name: 'Чемпионат США. Женщины', gp: 96, avg: 2.802, over2: 48.96, over3: 29.17, over4: 14.58, over5: 6.25, aos: 9.38, threes: 0.00, twoes: 6.25, zeroes: 3.13, bts: 55.21},
 { name: 'Чемпионат Австралии. VPL лига', gp: 182, avg: 2.841, over2: 53.85, over3: 31.87, over4: 14.84, over5: 7.14, aos: 13.19, threes: 1.10, twoes: 6.04, zeroes: 4.95, bts: 51.65},
 { name: 'Чемпионат Йемена', gp: 109, avg: 2.440, over2: 43.12, over3: 22.02, over4: 9.17, over5: 4.59, aos: 9.17, threes: 0.92, twoes: 1.83, zeroes: 7.34, bts: 51.38},
 { name: 'Чемпионат Англии. Женщины', gp: 36, avg: 3.389, over2: 55.56, over3: 50.00, over4: 33.33, over5: 22.22, aos: 36.11, threes: 0.00, twoes: 2.78, zeroes: 8.33, bts: 44.44},
 { name: 'Чемпионат ОАЭ. 1-й дивизион', gp: 131, avg: 3.038, over2: 58.78, over3: 35.88, over4: 16.79, over5: 9.16, aos: 11.45, threes: 1.53, twoes: 7.63, zeroes: 5.34, bts: 58.78},
 { name: 'Чемпионат Сербии', gp: 53, avg: 2.547, over2: 50.94, over3: 26.42, over4: 11.32, over5: 1.89, aos: 15.09, threes: 0.00, twoes: 3.77, zeroes: 7.55, bts: 41.51},
 { name: 'Чемпионат Южной Кореи', gp: 161, avg: 2.727, over2: 57.76, over3: 27.95, over4: 11.80, over5: 3.11, aos: 6.83, threes: 1.24, twoes: 6.83, zeroes: 6.83, bts: 60.87},
 { name: 'Чемпионат Южной Кореи. 2-я лига', gp: 131, avg: 2.511, over2: 44.27, over3: 22.90, over4: 10.69, over5: 6.87, aos: 6.11, threes: 3.05, twoes: 4.58, zeroes: 7.63, bts: 51.91},
 { name: 'Чемпионат ОАЭ', gp: 182, avg: 3.137, over2: 62.09, over3: 35.71, over4: 23.08, over5: 12.09, aos: 21.43, threes: 0.55, twoes: 4.40, zeroes: 9.34, bts: 56.04},
 { name: 'Чемпионат Исландии. 2-й дивизион', gp: 103, avg: 3.631, over2: 70.87, over3: 48.54, over4: 30.10, over5: 16.50, aos: 21.36, threes: 0.97, twoes: 9.71, zeroes: 3.88, bts: 71.84},
 { name: 'Чемпионат Катара', gp: 182, avg: 3.132, over2: 59.89, over3: 36.81, over4: 18.68, over5: 11.54, aos: 17.03, threes: 2.20, twoes: 6.59, zeroes: 4.40, bts: 61.54},
 { name: 'Чемпионат Катара. 2-й дивизион', gp: 138, avg: 4.572, over2: 84.78, over3: 63.77, over4: 52.17, over5: 33.33, aos: 48.55, threes: 1.45, twoes: 1.45, zeroes: 2.17, bts: 61.59},
 { name: 'Чемпионат Пакистана', gp: 132, avg: 2.333, over2: 37.88, over3: 21.21, over4: 11.36, over5: 6.06, aos: 12.12, threes: 0.00, twoes: 1.52, zeroes: 12.88, bts: 31.82},
 { name: 'Чемпионат Саудовской Аравии', gp: 14, avg: 4.214, over2: 92.86, over3: 64.29, over4: 35.71, over5: 14.29, aos: 35.71, threes: 0.00, twoes: 7.14, zeroes: 0.00, bts: 85.71},
 { name: 'Чемпионат Египта', gp: 305, avg: 2.256, over2: 38.69, over3: 18.36, over4: 7.54, over5: 3.93, aos: 5.57, threes: 0.98, twoes: 5.90, zeroes: 9.18, bts: 44.92}
];



var renderChangesFn = function(o) {
  if (o.value < 0.5) {
    o.style = {
      color: '#E46B67'
    };
  } else {
    o.style = {
      color: '#65AE6E'
    };
  }

  o.value = o.value + '%';

  return o;
};

$(function(){

  new FancyGrid({
    title: {
    text: 'Totals and any other score',
    style: {
      'text-align': 'center'
    }
  },
    renderTo: 'container',
    width: 1400,
    height: 600,
    data: data,
    multiSort: true,
    trackOver: true,
    textSelection: true,
    defaults: {
      type: 'string',
      width: 100,
      resizable: true,
      sortable: true
    },
    columnLines: false,	  
    columns: [
	    {index: 'name', title: 'League', width: 400},
	    {index: 'gp', title: 'GP', width: 70, type: 'number'},
	    {index: 'avg', title: 'AVG', width: 70, type: 'number'},
	    {index: 'over2', title: 'over 2.5', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'over3', title: 'over 3.5', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'over4', title: 'over 4.5', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'over5', title: 'over 5.5', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'aos', title: 'Any Other', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'threes', title: '3:3', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'twoes', title: '2:2', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'zeroes', title: '0:0', width: 70, type: 'number', render: renderChangesFn},
	    {index: 'bts', title: 'Both to Score', width: 90, type: 'number', render: renderChangesFn}
    ]
  });

});
