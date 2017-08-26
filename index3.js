var data = [
 { name: 'Чемпионат Франции. Национальная лига', gp: 31, avg: 2.161, over2: 29.03, over3: 16.13, over4: 12.90, over5: 3.23, aos: 9.68, threes: 0.00, twoes: 0.00, zeroes: 6.45, bts: 45.16},
 { name: 'Чемпионат NASL (США)', gp: 18, avg: 2.722, over2: 50.00, over3: 33.33, over4: 11.11, over5: 5.56, aos: 0.00, threes: 5.56, twoes: 5.56, zeroes: 5.56, bts: 77.78},
 { name: 'Чемпионат Исландии. 1-й дивизион', gp: 106, avg: 2.877, over2: 57.55, over3: 30.19, over4: 14.15, over5: 4.72, aos: 6.60, threes: 1.89, twoes: 5.66, zeroes: 2.83, bts: 57.55},
 { name: 'Чемпионат Азербайджана', gp: 10, avg: 2.000, over2: 50.00, over3: 10.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 10.00, bts: 40.00},
 { name: 'Чемпионат Армении', gp: 10, avg: 2.900, over2: 70.00, over3: 40.00, over4: 10.00, over5: 10.00, aos: 10.00, threes: 0.00, twoes: 20.00, zeroes: 10.00, bts: 60.00},
 { name: 'Чемпионат Алжира', gp: 4, avg: 2.250, over2: 25.00, over3: 25.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 50.00},
 { name: 'Чемпионат Китая', gp: 181, avg: 2.906, over2: 55.25, over3: 31.49, over4: 16.02, over5: 7.18, aos: 13.81, threes: 0.00, twoes: 6.63, zeroes: 6.08, bts: 60.22},
 { name: 'Чемпионат Австралии. Премьер-лига Квинсленда', gp: 132, avg: 4.076, over2: 76.52, over3: 56.82, over4: 38.64, over5: 22.73, aos: 36.36, threes: 0.00, twoes: 6.82, zeroes: 3.03, bts: 58.33},
 { name: 'Чемпионат Польши. 1-й дивизион', gp: 46, avg: 2.413, over2: 41.30, over3: 23.91, over4: 13.04, over5: 6.52, aos: 8.70, threes: 2.17, twoes: 0.00, zeroes: 6.52, bts: 41.30},
 { name: 'Чемпионат Англии. Премьер-лига', gp: 20, avg: 2.650, over2: 40.00, over3: 30.00, over4: 20.00, over5: 10.00, aos: 15.00, threes: 5.00, twoes: 0.00, zeroes: 5.00, bts: 30.00},
 { name: 'Чемпионат Англии. Национальная лига. Север.', gp: 55, avg: 3.055, over2: 56.36, over3: 34.55, over4: 23.64, over5: 10.91, aos: 23.64, threes: 1.82, twoes: 1.82, zeroes: 1.82, bts: 40.00},
 { name: 'Чемпионат Кувейта. 1-й дивизион.', gp: 60, avg: 2.217, over2: 45.00, over3: 16.67, over4: 6.67, over5: 3.33, aos: 6.67, threes: 0.00, twoes: 5.00, zeroes: 13.33, bts: 36.67},
 { name: 'Чемпионат Южной Кореи. 3-я лига', gp: 84, avg: 2.429, over2: 45.24, over3: 21.43, over4: 14.29, over5: 4.76, aos: 5.95, threes: 1.19, twoes: 4.76, zeroes: 13.10, bts: 52.38},
 { name: 'Чемпионат Англии. Национальная лига. Юг.', gp: 55, avg: 3.018, over2: 54.55, over3: 34.55, over4: 23.64, over5: 9.09, aos: 7.27, threes: 1.82, twoes: 9.09, zeroes: 7.27, bts: 54.55},
 { name: 'Чемпионат Германии. Бундеслига', gp: 10, avg: 1.900, over2: 30.00, over3: 20.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 10.00, bts: 20.00},
 { name: 'Женщины. Чемпионат Южной Америки (до 20 лет)', gp: 12, avg: 1.833, over2: 50.00, over3: 33.33, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 16.67, zeroes: 50.00, bts: 50.00},
 { name: 'Женщины. Чемпионат Восточной Азии', gp: 12, avg: 3.167, over2: 50.00, over3: 33.33, over4: 33.33, over5: 16.67, aos: 16.67, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 50.00},
 { name: 'Чемпионат Никарагуа', gp: 50, avg: 2.360, over2: 36.00, over3: 20.00, over4: 8.00, over5: 4.00, aos: 12.00, threes: 0.00, twoes: 0.00, zeroes: 4.00, bts: 48.00},
 { name: 'Чемпионат Южной Америки До 20 лет', gp: 30, avg: 2.867, over2: 73.33, over3: 20.00, over4: 6.67, over5: 6.67, aos: 6.67, threes: 0.00, twoes: 13.33, zeroes: 6.67, bts: 46.67},
 { name: 'Чемпионат Бангладеш', gp: 110, avg: 3.018, over2: 57.27, over3: 36.36, over4: 20.00, over5: 10.00, aos: 19.09, threes: 0.00, twoes: 5.45, zeroes: 9.09, bts: 53.64},
 { name: 'Чемпионат Австралии. Премьер-лига Брисбена', gp: 133, avg: 3.970, over2: 75.94, over3: 58.65, over4: 35.34, over5: 20.30, aos: 24.06, threes: 3.76, twoes: 6.77, zeroes: 2.26, bts: 71.43},
 { name: 'Чемпионат Германии. 3-я бундеслига', gp: 51, avg: 2.686, over2: 52.94, over3: 27.45, over4: 13.73, over5: 5.88, aos: 15.69, threes: 1.96, twoes: 5.88, zeroes: 7.84, bts: 41.18},
 { name: 'Чемпионат Ирана', gp: 39, avg: 2.333, over2: 43.59, over3: 17.95, over4: 7.69, over5: 0.00, aos: 5.13, threes: 0.00, twoes: 7.69, zeroes: 7.69, bts: 51.28},
 { name: 'Чемпионат Германии. Региональная лига. Юго-Запад', gp: 45, avg: 3.222, over2: 64.44, over3: 42.22, over4: 22.22, over5: 13.33, aos: 17.78, threes: 2.22, twoes: 4.44, zeroes: 13.33, bts: 64.44},
 { name: 'Чемпионат Германии. Региональная лига. Северо-Восток', gp: 38, avg: 2.868, over2: 55.26, over3: 36.84, over4: 18.42, over5: 10.53, aos: 18.42, threes: 5.26, twoes: 5.26, zeroes: 5.26, bts: 47.37},
 { name: 'Чемпионат Малайзии. Суперлига', gp: 114, avg: 3.132, over2: 54.39, over3: 37.72, over4: 22.81, over5: 12.28, aos: 15.79, threes: 0.88, twoes: 5.26, zeroes: 3.51, bts: 59.65},
 { name: 'Чемпионат Германии. Региональная лига. Бавария', gp: 66, avg: 3.439, over2: 63.64, over3: 46.97, over4: 30.30, over5: 13.64, aos: 25.76, threes: 1.52, twoes: 6.06, zeroes: 3.03, bts: 63.64},
 { name: 'Чемпионат Японии. 2-й дивизион', gp: 326, avg: 2.549, over2: 45.40, over3: 25.15, over4: 11.35, over5: 3.99, aos: 8.90, threes: 0.92, twoes: 4.29, zeroes: 6.44, bts: 50.00},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 1', gp: 119, avg: 2.874, over2: 57.98, over3: 30.25, over4: 15.97, over5: 8.40, aos: 13.45, threes: 1.68, twoes: 8.40, zeroes: 6.72, bts: 51.26},
 { name: 'Чемпионат Португалии. 2-й дивизион', gp: 38, avg: 2.579, over2: 63.16, over3: 13.16, over4: 2.63, over5: 0.00, aos: 2.63, threes: 0.00, twoes: 5.26, zeroes: 7.89, bts: 60.53},
 { name: 'Чемпионат Кувейта', gp: 210, avg: 3.048, over2: 54.76, over3: 32.86, over4: 20.00, over5: 12.38, aos: 19.52, threes: 2.38, twoes: 2.86, zeroes: 5.24, bts: 52.38},
 { name: 'Чемпионат Южной Америки До 17 лет', gp: 30, avg: 2.933, over2: 66.67, over3: 40.00, over4: 13.33, over5: 6.67, aos: 20.00, threes: 0.00, twoes: 13.33, zeroes: 6.67, bts: 40.00},
 { name: 'Чемпионат Черногории', gp: 20, avg: 2.450, over2: 45.00, over3: 25.00, over4: 15.00, over5: 5.00, aos: 15.00, threes: 5.00, twoes: 5.00, zeroes: 5.00, bts: 45.00},
 { name: 'Чемпионат Бразилии. Серия C', gp: 150, avg: 2.060, over2: 31.33, over3: 14.00, over4: 5.33, over5: 1.33, aos: 2.00, threes: 0.67, twoes: 4.67, zeroes: 11.33, bts: 44.67},
 { name: 'Чемпионат Украины (до 19 лет)', gp: 96, avg: 3.240, over2: 56.25, over3: 37.50, over4: 25.00, over5: 13.54, aos: 22.92, threes: 0.00, twoes: 1.04, zeroes: 4.17, bts: 52.08},
 { name: 'Чемпионат Шотландии. 2-я лига', gp: 15, avg: 3.267, over2: 66.67, over3: 46.67, over4: 20.00, over5: 6.67, aos: 13.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 66.67},
 { name: 'Чемпионат Германии. Региональная лига. Север', gp: 36, avg: 3.083, over2: 61.11, over3: 38.89, over4: 22.22, over5: 2.78, aos: 16.67, threes: 0.00, twoes: 5.56, zeroes: 5.56, bts: 66.67},
 { name: 'Чемпионат России. Турнир молодёжных команд', gp: 59, avg: 3.119, over2: 67.80, over3: 44.07, over4: 23.73, over5: 8.47, aos: 20.34, threes: 1.69, twoes: 8.47, zeroes: 11.86, bts: 62.71},
 { name: 'Чемпионат Германии. Региональная лига. Юг', gp: 306, avg: 2.987, over2: 58.17, over3: 36.27, over4: 17.65, over5: 5.88, aos: 15.03, threes: 0.65, twoes: 4.90, zeroes: 4.58, bts: 56.54},
 { name: 'Чемпионат Англии. Национальная лига', gp: 60, avg: 2.750, over2: 51.67, over3: 28.33, over4: 18.33, over5: 10.00, aos: 8.33, threes: 5.00, twoes: 6.67, zeroes: 10.00, bts: 56.67},
 { name: 'Чемпионат Болгарии', gp: 42, avg: 2.524, over2: 38.10, over3: 23.81, over4: 16.67, over5: 7.14, aos: 16.67, threes: 0.00, twoes: 0.00, zeroes: 9.52, bts: 50.00},
 { name: 'Чемпионат Израиля. 2-й дивизион', gp: 13, avg: 2.000, over2: 23.08, over3: 15.38, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 7.69, zeroes: 0.00, bts: 15.38},
 { name: 'Чемпионат Перу', gp: 16, avg: 3.125, over2: 75.00, over3: 37.50, over4: 25.00, over5: 0.00, aos: 25.00, threes: 0.00, twoes: 0.00, zeroes: 12.50, bts: 50.00},
 { name: 'Чемпионат Колумбии', gp: 180, avg: 2.139, over2: 33.89, over3: 16.11, over4: 7.22, over5: 3.33, aos: 4.44, threes: 0.00, twoes: 3.33, zeroes: 11.11, bts: 40.00},
 { name: 'Чемпионат Ирландии. 1-й дивизион', gp: 96, avg: 2.490, over2: 42.71, over3: 27.08, over4: 12.50, over5: 5.21, aos: 11.46, threes: 2.08, twoes: 4.17, zeroes: 9.38, bts: 45.83},
 { name: 'Чемпионат USL Pro (США)', gp: 345, avg: 2.699, over2: 48.70, over3: 30.43, over4: 13.62, over5: 6.38, aos: 11.88, threes: 1.16, twoes: 5.22, zeroes: 7.25, bts: 51.30},
 { name: 'Чемпионат Бразилии. Серия B', gp: 215, avg: 2.228, over2: 40.47, over3: 18.14, over4: 6.98, over5: 0.93, aos: 4.19, threes: 0.00, twoes: 4.19, zeroes: 10.23, bts: 46.05},
 { name: 'Женщины. Лига Чемпионов УЕФА', gp: 72, avg: 4.611, over2: 77.78, over3: 63.89, over4: 50.00, over5: 36.11, aos: 61.11, threes: 0.00, twoes: 0.00, zeroes: 5.56, bts: 25.00},
 { name: 'Чемпионат Турции. 2-й дивизион', gp: 16, avg: 2.500, over2: 50.00, over3: 25.00, over4: 6.25, over5: 6.25, aos: 6.25, threes: 0.00, twoes: 12.50, zeroes: 6.25, bts: 43.75},
 { name: 'Чемпионат Тринидада и Тобаго', gp: 68, avg: 2.324, over2: 45.59, over3: 26.47, over4: 10.29, over5: 1.47, aos: 13.24, threes: 0.00, twoes: 4.41, zeroes: 14.71, bts: 51.47},
 { name: 'Чемпионат Кипра', gp: 4, avg: 1.000, over2: 0.00, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 25.00, bts: 25.00},
 { name: 'Чемпионат Финляндии. 2-й дивизион', gp: 97, avg: 2.588, over2: 50.52, over3: 26.80, over4: 12.37, over5: 6.19, aos: 12.37, threes: 2.06, twoes: 5.15, zeroes: 9.28, bts: 44.33},
 { name: 'Чемпионат Греции. 2-й дивизион', gp: 284, avg: 2.338, over2: 44.01, over3: 21.83, over4: 8.80, over5: 3.17, aos: 10.21, threes: 0.00, twoes: 2.46, zeroes: 11.27, bts: 37.68},
 { name: 'Чемпионат России. Женщины', gp: 35, avg: 2.486, over2: 37.14, over3: 20.00, over4: 14.29, over5: 5.71, aos: 11.43, threes: 0.00, twoes: 2.86, zeroes: 5.71, bts: 37.14},
 { name: 'Чемпионат Сальвадора', gp: 24, avg: 2.208, over2: 33.33, over3: 12.50, over4: 8.33, over5: 4.17, aos: 4.17, threes: 0.00, twoes: 4.17, zeroes: 16.67, bts: 45.83},
 { name: 'Чемпионат Гондураса', gp: 11, avg: 1.818, over2: 27.27, over3: 18.18, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 9.09, zeroes: 9.09, bts: 45.45},
 { name: 'Чемпионат Панамы', gp: 31, avg: 1.903, over2: 25.81, over3: 9.68, over4: 3.23, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 3.23, zeroes: 9.68, bts: 41.94},
 { name: 'Чемпионат Боливии', gp: 30, avg: 2.633, over2: 46.67, over3: 23.33, over4: 13.33, over5: 10.00, aos: 10.00, threes: 0.00, twoes: 3.33, zeroes: 10.00, bts: 56.67},
 { name: 'Чемпионат Гонконга', gp: 3, avg: 1.333, over2: 0.00, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 33.33},
 { name: 'Чемпионат Швейцарии. 1-й дивизион', gp: 26, avg: 2.923, over2: 57.69, over3: 38.46, over4: 11.54, over5: 3.85, aos: 7.69, threes: 0.00, twoes: 11.54, zeroes: 0.00, bts: 53.85},
 { name: 'Чемпионат Беларуси', gp: 153, avg: 2.131, over2: 38.56, over3: 19.61, over4: 5.23, over5: 0.65, aos: 7.84, threes: 0.00, twoes: 5.88, zeroes: 11.76, bts: 33.33},
 { name: 'Чемпионат Норвегии. Женщины', gp: 84, avg: 3.143, over2: 54.76, over3: 38.10, over4: 22.62, over5: 13.10, aos: 20.24, threes: 1.19, twoes: 7.14, zeroes: 4.76, bts: 50.00},
 { name: 'Чемпионат Бразилии. Молодёжная лига', gp: 80, avg: 2.450, over2: 45.00, over3: 30.00, over4: 15.00, over5: 7.50, aos: 5.00, threes: 2.50, twoes: 5.00, zeroes: 17.50, bts: 50.00},
 { name: 'Чемпионат Швеции. Женщины', gp: 77, avg: 2.987, over2: 57.14, over3: 33.77, over4: 23.38, over5: 9.09, aos: 12.99, threes: 3.90, twoes: 5.19, zeroes: 5.19, bts: 50.65},
 { name: 'Чемпионат Эквадора. Серия А', gp: 42, avg: 2.595, over2: 50.00, over3: 19.05, over4: 9.52, over5: 7.14, aos: 9.52, threes: 0.00, twoes: 4.76, zeroes: 11.90, bts: 52.38},
 { name: 'Чемпионат Австралии. Премьер-лига Нового Южного Уэльса.', gp: 132, avg: 3.295, over2: 65.91, over3: 42.42, over4: 25.76, over5: 9.09, aos: 17.42, threes: 2.27, twoes: 3.03, zeroes: 5.30, bts: 56.82},
 { name: 'Чемпионат Таиланда', gp: 226, avg: 3.332, over2: 63.27, over3: 44.25, over4: 24.34, over5: 13.72, aos: 20.80, threes: 0.88, twoes: 5.75, zeroes: 6.19, bts: 54.87},
 { name: 'Чемпионат Чехии. 2-й дивизион', gp: 41, avg: 2.878, over2: 53.66, over3: 36.59, over4: 21.95, over5: 7.32, aos: 17.07, threes: 2.44, twoes: 4.88, zeroes: 12.20, bts: 60.98},
 { name: 'Чемпионат Уэльса', gp: 15, avg: 2.800, over2: 53.33, over3: 26.67, over4: 6.67, over5: 6.67, aos: 13.33, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 33.33},
 { name: 'Чемпионат Туниса', gp: 21, avg: 2.000, over2: 33.33, over3: 14.29, over4: 9.52, over5: 0.00, aos: 4.76, threes: 0.00, twoes: 0.00, zeroes: 19.05, bts: 33.33},
 { name: 'Чемпионат Марокко', gp: 240, avg: 2.229, over2: 42.92, over3: 18.75, over4: 8.75, over5: 1.25, aos: 8.33, threes: 0.00, twoes: 3.75, zeroes: 11.25, bts: 48.33},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 4', gp: 182, avg: 3.962, over2: 75.82, over3: 57.14, over4: 37.91, over5: 22.53, aos: 32.42, threes: 1.10, twoes: 4.40, zeroes: 3.85, bts: 67.58},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 3', gp: 182, avg: 3.566, over2: 63.74, over3: 46.70, over4: 27.47, over5: 19.23, aos: 30.77, threes: 1.10, twoes: 5.49, zeroes: 3.85, bts: 56.04},
 { name: 'Чемпионат Норвегии. 2-й дивизион. Группа 2', gp: 119, avg: 3.168, over2: 57.98, over3: 37.82, over4: 23.53, over5: 13.45, aos: 18.49, threes: 2.52, twoes: 4.20, zeroes: 4.20, bts: 59.66},
 { name: 'Чемпионат Сингапура', gp: 69, avg: 2.855, over2: 47.83, over3: 28.99, over4: 15.94, over5: 8.70, aos: 17.39, threes: 0.00, twoes: 5.80, zeroes: 5.80, bts: 40.58},
 { name: 'Чемпионат Финляндии. 3-й дивизион', gp: 293, avg: 3.324, over2: 64.85, over3: 43.34, over4: 26.62, over5: 13.99, aos: 23.21, threes: 1.02, twoes: 5.12, zeroes: 6.48, bts: 59.73},
 { name: 'Чемпионат Чили', gp: 33, avg: 1.970, over2: 36.36, over3: 15.15, over4: 3.03, over5: 0.00, aos: 3.03, threes: 0.00, twoes: 3.03, zeroes: 21.21, bts: 48.48},
 { name: 'Чемпионат Узбекистана', gp: 364, avg: 2.989, over2: 57.14, over3: 36.26, over4: 18.68, over5: 8.24, aos: 17.58, threes: 0.55, twoes: 2.20, zeroes: 4.95, bts: 52.75},
 { name: 'Чемпионат Нидерландов. 2-й дивизион', gp: 17, avg: 3.294, over2: 64.71, over3: 41.18, over4: 17.65, over5: 17.65, aos: 17.65, threes: 0.00, twoes: 17.65, zeroes: 5.88, bts: 70.59},
 { name: 'Чемпионат Бельгии. 2-й дивизион', gp: 12, avg: 3.500, over2: 75.00, over3: 50.00, over4: 8.33, over5: 8.33, aos: 8.33, threes: 0.00, twoes: 25.00, zeroes: 0.00, bts: 66.67},
 { name: 'Чемпионат Австрии. 1-я лига', gp: 40, avg: 2.925, over2: 62.50, over3: 45.00, over4: 15.00, over5: 2.50, aos: 17.50, threes: 0.00, twoes: 5.00, zeroes: 7.50, bts: 52.50},
 { name: 'Чемпионат Хорватии', gp: 30, avg: 2.700, over2: 50.00, over3: 30.00, over4: 6.67, over5: 0.00, aos: 10.00, threes: 0.00, twoes: 6.67, zeroes: 0.00, bts: 50.00},
 { name: 'Чемпионат Норвегии. 1-й дивизион', gp: 168, avg: 3.000, over2: 57.74, over3: 35.71, over4: 17.26, over5: 6.55, aos: 12.50, threes: 1.79, twoes: 7.14, zeroes: 4.17, bts: 60.71},
 { name: 'Чемпионат Австралии. Т-Лига', gp: 84, avg: 4.036, over2: 71.43, over3: 54.76, over4: 44.05, over5: 20.24, aos: 36.90, threes: 1.19, twoes: 3.57, zeroes: 3.57, bts: 50.00},
 { name: 'Чемпионат Англии. Истмийская Лига. Премьер Дивизион', gp: 37, avg: 2.865, over2: 54.05, over3: 35.14, over4: 21.62, over5: 5.41, aos: 13.51, threes: 0.00, twoes: 5.41, zeroes: 5.41, bts: 54.05},
 { name: 'Чемпионат Швеции. 2-й дивизион.', gp: 210, avg: 3.067, over2: 61.90, over3: 33.81, over4: 20.95, over5: 10.00, aos: 12.86, threes: 3.33, twoes: 2.86, zeroes: 4.76, bts: 59.05},
 { name: 'Чемпионат Германии. Бундеслига. Женщины', gp: 132, avg: 2.811, over2: 53.79, over3: 28.79, over4: 14.39, over5: 9.85, aos: 15.91, threes: 1.52, twoes: 3.03, zeroes: 3.79, bts: 40.15},
 { name: 'Чемпионат Алжира. 2-й дивизион', gp: 8, avg: 2.125, over2: 37.50, over3: 25.00, over4: 12.50, over5: 12.50, aos: 0.00, threes: 12.50, twoes: 12.50, zeroes: 25.00, bts: 50.00},
 { name: 'Чемпионат Дании. 1-й дивизион', gp: 30, avg: 3.500, over2: 76.67, over3: 43.33, over4: 26.67, over5: 13.33, aos: 13.33, threes: 3.33, twoes: 3.33, zeroes: 3.33, bts: 70.00},
 { name: 'Чемпионат Филиппин', gp: 64, avg: 3.172, over2: 60.94, over3: 35.94, over4: 21.88, over5: 14.06, aos: 17.19, threes: 0.00, twoes: 7.81, zeroes: 6.25, bts: 64.06},
 { name: 'Чемпионат Чехии (до 21 года)', gp: 40, avg: 3.800, over2: 70.00, over3: 52.50, over4: 32.50, over5: 20.00, aos: 32.50, threes: 0.00, twoes: 7.50, zeroes: 2.50, bts: 60.00},
 { name: 'Чемпионат Австралии. Западная Премьер-лига', gp: 182, avg: 3.363, over2: 64.84, over3: 44.51, over4: 25.27, over5: 10.99, aos: 20.33, threes: 0.55, twoes: 7.69, zeroes: 5.49, bts: 60.44},
 { name: 'Чемпионат Аргентины. 4-й дивизион', gp: 385, avg: 2.205, over2: 37.14, over3: 18.18, over4: 8.57, over5: 2.86, aos: 6.23, threes: 0.52, twoes: 3.90, zeroes: 12.99, bts: 42.08},
 { name: 'Чемпионат Италии. Серия C2-B', gp: 306, avg: 2.255, over2: 39.54, over3: 18.95, over4: 8.82, over5: 3.27, aos: 7.52, threes: 0.33, twoes: 4.25, zeroes: 12.42, bts: 46.41},
 { name: 'Чемпионат Чили. 1-й дивизион.', gp: 48, avg: 2.125, over2: 37.50, over3: 16.67, over4: 8.33, over5: 8.33, aos: 8.33, threes: 0.00, twoes: 0.00, zeroes: 16.67, bts: 45.83},
 { name: 'Чемпионат Мира. Отборочные матчи. Океания.', gp: 12, avg: 2.500, over2: 50.00, over3: 25.00, over4: 8.33, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 8.33, zeroes: 8.33, bts: 50.00},
 { name: 'Чемпионат Финляндии. Женщины', gp: 90, avg: 3.333, over2: 61.11, over3: 44.44, over4: 25.56, over5: 14.44, aos: 21.11, threes: 1.11, twoes: 3.33, zeroes: 2.22, bts: 50.00},
 { name: 'Чемпионат Мексики. 2-й дивизион', gp: 88, avg: 2.159, over2: 43.18, over3: 15.91, over4: 4.55, over5: 0.00, aos: 4.55, threes: 0.00, twoes: 2.27, zeroes: 11.36, bts: 47.73},
 { name: 'Чемпионат Ямайки. Премьер-лига', gp: 198, avg: 2.192, over2: 39.39, over3: 16.67, over4: 8.59, over5: 1.52, aos: 6.57, threes: 1.01, twoes: 1.52, zeroes: 10.10, bts: 40.91},
 { name: 'Чемпионат Северной Ирландии', gp: 22, avg: 3.545, over2: 54.55, over3: 40.91, over4: 27.27, over5: 13.64, aos: 27.27, threes: 0.00, twoes: 4.55, zeroes: 0.00, bts: 59.09},
 { name: 'Чемпионат Казахстана', gp: 132, avg: 2.379, over2: 44.70, over3: 19.70, over4: 8.33, over5: 3.79, aos: 7.58, threes: 1.52, twoes: 4.55, zeroes: 6.82, bts: 45.45},
 { name: 'Чемпионат Англии. 2-я лига', gp: 37, avg: 3.135, over2: 56.76, over3: 37.84, over4: 16.22, over5: 10.81, aos: 8.11, threes: 2.70, twoes: 10.81, zeroes: 0.00, bts: 59.46},
 { name: 'Чемпионат Мира. Отборочные матчи. CONCACAF', gp: 18, avg: 2.333, over2: 38.89, over3: 22.22, over4: 5.56, over5: 5.56, aos: 11.11, threes: 0.00, twoes: 5.56, zeroes: 11.11, bts: 38.89},
 { name: 'Чемпионат Мира. Отборочные матчи. Азия', gp: 48, avg: 2.167, over2: 35.42, over3: 20.83, over4: 8.33, over5: 0.00, aos: 4.17, threes: 0.00, twoes: 6.25, zeroes: 8.33, bts: 35.42},
 { name: 'Чемпионат Мира. Отборочные матчи. Южная Америка', gp: 70, avg: 2.929, over2: 64.29, over3: 32.86, over4: 11.43, over5: 2.86, aos: 11.43, threes: 0.00, twoes: 12.86, zeroes: 2.86, bts: 45.71},
 { name: 'Чемпионат Мира. Отборочные матчи. Африка', gp: 20, avg: 2.000, over2: 35.00, over3: 15.00, over4: 0.00, over5: 0.00, aos: 5.00, threes: 0.00, twoes: 0.00, zeroes: 20.00, bts: 45.00},
 { name: 'Чемпионат Мира. Отборочные матчи. Европа', gp: 162, avg: 2.975, over2: 54.94, over3: 36.42, over4: 20.37, over5: 6.79, aos: 22.84, threes: 0.00, twoes: 4.32, zeroes: 6.79, bts: 41.36},
 { name: 'Чемпионат Гватемалы', gp: 31, avg: 2.129, over2: 32.26, over3: 19.35, over4: 12.90, over5: 3.23, aos: 16.13, threes: 0.00, twoes: 3.23, zeroes: 12.90, bts: 32.26},
 { name: 'Чемпионат Боснии и Герцеговины', gp: 30, avg: 1.933, over2: 33.33, over3: 13.33, over4: 0.00, over5: 0.00, aos: 3.33, threes: 0.00, twoes: 0.00, zeroes: 6.67, bts: 33.33},
 { name: 'Чемпионат Австралии. SAPL лига', gp: 132, avg: 3.318, over2: 66.67, over3: 40.91, over4: 25.00, over5: 12.12, aos: 17.42, threes: 1.52, twoes: 3.79, zeroes: 3.03, bts: 60.61},
 { name: 'Чемпионат Македонии', gp: 10, avg: 2.200, over2: 40.00, over3: 10.00, over4: 0.00, over5: 0.00, aos: 10.00, threes: 0.00, twoes: 0.00, zeroes: 10.00, bts: 30.00},
 { name: 'Чемпионат Румынии', gp: 51, avg: 2.000, over2: 33.33, over3: 7.84, over4: 1.96, over5: 1.96, aos: 1.96, threes: 0.00, twoes: 0.00, zeroes: 9.80, bts: 39.22},
 { name: 'Чемпионат Румынии. 2-я лига', gp: 300, avg: 2.770, over2: 56.00, over3: 27.00, over4: 14.67, over5: 5.67, aos: 12.33, threes: 0.33, twoes: 3.67, zeroes: 6.00, bts: 46.00},
 { name: 'Чемпионат России. 2-й див. Восток', gp: 10, avg: 1.600, over2: 20.00, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 10.00, bts: 30.00},
 { name: 'Чемпионат Китая. 1-я лига', gp: 177, avg: 2.847, over2: 56.50, over3: 35.03, over4: 12.99, over5: 7.34, aos: 11.86, threes: 1.69, twoes: 7.34, zeroes: 6.21, bts: 59.89},
 { name: 'Чемпионат Швеции. 1-й дивизион', gp: 160, avg: 2.944, over2: 60.63, over3: 30.00, over4: 16.25, over5: 7.50, aos: 13.75, threes: 0.63, twoes: 3.75, zeroes: 6.25, bts: 57.50},
 { name: 'Чемпионат Шотландии. 1-я лига', gp: 15, avg: 3.333, over2: 60.00, over3: 33.33, over4: 26.67, over5: 20.00, aos: 20.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 60.00},
 { name: 'Чемпионат России. 2-й див. Центр', gp: 37, avg: 2.541, over2: 56.76, over3: 13.51, over4: 5.41, over5: 0.00, aos: 8.11, threes: 0.00, twoes: 5.41, zeroes: 2.70, bts: 54.05},
 { name: 'Чемпионат России. 2-й див. Юг', gp: 40, avg: 2.550, over2: 42.50, over3: 22.50, over4: 15.00, over5: 10.00, aos: 7.50, threes: 5.00, twoes: 2.50, zeroes: 5.00, bts: 50.00},
 { name: 'Чемпионат Индонезии. Лига 1.', gp: 182, avg: 2.604, over2: 48.90, over3: 28.02, over4: 12.09, over5: 3.85, aos: 7.14, threes: 0.00, twoes: 6.59, zeroes: 6.59, bts: 52.20},
 { name: 'Чемпионат Италии. Серия A', gp: 10, avg: 2.200, over2: 60.00, over3: 10.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 20.00, bts: 40.00},
 { name: 'Чемпионат Греции', gp: 8, avg: 1.875, over2: 25.00, over3: 12.50, over4: 12.50, over5: 0.00, aos: 12.50, threes: 0.00, twoes: 0.00, zeroes: 25.00, bts: 50.00},
 { name: 'Чемпионат Австрии. Бундеслига', gp: 25, avg: 3.120, over2: 60.00, over3: 44.00, over4: 28.00, over5: 8.00, aos: 16.00, threes: 0.00, twoes: 8.00, zeroes: 8.00, bts: 56.00},
 { name: 'Чемпионат Дании', gp: 44, avg: 2.705, over2: 50.00, over3: 25.00, over4: 20.45, over5: 4.55, aos: 15.91, threes: 0.00, twoes: 2.27, zeroes: 13.64, bts: 52.27},
 { name: 'Чемпионат Финляндии', gp: 138, avg: 2.623, over2: 45.65, over3: 25.36, over4: 14.49, over5: 8.70, aos: 14.49, threes: 1.45, twoes: 3.62, zeroes: 9.42, bts: 50.00},
 { name: 'Чемпионат Германии. 2-я бундеслига', gp: 31, avg: 2.710, over2: 51.61, over3: 29.03, over4: 6.45, over5: 6.45, aos: 9.68, threes: 0.00, twoes: 12.90, zeroes: 0.00, bts: 51.61},
 { name: 'Чемпионат Украины', gp: 36, avg: 2.139, over2: 44.44, over3: 19.44, over4: 5.56, over5: 0.00, aos: 5.56, threes: 0.00, twoes: 2.78, zeroes: 16.67, bts: 38.89},
 { name: 'Чемпионат Бразилии. Серия A', gp: 210, avg: 2.381, over2: 38.10, over3: 23.33, over4: 10.95, over5: 4.76, aos: 8.57, threes: 0.95, twoes: 4.76, zeroes: 10.00, bts: 40.48},
 { name: 'Чемпионат Испании. Сегунда дивизион', gp: 12, avg: 1.750, over2: 33.33, over3: 8.33, over4: 8.33, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 25.00, bts: 33.33},
 { name: 'Чемпионат Польши', gp: 50, avg: 2.460, over2: 40.00, over3: 24.00, over4: 14.00, over5: 6.00, aos: 6.00, threes: 2.00, twoes: 0.00, zeroes: 8.00, bts: 52.00},
 { name: 'Чемпионат Венгрии', gp: 35, avg: 2.743, over2: 48.57, over3: 34.29, over4: 8.57, over5: 0.00, aos: 8.57, threes: 0.00, twoes: 17.14, zeroes: 2.86, bts: 57.14},
 { name: 'Чемпионат Словении', gp: 30, avg: 2.933, over2: 60.00, over3: 50.00, over4: 13.33, over5: 6.67, aos: 16.67, threes: 0.00, twoes: 10.00, zeroes: 10.00, bts: 60.00},
 { name: 'Чемпионат Молдавии', gp: 38, avg: 2.579, over2: 47.37, over3: 26.32, over4: 13.16, over5: 5.26, aos: 15.79, threes: 0.00, twoes: 7.89, zeroes: 0.00, bts: 42.11},
 { name: 'Чемпионат Швейцарии', gp: 25, avg: 2.720, over2: 44.00, over3: 32.00, over4: 16.00, over5: 8.00, aos: 12.00, threes: 4.00, twoes: 4.00, zeroes: 8.00, bts: 36.00},
 { name: 'Чемпионат Шотландии. Чемпион-Лига', gp: 15, avg: 2.933, over2: 53.33, over3: 46.67, over4: 20.00, over5: 6.67, aos: 20.00, threes: 0.00, twoes: 6.67, zeroes: 6.67, bts: 73.33},
 { name: 'Чемпионат Японии', gp: 214, avg: 2.589, over2: 45.33, over3: 23.36, over4: 12.62, over5: 6.07, aos: 7.48, threes: 1.40, twoes: 3.74, zeroes: 3.74, bts: 48.13},
 { name: 'Чемпионат Японии. 3-й дивизион', gp: 149, avg: 2.403, over2: 45.64, over3: 20.13, over4: 8.72, over5: 3.36, aos: 6.71, threes: 0.00, twoes: 6.71, zeroes: 7.38, bts: 48.99},
 { name: 'Чемпионат Иордании', gp: 132, avg: 2.235, over2: 43.18, over3: 16.67, over4: 6.06, over5: 2.27, aos: 6.06, threes: 0.76, twoes: 2.27, zeroes: 15.91, bts: 45.45},
 { name: 'Чемпионат Грузии', gp: 117, avg: 2.744, over2: 55.56, over3: 26.50, over4: 19.66, over5: 5.13, aos: 15.38, threes: 0.85, twoes: 0.00, zeroes: 9.40, bts: 47.86},
 { name: 'Чемпионат Парагвая', gp: 29, avg: 2.690, over2: 51.72, over3: 27.59, over4: 17.24, over5: 0.00, aos: 10.34, threes: 0.00, twoes: 0.00, zeroes: 10.34, bts: 55.17},
 { name: 'Чемпионат Индии', gp: 90, avg: 2.500, over2: 47.78, over3: 22.22, over4: 10.00, over5: 4.44, aos: 10.00, threes: 0.00, twoes: 3.33, zeroes: 13.33, bts: 47.78},
 { name: 'Чемпионат ЮАР', gp: 16, avg: 2.063, over2: 25.00, over3: 12.50, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 6.25, zeroes: 6.25, bts: 50.00},
 { name: 'Чемпионат Индонезии. Суперлига', gp: 19, avg: 3.053, over2: 47.37, over3: 31.58, over4: 21.05, over5: 15.79, aos: 15.79, threes: 5.26, twoes: 5.26, zeroes: 0.00, bts: 52.63},
 { name: 'Чемпионат Германии. Региональная лига. Запад', gp: 34, avg: 3.088, over2: 61.76, over3: 41.18, over4: 20.59, over5: 11.76, aos: 14.71, threes: 2.94, twoes: 11.76, zeroes: 8.82, bts: 67.65},
 { name: 'Чемпионат Коста-Рики', gp: 28, avg: 2.607, over2: 57.14, over3: 28.57, over4: 10.71, over5: 7.14, aos: 14.29, threes: 0.00, twoes: 7.14, zeroes: 17.86, bts: 50.00},
 { name: 'Чемпионат Латвии', gp: 69, avg: 2.319, over2: 43.48, over3: 21.74, over4: 5.80, over5: 2.90, aos: 8.70, threes: 0.00, twoes: 2.90, zeroes: 10.14, bts: 42.03},
 { name: 'Чемпионат Англии. Премьер-лига (до 21-го года).', gp: 264, avg: 2.947, over2: 56.44, over3: 32.95, over4: 16.67, over5: 6.44, aos: 11.36, threes: 1.52, twoes: 3.79, zeroes: 4.92, bts: 57.20},
 { name: 'Чемпионат Колумбии. 1-й дивизион', gp: 116, avg: 2.276, over2: 37.93, over3: 18.10, over4: 7.76, over5: 3.45, aos: 5.17, threes: 1.72, twoes: 3.45, zeroes: 6.03, bts: 43.97},
 { name: 'Чемпионат Литвы', gp: 88, avg: 2.409, over2: 38.64, over3: 25.00, over4: 12.50, over5: 4.55, aos: 13.64, threes: 1.14, twoes: 2.27, zeroes: 9.09, bts: 48.86},
 { name: 'Чемпионат Азии (до 23 лет)', gp: 114, avg: 3.596, over2: 56.14, over3: 40.35, over4: 26.32, over5: 21.05, aos: 28.07, threes: 0.00, twoes: 1.75, zeroes: 7.02, bts: 35.09},
 { name: 'Чемпионат Украины. Турнир молодёжных команд', gp: 38, avg: 3.184, over2: 60.53, over3: 42.11, over4: 18.42, over5: 13.16, aos: 18.42, threes: 2.63, twoes: 13.16, zeroes: 2.63, bts: 47.37},
 { name: 'Чемпионат Мальты', gp: 11, avg: 3.091, over2: 54.55, over3: 54.55, over4: 27.27, over5: 0.00, aos: 36.36, threes: 0.00, twoes: 9.09, zeroes: 0.00, bts: 36.36},
 { name: 'Чемпионат Украины. Первая лига', gp: 71, avg: 2.183, over2: 36.62, over3: 16.90, over4: 11.27, over5: 0.00, aos: 1.41, threes: 0.00, twoes: 1.41, zeroes: 5.63, bts: 36.62},
 { name: 'Чемпионат Ирана. 2-я лига', gp: 17, avg: 2.353, over2: 41.18, over3: 35.29, over4: 5.88, over5: 5.88, aos: 11.76, threes: 0.00, twoes: 11.76, zeroes: 5.88, bts: 41.18},
 { name: 'Чемпионат Исландии. Женщины', gp: 70, avg: 3.214, over2: 60.00, over3: 44.29, over4: 24.29, over5: 8.57, aos: 25.71, threes: 1.43, twoes: 2.86, zeroes: 1.43, bts: 45.71},
 { name: 'Чемпионат Австралии. Премьер-лига Столичной территории', gp: 85, avg: 4.176, over2: 78.82, over3: 57.65, over4: 38.82, over5: 29.41, aos: 38.82, threes: 4.71, twoes: 3.53, zeroes: 2.35, bts: 49.41},
 { name: 'Чемпионат Малайзии. Премьер-лига', gp: 114, avg: 3.430, over2: 66.67, over3: 42.11, over4: 20.18, over5: 12.28, aos: 16.67, threes: 1.75, twoes: 4.39, zeroes: 1.75, bts: 69.30},
 { name: 'Чемпионат Эстонии', gp: 133, avg: 3.662, over2: 63.91, over3: 41.35, over4: 29.32, over5: 18.05, aos: 26.32, threes: 0.75, twoes: 1.50, zeroes: 2.26, bts: 52.63},
 { name: 'Чемпионат Армении. 1-й дивизион', gp: 12, avg: 2.833, over2: 50.00, over3: 33.33, over4: 25.00, over5: 8.33, aos: 25.00, threes: 0.00, twoes: 8.33, zeroes: 8.33, bts: 50.00},
 { name: 'Чемпионат Аргентины. 2-й дивизион', gp: 506, avg: 2.142, over2: 34.98, over3: 17.98, over4: 7.51, over5: 2.17, aos: 5.93, threes: 0.20, twoes: 4.15, zeroes: 13.24, bts: 42.69},
 { name: 'Женщины. Летняя Универсиада', gp: 30, avg: 4.133, over2: 60.00, over3: 33.33, over4: 13.33, over5: 13.33, aos: 13.33, threes: 0.00, twoes: 6.67, zeroes: 6.67, bts: 40.00},
 { name: 'Чемпионат Испании. Сегунда дивизион Б', gp: 40, avg: 1.900, over2: 30.00, over3: 10.00, over4: 5.00, over5: 0.00, aos: 2.50, threes: 0.00, twoes: 2.50, zeroes: 10.00, bts: 42.50},
 { name: 'Чемпионат Бахрейна', gp: 90, avg: 2.556, over2: 45.56, over3: 24.44, over4: 14.44, over5: 5.56, aos: 10.00, threes: 1.11, twoes: 4.44, zeroes: 10.00, bts: 52.22},
 { name: 'Чемпионат Эквадора. Серия B', gp: 161, avg: 2.205, over2: 38.51, over3: 19.88, over4: 11.80, over5: 3.11, aos: 5.59, threes: 1.24, twoes: 1.24, zeroes: 11.18, bts: 39.13},
 { name: 'Женщины. BeNe League', gp: 156, avg: 3.154, over2: 59.62, over3: 33.33, over4: 21.79, over5: 10.26, aos: 21.79, threes: 0.64, twoes: 1.28, zeroes: 2.56, bts: 44.23},
 { name: 'Чемпионат Южной Кореи. Женщины', gp: 72, avg: 3.153, over2: 59.72, over3: 41.67, over4: 25.00, over5: 9.72, aos: 23.61, threes: 0.00, twoes: 2.78, zeroes: 6.94, bts: 59.72},
 { name: 'Чемпионат Венесуэлы', gp: 108, avg: 2.241, over2: 46.30, over3: 16.67, over4: 5.56, over5: 1.85, aos: 3.70, threes: 0.00, twoes: 3.70, zeroes: 12.96, bts: 48.15},
 { name: 'Чемпионат Вьетнама', gp: 112, avg: 2.786, over2: 50.89, over3: 27.68, over4: 14.29, over5: 8.04, aos: 8.04, threes: 1.79, twoes: 8.04, zeroes: 5.36, bts: 61.61},
 { name: 'Чемпионат Уругвая', gp: 16, avg: 3.500, over2: 87.50, over3: 62.50, over4: 12.50, over5: 0.00, aos: 25.00, threes: 0.00, twoes: 12.50, zeroes: 0.00, bts: 37.50},
 { name: 'Чемпионат Океании (до 20 лет)', gp: 30, avg: 3.667, over2: 66.67, over3: 53.33, over4: 26.67, over5: 20.00, aos: 40.00, threes: 0.00, twoes: 6.67, zeroes: 6.67, bts: 40.00},
 { name: 'Чемпионат Англии. Южная Премьер-лига. Премьер Дивизион', gp: 36, avg: 3.250, over2: 63.89, over3: 44.44, over4: 30.56, over5: 11.11, aos: 16.67, threes: 2.78, twoes: 5.56, zeroes: 2.78, bts: 58.33},
 { name: 'Чемпионат Англии. Северная Премьер-лига. Премьер Дивизион', gp: 48, avg: 2.604, over2: 39.58, over3: 27.08, over4: 14.58, over5: 4.17, aos: 10.42, threes: 2.08, twoes: 2.08, zeroes: 2.08, bts: 50.00},
 { name: 'Чемпионат США. Женщины', gp: 92, avg: 2.815, over2: 47.83, over3: 30.43, over4: 15.22, over5: 6.52, aos: 9.78, threes: 0.00, twoes: 6.52, zeroes: 3.26, bts: 54.35},
 { name: 'Чемпионат Австралии. VPL лига', gp: 182, avg: 2.841, over2: 53.85, over3: 31.87, over4: 14.84, over5: 7.14, aos: 13.19, threes: 1.10, twoes: 6.04, zeroes: 4.95, bts: 51.65},
 { name: 'Чемпионат Йемена', gp: 109, avg: 2.440, over2: 43.12, over3: 22.02, over4: 9.17, over5: 4.59, aos: 9.17, threes: 0.92, twoes: 1.83, zeroes: 7.34, bts: 51.38},
 { name: 'Чемпионат Англии. Женщины', gp: 36, avg: 3.389, over2: 55.56, over3: 50.00, over4: 33.33, over5: 22.22, aos: 36.11, threes: 0.00, twoes: 2.78, zeroes: 8.33, bts: 44.44},
 { name: 'Чемпионат ОАЭ. 1-й дивизион', gp: 131, avg: 3.038, over2: 58.78, over3: 35.88, over4: 16.79, over5: 9.16, aos: 11.45, threes: 1.53, twoes: 7.63, zeroes: 5.34, bts: 58.78},
 { name: 'Чемпионат Сербии', gp: 47, avg: 2.426, over2: 48.94, over3: 23.40, over4: 8.51, over5: 2.13, aos: 12.77, threes: 0.00, twoes: 2.13, zeroes: 8.51, bts: 38.30},
 { name: 'Чемпионат Южной Кореи', gp: 161, avg: 2.727, over2: 57.76, over3: 27.95, over4: 11.80, over5: 3.11, aos: 6.83, threes: 1.24, twoes: 6.83, zeroes: 6.83, bts: 60.87},
 { name: 'Чемпионат Исландии. 2-й дивизион', gp: 97, avg: 3.577, over2: 70.10, over3: 46.39, over4: 29.90, over5: 15.46, aos: 20.62, threes: 1.03, twoes: 8.25, zeroes: 4.12, bts: 71.13},
 { name: 'Чемпионат Саудовской Аравии', gp: 14, avg: 4.214, over2: 92.86, over3: 64.29, over4: 35.71, over5: 14.29, aos: 35.71, threes: 0.00, twoes: 7.14, zeroes: 0.00, bts: 85.71},
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
    title: 'Totals and other',
    renderTo: 'container',
    width: 1400,
    height: 600,
    data: data,
    multiSort: true,
    textSelection: true,
    defaults: {
      type: 'string',
      width: 100,
      editable: true,
      resizable: true,
      sortable: true
    },
    columnLines: false,	  
    columns: [
	    {index: 'name', title: 'League', width: 300},
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
	    {index: 'bts', title: 'Both Score', width: 80, type: 'number', render: renderChangesFn}
    ]
  });

});
