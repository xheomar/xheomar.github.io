var data = [
 { name: 'Сборные Чемпионат мира', gp: 450, avg: 2.998, over2: 55.11, over3: 34.44, over4: 18.89, over5: 9.78, aos: 20.89, threes: 0.00, twoes: 5.33, zeroes: 6.22, bts: 37.11},
 { name: 'Швеция Суперэттан', gp: 164, avg: 2.963, over2: 61.59, over3: 29.88, over4: 16.46, over5: 7.93, aos: 14.02, threes: 0.61, twoes: 3.66, zeroes: 6.10, bts: 57.93},
 { name: 'Сингапур С-Лига', gp: 69, avg: 2.855, over2: 47.83, over3: 28.99, over4: 15.94, over5: 8.70, aos: 17.39, threes: 0.00, twoes: 5.80, zeroes: 5.80, bts: 40.58},
 { name: 'Англия 1-я лига', gp: 48, avg: 2.708, over2: 43.75, over3: 29.17, over4: 22.92, over5: 6.25, aos: 14.58, threes: 6.25, twoes: 0.00, zeroes: 4.17, bts: 50.00},
 { name: 'Женщины Норвегия. Топпсериен', gp: 89, avg: 3.135, over2: 53.93, over3: 38.20, over4: 22.47, over5: 13.48, aos: 20.22, threes: 1.12, twoes: 6.74, zeroes: 4.49, bts: 50.56},
 { name: 'Женщины Швеция. Аллсвенскан', gp: 77, avg: 2.987, over2: 57.14, over3: 33.77, over4: 23.38, over5: 9.09, aos: 12.99, threes: 3.90, twoes: 5.19, zeroes: 5.19, bts: 50.65},
 { name: 'Республика Корея K-лига. 1-й дивизион', gp: 161, avg: 2.727, over2: 57.76, over3: 27.95, over4: 11.80, over5: 3.11, aos: 6.83, threes: 1.24, twoes: 6.83, zeroes: 6.83, bts: 60.87},
 { name: 'Норвегия 1-й дивизион', gp: 168, avg: 3.000, over2: 57.74, over3: 35.71, over4: 17.26, over5: 6.55, aos: 12.50, threes: 1.79, twoes: 7.14, zeroes: 4.17, bts: 60.71},
 { name: 'Украина 1-я лига', gp: 72, avg: 2.250, over2: 40.28, over3: 20.83, over4: 9.72, over5: 0.00, aos: 1.39, threes: 0.00, twoes: 4.17, zeroes: 6.94, bts: 41.67},
 { name: 'Турция Суперлига', gp: 27, avg: 3.148, over2: 70.37, over3: 44.44, over4: 11.11, over5: 0.00, aos: 3.70, threes: 0.00, twoes: 18.52, zeroes: 0.00, bts: 74.07},
 { name: 'Португалия Примейра-лига', gp: 35, avg: 2.371, over2: 42.86, over3: 20.00, over4: 11.43, over5: 0.00, aos: 8.57, threes: 0.00, twoes: 2.86, zeroes: 5.71, bts: 40.00},
 { name: 'Греция Суперлига', gp: 15, avg: 1.867, over2: 26.67, over3: 20.00, over4: 6.67, over5: 0.00, aos: 6.67, threes: 0.00, twoes: 6.67, zeroes: 26.67, bts: 40.00},
 { name: 'Чехия 1-я лига', gp: 40, avg: 2.250, over2: 40.00, over3: 20.00, over4: 5.00, over5: 5.00, aos: 7.50, threes: 2.50, twoes: 2.50, zeroes: 12.50, bts: 40.00},
 { name: 'Аргентина Примера дивизион', gp: 11, avg: 3.455, over2: 63.64, over3: 27.27, over4: 18.18, over5: 18.18, aos: 18.18, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 63.64},
 { name: 'Австрия Бундеслига', gp: 30, avg: 2.933, over2: 56.67, over3: 40.00, over4: 23.33, over5: 6.67, aos: 13.33, threes: 0.00, twoes: 6.67, zeroes: 6.67, bts: 53.33},
 { name: 'Швейцария Суперлига', gp: 31, avg: 2.710, over2: 41.94, over3: 32.26, over4: 16.13, over5: 6.45, aos: 12.90, threes: 3.23, twoes: 6.45, zeroes: 6.45, bts: 45.16},
 { name: 'Дания Суперлига', gp: 49, avg: 2.612, over2: 46.94, over3: 22.45, over4: 18.37, over5: 4.08, aos: 14.29, threes: 0.00, twoes: 2.04, zeroes: 14.29, bts: 48.98},
 { name: 'Шотландия Лига до 20 лет', gp: 7, avg: 4.714, over2: 85.71, over3: 85.71, over4: 42.86, over5: 42.86, aos: 42.86, threes: 14.29, twoes: 28.57, zeroes: 0.00, bts: 85.71},
 { name: 'Австрия 1-я лига', gp: 40, avg: 2.925, over2: 62.50, over3: 45.00, over4: 15.00, over5: 2.50, aos: 17.50, threes: 0.00, twoes: 5.00, zeroes: 7.50, bts: 52.50},
 { name: 'Украина Премьер-лига', gp: 41, avg: 2.122, over2: 43.90, over3: 19.51, over4: 7.32, over5: 0.00, aos: 7.32, threes: 0.00, twoes: 2.44, zeroes: 17.07, bts: 36.59},
 { name: 'Англия Премьер-лига', gp: 30, avg: 2.433, over2: 36.67, over3: 23.33, over4: 13.33, over5: 6.67, aos: 13.33, threes: 3.33, twoes: 0.00, zeroes: 10.00, bts: 30.00},
 { name: 'Швейцария Челлендж-лига', gp: 29, avg: 2.897, over2: 55.17, over3: 37.93, over4: 10.34, over5: 3.45, aos: 6.90, threes: 0.00, twoes: 10.34, zeroes: 0.00, bts: 55.17},
 { name: 'Шотландия Премьер-лига', gp: 24, avg: 3.000, over2: 62.50, over3: 33.33, over4: 16.67, over5: 4.17, aos: 12.50, threes: 0.00, twoes: 4.17, zeroes: 4.17, bts: 66.67},
 { name: 'Германия Бундеслига', gp: 18, avg: 2.167, over2: 33.33, over3: 27.78, over4: 5.56, over5: 0.00, aos: 5.56, threes: 0.00, twoes: 11.11, zeroes: 5.56, bts: 27.78},
 { name: 'Италия Серия А', gp: 20, avg: 2.700, over2: 70.00, over3: 25.00, over4: 10.00, over5: 5.00, aos: 5.00, threes: 0.00, twoes: 0.00, zeroes: 15.00, bts: 55.00},
 { name: 'Сербия Суперлига', gp: 54, avg: 2.500, over2: 50.00, over3: 25.93, over4: 11.11, over5: 1.85, aos: 14.81, threes: 0.00, twoes: 3.70, zeroes: 9.26, bts: 40.74},
 { name: 'Испания Примера дивизион', gp: 20, avg: 2.300, over2: 40.00, over3: 25.00, over4: 10.00, over5: 5.00, aos: 5.00, threes: 0.00, twoes: 15.00, zeroes: 5.00, bts: 35.00},
 { name: 'Нидерланды Эредивизи', gp: 27, avg: 3.333, over2: 70.37, over3: 37.04, over4: 22.22, over5: 7.41, aos: 14.81, threes: 3.70, twoes: 7.41, zeroes: 0.00, bts: 66.67},
 { name: 'Бельгия 1-й дивизион A', gp: 40, avg: 3.075, over2: 57.50, over3: 37.50, over4: 25.00, over5: 10.00, aos: 17.50, threes: 2.50, twoes: 2.50, zeroes: 5.00, bts: 50.00},
 { name: 'Бельгия 1-й дивизион B', gp: 12, avg: 3.500, over2: 75.00, over3: 50.00, over4: 8.33, over5: 8.33, aos: 8.33, threes: 0.00, twoes: 25.00, zeroes: 0.00, bts: 66.67},
 { name: 'Индонезия Лига 1', gp: 187, avg: 2.620, over2: 48.66, over3: 28.34, over4: 12.83, over5: 4.28, aos: 8.02, threes: 0.00, twoes: 6.42, zeroes: 6.95, bts: 51.34},
 { name: 'Германия 2-я бундеслига', gp: 35, avg: 2.771, over2: 54.29, over3: 28.57, over4: 8.57, over5: 5.71, aos: 8.57, threes: 0.00, twoes: 11.43, zeroes: 0.00, bts: 57.14},
 { name: 'Россия Премьер-лига', gp: 64, avg: 2.188, over2: 34.38, over3: 18.75, over4: 9.38, over5: 4.69, aos: 7.81, threes: 0.00, twoes: 3.13, zeroes: 10.94, bts: 42.19},
 { name: 'Финляндия Вейккауслига', gp: 144, avg: 2.625, over2: 45.83, over3: 25.69, over4: 14.58, over5: 9.03, aos: 15.28, threes: 1.39, twoes: 3.47, zeroes: 9.03, bts: 49.31},
 { name: 'Польша Экстракласа', gp: 56, avg: 2.464, over2: 42.86, over3: 21.43, over4: 12.50, over5: 5.36, aos: 5.36, threes: 1.79, twoes: 0.00, zeroes: 7.14, bts: 53.57},
 { name: 'Малайзия Суперлига', gp: 114, avg: 3.132, over2: 54.39, over3: 37.72, over4: 22.81, over5: 12.28, aos: 15.79, threes: 0.88, twoes: 5.26, zeroes: 3.51, bts: 59.65},
 { name: 'Индия I-лига', gp: 90, avg: 2.500, over2: 47.78, over3: 22.22, over4: 10.00, over5: 4.44, aos: 10.00, threes: 0.00, twoes: 3.33, zeroes: 13.33, bts: 47.78},
 { name: 'Иран Про-лига', gp: 39, avg: 2.333, over2: 43.59, over3: 17.95, over4: 7.69, over5: 0.00, aos: 5.13, threes: 0.00, twoes: 7.69, zeroes: 7.69, bts: 51.28},
 { name: 'Шотландия 1-я лига', gp: 20, avg: 3.300, over2: 60.00, over3: 35.00, over4: 25.00, over5: 15.00, aos: 20.00, threes: 0.00, twoes: 5.00, zeroes: 0.00, bts: 55.00},
 { name: 'Шотландия 2-я лига', gp: 20, avg: 3.100, over2: 60.00, over3: 40.00, over4: 20.00, over5: 10.00, aos: 15.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 60.00},
 { name: 'Алжир 1-я лига', gp: 8, avg: 2.500, over2: 50.00, over3: 12.50, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 62.50},
 { name: 'Япония Джей-лига. 1-й дивизион', gp: 216, avg: 2.597, over2: 45.83, over3: 23.61, over4: 12.50, over5: 6.02, aos: 7.41, threes: 1.39, twoes: 4.17, zeroes: 3.70, bts: 48.61},
 { name: 'Россия 2-й дивизион. Центр', gp: 41, avg: 2.780, over2: 60.98, over3: 19.51, over4: 9.76, over5: 4.88, aos: 12.20, threes: 2.44, twoes: 4.88, zeroes: 2.44, bts: 53.66},
 { name: 'Аргентина Примера B Насьональ', gp: 506, avg: 2.136, over2: 34.78, over3: 17.98, over4: 7.51, over5: 2.17, aos: 5.93, threes: 0.20, twoes: 4.15, zeroes: 13.44, bts: 42.49},
 { name: 'Беларусь Высшая лига', gp: 159, avg: 2.170, over2: 39.62, over3: 20.75, over4: 5.66, over5: 1.26, aos: 8.81, threes: 0.00, twoes: 6.29, zeroes: 11.95, bts: 33.96},
 { name: 'Перу 2-й дивизион', gp: 126, avg: 3.143, over2: 54.76, over3: 35.71, over4: 23.02, over5: 14.29, aos: 19.84, threes: 0.79, twoes: 3.97, zeroes: 5.56, bts: 57.14},
 { name: 'Израиль Лига Леумит', gp: 16, avg: 2.063, over2: 25.00, over3: 18.75, over4: 0.00, over5: 0.00, aos: 6.25, threes: 0.00, twoes: 6.25, zeroes: 0.00, bts: 12.50},
 { name: 'ОАЭ Арабиан Галф Лиг', gp: 182, avg: 3.137, over2: 62.09, over3: 35.71, over4: 23.08, over5: 12.09, aos: 21.43, threes: 0.55, twoes: 4.40, zeroes: 9.34, bts: 56.04},
 { name: 'Египет Премьер-лига', gp: 306, avg: 2.255, over2: 38.56, over3: 18.30, over4: 7.52, over5: 3.92, aos: 5.56, threes: 0.98, twoes: 5.88, zeroes: 9.15, bts: 44.77},
 { name: 'Марокко Ботола. 1-й дивизион', gp: 240, avg: 2.229, over2: 42.92, over3: 18.75, over4: 8.75, over5: 1.25, aos: 8.33, threes: 0.00, twoes: 3.75, zeroes: 11.25, bts: 48.33},
 { name: 'Оман Профессиональная лига', gp: 182, avg: 2.758, over2: 53.30, over3: 31.32, over4: 13.19, over5: 5.49, aos: 7.14, threes: 1.10, twoes: 7.69, zeroes: 7.69, bts: 62.64},
 { name: 'Тунис 1-я лига', gp: 21, avg: 2.000, over2: 33.33, over3: 14.29, over4: 9.52, over5: 0.00, aos: 4.76, threes: 0.00, twoes: 0.00, zeroes: 19.05, bts: 33.33},
 { name: 'Таиланд Лига 1', gp: 226, avg: 3.332, over2: 63.27, over3: 44.25, over4: 24.34, over5: 13.72, aos: 20.80, threes: 0.88, twoes: 5.75, zeroes: 6.19, bts: 54.87},
 { name: 'Англия Северная Премьер-лига. Премьер-дивизион', gp: 72, avg: 2.528, over2: 37.50, over3: 25.00, over4: 13.89, over5: 4.17, aos: 11.11, threes: 1.39, twoes: 2.78, zeroes: 2.78, bts: 45.83},
 { name: 'Англия Южная футбольная лига. Премьер-дивизион', gp: 60, avg: 3.100, over2: 61.67, over3: 38.33, over4: 25.00, over5: 10.00, aos: 18.33, threes: 1.67, twoes: 3.33, zeroes: 6.67, bts: 50.00},
 { name: 'Женщины Германия. Бундеслига', gp: 132, avg: 2.811, over2: 53.79, over3: 28.79, over4: 14.39, over5: 9.85, aos: 15.91, threes: 1.52, twoes: 3.03, zeroes: 3.79, bts: 40.15},
 { name: 'Англия Истмийская лига. Премьер-дивизион', gp: 60, avg: 3.000, over2: 56.67, over3: 36.67, over4: 23.33, over5: 6.67, aos: 20.00, threes: 0.00, twoes: 5.00, zeroes: 3.33, bts: 46.67},
 { name: 'Кипр 1-й дивизион', gp: 9, avg: 1.667, over2: 22.22, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 11.11, bts: 33.33},
 { name: 'Парагвай Примера А', gp: 166, avg: 2.584, over2: 51.20, over3: 21.08, over4: 13.25, over5: 5.42, aos: 8.43, threes: 1.81, twoes: 3.61, zeroes: 9.64, bts: 53.01},
 { name: 'Боливия LFPB', gp: 31, avg: 2.581, over2: 45.16, over3: 22.58, over4: 12.90, over5: 9.68, aos: 9.68, threes: 0.00, twoes: 3.23, zeroes: 9.68, bts: 54.84},
 { name: 'Эквадор Серия А', gp: 174, avg: 2.489, over2: 42.53, over3: 23.56, over4: 9.20, over5: 5.17, aos: 8.62, threes: 0.57, twoes: 5.75, zeroes: 10.34, bts: 52.30},
 { name: 'Венесуэла Примера дивизион', gp: 215, avg: 2.553, over2: 49.30, over3: 25.12, over4: 11.63, over5: 4.65, aos: 10.70, threes: 0.93, twoes: 3.72, zeroes: 11.16, bts: 52.56},
 { name: 'Женщины Бельгия. Суперлига', gp: 84, avg: 3.940, over2: 64.29, over3: 46.43, over4: 34.52, over5: 17.86, aos: 36.90, threes: 0.00, twoes: 1.19, zeroes: 3.57, bts: 36.90},
 { name: 'Женщины Нидерланды. Эредивизи', gp: 84, avg: 3.917, over2: 71.43, over3: 57.14, over4: 36.90, over5: 20.24, aos: 35.71, threes: 1.19, twoes: 5.95, zeroes: 1.19, bts: 57.14},
 { name: 'Франция Лига 1', gp: 40, avg: 2.825, over2: 52.50, over3: 25.00, over4: 15.00, over5: 7.50, aos: 10.00, threes: 2.50, twoes: 5.00, zeroes: 2.50, bts: 42.50},
 { name: 'Женщины Испания. Примера дивизион', gp: 240, avg: 3.221, over2: 60.83, over3: 37.08, over4: 21.25, over5: 10.42, aos: 20.83, threes: 1.67, twoes: 2.08, zeroes: 5.00, bts: 48.75},
 { name: 'Румыния Лига 1', gp: 55, avg: 2.145, over2: 36.36, over3: 10.91, over4: 3.64, over5: 3.64, aos: 3.64, threes: 0.00, twoes: 0.00, zeroes: 9.09, bts: 41.82},
 { name: 'Франция Национальная лига', gp: 32, avg: 2.188, over2: 31.25, over3: 15.63, over4: 12.50, over5: 3.13, aos: 9.38, threes: 0.00, twoes: 0.00, zeroes: 6.25, bts: 46.88},
 { name: 'Вьетнам V-Лига', gp: 112, avg: 2.786, over2: 50.89, over3: 27.68, over4: 14.29, over5: 8.04, aos: 8.04, threes: 1.79, twoes: 8.04, zeroes: 5.36, bts: 61.61},
 { name: 'Испания 2-й дивизион', gp: 21, avg: 1.952, over2: 33.33, over3: 9.52, over4: 4.76, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 4.76, zeroes: 19.05, bts: 47.62},
 { name: 'Франция Лига 2', gp: 49, avg: 2.367, over2: 44.90, over3: 22.45, over4: 14.29, over5: 4.08, aos: 10.20, threes: 0.00, twoes: 2.04, zeroes: 16.33, bts: 42.86},
 { name: 'Норвегия Элитсериен', gp: 158, avg: 2.753, over2: 51.27, over3: 27.85, over4: 16.46, over5: 8.23, aos: 11.39, threes: 2.53, twoes: 2.53, zeroes: 8.23, bts: 54.43},
 { name: 'Бразилия Серия C', gp: 159, avg: 2.119, over2: 32.08, over3: 15.09, over4: 6.29, over5: 1.89, aos: 3.14, threes: 0.63, twoes: 4.40, zeroes: 10.69, bts: 47.17},
 { name: 'Шотландия Чемпион-лига', gp: 20, avg: 3.050, over2: 60.00, over3: 50.00, over4: 20.00, over5: 5.00, aos: 30.00, threes: 0.00, twoes: 5.00, zeroes: 5.00, bts: 60.00},
 { name: 'Дания 1-й дивизион', gp: 35, avg: 3.457, over2: 77.14, over3: 45.71, over4: 25.71, over5: 11.43, aos: 11.43, threes: 2.86, twoes: 5.71, zeroes: 5.71, bts: 71.43},
 { name: 'Черногория 1-я лига', gp: 25, avg: 2.280, over2: 40.00, over3: 20.00, over4: 12.00, over5: 4.00, aos: 12.00, threes: 4.00, twoes: 4.00, zeroes: 8.00, bts: 48.00},
 { name: 'Мальта Премьер-лига', gp: 14, avg: 3.286, over2: 57.14, over3: 57.14, over4: 28.57, over5: 7.14, aos: 35.71, threes: 0.00, twoes: 7.14, zeroes: 0.00, bts: 42.86},
 { name: 'Ирландия 1-й дивизион', gp: 96, avg: 2.490, over2: 42.71, over3: 27.08, over4: 12.50, over5: 5.21, aos: 11.46, threes: 2.08, twoes: 4.17, zeroes: 9.38, bts: 45.83},
 { name: 'США NASL', gp: 86, avg: 2.605, over2: 47.67, over3: 26.74, over4: 11.63, over5: 6.98, aos: 6.98, threes: 2.33, twoes: 4.65, zeroes: 8.14, bts: 59.30},
 { name: 'Новая Зеландия Премьер лига', gp: 90, avg: 3.567, over2: 68.89, over3: 53.33, over4: 23.33, over5: 13.33, aos: 25.56, threes: 2.22, twoes: 5.56, zeroes: 2.22, bts: 65.56},
 { name: 'Швеция Аллсвенскан', gp: 168, avg: 2.625, over2: 53.57, over3: 26.19, over4: 10.12, over5: 5.36, aos: 9.52, threes: 1.19, twoes: 7.14, zeroes: 8.93, bts: 54.17},
 { name: 'Англия Чемпион-лига', gp: 60, avg: 2.400, over2: 40.00, over3: 20.00, over4: 10.00, over5: 5.00, aos: 10.00, threes: 0.00, twoes: 1.67, zeroes: 10.00, bts: 48.33},
 { name: 'Израиль Премьер-лига', gp: 13, avg: 2.692, over2: 61.54, over3: 23.08, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 7.69, zeroes: 7.69, bts: 69.23},
 { name: 'Италия Серия В', gp: 10, avg: 2.800, over2: 40.00, over3: 30.00, over4: 30.00, over5: 20.00, aos: 20.00, threes: 0.00, twoes: 0.00, zeroes: 10.00, bts: 50.00},
 { name: 'Турция 1-я лига', gp: 27, avg: 2.556, over2: 51.85, over3: 29.63, over4: 11.11, over5: 3.70, aos: 11.11, threes: 0.00, twoes: 14.81, zeroes: 11.11, bts: 44.44},
 { name: 'Австралия Эй-лига', gp: 135, avg: 3.030, over2: 60.00, over3: 35.56, over4: 17.78, over5: 6.67, aos: 14.81, threes: 2.22, twoes: 7.41, zeroes: 5.19, bts: 59.26},
 { name: 'Россия ФНЛ', gp: 100, avg: 2.440, over2: 50.00, over3: 20.00, over4: 6.00, over5: 0.00, aos: 6.00, threes: 0.00, twoes: 6.00, zeroes: 5.00, bts: 46.00},
 { name: 'США MLS', gp: 188, avg: 2.926, over2: 62.77, over3: 32.45, over4: 11.70, over5: 5.85, aos: 11.70, threes: 1.60, twoes: 7.98, zeroes: 4.26, bts: 54.26},
 { name: 'Италия Профессиональная лига', gp: 26, avg: 2.346, over2: 38.46, over3: 19.23, over4: 7.69, over5: 3.85, aos: 0.00, threes: 3.85, twoes: 0.00, zeroes: 0.00, bts: 46.15},
 { name: 'Германия Региональная лига. Запад', gp: 41, avg: 3.171, over2: 65.85, over3: 39.02, over4: 21.95, over5: 12.20, aos: 12.20, threes: 4.88, twoes: 9.76, zeroes: 7.32, bts: 70.73},
 { name: 'Германия Региональная лига. Юго-Запад', gp: 54, avg: 3.333, over2: 68.52, over3: 44.44, over4: 24.07, over5: 12.96, aos: 18.52, threes: 1.85, twoes: 3.70, zeroes: 11.11, bts: 68.52},
 { name: 'Германия Региональная лига. Северо-Восток', gp: 45, avg: 2.822, over2: 55.56, over3: 37.78, over4: 17.78, over5: 8.89, aos: 17.78, threes: 4.44, twoes: 6.67, zeroes: 6.67, bts: 48.89},
 { name: 'Коста-Рика Примера дивизион', gp: 34, avg: 2.588, over2: 58.82, over3: 23.53, over4: 8.82, over5: 5.88, aos: 11.76, threes: 0.00, twoes: 5.88, zeroes: 14.71, bts: 52.94},
 { name: 'Германия Региональная лига. Бавария', gp: 71, avg: 3.408, over2: 63.38, over3: 47.89, over4: 30.99, over5: 14.08, aos: 25.35, threes: 1.41, twoes: 5.63, zeroes: 5.63, bts: 63.38},
 { name: 'Филиппины PFL', gp: 64, avg: 3.172, over2: 60.94, over3: 35.94, over4: 21.88, over5: 14.06, aos: 17.19, threes: 0.00, twoes: 7.81, zeroes: 6.25, bts: 64.06},
 { name: 'Исландия 1-й дивизион', gp: 108, avg: 2.880, over2: 57.41, over3: 30.56, over4: 13.89, over5: 4.63, aos: 6.48, threes: 1.85, twoes: 5.56, zeroes: 2.78, bts: 57.41},
 { name: 'Англия Премьер-лига до 21 года', gp: 264, avg: 2.947, over2: 56.44, over3: 32.95, over4: 16.67, over5: 6.44, aos: 11.36, threes: 1.52, twoes: 3.79, zeroes: 4.92, bts: 57.20},
 { name: 'Женщины Япония. Надэсико Лига. 1-й дивизион', gp: 59, avg: 2.305, over2: 45.76, over3: 15.25, over4: 6.78, over5: 3.39, aos: 6.78, threes: 0.00, twoes: 5.08, zeroes: 6.78, bts: 35.59},
 { name: 'Женщины Республика Корея. WK-лига', gp: 79, avg: 3.101, over2: 60.76, over3: 37.97, over4: 22.78, over5: 8.86, aos: 21.52, threes: 0.00, twoes: 2.53, zeroes: 6.33, bts: 59.49},
 { name: 'Армения Премьер-лига', gp: 12, avg: 2.833, over2: 66.67, over3: 33.33, over4: 8.33, over5: 8.33, aos: 8.33, threes: 0.00, twoes: 16.67, zeroes: 8.33, bts: 66.67},
 { name: 'Англия Премьер-лига 2. 2-й дивизион', gp: 17, avg: 3.941, over2: 82.35, over3: 52.94, over4: 29.41, over5: 23.53, aos: 41.18, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 58.82},
 { name: 'Катар Старз Лига', gp: 182, avg: 3.132, over2: 59.89, over3: 36.81, over4: 18.68, over5: 11.54, aos: 17.03, threes: 2.20, twoes: 6.59, zeroes: 4.40, bts: 61.54},
 { name: 'ЮАР Премьер-лига', gp: 16, avg: 2.063, over2: 25.00, over3: 12.50, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 6.25, zeroes: 6.25, bts: 50.00},
 { name: 'Женщины Англия. Суперлига 1', gp: 36, avg: 3.389, over2: 55.56, over3: 50.00, over4: 33.33, over5: 22.22, aos: 36.11, threes: 0.00, twoes: 2.78, zeroes: 8.33, bts: 44.44},
 { name: 'Бразилия Серия B', gp: 220, avg: 2.241, over2: 40.91, over3: 18.18, over4: 7.27, over5: 0.91, aos: 4.55, threes: 0.00, twoes: 4.09, zeroes: 10.00, bts: 46.36},
 { name: 'Англия Северная Национальная лига', gp: 77, avg: 2.883, over2: 53.25, over3: 29.87, over4: 18.18, over5: 7.79, aos: 20.78, threes: 1.30, twoes: 1.30, zeroes: 3.90, bts: 41.56},
 { name: 'Англия Премьер-лига 2. 1-й дивизион', gp: 18, avg: 2.944, over2: 55.56, over3: 27.78, over4: 22.22, over5: 11.11, aos: 11.11, threes: 0.00, twoes: 5.56, zeroes: 11.11, bts: 44.44},
 { name: 'Женщины Китай. Суперлига', gp: 36, avg: 2.778, over2: 50.00, over3: 36.11, over4: 16.67, over5: 8.33, aos: 19.44, threes: 0.00, twoes: 5.56, zeroes: 5.56, bts: 41.67},
 { name: 'Англия Южная Национальная лига', gp: 77, avg: 2.844, over2: 50.65, over3: 29.87, over4: 19.48, over5: 6.49, aos: 6.49, threes: 1.30, twoes: 7.79, zeroes: 5.19, bts: 53.25},
 { name: 'Колумбия Примера А дивизион', gp: 299, avg: 2.151, over2: 37.12, over3: 17.06, over4: 7.36, over5: 3.01, aos: 3.68, threes: 1.00, twoes: 4.01, zeroes: 12.71, bts: 40.80},
 { name: 'Азербайджан Премьер-лига', gp: 12, avg: 2.250, over2: 58.33, over3: 16.67, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 8.33, bts: 50.00},
 { name: 'Узбекистан ПФЛ', gp: 149, avg: 2.423, over2: 42.95, over3: 22.82, over4: 10.74, over5: 3.36, aos: 8.05, threes: 0.67, twoes: 3.36, zeroes: 6.04, bts: 45.64},
 { name: 'Австралия Национальная Премьер-лига. Виктория', gp: 182, avg: 2.841, over2: 53.85, over3: 31.87, over4: 14.84, over5: 7.14, aos: 13.19, threes: 1.10, twoes: 6.04, zeroes: 4.95, bts: 51.65},
 { name: 'Македония 1-я лига', gp: 14, avg: 2.357, over2: 50.00, over3: 14.29, over4: 7.14, over5: 0.00, aos: 14.29, threes: 0.00, twoes: 0.00, zeroes: 14.29, bts: 42.86},
 { name: 'Казахстан Премьер-лига', gp: 148, avg: 2.324, over2: 42.57, over3: 18.92, over4: 7.43, over5: 3.38, aos: 6.76, threes: 1.35, twoes: 4.73, zeroes: 7.43, bts: 44.59},
 { name: 'Австралия Национальная Премьер-лига. Новый Южный Уэльс', gp: 132, avg: 3.288, over2: 65.91, over3: 41.67, over4: 25.76, over5: 9.09, aos: 17.42, threes: 2.27, twoes: 3.03, zeroes: 5.30, bts: 56.06},
 { name: 'Япония Джей-лига. 2-й дивизион', gp: 330, avg: 2.533, over2: 45.15, over3: 24.85, over4: 11.21, over5: 3.94, aos: 8.79, threes: 0.91, twoes: 4.24, zeroes: 6.67, bts: 49.39},
 { name: 'Саудовская Аравия Про-лига', gp: 13, avg: 4.308, over2: 92.31, over3: 69.23, over4: 38.46, over5: 15.38, aos: 38.46, threes: 0.00, twoes: 7.69, zeroes: 0.00, bts: 84.62},
 { name: 'Босния и Герцеговина Премьер-лига', gp: 36, avg: 2.028, over2: 36.11, over3: 16.67, over4: 2.78, over5: 0.00, aos: 2.78, threes: 0.00, twoes: 2.78, zeroes: 8.33, bts: 36.11},
 { name: 'Китай 1-я лига', gp: 185, avg: 2.822, over2: 55.68, over3: 34.59, over4: 12.43, over5: 7.03, aos: 11.35, threes: 1.62, twoes: 8.11, zeroes: 6.49, bts: 60.00},
 { name: 'Австралия Национальная Премьер-лига. Западная Австралия', gp: 182, avg: 3.357, over2: 64.84, over3: 43.96, over4: 25.27, over5: 10.99, aos: 20.33, threes: 0.55, twoes: 7.14, zeroes: 5.49, bts: 59.89},
 { name: 'Россия 2-й дивизион. Урал-Приволжье', gp: 35, avg: 2.743, over2: 45.71, over3: 34.29, over4: 20.00, over5: 11.43, aos: 17.14, threes: 2.86, twoes: 2.86, zeroes: 11.43, bts: 45.71},
 { name: 'Исландия Премьер-лига', gp: 100, avg: 3.030, over2: 62.00, over3: 36.00, over4: 17.00, over5: 6.00, aos: 13.00, threes: 0.00, twoes: 9.00, zeroes: 5.00, bts: 64.00},
 { name: 'Чили Примера B', gp: 40, avg: 2.400, over2: 47.50, over3: 20.00, over4: 7.50, over5: 7.50, aos: 5.00, threes: 2.50, twoes: 0.00, zeroes: 12.50, bts: 50.00},
 { name: 'Перу Примера дивизион', gp: 240, avg: 2.583, over2: 48.75, over3: 25.83, over4: 10.83, over5: 3.75, aos: 8.75, threes: 0.42, twoes: 6.25, zeroes: 8.33, bts: 51.67},
 { name: 'Словакия Фортуна-лига', gp: 36, avg: 3.056, over2: 58.33, over3: 36.11, over4: 19.44, over5: 11.11, aos: 19.44, threes: 2.78, twoes: 2.78, zeroes: 2.78, bts: 63.89},
 { name: 'Словения 1-я лига', gp: 35, avg: 2.914, over2: 57.14, over3: 48.57, over4: 17.14, over5: 8.57, aos: 20.00, threes: 0.00, twoes: 8.57, zeroes: 11.43, bts: 57.14},
 { name: 'Канада CSL. 1-й дивизион', gp: 51, avg: 4.157, over2: 68.63, over3: 52.94, over4: 39.22, over5: 29.41, aos: 41.18, threes: 1.96, twoes: 5.88, zeroes: 3.92, bts: 58.82},
 { name: 'Германия 3-я лига', gp: 60, avg: 2.633, over2: 48.33, over3: 26.67, over4: 15.00, over5: 6.67, aos: 16.67, threes: 1.67, twoes: 5.00, zeroes: 8.33, bts: 45.00},
 { name: 'Австралия Национальная Премьер-лига. Квинсленд', gp: 132, avg: 4.076, over2: 76.52, over3: 56.82, over4: 38.64, over5: 22.73, aos: 36.36, threes: 0.00, twoes: 6.82, zeroes: 3.03, bts: 58.33},
 { name: 'Англия Национальная лига', gp: 82, avg: 2.549, over2: 45.12, over3: 25.61, over4: 15.85, over5: 8.54, aos: 8.54, threes: 3.66, twoes: 6.10, zeroes: 12.20, bts: 52.44},
 { name: 'Польша 1-я лига', gp: 53, avg: 2.472, over2: 41.51, over3: 24.53, over4: 13.21, over5: 7.55, aos: 9.43, threes: 1.89, twoes: 1.89, zeroes: 7.55, bts: 47.17},
 { name: 'Гондурас Национальная лига', gp: 14, avg: 2.143, over2: 35.71, over3: 28.57, over4: 14.29, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 7.14, zeroes: 14.29, bts: 50.00},
 { name: 'Венгрия Лига NB I', gp: 41, avg: 2.878, over2: 53.66, over3: 39.02, over4: 9.76, over5: 2.44, aos: 9.76, threes: 0.00, twoes: 14.63, zeroes: 2.44, bts: 60.98},
 { name: 'Чехия ФНЛ', gp: 48, avg: 2.688, over2: 50.00, over3: 31.25, over4: 18.75, over5: 6.25, aos: 14.58, threes: 2.08, twoes: 4.17, zeroes: 14.58, bts: 56.25},
 { name: 'Фарерские острова Премьер-лига', gp: 100, avg: 3.040, over2: 63.00, over3: 40.00, over4: 16.00, over5: 8.00, aos: 19.00, threes: 0.00, twoes: 12.00, zeroes: 6.00, bts: 59.00},
 { name: 'Хорватия 1-я лига', gp: 35, avg: 2.771, over2: 54.29, over3: 31.43, over4: 5.71, over5: 0.00, aos: 8.57, threes: 0.00, twoes: 8.57, zeroes: 0.00, bts: 51.43},
 { name: 'Женщины Россия. Высший дивизион', gp: 35, avg: 2.486, over2: 37.14, over3: 20.00, over4: 14.29, over5: 5.71, aos: 11.43, threes: 0.00, twoes: 2.86, zeroes: 5.71, bts: 37.14},
 { name: 'Республика Корея K-лига. 2-й дивизион', gp: 134, avg: 2.537, over2: 44.78, over3: 23.88, over4: 11.94, over5: 6.72, aos: 5.97, threes: 3.73, twoes: 4.48, zeroes: 7.46, bts: 52.24},
 { name: 'Финляндия Юккенен', gp: 101, avg: 2.614, over2: 51.49, over3: 27.72, over4: 12.87, over5: 5.94, aos: 11.88, threes: 1.98, twoes: 5.94, zeroes: 8.91, bts: 45.54},
 { name: 'Австралия Национальная Премьер-лига. Южная Австралия', gp: 132, avg: 3.311, over2: 66.67, over3: 40.15, over4: 25.00, over5: 12.12, aos: 17.42, threes: 1.52, twoes: 3.03, zeroes: 3.03, bts: 59.85},
 { name: 'Португалия 2-я лига', gp: 47, avg: 2.447, over2: 57.45, over3: 14.89, over4: 2.13, over5: 0.00, aos: 2.13, threes: 0.00, twoes: 8.51, zeroes: 6.38, bts: 53.19},
 { name: 'Болгария 1-я лига', gp: 47, avg: 2.617, over2: 42.55, over3: 25.53, over4: 17.02, over5: 6.38, aos: 19.15, threes: 0.00, twoes: 0.00, zeroes: 8.51, bts: 48.94},
 { name: 'ЮАР 1-й дивизион', gp: 16, avg: 2.313, over2: 31.25, over3: 18.75, over4: 6.25, over5: 0.00, aos: 6.25, threes: 0.00, twoes: 6.25, zeroes: 0.00, bts: 56.25},
 { name: 'Латвия Высшая лига', gp: 59, avg: 2.271, over2: 40.68, over3: 18.64, over4: 5.08, over5: 3.39, aos: 6.78, threes: 0.00, twoes: 1.69, zeroes: 10.17, bts: 42.37},
 { name: 'Индия Суперлига', gp: 56, avg: 2.393, over2: 35.71, over3: 19.64, over4: 12.50, over5: 8.93, aos: 8.93, threes: 3.57, twoes: 3.57, zeroes: 8.93, bts: 51.79},
 { name: 'Испания 2-й дивизион B', gp: 80, avg: 2.125, over2: 35.00, over3: 15.00, over4: 8.75, over5: 3.75, aos: 6.25, threes: 1.25, twoes: 2.50, zeroes: 11.25, bts: 45.00},
 { name: 'Северная Ирландия Премьер-лига', gp: 24, avg: 3.417, over2: 54.17, over3: 37.50, over4: 25.00, over5: 12.50, aos: 25.00, threes: 0.00, twoes: 4.17, zeroes: 0.00, bts: 58.33},
 { name: 'Эстония Премиум лига', gp: 135, avg: 3.637, over2: 62.96, over3: 40.74, over4: 28.89, over5: 17.78, aos: 25.93, threes: 0.74, twoes: 1.48, zeroes: 2.22, bts: 52.59},
 { name: 'Россия Молодежное первенство', gp: 62, avg: 3.145, over2: 69.35, over3: 45.16, over4: 22.58, over5: 8.06, aos: 19.35, threes: 1.61, twoes: 9.68, zeroes: 11.29, bts: 64.52},
 { name: 'Мексика Примера дивизион', gp: 63, avg: 2.603, over2: 49.21, over3: 25.40, over4: 14.29, over5: 0.00, aos: 7.94, threes: 0.00, twoes: 6.35, zeroes: 7.94, bts: 58.73},
 { name: 'Нидерланды 1-й дивизион', gp: 20, avg: 3.250, over2: 65.00, over3: 40.00, over4: 15.00, over5: 15.00, aos: 15.00, threes: 0.00, twoes: 15.00, zeroes: 5.00, bts: 75.00},
 { name: 'Англия 2-я лига', gp: 48, avg: 3.229, over2: 58.33, over3: 41.67, over4: 22.92, over5: 12.50, aos: 14.58, threes: 2.08, twoes: 10.42, zeroes: 2.08, bts: 58.33},
 { name: 'Китай Суперлига', gp: 181, avg: 2.906, over2: 55.25, over3: 31.49, over4: 16.02, over5: 7.18, aos: 13.81, threes: 0.00, twoes: 6.63, zeroes: 6.08, bts: 60.22},
 { name: 'Литва А-лига', gp: 88, avg: 2.409, over2: 38.64, over3: 25.00, over4: 12.50, over5: 4.55, aos: 13.64, threes: 1.14, twoes: 2.27, zeroes: 9.09, bts: 48.86},
 { name: 'Чили Примера дивизион', gp: 40, avg: 2.025, over2: 35.00, over3: 17.50, over4: 5.00, over5: 0.00, aos: 5.00, threes: 0.00, twoes: 2.50, zeroes: 17.50, bts: 47.50},
 { name: 'Уэльс Премьер-лига', gp: 18, avg: 2.833, over2: 55.56, over3: 27.78, over4: 11.11, over5: 5.56, aos: 16.67, threes: 0.00, twoes: 0.00, zeroes: 0.00, bts: 38.89},
 { name: 'Уругвай Примера дивизион', gp: 136, avg: 2.743, over2: 56.62, over3: 30.88, over4: 11.03, over5: 5.15, aos: 11.03, threes: 0.00, twoes: 8.09, zeroes: 8.09, bts: 52.21},
 { name: 'Германия Региональная лига. Север', gp: 42, avg: 3.238, over2: 59.52, over3: 40.48, over4: 26.19, over5: 9.52, aos: 21.43, threes: 0.00, twoes: 4.76, zeroes: 4.76, bts: 64.29},
 { name: 'Россия 2-й дивизион. Запад', gp: 42, avg: 2.714, over2: 47.62, over3: 30.95, over4: 16.67, over5: 7.14, aos: 11.90, threes: 2.38, twoes: 2.38, zeroes: 7.14, bts: 30.95},
 { name: 'Люксембург Национальный дивизион', gp: 28, avg: 3.357, over2: 67.86, over3: 42.86, over4: 21.43, over5: 14.29, aos: 21.43, threes: 3.57, twoes: 3.57, zeroes: 7.14, bts: 64.29},
 { name: 'Австрия Региональная лига. Восток', gp: 40, avg: 3.300, over2: 57.50, over3: 45.00, over4: 20.00, over5: 15.00, aos: 17.50, threes: 5.00, twoes: 2.50, zeroes: 5.00, bts: 60.00},
 { name: 'Австрия Региональная лига. Центр', gp: 56, avg: 3.143, over2: 53.57, over3: 41.07, over4: 25.00, over5: 14.29, aos: 23.21, threes: 1.79, twoes: 5.36, zeroes: 5.36, bts: 48.21},
 { name: 'Австрия Региональная лига. Запад', gp: 56, avg: 3.446, over2: 64.29, over3: 50.00, over4: 28.57, over5: 16.07, aos: 30.36, threes: 3.57, twoes: 7.14, zeroes: 5.36, bts: 48.21},
 { name: 'Россия 2-й дивизион. Юг', gp: 47, avg: 2.660, over2: 44.68, over3: 23.40, over4: 17.02, over5: 12.77, aos: 10.64, threes: 4.26, twoes: 2.13, zeroes: 4.26, bts: 48.94},
 { name: 'Россия 2-й дивизион. Восток', gp: 12, avg: 1.583, over2: 16.67, over3: 0.00, over4: 0.00, over5: 0.00, aos: 0.00, threes: 0.00, twoes: 0.00, zeroes: 8.33, bts: 33.33},
 { name: 'Бразилия Серия А', gp: 218, avg: 2.381, over2: 38.07, over3: 22.94, over4: 11.01, over5: 5.05, aos: 8.72, threes: 0.92, twoes: 4.59, zeroes: 9.63, bts: 40.83},
 { name: 'Ирландия Премьер-дивизион', gp: 157, avg: 2.732, over2: 52.87, over3: 26.75, over4: 12.74, over5: 3.18, aos: 14.01, threes: 0.00, twoes: 2.55, zeroes: 5.73, bts: 50.96}
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
    width: 'fit',
    height: 'fit',
    data: data,
    multiSort: true,
    trackOver: true,
    textSelection: true,
    defaults: {
      type: 'string',
      resizable: true,
      sortable: true
    },
    columnLines: false,	  
    columns: [
	    {
		    index: 'name', 
		    title: 'League',
		    width: 400, 
		    filter: {
        		header: true,
        		emptyText: 'Поиск по лиге'
      			}
	    },
	    {index: 'gp', title: 'GP', type: 'number'},
	    {index: 'avg', title: 'AVG', type: 'number'},
	    {index: 'over2', title: 'over 2.5', type: 'number', render: renderChangesFn},
	    {index: 'over3', title: 'over 3.5', type: 'number', render: renderChangesFn},
	    {index: 'over4', title: 'over 4.5', type: 'number', render: renderChangesFn},
	    {index: 'over5', title: 'over 5.5', type: 'number', render: renderChangesFn},
	    {index: 'aos', title: 'Any Other', type: 'number', render: renderChangesFn},
	    {index: 'threes', title: '3:3', type: 'number', render: renderChangesFn},
	    {index: 'twoes', title: '2:2', type: 'number', render: renderChangesFn},
	    {index: 'zeroes', title: '0:0', type: 'number', render: renderChangesFn},
	    {index: 'bts', title: 'Both to Score', type: 'number', render: renderChangesFn}
    ]
  });

});
