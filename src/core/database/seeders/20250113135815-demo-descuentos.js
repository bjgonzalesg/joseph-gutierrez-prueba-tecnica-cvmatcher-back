'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const cafae = [
      {
        boleta_pago_id: 3,
        tipo_id: 1,
        monto: 398.78,
      },
      {
        boleta_pago_id: 4,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 5,
        tipo_id: 1,
        monto: 669.54,
      },
      {
        boleta_pago_id: 6,
        tipo_id: 1,
        monto: 596.27,
      },
      {
        boleta_pago_id: 7,
        tipo_id: 3,
        monto: 248.28,
      },
      {
        boleta_pago_id: 8,
        tipo_id: 1,
        monto: 565.02,
      },
      {
        boleta_pago_id: 9,
        tipo_id: 1,
        monto: 655.47,
      },
      {
        boleta_pago_id: 34,
        tipo_id: 1,
        monto: 633.92,
      },
      {
        boleta_pago_id: 38,
        tipo_id: 1,
        monto: 517.04,
      },
      {
        boleta_pago_id: 39,
        tipo_id: 3,
        monto: 166.51,
      },
      {
        boleta_pago_id: 43,
        tipo_id: 3,
        monto: 284.98,
      },
      {
        boleta_pago_id: 45,
        tipo_id: 1,
        monto: 355.28,
      },
      {
        boleta_pago_id: 50,
        tipo_id: 1,
        monto: 636.94,
      },
      {
        boleta_pago_id: 53,
        tipo_id: 3,
        monto: 27.96,
      },
      {
        boleta_pago_id: 55,
        tipo_id: 3,
        monto: 74.43,
      },
      {
        boleta_pago_id: 57,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 58,
        tipo_id: 1,
        monto: 594.6,
      },
      {
        boleta_pago_id: 60,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 62,
        tipo_id: 3,
        monto: 110.21,
      },
      {
        boleta_pago_id: 65,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 65,
        tipo_id: 8,
        monto: 40.0,
      },
      {
        boleta_pago_id: 67,
        tipo_id: 3,
        monto: 393.92,
      },
      {
        boleta_pago_id: 68,
        tipo_id: 3,
        monto: 288.27,
      },
      {
        boleta_pago_id: 68,
        tipo_id: 1,
        monto: 386.73,
      },
      {
        boleta_pago_id: 69,
        tipo_id: 1,
        monto: 552.3,
      },
      {
        boleta_pago_id: 72,
        tipo_id: 1,
        monto: 632.56,
      },
      {
        boleta_pago_id: 72,
        tipo_id: 3,
        monto: 52.44,
      },
      {
        boleta_pago_id: 74,
        tipo_id: 1,
        monto: 619.28,
      },
      {
        boleta_pago_id: 75,
        tipo_id: 1,
        monto: 263.87,
      },
      {
        boleta_pago_id: 76,
        tipo_id: 2,
        monto: 211.47,
      },
      {
        boleta_pago_id: 77,
        tipo_id: 1,
        monto: 440.63,
      },
      {
        boleta_pago_id: 80,
        tipo_id: 1,
        monto: 601.31,
      },
      {
        boleta_pago_id: 82,
        tipo_id: 1,
        monto: 639.84,
      },
      {
        boleta_pago_id: 85,
        tipo_id: 1,
        monto: 319.47,
      },
      {
        boleta_pago_id: 87,
        tipo_id: 1,
        monto: 676.53,
      },
      {
        boleta_pago_id: 89,
        tipo_id: 3,
        monto: 94.57,
      },
      {
        boleta_pago_id: 90,
        tipo_id: 1,
        monto: 582.95,
      },
      {
        boleta_pago_id: 92,
        tipo_id: 1,
        monto: 601.26,
      },
      {
        boleta_pago_id: 93,
        tipo_id: 1,
        monto: 373.47,
      },
      {
        boleta_pago_id: 101,
        tipo_id: 3,
        monto: 619.51,
      },
      {
        boleta_pago_id: 102,
        tipo_id: 1,
        monto: 312.47,
      },
      {
        boleta_pago_id: 110,
        tipo_id: 1,
        monto: 549.06,
      },
      {
        boleta_pago_id: 112,
        tipo_id: 1,
        monto: 513.61,
      },
      {
        boleta_pago_id: 118,
        tipo_id: 1,
        monto: 202.79,
      },
      {
        boleta_pago_id: 119,
        tipo_id: 3,
        monto: 362.68,
      },
      {
        boleta_pago_id: 121,
        tipo_id: 3,
        monto: 499.54,
      },
      {
        boleta_pago_id: 125,
        tipo_id: 3,
        monto: 319.08,
      },
      {
        boleta_pago_id: 128,
        tipo_id: 1,
        monto: 621.54,
      },
      {
        boleta_pago_id: 129,
        tipo_id: 1,
        monto: 372.47,
      },
      {
        boleta_pago_id: 131,
        tipo_id: 3,
        monto: 685.0,
      },
      {
        boleta_pago_id: 141,
        tipo_id: 1,
        monto: 644.67,
      },
      {
        boleta_pago_id: 142,
        tipo_id: 1,
        monto: 780.0,
      },
      {
        boleta_pago_id: 143,
        tipo_id: 1,
        monto: 344.77,
      },
      {
        boleta_pago_id: 146,
        tipo_id: 1,
        monto: 398.98,
      },
      {
        boleta_pago_id: 148,
        tipo_id: 1,
        monto: 414.99,
      },
      {
        boleta_pago_id: 149,
        tipo_id: 3,
        monto: 627.21,
      },
      {
        boleta_pago_id: 150,
        tipo_id: 3,
        monto: 685.0,
      },
      {
        boleta_pago_id: 152,
        tipo_id: 1,
        monto: 645.89,
      },
      {
        boleta_pago_id: 153,
        tipo_id: 1,
        monto: 429.12,
      },
      {
        boleta_pago_id: 156,
        tipo_id: 3,
        monto: 353.58,
      },
      {
        boleta_pago_id: 157,
        tipo_id: 3,
        monto: 213.9,
      },
      {
        boleta_pago_id: 161,
        tipo_id: 2,
        monto: 279.56,
      },
      {
        boleta_pago_id: 162,
        tipo_id: 1,
        monto: 458.45,
      },
      {
        boleta_pago_id: 163,
        tipo_id: 6,
        monto: 67.81,
      },
      {
        boleta_pago_id: 163,
        tipo_id: 1,
        monto: 617.19,
      },
      {
        boleta_pago_id: 169,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 171,
        tipo_id: 3,
        monto: 517.43,
      },
      {
        boleta_pago_id: 173,
        tipo_id: 3,
        monto: 241.7,
      },
      {
        boleta_pago_id: 174,
        tipo_id: 3,
        monto: 389.13,
      },
      {
        boleta_pago_id: 176,
        tipo_id: 1,
        monto: 565.27,
      },
      {
        boleta_pago_id: 177,
        tipo_id: 1,
        monto: 545.22,
      },
      {
        boleta_pago_id: 179,
        tipo_id: 1,
        monto: 532.18,
      },
      {
        boleta_pago_id: 180,
        tipo_id: 1,
        monto: 650.05,
      },
      {
        boleta_pago_id: 181,
        tipo_id: 1,
        monto: 502.39,
      },
      {
        boleta_pago_id: 183,
        tipo_id: 1,
        monto: 454.61,
      },
      {
        boleta_pago_id: 184,
        tipo_id: 7,
        monto: 269.29,
      },
      {
        boleta_pago_id: 187,
        tipo_id: 1,
        monto: 215.06,
      },
      {
        boleta_pago_id: 189,
        tipo_id: 1,
        monto: 636.47,
      },
      {
        boleta_pago_id: 189,
        tipo_id: 8,
        monto: 38.53,
      },
      {
        boleta_pago_id: 190,
        tipo_id: 1,
        monto: 675.0,
      },
      {
        boleta_pago_id: 192,
        tipo_id: 1,
        monto: 495.24,
      },
      {
        boleta_pago_id: 196,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 197,
        tipo_id: 1,
        monto: 310.02,
      },
      {
        boleta_pago_id: 198,
        tipo_id: 3,
        monto: 435.9,
      },
      {
        boleta_pago_id: 198,
        tipo_id: 1,
        monto: 249.1,
      },
      {
        boleta_pago_id: 200,
        tipo_id: 1,
        monto: 564.03,
      },
      {
        boleta_pago_id: 204,
        tipo_id: 1,
        monto: 128.93,
      },
      {
        boleta_pago_id: 210,
        tipo_id: 3,
        monto: 555.84,
      },
      {
        boleta_pago_id: 211,
        tipo_id: 3,
        monto: 355.33,
      },
      {
        boleta_pago_id: 215,
        tipo_id: 1,
        monto: 255.4,
      },
      {
        boleta_pago_id: 216,
        tipo_id: 1,
        monto: 661.39,
      },
      {
        boleta_pago_id: 219,
        tipo_id: 1,
        monto: 303.62,
      },
      {
        boleta_pago_id: 220,
        tipo_id: 3,
        monto: 509.35,
      },
      {
        boleta_pago_id: 225,
        tipo_id: 2,
        monto: 285.47,
      },
      {
        boleta_pago_id: 231,
        tipo_id: 2,
        monto: 171.95,
      },
      {
        boleta_pago_id: 233,
        tipo_id: 1,
        monto: 288.9,
      },
      {
        boleta_pago_id: 233,
        tipo_id: 3,
        monto: 184.25,
      },
      {
        boleta_pago_id: 237,
        tipo_id: 1,
        monto: 633.49,
      },
      {
        boleta_pago_id: 241,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 245,
        tipo_id: 1,
        monto: 568.38,
      },
      {
        boleta_pago_id: 246,
        tipo_id: 3,
        monto: 471.16,
      },
      {
        boleta_pago_id: 247,
        tipo_id: 1,
        monto: 399.45,
      },
      {
        boleta_pago_id: 249,
        tipo_id: 1,
        monto: 685.0,
      },
      {
        boleta_pago_id: 250,
        tipo_id: 1,
        monto: 492.51,
      },
      {
        boleta_pago_id: 251,
        tipo_id: 1,
        monto: 563.33,
      },
      {
        boleta_pago_id: 252,
        tipo_id: 1,
        monto: 640.95,
      },
      {
        boleta_pago_id: 255,
        tipo_id: 1,
        monto: 272.06,
      },
      {
        boleta_pago_id: 256,
        tipo_id: 1,
        monto: 634.12,
      },
      {
        boleta_pago_id: 258,
        tipo_id: 1,
        monto: 676.4,
      },
      {
        boleta_pago_id: 260,
        tipo_id: 3,
        monto: 304.8,
      },
      {
        boleta_pago_id: 262,
        tipo_id: 1,
        monto: 652.23,
      },
      {
        boleta_pago_id: 268,
        tipo_id: 3,
        monto: 605.3,
      },
      {
        boleta_pago_id: 269,
        tipo_id: 3,
        monto: 578.93,
      },
      {
        boleta_pago_id: 269,
        tipo_id: 6,
        monto: 96.07,
      },
      {
        boleta_pago_id: 273,
        tipo_id: 4,
        monto: 293.33,
      },
      {
        boleta_pago_id: 274,
        tipo_id: 3,
        monto: 308.6,
      },
      {
        boleta_pago_id: 277,
        tipo_id: 3,
        monto: 614.22,
      },
      {
        boleta_pago_id: 278,
        tipo_id: 3,
        monto: 533.76,
      },
      {
        boleta_pago_id: 283,
        tipo_id: 3,
        monto: 492.25,
      },
      {
        boleta_pago_id: 284,
        tipo_id: 3,
        monto: 639.08,
      },
      {
        boleta_pago_id: 286,
        tipo_id: 1,
        monto: 653.73,
      },
      {
        boleta_pago_id: 287,
        tipo_id: 7,
        monto: 166.35,
      },
      {
        boleta_pago_id: 289,
        tipo_id: 1,
        monto: 629.02,
      },
      {
        boleta_pago_id: 298,
        tipo_id: 3,
        monto: 507.96,
      },
      {
        boleta_pago_id: 300,
        tipo_id: 3,
        monto: 436.91,
      },
      {
        boleta_pago_id: 301,
        tipo_id: 1,
        monto: 566.71,
      },
      {
        boleta_pago_id: 302,
        tipo_id: 3,
        monto: 392.17,
      },
      {
        boleta_pago_id: 303,
        tipo_id: 2,
        monto: 386.31,
      },
      {
        boleta_pago_id: 303,
        tipo_id: 4,
        monto: 288.69,
      },
      {
        boleta_pago_id: 304,
        tipo_id: 1,
        monto: 654.08,
      },
      {
        boleta_pago_id: 307,
        tipo_id: 3,
        monto: 638.75,
      },
      {
        boleta_pago_id: 314,
        tipo_id: 1,
        monto: 433.22,
      },
      {
        boleta_pago_id: 318,
        tipo_id: 1,
        monto: 194.88,
      },
      {
        boleta_pago_id: 320,
        tipo_id: 1,
        monto: 502.16,
      },
      {
        boleta_pago_id: 321,
        tipo_id: 3,
        monto: 523.06,
      },
      {
        boleta_pago_id: 325,
        tipo_id: 1,
        monto: 514.3,
      },
      {
        boleta_pago_id: 326,
        tipo_id: 1,
        monto: 646.8,
      },
      {
        boleta_pago_id: 327,
        tipo_id: 3,
        monto: 631.32,
      },
      {
        boleta_pago_id: 328,
        tipo_id: 1,
        monto: 635.87,
      },
      {
        boleta_pago_id: 330,
        tipo_id: 1,
        monto: 250.79,
      },
      {
        boleta_pago_id: 331,
        tipo_id: 1,
        monto: 332.42,
      },
      {
        boleta_pago_id: 332,
        tipo_id: 3,
        monto: 535.38,
      },
      {
        boleta_pago_id: 336,
        tipo_id: 3,
        monto: 685.0,
      },
      {
        boleta_pago_id: 340,
        tipo_id: 4,
        monto: 183.33,
      },
      {
        boleta_pago_id: 340,
        tipo_id: 6,
        monto: 250.0,
      },
      {
        boleta_pago_id: 340,
        tipo_id: 2,
        monto: 99.23,
      },
      {
        boleta_pago_id: 341,
        tipo_id: 1,
        monto: 645.01,
      },
      {
        boleta_pago_id: 341,
        tipo_id: 8,
        monto: 29.99,
      },
      {
        boleta_pago_id: 345,
        tipo_id: 1,
        monto: 301.86,
      },
      {
        boleta_pago_id: 348,
        tipo_id: 3,
        monto: 382.54,
      },
      {
        boleta_pago_id: 349,
        tipo_id: 3,
        monto: 675.0,
      },
      {
        boleta_pago_id: 351,
        tipo_id: 1,
        monto: 349.82,
      },
      {
        boleta_pago_id: 353,
        tipo_id: 2,
        monto: 684.93,
      },
      {
        boleta_pago_id: 354,
        tipo_id: 1,
        monto: 269.21,
      },
      {
        boleta_pago_id: 356,
        tipo_id: 1,
        monto: 660.0,
      },
      {
        boleta_pago_id: 358,
        tipo_id: 1,
        monto: 659.51,
      },
      {
        boleta_pago_id: 360,
        tipo_id: 1,
        monto: 658.31,
      },
      {
        boleta_pago_id: 367,
        tipo_id: 3,
        monto: 466.05,
      },
      {
        boleta_pago_id: 368,
        tipo_id: 1,
        monto: 179.12,
      },
      {
        boleta_pago_id: 372,
        tipo_id: 1,
        monto: 316.86,
      },
      {
        boleta_pago_id: 375,
        tipo_id: 1,
        monto: 662.18,
      },
      {
        boleta_pago_id: 376,
        tipo_id: 3,
        monto: 675.0,
      },
      {
        boleta_pago_id: 377,
        tipo_id: 3,
        monto: 632.4,
      },
      {
        boleta_pago_id: 378,
        tipo_id: 1,
        monto: 665.45,
      },
      {
        boleta_pago_id: 379,
        tipo_id: 1,
        monto: 671.06,
      },
      {
        boleta_pago_id: 380,
        tipo_id: 1,
        monto: 98.26,
      },
      {
        boleta_pago_id: 382,
        tipo_id: 1,
        monto: 633.94,
      },
      {
        boleta_pago_id: 383,
        tipo_id: 3,
        monto: 347.63,
      },
      {
        boleta_pago_id: 386,
        tipo_id: 3,
        monto: 472.82,
      },
      {
        boleta_pago_id: 387,
        tipo_id: 1,
        monto: 662.16,
      },
      {
        boleta_pago_id: 393,
        tipo_id: 3,
        monto: 622.85,
      },
      {
        boleta_pago_id: 395,
        tipo_id: 1,
        monto: 560.1,
      },
      {
        boleta_pago_id: 395,
        tipo_id: 6,
        monto: 125.0,
      },
      {
        boleta_pago_id: 396,
        tipo_id: 2,
        monto: 249.07,
      },
      {
        boleta_pago_id: 396,
        tipo_id: 6,
        monto: 125.0,
      },
      {
        boleta_pago_id: 398,
        tipo_id: 1,
        monto: 589.44,
      },
      {
        boleta_pago_id: 399,
        tipo_id: 1,
        monto: 675.0,
      },
      {
        boleta_pago_id: 402,
        tipo_id: 2,
        monto: 554.47,
      },
      {
        boleta_pago_id: 403,
        tipo_id: 1,
        monto: 675.0,
      },
      {
        boleta_pago_id: 406,
        tipo_id: 3,
        monto: 168.45,
      },
      {
        boleta_pago_id: 407,
        tipo_id: 1,
        monto: 287.26,
      },
      {
        boleta_pago_id: 408,
        tipo_id: 3,
        monto: 539.34,
      },
      {
        boleta_pago_id: 410,
        tipo_id: 1,
        monto: 543.84,
      },
      {
        boleta_pago_id: 412,
        tipo_id: 3,
        monto: 97.72,
      },
      {
        boleta_pago_id: 412,
        tipo_id: 5,
        monto: 337.5,
      },
      {
        boleta_pago_id: 413,
        tipo_id: 2,
        monto: 74.03,
      },
      {
        boleta_pago_id: 414,
        tipo_id: 3,
        monto: 633.39,
      },
      {
        boleta_pago_id: 415,
        tipo_id: 3,
        monto: 213.26,
      },
      {
        boleta_pago_id: 416,
        tipo_id: 3,
        monto: 8.42,
      },
      {
        boleta_pago_id: 417,
        tipo_id: 3,
        monto: 539.73,
      },
      {
        boleta_pago_id: 418,
        tipo_id: 1,
        monto: 664.99,
      },
      {
        boleta_pago_id: 419,
        tipo_id: 1,
        monto: 288.67,
      },
      {
        boleta_pago_id: 419,
        tipo_id: 6,
        monto: 125.0,
      },
      {
        boleta_pago_id: 420,
        tipo_id: 1,
        monto: 176.8,
      },
      {
        boleta_pago_id: 422,
        tipo_id: 1,
        monto: 535.19,
      },
      {
        boleta_pago_id: 429,
        tipo_id: 1,
        monto: 300.44,
      },
      {
        boleta_pago_id: 430,
        tipo_id: 3,
        monto: 360.78,
      },
      {
        boleta_pago_id: 433,
        tipo_id: 2,
        monto: 630.35,
      },
    ];

    const investigacion = [
      {
        boleta_pago_id: 547,
        tipo_id: 5,
        monto: 41.34,
      },
      {
        boleta_pago_id: 578,
        tipo_id: 5,
        monto: 62.01,
      },
    ];

    const renacyt = [
      {
        boleta_pago_id: 1237,
        tipo_id: 10,
        monto: 564.89,
      },
      {
        boleta_pago_id: 1238,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1239,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1240,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1241,
        tipo_id: 10,
        monto: 361.94,
      },
      {
        boleta_pago_id: 1242,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1243,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1244,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1245,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1246,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1247,
        tipo_id: 10,
        monto: 685.93,
      },
      {
        boleta_pago_id: 1248,
        tipo_id: 10,
        monto: 361.94,
      },
      {
        boleta_pago_id: 1249,
        tipo_id: 10,
        monto: 361.94,
      },
      {
        boleta_pago_id: 1250,
        tipo_id: 10,
        monto: 361.94,
      },
      {
        boleta_pago_id: 1251,
        tipo_id: 10,
        monto: 361.94,
      },
      {
        boleta_pago_id: 1252,
        tipo_id: 10,
        monto: 361.94,
      },
      {
        boleta_pago_id: 1253,
        tipo_id: 10,
        monto: 361.94,
      },
      {
        boleta_pago_id: 1254,
        tipo_id: 10,
        monto: 327.81,
      },
      {
        boleta_pago_id: 1255,
        tipo_id: 10,
        monto: 327.81,
      },
      {
        boleta_pago_id: 1256,
        tipo_id: 10,
        monto: 327.81,
      },
      {
        boleta_pago_id: 1257,
        tipo_id: 10,
        monto: 327.81,
      },
      {
        boleta_pago_id: 1258,
        tipo_id: 10,
        monto: 327.81,
      },
      {
        boleta_pago_id: 1259,
        tipo_id: 10,
        monto: 327.81,
      },
      {
        boleta_pago_id: 1260,
        tipo_id: 10,
        monto: 327.81,
      },
      {
        boleta_pago_id: 1261,
        tipo_id: 10,
        monto: 685.93,
      },
    ];

    await queryInterface.bulkInsert({ schema, tableName: 'descuentos' }, [
      ...cafae,
      ...investigacion,
      ...renacyt,
    ]);
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'descuentos' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      `ALTER SEQUENCE ${schema}.descuentos_id_seq RESTART WITH 1;`,
    );
  },
};
