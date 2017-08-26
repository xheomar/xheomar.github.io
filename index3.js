var data = [
 { name: 'Чемпионат Франции. Национальная лига', gp: 31, avg: 2.161, over2: 0.290, over3: 0.161, over4: 0.129, over5: 0.032, aos: 0.097, threes: 0.000, twoes: 0.000, zeroes: 0.065, bts: 0.452},
 { name: 'Чемпионат NASL (США)', gp: 18, avg: 2.722, over2: 0.500, over3: 0.333, over4: 0.111, over5: 0.056, aos: 0.000, threes: 0.056, twoes: 0.056, zeroes: 0.056, bts: 0.778},
 { name: 'Чемпионат Исландии. 1-й дивизион', gp: 106, avg: 2.877, over2: 0.575, over3: 0.302, over4: 0.142, over5: 0.047, aos: 0.066, threes: 0.019, twoes: 0.057, zeroes: 0.028, bts: 0.575},
 { name: 'Чемпионат Азербайджана', gp: 10, avg: 2.000, over2: 0.500, over3: 0.100, over4: 0.000, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.000, zeroes: 0.100, bts: 0.400},
 { name: 'Чемпионат Армении', gp: 10, avg: 2.900, over2: 0.700, over3: 0.400, over4: 0.100, over5: 0.100, aos: 0.100, threes: 0.000, twoes: 0.200, zeroes: 0.100, bts: 0.600},
 { name: 'Чемпионат Алжира', gp: 4, avg: 2.250, over2: 0.250, over3: 0.250, over4: 0.000, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.000, zeroes: 0.000, bts: 0.500},
 { name: 'Чемпионат Китая', gp: 181, avg: 2.906, over2: 0.552, over3: 0.315, over4: 0.160, over5: 0.072, aos: 0.138, threes: 0.000, twoes: 0.066, zeroes: 0.061, bts: 0.602},
 { name: 'Чемпионат Австралии. Премьер-лига Квинсленда', gp: 132, avg: 4.076, over2: 0.765, over3: 0.568, over4: 0.386, over5: 0.227, aos: 0.364, threes: 0.000, twoes: 0.068, zeroes: 0.030, bts: 0.583},
 { name: 'Чемпионат Польши. 1-й дивизион', gp: 46, avg: 2.413, over2: 0.413, over3: 0.239, over4: 0.130, over5: 0.065, aos: 0.087, threes: 0.022, twoes: 0.000, zeroes: 0.065, bts: 0.413},
 { name: 'Чемпионат Англии. Премьер-лига', gp: 20, avg: 2.650, over2: 0.400, over3: 0.300, over4: 0.200, over5: 0.100, aos: 0.150, threes: 0.050, twoes: 0.000, zeroes: 0.050, bts: 0.300},
 { name: 'Чемпионат Англии. Национальная лига. Север.', gp: 55, avg: 3.055, over2: 0.564, over3: 0.345, over4: 0.236, over5: 0.109, aos: 0.236, threes: 0.018, twoes: 0.018, zeroes: 0.018, bts: 0.400},
 { name: 'Чемпионат Кувейта. 1-й дивизион.', gp: 60, avg: 2.217, over2: 0.450, over3: 0.167, over4: 0.067, over5: 0.033, aos: 0.067, threes: 0.000, twoes: 0.050, zeroes: 0.133, bts: 0.367},
 { name: 'Чемпионат Южной Кореи. 3-я лига', gp: 84, avg: 2.429, over2: 0.452, over3: 0.214, over4: 0.143, over5: 0.048, aos: 0.060, threes: 0.012, twoes: 0.048, zeroes: 0.131, bts: 0.524},
 { name: 'Чемпионат Англии. Национальная лига. Юг.', gp: 55, avg: 3.018, over2: 0.545, over3: 0.345, over4: 0.236, over5: 0.091, aos: 0.073, threes: 0.018, twoes: 0.091, zeroes: 0.073, bts: 0.545},
 { name: 'Чемпионат Германии. Бундеслига', gp: 10, avg: 1.900, over2: 0.300, over3: 0.200, over4: 0.000, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.000, zeroes: 0.100, bts: 0.200},
 { name: 'Женщины. Чемпионат Южной Америки (до 20 лет)', gp: 12, avg: 1.833, over2: 0.500, over3: 0.333, over4: 0.000, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.167, zeroes: 0.500, bts: 0.500},
 { name: 'Женщины. Чемпионат Восточной Азии', gp: 12, avg: 3.167, over2: 0.500, over3: 0.333, over4: 0.333, over5: 0.167, aos: 0.167, threes: 0.000, twoes: 0.000, zeroes: 0.000, bts: 0.500},
 { name: 'Чемпионат Никарагуа', gp: 50, avg: 2.360, over2: 0.360, over3: 0.200, over4: 0.080, over5: 0.040, aos: 0.120, threes: 0.000, twoes: 0.000, zeroes: 0.040, bts: 0.480},
 { name: 'Чемпионат Южной Америки До 20 лет', gp: 30, avg: 2.867, over2: 0.733, over3: 0.200, over4: 0.067, over5: 0.067, aos: 0.067, threes: 0.000, twoes: 0.133, zeroes: 0.067, bts: 0.467},
 { name: 'Чемпионат Бангладеш', gp: 110, avg: 3.018, over2: 0.573, over3: 0.364, over4: 0.200, over5: 0.100, aos: 0.191, threes: 0.000, twoes: 0.055, zeroes: 0.091, bts: 0.536},
 { name: 'Чемпионат Швеции. 1-й дивизион', gp: 160, avg: 2.944, over2: 0.606, over3: 0.300, over4: 0.162, over5: 0.075, aos: 0.138, threes: 0.006, twoes: 0.038, zeroes: 0.063, bts: 0.575},
 { name: 'Чемпионат Исландии', gp: 94, avg: 2.989, over2: 0.617, over3: 0.340, over4: 0.160, over5: 0.064, aos: 0.128, threes: 0.000, twoes: 0.085, zeroes: 0.053, bts: 0.638},
 { name: 'Чемпионат Шотландии. 1-я лига', gp: 15, avg: 3.333, over2: 0.600, over3: 0.333, over4: 0.267, over5: 0.200, aos: 0.200, threes: 0.000, twoes: 0.000, zeroes: 0.000, bts: 0.600},
 { name: 'Чемпионат Израиля', gp: 7, avg: 2.429, over2: 0.571, over3: 0.143, over4: 0.000, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.000, zeroes: 0.143, bts: 0.571},
 { name: 'Чемпионат России. 2-й див. Запад', gp: 39, avg: 2.821, over2: 0.513, over3: 0.333, over4: 0.179, over5: 0.077, aos: 0.128, threes: 0.026, twoes: 0.026, zeroes: 0.077, bts: 0.333},
 { name: 'Чемпионат России. 2-й див. Центр', gp: 37, avg: 2.541, over2: 0.568, over3: 0.135, over4: 0.054, over5: 0.000, aos: 0.081, threes: 0.000, twoes: 0.054, zeroes: 0.027, bts: 0.541},
 { name: 'Чемпионат России. 2-й див. Юг', gp: 40, avg: 2.550, over2: 0.425, over3: 0.225, over4: 0.150, over5: 0.100, aos: 0.075, threes: 0.050, twoes: 0.025, zeroes: 0.050, bts: 0.500},
 { name: 'Чемпионат Франции. Лига 1', gp: 31, avg: 2.806, over2: 0.516, over3: 0.258, over4: 0.129, over5: 0.065, aos: 0.097, threes: 0.032, twoes: 0.065, zeroes: 0.000, bts: 0.387},
 { name: 'Чемпионат Индонезии. Лига 1.', gp: 182, avg: 2.604, over2: 0.489, over3: 0.280, over4: 0.121, over5: 0.038, aos: 0.071, threes: 0.000, twoes: 0.066, zeroes: 0.066, bts: 0.522},
 { name: 'Чемпионат Нидерландов', gp: 19, avg: 3.474, over2: 0.737, over3: 0.421, over4: 0.263, over5: 0.105, aos: 0.158, threes: 0.053, twoes: 0.053, zeroes: 0.000, bts: 0.737},
 { name: 'Чемпионат Италии. Серия A', gp: 10, avg: 2.200, over2: 0.600, over3: 0.100, over4: 0.000, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.000, zeroes: 0.200, bts: 0.400},
 { name: 'Чемпионат России. Премьер-лига', gp: 57, avg: 2.316, over2: 0.368, over3: 0.211, over4: 0.105, over5: 0.053, aos: 0.088, threes: 0.000, twoes: 0.035, zeroes: 0.088, bts: 0.456},
 { name: 'Чемпионат Англии. Чемпион-Лига', gp: 50, avg: 2.440, over2: 0.400, over3: 0.200, over4: 0.120, over5: 0.060, aos: 0.100, threes: 0.000, twoes: 0.020, zeroes: 0.080, bts: 0.520},
 { name: 'Чемпионат Греции', gp: 8, avg: 1.875, over2: 0.250, over3: 0.125, over4: 0.125, over5: 0.000, aos: 0.125, threes: 0.000, twoes: 0.000, zeroes: 0.250, bts: 0.500},
 { name: 'Чемпионат Австрии. Бундеслига', gp: 25, avg: 3.120, over2: 0.600, over3: 0.440, over4: 0.280, over5: 0.080, aos: 0.160, threes: 0.000, twoes: 0.080, zeroes: 0.080, bts: 0.560},
 { name: 'Чемпионат Бельгии', gp: 33, avg: 3.091, over2: 0.576, over3: 0.364, over4: 0.242, over5: 0.091, aos: 0.152, threes: 0.030, twoes: 0.030, zeroes: 0.030, bts: 0.545},
 { name: 'Чемпионат Чехии', gp: 33, avg: 2.242, over2: 0.394, over3: 0.182, over4: 0.061, over5: 0.061, aos: 0.061, threes: 0.030, twoes: 0.030, zeroes: 0.121, bts: 0.455},
 { name: 'Чемпионат Дании', gp: 44, avg: 2.705, over2: 0.500, over3: 0.250, over4: 0.205, over5: 0.045, aos: 0.159, threes: 0.000, twoes: 0.023, zeroes: 0.136, bts: 0.523},
 { name: 'Чемпионат Финляндии', gp: 138, avg: 2.623, over2: 0.457, over3: 0.254, over4: 0.145, over5: 0.087, aos: 0.145, threes: 0.014, twoes: 0.036, zeroes: 0.094, bts: 0.500},
 { name: 'Чемпионат Франции. Лига 2', gp: 48, avg: 2.354, over2: 0.438, over3: 0.229, over4: 0.146, over5: 0.042, aos: 0.104, threes: 0.000, twoes: 0.021, zeroes: 0.167, bts: 0.417},
 { name: 'Чемпионат Германии. 2-я бундеслига', gp: 29, avg: 2.724, over2: 0.517, over3: 0.276, over4: 0.069, over5: 0.069, aos: 0.103, threes: 0.000, twoes: 0.138, zeroes: 0.000, bts: 0.517},
 { name: 'Чемпионат Англии. 1-я лига', gp: 36, avg: 2.472, over2: 0.389, over3: 0.222, over4: 0.194, over5: 0.028, aos: 0.111, threes: 0.028, twoes: 0.000, zeroes: 0.028, bts: 0.444},
 { name: 'Чемпионат России. ФНЛ', gp: 90, avg: 2.511, over2: 0.522, over3: 0.200, over4: 0.056, over5: 0.000, aos: 0.067, threes: 0.000, twoes: 0.067, zeroes: 0.033, bts: 0.478},
 { name: 'Чемпионат России. 2-й див. Урал-Поволжье', gp: 34, avg: 2.647, over2: 0.441, over3: 0.324, over4: 0.176, over5: 0.088, aos: 0.176, threes: 0.000, twoes: 0.029, zeroes: 0.118, bts: 0.441},
 { name: 'Чемпионат Украины', gp: 36, avg: 2.139, over2: 0.444, over3: 0.194, over4: 0.056, over5: 0.000, aos: 0.056, threes: 0.000, twoes: 0.028, zeroes: 0.167, bts: 0.389},
 { name: 'Чемпионат MLS (США)', gp: 182, avg: 2.918, over2: 0.626, over3: 0.319, over4: 0.115, over5: 0.060, aos: 0.115, threes: 0.016, twoes: 0.077, zeroes: 0.044, bts: 0.538},
 { name: 'Чемпионат Бразилии. Серия A', gp: 210, avg: 2.381, over2: 0.381, over3: 0.233, over4: 0.110, over5: 0.048, aos: 0.086, threes: 0.010, twoes: 0.048, zeroes: 0.100, bts: 0.405},
 { name: 'Чемпионат Ирландии', gp: 157, avg: 2.732, over2: 0.529, over3: 0.268, over4: 0.127, over5: 0.032, aos: 0.140, threes: 0.000, twoes: 0.025, zeroes: 0.057, bts: 0.510},
 { name: 'Чемпионат Испании. Примера дивизион', gp: 12, avg: 2.167, over2: 0.417, over3: 0.167, over4: 0.083, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.083, zeroes: 0.083, bts: 0.333},
 { name: 'Чемпионат Испании. Сегунда дивизион', gp: 12, avg: 1.750, over2: 0.333, over3: 0.083, over4: 0.083, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.000, zeroes: 0.250, bts: 0.333},
 { name: 'Чемпионат Норвегии', gp: 158, avg: 2.753, over2: 0.513, over3: 0.278, over4: 0.165, over5: 0.082, aos: 0.114, threes: 0.025, twoes: 0.025, zeroes: 0.082, bts: 0.544},
 { name: 'Чемпионат Польши', gp: 50, avg: 2.460, over2: 0.400, over3: 0.240, over4: 0.140, over5: 0.060, aos: 0.060, threes: 0.020, twoes: 0.000, zeroes: 0.080, bts: 0.520},
 { name: 'Чемпионат Португалии', gp: 28, avg: 2.536, over2: 0.464, over3: 0.250, over4: 0.143, over5: 0.000, aos: 0.107, threes: 0.000, twoes: 0.036, zeroes: 0.036, bts: 0.429},
 { name: 'Чемпионат Венгрии', gp: 35, avg: 2.743, over2: 0.486, over3: 0.343, over4: 0.086, over5: 0.000, aos: 0.086, threes: 0.000, twoes: 0.171, zeroes: 0.029, bts: 0.571},
 { name: 'Чемпионат Словакии', gp: 31, avg: 2.871, over2: 0.548, over3: 0.290, over4: 0.161, over5: 0.097, aos: 0.194, threes: 0.000, twoes: 0.000, zeroes: 0.032, bts: 0.613},
 { name: 'Чемпионат Словении', gp: 30, avg: 2.933, over2: 0.600, over3: 0.500, over4: 0.133, over5: 0.067, aos: 0.167, threes: 0.000, twoes: 0.100, zeroes: 0.100, bts: 0.600},
 { name: 'Чемпионат Мексики', gp: 110, avg: 2.636, over2: 0.491, over3: 0.273, over4: 0.145, over5: 0.000, aos: 0.091, threes: 0.000, twoes: 0.073, zeroes: 0.073, bts: 0.582},
 { name: 'Чемпионат Молдавии', gp: 38, avg: 2.579, over2: 0.474, over3: 0.263, over4: 0.132, over5: 0.053, aos: 0.158, threes: 0.000, twoes: 0.079, zeroes: 0.000, bts: 0.421},
 { name: 'Чемпионат Турции', gp: 19, avg: 3.211, over2: 0.684, over3: 0.526, over4: 0.105, over5: 0.000, aos: 0.053, threes: 0.000, twoes: 0.211, zeroes: 0.000, bts: 0.684},
 { name: 'Чемпионат Швейцарии', gp: 25, avg: 2.720, over2: 0.440, over3: 0.320, over4: 0.160, over5: 0.080, aos: 0.120, threes: 0.040, twoes: 0.040, zeroes: 0.080, bts: 0.360},
 { name: 'Чемпионат Швеции.', gp: 160, avg: 2.619, over2: 0.538, over3: 0.256, over4: 0.100, over5: 0.050, aos: 0.094, threes: 0.013, twoes: 0.069, zeroes: 0.087, bts: 0.538},
 { name: 'Чемпионат Шотландии. Премьер-лига', gp: 18, avg: 2.778, over2: 0.611, over3: 0.278, over4: 0.167, over5: 0.000, aos: 0.111, threes: 0.000, twoes: 0.000, zeroes: 0.056, bts: 0.556},
 { name: 'Чемпионат Шотландии. Чемпион-Лига', gp: 15, avg: 2.933, over2: 0.533, over3: 0.467, over4: 0.200, over5: 0.067, aos: 0.200, threes: 0.000, twoes: 0.067, zeroes: 0.067, bts: 0.733},
 { name: 'Чемпионат Италии. Серия C2-A', gp: 306, avg: 2.601, over2: 0.484, over3: 0.265, over4: 0.137, over5: 0.052, aos: 0.098, threes: 0.013, twoes: 0.069, zeroes: 0.092, bts: 0.539},
 { name: 'Чемпионат Японии', gp: 208, avg: 2.601, over2: 0.457, over3: 0.236, over4: 0.130, over5: 0.063, aos: 0.077, threes: 0.014, twoes: 0.038, zeroes: 0.038, bts: 0.476},
 { name: 'Чемпионат Албании', gp: 180, avg: 1.889, over2: 0.294, over3: 0.139, over4: 0.061, over5: 0.022, aos: 0.061, threes: 0.000, twoes: 0.033, zeroes: 0.183, bts: 0.322},
 { name: 'Чемпионат Омана.', gp: 182, avg: 2.758, over2: 0.533, over3: 0.313, over4: 0.132, over5: 0.055, aos: 0.071, threes: 0.011, twoes: 0.077, zeroes: 0.077, bts: 0.626},
 { name: 'Чемпионат Японии. 3-й дивизион', gp: 149, avg: 2.403, over2: 0.456, over3: 0.201, over4: 0.087, over5: 0.034, aos: 0.067, threes: 0.000, twoes: 0.067, zeroes: 0.074, bts: 0.490},
 { name: 'Чемпионат Иордании', gp: 132, avg: 2.235, over2: 0.432, over3: 0.167, over4: 0.061, over5: 0.023, aos: 0.061, threes: 0.008, twoes: 0.023, zeroes: 0.159, bts: 0.455},
 { name: 'Чемпионат стран Южной Африки (до 20 лет)', gp: 34, avg: 2.941, over2: 0.588, over3: 0.412, over4: 0.118, over5: 0.118, aos: 0.235, threes: 0.000, twoes: 0.059, zeroes: 0.118, bts: 0.412},
 { name: 'Чемпионат Грузии', gp: 117, avg: 2.744, over2: 0.556, over3: 0.265, over4: 0.197, over5: 0.051, aos: 0.154, threes: 0.009, twoes: 0.000, zeroes: 0.094, bts: 0.479},
 { name: 'Чемпионат Парагвая', gp: 29, avg: 2.690, over2: 0.517, over3: 0.276, over4: 0.172, over5: 0.000, aos: 0.103, threes: 0.000, twoes: 0.000, zeroes: 0.103, bts: 0.552},
 { name: 'Чемпионат Индии', gp: 90, avg: 2.500, over2: 0.478, over3: 0.222, over4: 0.100, over5: 0.044, aos: 0.100, threes: 0.000, twoes: 0.033, zeroes: 0.133, bts: 0.478},
 { name: 'Чемпионат ЮАР', gp: 16, avg: 2.063, over2: 0.250, over3: 0.125, over4: 0.000, over5: 0.000, aos: 0.000, threes: 0.000, twoes: 0.063, zeroes: 0.063, bts: 0.500},
 { name: 'Чемпионат Индонезии. Суперлига', gp: 19, avg: 3.053, over2: 0.474, over3: 0.316, over4: 0.211, over5: 0.158, aos: 0.158, threes: 0.053, twoes: 0.053, zeroes: 0.000, bts: 0.526},
 { name: 'Чемпионат Германии. Региональная лига. Запад', gp: 34, avg: 3.088, over2: 0.618, over3: 0.412, over4: 0.206, over5: 0.118, aos: 0.147, threes: 0.029, twoes: 0.118, zeroes: 0.088, bts: 0.676},
 { name: 'Чемпионат Коста-Рики', gp: 28, avg: 2.607, over2: 0.571, over3: 0.286, over4: 0.107, over5: 0.071, aos: 0.143, threes: 0.000, twoes: 0.071, zeroes: 0.179, bts: 0.500},
 { name: 'Чемпионат Латвии', gp: 69, avg: 2.319, over2: 0.435, over3: 0.217, over4: 0.058, over5: 0.029, aos: 0.087, threes: 0.000, twoes: 0.029, zeroes: 0.101, bts: 0.420},
 { name: 'Чемпионат Англии. Премьер-лига (до 21-го года).', gp: 264, avg: 2.947, over2: 0.564, over3: 0.330, over4: 0.167, over5: 0.064, aos: 0.114, threes: 0.015, twoes: 0.038, zeroes: 0.049, bts: 0.572},
 { name: 'Чемпионат Колумбии. 1-й дивизион', gp: 116, avg: 2.276, over2: 0.379, over3: 0.181, over4: 0.078, over5: 0.034, aos: 0.052, threes: 0.017, twoes: 0.034, zeroes: 0.060, bts: 0.440},
 { name: 'Чемпионат Литвы', gp: 88, avg: 2.409, over2: 0.386, over3: 0.250, over4: 0.125, over5: 0.045, aos: 0.136, threes: 0.011, twoes: 0.023, zeroes: 0.091, bts: 0.489},
 { name: 'Чемпионат Азии (до 23 лет)', gp: 114, avg: 3.596, over2: 0.561, over3: 0.404, over4: 0.263, over5: 0.211, aos: 0.281, threes: 0.000, twoes: 0.018, zeroes: 0.070, bts: 0.351},
 { name: 'Чемпионат Украины. Турнир молодёжных команд', gp: 38, avg: 3.184, over2: 0.605, over3: 0.421, over4: 0.184, over5: 0.132, aos: 0.184, threes: 0.026, twoes: 0.132, zeroes: 0.026, bts: 0.474},
 { name: 'Чемпионат Мальты', gp: 11, avg: 3.091, over2: 0.545, over3: 0.545, over4: 0.273, over5: 0.000, aos: 0.364, threes: 0.000, twoes: 0.091, zeroes: 0.000, bts: 0.364},
 { name: 'Чемпионат Украины. Первая лига', gp: 71, avg: 2.183, over2: 0.366, over3: 0.169, over4: 0.113, over5: 0.000, aos: 0.014, threes: 0.000, twoes: 0.014, zeroes: 0.056, bts: 0.366},
 { name: 'Чемпионат Ирана. 2-я лига', gp: 17, avg: 2.353, over2: 0.412, over3: 0.353, over4: 0.059, over5: 0.059, aos: 0.118, threes: 0.000, twoes: 0.118, zeroes: 0.059, bts: 0.412},
 { name: 'Чемпионат Исландии. Женщины', gp: 70, avg: 3.214, over2: 0.600, over3: 0.443, over4: 0.243, over5: 0.086, aos: 0.257, threes: 0.014, twoes: 0.029, zeroes: 0.014, bts: 0.457},
 { name: 'Чемпионат Австралии. Премьер-лига Столичной территории', gp: 85, avg: 4.176, over2: 0.788, over3: 0.576, over4: 0.388, over5: 0.294, aos: 0.388, threes: 0.047, twoes: 0.035, zeroes: 0.024, bts: 0.494},
 { name: 'Чемпионат Малайзии. Премьер-лига', gp: 114, avg: 3.430, over2: 0.667, over3: 0.421, over4: 0.202, over5: 0.123, aos: 0.167, threes: 0.018, twoes: 0.044, zeroes: 0.018, bts: 0.693},
 { name: 'Чемпионат Эстонии', gp: 133, avg: 3.662, over2: 0.639, over3: 0.414, over4: 0.293, over5: 0.180, aos: 0.263, threes: 0.008, twoes: 0.015, zeroes: 0.023, bts: 0.526},
 { name: 'Чемпионат Армении. 1-й дивизион', gp: 12, avg: 2.833, over2: 0.500, over3: 0.333, over4: 0.250, over5: 0.083, aos: 0.250, threes: 0.000, twoes: 0.083, zeroes: 0.083, bts: 0.500},
 { name: 'Чемпионат Аргентины. 2-й дивизион', gp: 506, avg: 2.142, over2: 0.350, over3: 0.180, over4: 0.075, over5: 0.022, aos: 0.059, threes: 0.002, twoes: 0.042, zeroes: 0.132, bts: 0.427},
 { name: 'Женщины. Летняя Универсиада', gp: 30, avg: 4.133, over2: 0.600, over3: 0.333, over4: 0.133, over5: 0.133, aos: 0.133, threes: 0.000, twoes: 0.067, zeroes: 0.067, bts: 0.400},
 { name: 'Чемпионат Испании. Сегунда дивизион Б', gp: 40, avg: 1.900, over2: 0.300, over3: 0.100, over4: 0.050, over5: 0.000, aos: 0.025, threes: 0.000, twoes: 0.025, zeroes: 0.100, bts: 0.425},
 { name: 'Чемпионат Бахрейна', gp: 90, avg: 2.556, over2: 0.456, over3: 0.244, over4: 0.144, over5: 0.056, aos: 0.100, threes: 0.011, twoes: 0.044, zeroes: 0.100, bts: 0.522},
 { name: 'Чемпионат Эквадора. Серия B', gp: 161, avg: 2.205, over2: 0.385, over3: 0.199, over4: 0.118, over5: 0.031, aos: 0.056, threes: 0.012, twoes: 0.012, zeroes: 0.112, bts: 0.391},
 { name: 'Женщины. BeNe League', gp: 156, avg: 3.154, over2: 0.596, over3: 0.333, over4: 0.218, over5: 0.103, aos: 0.218, threes: 0.006, twoes: 0.013, zeroes: 0.026, bts: 0.442},
 { name: 'Чемпионат Южной Кореи. Женщины', gp: 72, avg: 3.153, over2: 0.597, over3: 0.417, over4: 0.250, over5: 0.097, aos: 0.236, threes: 0.000, twoes: 0.028, zeroes: 0.069, bts: 0.597},
 { name: 'Чемпионат Венесуэлы', gp: 108, avg: 2.241, over2: 0.463, over3: 0.167, over4: 0.056, over5: 0.019, aos: 0.037, threes: 0.000, twoes: 0.037, zeroes: 0.130, bts: 0.481},
 { name: 'Чемпионат Вьетнама', gp: 112, avg: 2.786, over2: 0.509, over3: 0.277, over4: 0.143, over5: 0.080, aos: 0.080, threes: 0.018, twoes: 0.080, zeroes: 0.054, bts: 0.616},
 { name: 'Чемпионат Уругвая', gp: 16, avg: 3.500, over2: 0.875, over3: 0.625, over4: 0.125, over5: 0.000, aos: 0.250, threes: 0.000, twoes: 0.125, zeroes: 0.000, bts: 0.375},
 { name: 'Чемпионат Океании (до 20 лет)', gp: 30, avg: 3.667, over2: 0.667, over3: 0.533, over4: 0.267, over5: 0.200, aos: 0.400, threes: 0.000, twoes: 0.067, zeroes: 0.067, bts: 0.400},
 { name: 'Чемпионат Англии. Южная Премьер-лига. Премьер Дивизион', gp: 36, avg: 3.250, over2: 0.639, over3: 0.444, over4: 0.306, over5: 0.111, aos: 0.167, threes: 0.028, twoes: 0.056, zeroes: 0.028, bts: 0.583},
 { name: 'Чемпионат Англии. Северная Премьер-лига. Премьер Дивизион', gp: 48, avg: 2.604, over2: 0.396, over3: 0.271, over4: 0.146, over5: 0.042, aos: 0.104, threes: 0.021, twoes: 0.021, zeroes: 0.021, bts: 0.500},
 { name: 'Чемпионат США. Женщины', gp: 92, avg: 2.815, over2: 0.478, over3: 0.304, over4: 0.152, over5: 0.065, aos: 0.098, threes: 0.000, twoes: 0.065, zeroes: 0.033, bts: 0.543},
 { name: 'Чемпионат Австралии. VPL лига', gp: 182, avg: 2.841, over2: 0.538, over3: 0.319, over4: 0.148, over5: 0.071, aos: 0.132, threes: 0.011, twoes: 0.060, zeroes: 0.049, bts: 0.516},
 { name: 'Чемпионат Йемена', gp: 109, avg: 2.440, over2: 0.431, over3: 0.220, over4: 0.092, over5: 0.046, aos: 0.092, threes: 0.009, twoes: 0.018, zeroes: 0.073, bts: 0.514},
 { name: 'Чемпионат Англии. Женщины', gp: 36, avg: 3.389, over2: 0.556, over3: 0.500, over4: 0.333, over5: 0.222, aos: 0.361, threes: 0.000, twoes: 0.028, zeroes: 0.083, bts: 0.444},
 { name: 'Чемпионат ОАЭ. 1-й дивизион', gp: 131, avg: 3.038, over2: 0.588, over3: 0.359, over4: 0.168, over5: 0.092, aos: 0.115, threes: 0.015, twoes: 0.076, zeroes: 0.053, bts: 0.588},
 { name: 'Чемпионат Сербии', gp: 47, avg: 2.426, over2: 0.489, over3: 0.234, over4: 0.085, over5: 0.021, aos: 0.128, threes: 0.000, twoes: 0.021, zeroes: 0.085, bts: 0.383},
 { name: 'Чемпионат Южной Кореи', gp: 161, avg: 2.727, over2: 0.578, over3: 0.280, over4: 0.118, over5: 0.031, aos: 0.068, threes: 0.012, twoes: 0.068, zeroes: 0.068, bts: 0.609},
 { name: 'Чемпионат Южной Кореи. 2-я лига', gp: 129, avg: 2.527, over2: 0.450, over3: 0.233, over4: 0.109, over5: 0.070, aos: 0.062, threes: 0.031, twoes: 0.047, zeroes: 0.078, bts: 0.527},
 { name: 'Чемпионат ОАЭ', gp: 182, avg: 3.137, over2: 0.621, over3: 0.357, over4: 0.231, over5: 0.121, aos: 0.214, threes: 0.005, twoes: 0.044, zeroes: 0.093, bts: 0.560},
 { name: 'Чемпионат Исландии. 2-й дивизион', gp: 97, avg: 3.577, over2: 0.701, over3: 0.464, over4: 0.299, over5: 0.155, aos: 0.206, threes: 0.010, twoes: 0.082, zeroes: 0.041, bts: 0.711},
 { name: 'Чемпионат Катара', gp: 182, avg: 3.132, over2: 0.599, over3: 0.368, over4: 0.187, over5: 0.115, aos: 0.170, threes: 0.022, twoes: 0.066, zeroes: 0.044, bts: 0.615},
 { name: 'Чемпионат Катара. 2-й дивизион', gp: 138, avg: 4.572, over2: 0.848, over3: 0.638, over4: 0.522, over5: 0.333, aos: 0.486, threes: 0.014, twoes: 0.014, zeroes: 0.022, bts: 0.616},
 { name: 'Чемпионат Пакистана', gp: 132, avg: 2.333, over2: 0.379, over3: 0.212, over4: 0.114, over5: 0.061, aos: 0.121, threes: 0.000, twoes: 0.015, zeroes: 0.129, bts: 0.318},
 { name: 'Чемпионат Саудовской Аравии', gp: 14, avg: 4.214, over2: 0.929, over3: 0.643, over4: 0.357, over5: 0.143, aos: 0.357, threes: 0.000, twoes: 0.071, zeroes: 0.000, bts: 0.857},
 { name: 'Чемпионат Египта', gp: 305, avg: 2.256, over2: 0.387, over3: 0.184, over4: 0.075, over5: 0.039, aos: 0.056, threes: 0.010, twoes: 0.059, zeroes: 0.092, bts: 0.449}
];



$(function(){

  new FancyGrid({
    title: 'Totals and other',
    renderTo: 'container',
    width: 1400,
    height: 600,
    data: data,
    multiSort: true,
    defaults: {
      type: 'string',
      width: 100,
      editable: true,
      resizable: true,
      sortable: true
    },
    columns: [
	    {index: 'name', title: 'League', width: 300},
	    {index: 'gp', title: 'GP', width: 70, type: 'number'},
	    {index: 'avg', title: 'AVG', width: 70, type: 'number'},
	    {index: 'over2', title: 'over 2.5', width: 70, type: 'number'},
	    {index: 'over3', title: 'over 3.5', width: 70, type: 'number'},
	    {index: 'over4', title: 'over 4.5', width: 70, type: 'number'},
	    {index: 'over5', title: 'over 5.5', width: 70, type: 'number'},
	    {index: 'aos', title: 'Any Other', width: 70, type: 'number'},
	    {index: 'threes', title: '3:3', width: 70, type: 'number'},
	    {index: 'twoes', title: '2:2', width: 70, type: 'number'},
	    {index: 'zeroes', title: '0:0', width: 70, type: 'number'},
	    {index: 'bts', title: 'Both Score', width: 80, type: 'number'}
    ]
  });

});
