'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const schema = 'boletaspago';

    const cafae = [
      {
        trabajador_id: 6,
        tipo_id: 1,
      },
      {
        trabajador_id: 13,
        tipo_id: 1,
      },
      {
        trabajador_id: 30,
        tipo_id: 1,
      },
      {
        trabajador_id: 39,
        tipo_id: 1,
      },
      {
        trabajador_id: 42,
        tipo_id: 1,
      },
      {
        trabajador_id: 43,
        tipo_id: 1,
      },
      {
        trabajador_id: 46,
        tipo_id: 1,
      },
      {
        trabajador_id: 48,
        tipo_id: 1,
      },
      {
        trabajador_id: 94,
        tipo_id: 1,
      },
      {
        trabajador_id: 95,
        tipo_id: 1,
      },
      {
        trabajador_id: 96,
        tipo_id: 1,
      },
      {
        trabajador_id: 113,
        tipo_id: 1,
      },
      {
        trabajador_id: 119,
        tipo_id: 1,
      },
      {
        trabajador_id: 120,
        tipo_id: 1,
      },
      {
        trabajador_id: 121,
        tipo_id: 1,
      },
      {
        trabajador_id: 122,
        tipo_id: 1,
      },
      {
        trabajador_id: 156,
        tipo_id: 1,
      },
      {
        trabajador_id: 161,
        tipo_id: 1,
      },
      {
        trabajador_id: 162,
        tipo_id: 1,
      },
      {
        trabajador_id: 218,
        tipo_id: 1,
      },
      {
        trabajador_id: 277,
        tipo_id: 1,
      },
      {
        trabajador_id: 278,
        tipo_id: 1,
      },
      {
        trabajador_id: 306,
        tipo_id: 1,
      },
      {
        trabajador_id: 307,
        tipo_id: 1,
      },
      {
        trabajador_id: 313,
        tipo_id: 1,
      },
      {
        trabajador_id: 316,
        tipo_id: 1,
      },
      {
        trabajador_id: 317,
        tipo_id: 1,
      },
      {
        trabajador_id: 321,
        tipo_id: 1,
      },
      {
        trabajador_id: 323,
        tipo_id: 1,
      },
      {
        trabajador_id: 324,
        tipo_id: 1,
      },
      {
        trabajador_id: 325,
        tipo_id: 1,
      },
      {
        trabajador_id: 354,
        tipo_id: 1,
      },
      {
        trabajador_id: 367,
        tipo_id: 1,
      },
      {
        trabajador_id: 373,
        tipo_id: 1,
      },
      {
        trabajador_id: 378,
        tipo_id: 1,
      },
      {
        trabajador_id: 380,
        tipo_id: 1,
      },
      {
        trabajador_id: 386,
        tipo_id: 1,
      },
      {
        trabajador_id: 389,
        tipo_id: 1,
      },
      {
        trabajador_id: 393,
        tipo_id: 1,
      },
      {
        trabajador_id: 397,
        tipo_id: 1,
      },
      {
        trabajador_id: 398,
        tipo_id: 1,
      },
      {
        trabajador_id: 399,
        tipo_id: 1,
      },
      {
        trabajador_id: 401,
        tipo_id: 1,
      },
      {
        trabajador_id: 402,
        tipo_id: 1,
      },
      {
        trabajador_id: 408,
        tipo_id: 1,
      },
      {
        trabajador_id: 409,
        tipo_id: 1,
      },
      {
        trabajador_id: 410,
        tipo_id: 1,
      },
      {
        trabajador_id: 411,
        tipo_id: 1,
      },
      {
        trabajador_id: 413,
        tipo_id: 1,
      },
      {
        trabajador_id: 416,
        tipo_id: 1,
      },
      {
        trabajador_id: 418,
        tipo_id: 1,
      },
      {
        trabajador_id: 421,
        tipo_id: 1,
      },
      {
        trabajador_id: 430,
        tipo_id: 1,
      },
      {
        trabajador_id: 433,
        tipo_id: 1,
      },
      {
        trabajador_id: 436,
        tipo_id: 1,
      },
      {
        trabajador_id: 456,
        tipo_id: 1,
      },
      {
        trabajador_id: 458,
        tipo_id: 1,
      },
      {
        trabajador_id: 471,
        tipo_id: 1,
      },
      {
        trabajador_id: 472,
        tipo_id: 1,
      },
      {
        trabajador_id: 473,
        tipo_id: 1,
      },
      {
        trabajador_id: 483,
        tipo_id: 1,
      },
      {
        trabajador_id: 484,
        tipo_id: 1,
      },
      {
        trabajador_id: 485,
        tipo_id: 1,
      },
      {
        trabajador_id: 486,
        tipo_id: 1,
      },
      {
        trabajador_id: 488,
        tipo_id: 1,
      },
      {
        trabajador_id: 489,
        tipo_id: 1,
      },
      {
        trabajador_id: 491,
        tipo_id: 1,
      },
      {
        trabajador_id: 502,
        tipo_id: 1,
      },
      {
        trabajador_id: 511,
        tipo_id: 1,
      },
      {
        trabajador_id: 512,
        tipo_id: 1,
      },
      {
        trabajador_id: 514,
        tipo_id: 1,
      },
      {
        trabajador_id: 517,
        tipo_id: 1,
      },
      {
        trabajador_id: 518,
        tipo_id: 1,
      },
      {
        trabajador_id: 532,
        tipo_id: 1,
      },
      {
        trabajador_id: 533,
        tipo_id: 1,
      },
      {
        trabajador_id: 539,
        tipo_id: 1,
      },
      {
        trabajador_id: 540,
        tipo_id: 1,
      },
      {
        trabajador_id: 543,
        tipo_id: 1,
      },
      {
        trabajador_id: 544,
        tipo_id: 1,
      },
      {
        trabajador_id: 552,
        tipo_id: 1,
      },
      {
        trabajador_id: 555,
        tipo_id: 1,
      },
      {
        trabajador_id: 572,
        tipo_id: 1,
      },
      {
        trabajador_id: 573,
        tipo_id: 1,
      },
      {
        trabajador_id: 574,
        tipo_id: 1,
      },
      {
        trabajador_id: 576,
        tipo_id: 1,
      },
      {
        trabajador_id: 583,
        tipo_id: 1,
      },
      {
        trabajador_id: 584,
        tipo_id: 1,
      },
      {
        trabajador_id: 594,
        tipo_id: 1,
      },
      {
        trabajador_id: 604,
        tipo_id: 1,
      },
      {
        trabajador_id: 605,
        tipo_id: 1,
      },
      {
        trabajador_id: 606,
        tipo_id: 1,
      },
      {
        trabajador_id: 607,
        tipo_id: 1,
      },
      {
        trabajador_id: 608,
        tipo_id: 1,
      },
      {
        trabajador_id: 609,
        tipo_id: 1,
      },
      {
        trabajador_id: 611,
        tipo_id: 1,
      },
      {
        trabajador_id: 612,
        tipo_id: 1,
      },
      {
        trabajador_id: 615,
        tipo_id: 1,
      },
      {
        trabajador_id: 616,
        tipo_id: 1,
      },
      {
        trabajador_id: 618,
        tipo_id: 1,
      },
      {
        trabajador_id: 622,
        tipo_id: 1,
      },
      {
        trabajador_id: 625,
        tipo_id: 1,
      },
      {
        trabajador_id: 626,
        tipo_id: 1,
      },
      {
        trabajador_id: 628,
        tipo_id: 1,
      },
      {
        trabajador_id: 630,
        tipo_id: 1,
      },
      {
        trabajador_id: 634,
        tipo_id: 1,
      },
      {
        trabajador_id: 637,
        tipo_id: 1,
      },
      {
        trabajador_id: 642,
        tipo_id: 1,
      },
      {
        trabajador_id: 646,
        tipo_id: 1,
      },
      {
        trabajador_id: 647,
        tipo_id: 1,
      },
      {
        trabajador_id: 650,
        tipo_id: 1,
      },
      {
        trabajador_id: 652,
        tipo_id: 1,
      },
      {
        trabajador_id: 658,
        tipo_id: 1,
      },
      {
        trabajador_id: 664,
        tipo_id: 1,
      },
      {
        trabajador_id: 665,
        tipo_id: 1,
      },
      {
        trabajador_id: 673,
        tipo_id: 1,
      },
      {
        trabajador_id: 675,
        tipo_id: 1,
      },
      {
        trabajador_id: 677,
        tipo_id: 1,
      },
      {
        trabajador_id: 678,
        tipo_id: 1,
      },
      {
        trabajador_id: 679,
        tipo_id: 1,
      },
      {
        trabajador_id: 684,
        tipo_id: 1,
      },
      {
        trabajador_id: 686,
        tipo_id: 1,
      },
      {
        trabajador_id: 687,
        tipo_id: 1,
      },
      {
        trabajador_id: 690,
        tipo_id: 1,
      },
      {
        trabajador_id: 694,
        tipo_id: 1,
      },
      {
        trabajador_id: 695,
        tipo_id: 1,
      },
      {
        trabajador_id: 701,
        tipo_id: 1,
      },
      {
        trabajador_id: 709,
        tipo_id: 1,
      },
      {
        trabajador_id: 711,
        tipo_id: 1,
      },
      {
        trabajador_id: 713,
        tipo_id: 1,
      },
      {
        trabajador_id: 718,
        tipo_id: 1,
      },
      {
        trabajador_id: 726,
        tipo_id: 1,
      },
      {
        trabajador_id: 729,
        tipo_id: 1,
      },
      {
        trabajador_id: 732,
        tipo_id: 1,
      },
      {
        trabajador_id: 741,
        tipo_id: 1,
      },
      {
        trabajador_id: 745,
        tipo_id: 1,
      },
      {
        trabajador_id: 747,
        tipo_id: 1,
      },
      {
        trabajador_id: 756,
        tipo_id: 1,
      },
      {
        trabajador_id: 758,
        tipo_id: 1,
      },
      {
        trabajador_id: 759,
        tipo_id: 1,
      },
      {
        trabajador_id: 769,
        tipo_id: 1,
      },
      {
        trabajador_id: 776,
        tipo_id: 1,
      },
      {
        trabajador_id: 780,
        tipo_id: 1,
      },
      {
        trabajador_id: 782,
        tipo_id: 1,
      },
      {
        trabajador_id: 790,
        tipo_id: 1,
      },
      {
        trabajador_id: 793,
        tipo_id: 1,
      },
      {
        trabajador_id: 794,
        tipo_id: 1,
      },
      {
        trabajador_id: 795,
        tipo_id: 1,
      },
      {
        trabajador_id: 797,
        tipo_id: 1,
      },
      {
        trabajador_id: 807,
        tipo_id: 1,
      },
      {
        trabajador_id: 809,
        tipo_id: 1,
      },
      {
        trabajador_id: 812,
        tipo_id: 1,
      },
      {
        trabajador_id: 818,
        tipo_id: 1,
      },
      {
        trabajador_id: 820,
        tipo_id: 1,
      },
      {
        trabajador_id: 825,
        tipo_id: 1,
      },
      {
        trabajador_id: 831,
        tipo_id: 1,
      },
      {
        trabajador_id: 835,
        tipo_id: 1,
      },
      {
        trabajador_id: 843,
        tipo_id: 1,
      },
      {
        trabajador_id: 862,
        tipo_id: 1,
      },
      {
        trabajador_id: 883,
        tipo_id: 1,
      },
      {
        trabajador_id: 932,
        tipo_id: 1,
      },
      {
        trabajador_id: 933,
        tipo_id: 1,
      },
      {
        trabajador_id: 934,
        tipo_id: 1,
      },
      {
        trabajador_id: 935,
        tipo_id: 1,
      },
      {
        trabajador_id: 936,
        tipo_id: 1,
      },
      {
        trabajador_id: 937,
        tipo_id: 1,
      },
      {
        trabajador_id: 938,
        tipo_id: 1,
      },
      {
        trabajador_id: 939,
        tipo_id: 1,
      },
      {
        trabajador_id: 940,
        tipo_id: 1,
      },
      {
        trabajador_id: 941,
        tipo_id: 1,
      },
      {
        trabajador_id: 942,
        tipo_id: 1,
      },
      {
        trabajador_id: 943,
        tipo_id: 1,
      },
      {
        trabajador_id: 944,
        tipo_id: 1,
      },
      {
        trabajador_id: 945,
        tipo_id: 1,
      },
      {
        trabajador_id: 946,
        tipo_id: 1,
      },
      {
        trabajador_id: 947,
        tipo_id: 1,
      },
      {
        trabajador_id: 948,
        tipo_id: 1,
      },
      {
        trabajador_id: 949,
        tipo_id: 1,
      },
      {
        trabajador_id: 950,
        tipo_id: 1,
      },
      {
        trabajador_id: 951,
        tipo_id: 1,
      },
      {
        trabajador_id: 952,
        tipo_id: 1,
      },
      {
        trabajador_id: 953,
        tipo_id: 1,
      },
      {
        trabajador_id: 954,
        tipo_id: 1,
      },
      {
        trabajador_id: 955,
        tipo_id: 1,
      },
      {
        trabajador_id: 956,
        tipo_id: 1,
      },
      {
        trabajador_id: 957,
        tipo_id: 1,
      },
      {
        trabajador_id: 958,
        tipo_id: 1,
      },
      {
        trabajador_id: 959,
        tipo_id: 1,
      },
      {
        trabajador_id: 960,
        tipo_id: 1,
      },
      {
        trabajador_id: 961,
        tipo_id: 1,
      },
      {
        trabajador_id: 962,
        tipo_id: 1,
      },
      {
        trabajador_id: 963,
        tipo_id: 1,
      },
      {
        trabajador_id: 964,
        tipo_id: 1,
      },
      {
        trabajador_id: 965,
        tipo_id: 1,
      },
      {
        trabajador_id: 966,
        tipo_id: 1,
      },
      {
        trabajador_id: 967,
        tipo_id: 1,
      },
      {
        trabajador_id: 968,
        tipo_id: 1,
      },
      {
        trabajador_id: 969,
        tipo_id: 1,
      },
      {
        trabajador_id: 970,
        tipo_id: 1,
      },
      {
        trabajador_id: 971,
        tipo_id: 1,
      },
      {
        trabajador_id: 972,
        tipo_id: 1,
      },
      {
        trabajador_id: 973,
        tipo_id: 1,
      },
      {
        trabajador_id: 974,
        tipo_id: 1,
      },
      {
        trabajador_id: 975,
        tipo_id: 1,
      },
      {
        trabajador_id: 976,
        tipo_id: 1,
      },
      {
        trabajador_id: 977,
        tipo_id: 1,
      },
      {
        trabajador_id: 978,
        tipo_id: 1,
      },
      {
        trabajador_id: 979,
        tipo_id: 1,
      },
      {
        trabajador_id: 980,
        tipo_id: 1,
      },
      {
        trabajador_id: 981,
        tipo_id: 1,
      },
      {
        trabajador_id: 982,
        tipo_id: 1,
      },
      {
        trabajador_id: 983,
        tipo_id: 1,
      },
      {
        trabajador_id: 984,
        tipo_id: 1,
      },
      {
        trabajador_id: 985,
        tipo_id: 1,
      },
      {
        trabajador_id: 986,
        tipo_id: 1,
      },
      {
        trabajador_id: 987,
        tipo_id: 1,
      },
      {
        trabajador_id: 988,
        tipo_id: 1,
      },
      {
        trabajador_id: 989,
        tipo_id: 1,
      },
      {
        trabajador_id: 990,
        tipo_id: 1,
      },
      {
        trabajador_id: 991,
        tipo_id: 1,
      },
      {
        trabajador_id: 992,
        tipo_id: 1,
      },
      {
        trabajador_id: 993,
        tipo_id: 1,
      },
      {
        trabajador_id: 994,
        tipo_id: 1,
      },
      {
        trabajador_id: 995,
        tipo_id: 1,
      },
      {
        trabajador_id: 996,
        tipo_id: 1,
      },
      {
        trabajador_id: 997,
        tipo_id: 1,
      },
      {
        trabajador_id: 998,
        tipo_id: 1,
      },
      {
        trabajador_id: 999,
        tipo_id: 1,
      },
      {
        trabajador_id: 1000,
        tipo_id: 1,
      },
      {
        trabajador_id: 1001,
        tipo_id: 1,
      },
      {
        trabajador_id: 1002,
        tipo_id: 1,
      },
      {
        trabajador_id: 1003,
        tipo_id: 1,
      },
      {
        trabajador_id: 1004,
        tipo_id: 1,
      },
      {
        trabajador_id: 1005,
        tipo_id: 1,
      },
      {
        trabajador_id: 1006,
        tipo_id: 1,
      },
      {
        trabajador_id: 1007,
        tipo_id: 1,
      },
      {
        trabajador_id: 1008,
        tipo_id: 1,
      },
      {
        trabajador_id: 1009,
        tipo_id: 1,
      },
      {
        trabajador_id: 1010,
        tipo_id: 1,
      },
      {
        trabajador_id: 1011,
        tipo_id: 1,
      },
      {
        trabajador_id: 1012,
        tipo_id: 1,
      },
      {
        trabajador_id: 1013,
        tipo_id: 1,
      },
      {
        trabajador_id: 1014,
        tipo_id: 1,
      },
      {
        trabajador_id: 1015,
        tipo_id: 1,
      },
      {
        trabajador_id: 1016,
        tipo_id: 1,
      },
      {
        trabajador_id: 1017,
        tipo_id: 1,
      },
      {
        trabajador_id: 1018,
        tipo_id: 1,
      },
      {
        trabajador_id: 1019,
        tipo_id: 1,
      },
      {
        trabajador_id: 1020,
        tipo_id: 1,
      },
      {
        trabajador_id: 1021,
        tipo_id: 1,
      },
      {
        trabajador_id: 1022,
        tipo_id: 1,
      },
      {
        trabajador_id: 1023,
        tipo_id: 1,
      },
      {
        trabajador_id: 1024,
        tipo_id: 1,
      },
      {
        trabajador_id: 1025,
        tipo_id: 1,
      },
      {
        trabajador_id: 1026,
        tipo_id: 1,
      },
      {
        trabajador_id: 1027,
        tipo_id: 1,
      },
      {
        trabajador_id: 1028,
        tipo_id: 1,
      },
      {
        trabajador_id: 1029,
        tipo_id: 1,
      },
      {
        trabajador_id: 1040,
        tipo_id: 1,
      },
      {
        trabajador_id: 1041,
        tipo_id: 1,
      },
      {
        trabajador_id: 1043,
        tipo_id: 1,
      },
      {
        trabajador_id: 1044,
        tipo_id: 1,
      },
      {
        trabajador_id: 1045,
        tipo_id: 1,
      },
      {
        trabajador_id: 1046,
        tipo_id: 1,
      },
      {
        trabajador_id: 1047,
        tipo_id: 1,
      },
      {
        trabajador_id: 1048,
        tipo_id: 1,
      },
      {
        trabajador_id: 1049,
        tipo_id: 1,
      },
      {
        trabajador_id: 1050,
        tipo_id: 1,
      },
      {
        trabajador_id: 1137,
        tipo_id: 1,
      },
      {
        trabajador_id: 1144,
        tipo_id: 1,
      },
      {
        trabajador_id: 1145,
        tipo_id: 1,
      },
      {
        trabajador_id: 1146,
        tipo_id: 1,
      },
      {
        trabajador_id: 1147,
        tipo_id: 1,
      },
      {
        trabajador_id: 1148,
        tipo_id: 1,
      },
      {
        trabajador_id: 1149,
        tipo_id: 1,
      },
      {
        trabajador_id: 1150,
        tipo_id: 1,
      },
      {
        trabajador_id: 1151,
        tipo_id: 1,
      },
      {
        trabajador_id: 1152,
        tipo_id: 1,
      },
      {
        trabajador_id: 1154,
        tipo_id: 1,
      },
      {
        trabajador_id: 1155,
        tipo_id: 1,
      },
      {
        trabajador_id: 1156,
        tipo_id: 1,
      },
      {
        trabajador_id: 1157,
        tipo_id: 1,
      },
      {
        trabajador_id: 1158,
        tipo_id: 1,
      },
      {
        trabajador_id: 1159,
        tipo_id: 1,
      },
      {
        trabajador_id: 1160,
        tipo_id: 1,
      },
      {
        trabajador_id: 1161,
        tipo_id: 1,
      },
      {
        trabajador_id: 1162,
        tipo_id: 1,
      },
      {
        trabajador_id: 1163,
        tipo_id: 1,
      },
      {
        trabajador_id: 1164,
        tipo_id: 1,
      },
      {
        trabajador_id: 1165,
        tipo_id: 1,
      },
      {
        trabajador_id: 1166,
        tipo_id: 1,
      },
      {
        trabajador_id: 1167,
        tipo_id: 1,
      },
      {
        trabajador_id: 1168,
        tipo_id: 1,
      },
      {
        trabajador_id: 1169,
        tipo_id: 1,
      },
      {
        trabajador_id: 1170,
        tipo_id: 1,
      },
      {
        trabajador_id: 1174,
        tipo_id: 1,
      },
      {
        trabajador_id: 1175,
        tipo_id: 1,
      },
      {
        trabajador_id: 1176,
        tipo_id: 1,
      },
      {
        trabajador_id: 1177,
        tipo_id: 1,
      },
      {
        trabajador_id: 1178,
        tipo_id: 1,
      },
      {
        trabajador_id: 1179,
        tipo_id: 1,
      },
      {
        trabajador_id: 1180,
        tipo_id: 1,
      },
      {
        trabajador_id: 1181,
        tipo_id: 1,
      },
      {
        trabajador_id: 1182,
        tipo_id: 1,
      },
      {
        trabajador_id: 1183,
        tipo_id: 1,
      },
      {
        trabajador_id: 1184,
        tipo_id: 1,
      },
      {
        trabajador_id: 1185,
        tipo_id: 1,
      },
      {
        trabajador_id: 1186,
        tipo_id: 1,
      },
      {
        trabajador_id: 1187,
        tipo_id: 1,
      },
      {
        trabajador_id: 1188,
        tipo_id: 1,
      },
      {
        trabajador_id: 1189,
        tipo_id: 1,
      },
      {
        trabajador_id: 1190,
        tipo_id: 1,
      },
      {
        trabajador_id: 1191,
        tipo_id: 1,
      },
      {
        trabajador_id: 1487,
        tipo_id: 1,
      },
      {
        trabajador_id: 1193,
        tipo_id: 1,
      },
      {
        trabajador_id: 1194,
        tipo_id: 1,
      },
      {
        trabajador_id: 1195,
        tipo_id: 1,
      },
      {
        trabajador_id: 1196,
        tipo_id: 1,
      },
      {
        trabajador_id: 1197,
        tipo_id: 1,
      },
      {
        trabajador_id: 1198,
        tipo_id: 1,
      },
      {
        trabajador_id: 1199,
        tipo_id: 1,
      },
      {
        trabajador_id: 1200,
        tipo_id: 1,
      },
      {
        trabajador_id: 1201,
        tipo_id: 1,
      },
      {
        trabajador_id: 1202,
        tipo_id: 1,
      },
      {
        trabajador_id: 1204,
        tipo_id: 1,
      },
      {
        trabajador_id: 1205,
        tipo_id: 1,
      },
      {
        trabajador_id: 1206,
        tipo_id: 1,
      },
      {
        trabajador_id: 1207,
        tipo_id: 1,
      },
      {
        trabajador_id: 1208,
        tipo_id: 1,
      },
      {
        trabajador_id: 1209,
        tipo_id: 1,
      },
      {
        trabajador_id: 1210,
        tipo_id: 1,
      },
      {
        trabajador_id: 1211,
        tipo_id: 1,
      },
      {
        trabajador_id: 1212,
        tipo_id: 1,
      },
      {
        trabajador_id: 1213,
        tipo_id: 1,
      },
      {
        trabajador_id: 1214,
        tipo_id: 1,
      },
      {
        trabajador_id: 1215,
        tipo_id: 1,
      },
      {
        trabajador_id: 1216,
        tipo_id: 1,
      },
      {
        trabajador_id: 1217,
        tipo_id: 1,
      },
      {
        trabajador_id: 1218,
        tipo_id: 1,
      },
      {
        trabajador_id: 1219,
        tipo_id: 1,
      },
      {
        trabajador_id: 1220,
        tipo_id: 1,
      },
      {
        trabajador_id: 1221,
        tipo_id: 1,
      },
      {
        trabajador_id: 1222,
        tipo_id: 1,
      },
      {
        trabajador_id: 1223,
        tipo_id: 1,
      },
      {
        trabajador_id: 1224,
        tipo_id: 1,
      },
      {
        trabajador_id: 1225,
        tipo_id: 1,
      },
      {
        trabajador_id: 1226,
        tipo_id: 1,
      },
      {
        trabajador_id: 1227,
        tipo_id: 1,
      },
      {
        trabajador_id: 1228,
        tipo_id: 1,
      },
      {
        trabajador_id: 1229,
        tipo_id: 1,
      },
      {
        trabajador_id: 1230,
        tipo_id: 1,
      },
      {
        trabajador_id: 1231,
        tipo_id: 1,
      },
      {
        trabajador_id: 1232,
        tipo_id: 1,
      },
      {
        trabajador_id: 1233,
        tipo_id: 1,
      },
      {
        trabajador_id: 1234,
        tipo_id: 1,
      },
      {
        trabajador_id: 1235,
        tipo_id: 1,
      },
      {
        trabajador_id: 1236,
        tipo_id: 1,
      },
      {
        trabajador_id: 1299,
        tipo_id: 1,
      },
      {
        trabajador_id: 1300,
        tipo_id: 1,
      },
      {
        trabajador_id: 1301,
        tipo_id: 1,
      },
      {
        trabajador_id: 1302,
        tipo_id: 1,
      },
      {
        trabajador_id: 1303,
        tipo_id: 1,
      },
      {
        trabajador_id: 1304,
        tipo_id: 1,
      },
      {
        trabajador_id: 1305,
        tipo_id: 1,
      },
      {
        trabajador_id: 1306,
        tipo_id: 1,
      },
      {
        trabajador_id: 1307,
        tipo_id: 1,
      },
      {
        trabajador_id: 1308,
        tipo_id: 1,
      },
      {
        trabajador_id: 1309,
        tipo_id: 1,
      },
      {
        trabajador_id: 1489,
        tipo_id: 1,
      },
      {
        trabajador_id: 1491,
        tipo_id: 1,
      },
      {
        trabajador_id: 1492,
        tipo_id: 1,
      },
      {
        trabajador_id: 1518,
        tipo_id: 1,
      },
      {
        trabajador_id: 1520,
        tipo_id: 1,
      },
      {
        trabajador_id: 1521,
        tipo_id: 1,
      },
      {
        trabajador_id: 1522,
        tipo_id: 1,
      },
      {
        trabajador_id: 1523,
        tipo_id: 1,
      },
      {
        trabajador_id: 1530,
        tipo_id: 1,
      },
      {
        trabajador_id: 1531,
        tipo_id: 1,
      },
      {
        trabajador_id: 1532,
        tipo_id: 1,
      },
      {
        trabajador_id: 1533,
        tipo_id: 1,
      },
      {
        trabajador_id: 1565,
        tipo_id: 1,
      },
      {
        trabajador_id: 1566,
        tipo_id: 1,
      },
      {
        trabajador_id: 1567,
        tipo_id: 1,
      },
      {
        trabajador_id: 1568,
        tipo_id: 1,
      },
      {
        trabajador_id: 1569,
        tipo_id: 1,
      },
      {
        trabajador_id: 1570,
        tipo_id: 1,
      },
      {
        trabajador_id: 1571,
        tipo_id: 1,
      },
      {
        trabajador_id: 1572,
        tipo_id: 1,
      },
      {
        trabajador_id: 1573,
        tipo_id: 1,
      },
      {
        trabajador_id: 1574,
        tipo_id: 1,
      },
      {
        trabajador_id: 1575,
        tipo_id: 1,
      },
      {
        trabajador_id: 1576,
        tipo_id: 1,
      },
      {
        trabajador_id: 1577,
        tipo_id: 1,
      },
      {
        trabajador_id: 1578,
        tipo_id: 1,
      },
      {
        trabajador_id: 1579,
        tipo_id: 1,
      },
      {
        trabajador_id: 1580,
        tipo_id: 1,
      },
      {
        trabajador_id: 1581,
        tipo_id: 1,
      },
      {
        trabajador_id: 1582,
        tipo_id: 1,
      },
      {
        trabajador_id: 1583,
        tipo_id: 1,
      },
      {
        trabajador_id: 1584,
        tipo_id: 1,
      },
      {
        trabajador_id: 1585,
        tipo_id: 1,
      },
      {
        trabajador_id: 1586,
        tipo_id: 1,
      },
      {
        trabajador_id: 1587,
        tipo_id: 1,
      },
      {
        trabajador_id: 1588,
        tipo_id: 1,
      },
      {
        trabajador_id: 1589,
        tipo_id: 1,
      },
      {
        trabajador_id: 1590,
        tipo_id: 1,
      },
      {
        trabajador_id: 1591,
        tipo_id: 1,
      },
      {
        trabajador_id: 1592,
        tipo_id: 1,
      },
      {
        trabajador_id: 1593,
        tipo_id: 1,
      },
      {
        trabajador_id: 1594,
        tipo_id: 1,
      },
      {
        trabajador_id: 1595,
        tipo_id: 1,
      },
      {
        trabajador_id: 1596,
        tipo_id: 1,
      },
      {
        trabajador_id: 1597,
        tipo_id: 1,
      },
      {
        trabajador_id: 1598,
        tipo_id: 1,
      },
      {
        trabajador_id: 1599,
        tipo_id: 1,
      },
      {
        trabajador_id: 1600,
        tipo_id: 1,
      },
      {
        trabajador_id: 1601,
        tipo_id: 1,
      },
      {
        trabajador_id: 1602,
        tipo_id: 1,
      },
      {
        trabajador_id: 1603,
        tipo_id: 1,
      },
      {
        trabajador_id: 1604,
        tipo_id: 1,
      },
      {
        trabajador_id: 1611,
        tipo_id: 1,
      },
      {
        trabajador_id: 1612,
        tipo_id: 1,
      },
      {
        trabajador_id: 1613,
        tipo_id: 1,
      },
      {
        trabajador_id: 1614,
        tipo_id: 1,
      },
      {
        trabajador_id: 1615,
        tipo_id: 1,
      },
      {
        trabajador_id: 1616,
        tipo_id: 1,
      },
      {
        trabajador_id: 1617,
        tipo_id: 1,
      },
      {
        trabajador_id: 1618,
        tipo_id: 1,
      },
      {
        trabajador_id: 1619,
        tipo_id: 1,
      },
      {
        trabajador_id: 1620,
        tipo_id: 1,
      },
      {
        trabajador_id: 1621,
        tipo_id: 1,
      },
      {
        trabajador_id: 1622,
        tipo_id: 1,
      },
      {
        trabajador_id: 1623,
        tipo_id: 1,
      },
      {
        trabajador_id: 1624,
        tipo_id: 1,
      },
      {
        trabajador_id: 1625,
        tipo_id: 1,
      },
      {
        trabajador_id: 1626,
        tipo_id: 1,
      },
    ];

    const investigacion = [
      {
        trabajador_id: 11,
        tipo_id: 3,
      },
      {
        trabajador_id: 374,
        tipo_id: 3,
      },
      {
        trabajador_id: 375,
        tipo_id: 3,
      },
      {
        trabajador_id: 376,
        tipo_id: 3,
      },
      {
        trabajador_id: 377,
        tipo_id: 3,
      },
      {
        trabajador_id: 379,
        tipo_id: 3,
      },
      {
        trabajador_id: 381,
        tipo_id: 3,
      },
      {
        trabajador_id: 382,
        tipo_id: 3,
      },
      {
        trabajador_id: 384,
        tipo_id: 3,
      },
      {
        trabajador_id: 385,
        tipo_id: 3,
      },
      {
        trabajador_id: 387,
        tipo_id: 3,
      },
      {
        trabajador_id: 388,
        tipo_id: 3,
      },
      {
        trabajador_id: 390,
        tipo_id: 3,
      },
      {
        trabajador_id: 391,
        tipo_id: 3,
      },
      {
        trabajador_id: 392,
        tipo_id: 3,
      },
      {
        trabajador_id: 394,
        tipo_id: 3,
      },
      {
        trabajador_id: 400,
        tipo_id: 3,
      },
      {
        trabajador_id: 403,
        tipo_id: 3,
      },
      {
        trabajador_id: 404,
        tipo_id: 3,
      },
      {
        trabajador_id: 405,
        tipo_id: 3,
      },
      {
        trabajador_id: 412,
        tipo_id: 3,
      },
      {
        trabajador_id: 417,
        tipo_id: 3,
      },
      {
        trabajador_id: 419,
        tipo_id: 3,
      },
      {
        trabajador_id: 420,
        tipo_id: 3,
      },
      {
        trabajador_id: 422,
        tipo_id: 3,
      },
      {
        trabajador_id: 423,
        tipo_id: 3,
      },
      {
        trabajador_id: 424,
        tipo_id: 3,
      },
      {
        trabajador_id: 425,
        tipo_id: 3,
      },
      {
        trabajador_id: 426,
        tipo_id: 3,
      },
      {
        trabajador_id: 428,
        tipo_id: 3,
      },
      {
        trabajador_id: 429,
        tipo_id: 3,
      },
      {
        trabajador_id: 431,
        tipo_id: 3,
      },
      {
        trabajador_id: 432,
        tipo_id: 3,
      },
      {
        trabajador_id: 434,
        tipo_id: 3,
      },
      {
        trabajador_id: 435,
        tipo_id: 3,
      },
      {
        trabajador_id: 437,
        tipo_id: 3,
      },
      {
        trabajador_id: 438,
        tipo_id: 3,
      },
      {
        trabajador_id: 439,
        tipo_id: 3,
      },
      {
        trabajador_id: 440,
        tipo_id: 3,
      },
      {
        trabajador_id: 441,
        tipo_id: 3,
      },
      {
        trabajador_id: 442,
        tipo_id: 3,
      },
      {
        trabajador_id: 443,
        tipo_id: 3,
      },
      {
        trabajador_id: 444,
        tipo_id: 3,
      },
      {
        trabajador_id: 445,
        tipo_id: 3,
      },
      {
        trabajador_id: 446,
        tipo_id: 3,
      },
      {
        trabajador_id: 447,
        tipo_id: 3,
      },
      {
        trabajador_id: 448,
        tipo_id: 3,
      },
      {
        trabajador_id: 449,
        tipo_id: 3,
      },
      {
        trabajador_id: 450,
        tipo_id: 3,
      },
      {
        trabajador_id: 451,
        tipo_id: 3,
      },
      {
        trabajador_id: 452,
        tipo_id: 3,
      },
      {
        trabajador_id: 453,
        tipo_id: 3,
      },
      {
        trabajador_id: 454,
        tipo_id: 3,
      },
      {
        trabajador_id: 455,
        tipo_id: 3,
      },
      {
        trabajador_id: 457,
        tipo_id: 3,
      },
      {
        trabajador_id: 459,
        tipo_id: 3,
      },
      {
        trabajador_id: 460,
        tipo_id: 3,
      },
      {
        trabajador_id: 461,
        tipo_id: 3,
      },
      {
        trabajador_id: 462,
        tipo_id: 3,
      },
      {
        trabajador_id: 463,
        tipo_id: 3,
      },
      {
        trabajador_id: 464,
        tipo_id: 3,
      },
      {
        trabajador_id: 465,
        tipo_id: 3,
      },
      {
        trabajador_id: 466,
        tipo_id: 3,
      },
      {
        trabajador_id: 467,
        tipo_id: 3,
      },
      {
        trabajador_id: 468,
        tipo_id: 3,
      },
      {
        trabajador_id: 470,
        tipo_id: 3,
      },
      {
        trabajador_id: 475,
        tipo_id: 3,
      },
      {
        trabajador_id: 477,
        tipo_id: 3,
      },
      {
        trabajador_id: 478,
        tipo_id: 3,
      },
      {
        trabajador_id: 479,
        tipo_id: 3,
      },
      {
        trabajador_id: 480,
        tipo_id: 3,
      },
      {
        trabajador_id: 482,
        tipo_id: 3,
      },
      {
        trabajador_id: 487,
        tipo_id: 3,
      },
      {
        trabajador_id: 490,
        tipo_id: 3,
      },
      {
        trabajador_id: 493,
        tipo_id: 3,
      },
      {
        trabajador_id: 494,
        tipo_id: 3,
      },
      {
        trabajador_id: 495,
        tipo_id: 3,
      },
      {
        trabajador_id: 496,
        tipo_id: 3,
      },
      {
        trabajador_id: 497,
        tipo_id: 3,
      },
      {
        trabajador_id: 498,
        tipo_id: 3,
      },
      {
        trabajador_id: 499,
        tipo_id: 3,
      },
      {
        trabajador_id: 500,
        tipo_id: 3,
      },
      {
        trabajador_id: 501,
        tipo_id: 3,
      },
      {
        trabajador_id: 504,
        tipo_id: 3,
      },
      {
        trabajador_id: 505,
        tipo_id: 3,
      },
      {
        trabajador_id: 506,
        tipo_id: 3,
      },
      {
        trabajador_id: 508,
        tipo_id: 3,
      },
      {
        trabajador_id: 509,
        tipo_id: 3,
      },
      {
        trabajador_id: 513,
        tipo_id: 3,
      },
      {
        trabajador_id: 515,
        tipo_id: 3,
      },
      {
        trabajador_id: 519,
        tipo_id: 3,
      },
      {
        trabajador_id: 520,
        tipo_id: 3,
      },
      {
        trabajador_id: 521,
        tipo_id: 3,
      },
      {
        trabajador_id: 522,
        tipo_id: 3,
      },
      {
        trabajador_id: 524,
        tipo_id: 3,
      },
      {
        trabajador_id: 525,
        tipo_id: 3,
      },
      {
        trabajador_id: 526,
        tipo_id: 3,
      },
      {
        trabajador_id: 527,
        tipo_id: 3,
      },
      {
        trabajador_id: 528,
        tipo_id: 3,
      },
      {
        trabajador_id: 529,
        tipo_id: 3,
      },
      {
        trabajador_id: 530,
        tipo_id: 3,
      },
      {
        trabajador_id: 531,
        tipo_id: 3,
      },
      {
        trabajador_id: 534,
        tipo_id: 3,
      },
      {
        trabajador_id: 535,
        tipo_id: 3,
      },
      {
        trabajador_id: 536,
        tipo_id: 3,
      },
      {
        trabajador_id: 537,
        tipo_id: 3,
      },
      {
        trabajador_id: 538,
        tipo_id: 3,
      },
      {
        trabajador_id: 541,
        tipo_id: 3,
      },
      {
        trabajador_id: 542,
        tipo_id: 3,
      },
      {
        trabajador_id: 545,
        tipo_id: 3,
      },
      {
        trabajador_id: 546,
        tipo_id: 3,
      },
      {
        trabajador_id: 547,
        tipo_id: 3,
      },
      {
        trabajador_id: 548,
        tipo_id: 3,
      },
      {
        trabajador_id: 549,
        tipo_id: 3,
      },
      {
        trabajador_id: 551,
        tipo_id: 3,
      },
      {
        trabajador_id: 553,
        tipo_id: 3,
      },
      {
        trabajador_id: 554,
        tipo_id: 3,
      },
      {
        trabajador_id: 556,
        tipo_id: 3,
      },
      {
        trabajador_id: 557,
        tipo_id: 3,
      },
      {
        trabajador_id: 558,
        tipo_id: 3,
      },
      {
        trabajador_id: 560,
        tipo_id: 3,
      },
      {
        trabajador_id: 561,
        tipo_id: 3,
      },
      {
        trabajador_id: 562,
        tipo_id: 3,
      },
      {
        trabajador_id: 563,
        tipo_id: 3,
      },
      {
        trabajador_id: 564,
        tipo_id: 3,
      },
      {
        trabajador_id: 565,
        tipo_id: 3,
      },
      {
        trabajador_id: 566,
        tipo_id: 3,
      },
      {
        trabajador_id: 567,
        tipo_id: 3,
      },
      {
        trabajador_id: 568,
        tipo_id: 3,
      },
      {
        trabajador_id: 569,
        tipo_id: 3,
      },
      {
        trabajador_id: 570,
        tipo_id: 3,
      },
      {
        trabajador_id: 571,
        tipo_id: 3,
      },
      {
        trabajador_id: 575,
        tipo_id: 3,
      },
      {
        trabajador_id: 577,
        tipo_id: 3,
      },
      {
        trabajador_id: 578,
        tipo_id: 3,
      },
      {
        trabajador_id: 579,
        tipo_id: 3,
      },
      {
        trabajador_id: 580,
        tipo_id: 3,
      },
      {
        trabajador_id: 581,
        tipo_id: 3,
      },
      {
        trabajador_id: 585,
        tipo_id: 3,
      },
      {
        trabajador_id: 586,
        tipo_id: 3,
      },
      {
        trabajador_id: 587,
        tipo_id: 3,
      },
      {
        trabajador_id: 588,
        tipo_id: 3,
      },
      {
        trabajador_id: 589,
        tipo_id: 3,
      },
      {
        trabajador_id: 591,
        tipo_id: 3,
      },
      {
        trabajador_id: 592,
        tipo_id: 3,
      },
      {
        trabajador_id: 593,
        tipo_id: 3,
      },
      {
        trabajador_id: 595,
        tipo_id: 3,
      },
      {
        trabajador_id: 596,
        tipo_id: 3,
      },
      {
        trabajador_id: 597,
        tipo_id: 3,
      },
      {
        trabajador_id: 599,
        tipo_id: 3,
      },
      {
        trabajador_id: 600,
        tipo_id: 3,
      },
      {
        trabajador_id: 601,
        tipo_id: 3,
      },
      {
        trabajador_id: 602,
        tipo_id: 3,
      },
      {
        trabajador_id: 603,
        tipo_id: 3,
      },
      {
        trabajador_id: 610,
        tipo_id: 3,
      },
      {
        trabajador_id: 613,
        tipo_id: 3,
      },
      {
        trabajador_id: 617,
        tipo_id: 3,
      },
      {
        trabajador_id: 619,
        tipo_id: 3,
      },
      {
        trabajador_id: 620,
        tipo_id: 3,
      },
      {
        trabajador_id: 621,
        tipo_id: 3,
      },
      {
        trabajador_id: 623,
        tipo_id: 3,
      },
      {
        trabajador_id: 624,
        tipo_id: 3,
      },
      {
        trabajador_id: 627,
        tipo_id: 3,
      },
      {
        trabajador_id: 631,
        tipo_id: 3,
      },
      {
        trabajador_id: 632,
        tipo_id: 3,
      },
      {
        trabajador_id: 635,
        tipo_id: 3,
      },
      {
        trabajador_id: 636,
        tipo_id: 3,
      },
      {
        trabajador_id: 638,
        tipo_id: 3,
      },
      {
        trabajador_id: 639,
        tipo_id: 3,
      },
      {
        trabajador_id: 640,
        tipo_id: 3,
      },
      {
        trabajador_id: 641,
        tipo_id: 3,
      },
      {
        trabajador_id: 643,
        tipo_id: 3,
      },
      {
        trabajador_id: 644,
        tipo_id: 3,
      },
      {
        trabajador_id: 645,
        tipo_id: 3,
      },
      {
        trabajador_id: 648,
        tipo_id: 3,
      },
      {
        trabajador_id: 649,
        tipo_id: 3,
      },
      {
        trabajador_id: 651,
        tipo_id: 3,
      },
      {
        trabajador_id: 653,
        tipo_id: 3,
      },
      {
        trabajador_id: 654,
        tipo_id: 3,
      },
      {
        trabajador_id: 655,
        tipo_id: 3,
      },
      {
        trabajador_id: 656,
        tipo_id: 3,
      },
      {
        trabajador_id: 657,
        tipo_id: 3,
      },
      {
        trabajador_id: 659,
        tipo_id: 3,
      },
      {
        trabajador_id: 662,
        tipo_id: 3,
      },
      {
        trabajador_id: 663,
        tipo_id: 3,
      },
      {
        trabajador_id: 667,
        tipo_id: 3,
      },
      {
        trabajador_id: 668,
        tipo_id: 3,
      },
      {
        trabajador_id: 670,
        tipo_id: 3,
      },
      {
        trabajador_id: 671,
        tipo_id: 3,
      },
      {
        trabajador_id: 672,
        tipo_id: 3,
      },
      {
        trabajador_id: 674,
        tipo_id: 3,
      },
      {
        trabajador_id: 676,
        tipo_id: 3,
      },
      {
        trabajador_id: 680,
        tipo_id: 3,
      },
      {
        trabajador_id: 681,
        tipo_id: 3,
      },
      {
        trabajador_id: 683,
        tipo_id: 3,
      },
      {
        trabajador_id: 688,
        tipo_id: 3,
      },
      {
        trabajador_id: 689,
        tipo_id: 3,
      },
      {
        trabajador_id: 691,
        tipo_id: 3,
      },
      {
        trabajador_id: 692,
        tipo_id: 3,
      },
      {
        trabajador_id: 693,
        tipo_id: 3,
      },
      {
        trabajador_id: 696,
        tipo_id: 3,
      },
      {
        trabajador_id: 698,
        tipo_id: 3,
      },
      {
        trabajador_id: 700,
        tipo_id: 3,
      },
      {
        trabajador_id: 702,
        tipo_id: 3,
      },
      {
        trabajador_id: 703,
        tipo_id: 3,
      },
      {
        trabajador_id: 704,
        tipo_id: 3,
      },
      {
        trabajador_id: 705,
        tipo_id: 3,
      },
      {
        trabajador_id: 706,
        tipo_id: 3,
      },
      {
        trabajador_id: 707,
        tipo_id: 3,
      },
      {
        trabajador_id: 708,
        tipo_id: 3,
      },
      {
        trabajador_id: 710,
        tipo_id: 3,
      },
      {
        trabajador_id: 714,
        tipo_id: 3,
      },
      {
        trabajador_id: 715,
        tipo_id: 3,
      },
      {
        trabajador_id: 716,
        tipo_id: 3,
      },
      {
        trabajador_id: 717,
        tipo_id: 3,
      },
      {
        trabajador_id: 719,
        tipo_id: 3,
      },
      {
        trabajador_id: 720,
        tipo_id: 3,
      },
      {
        trabajador_id: 721,
        tipo_id: 3,
      },
      {
        trabajador_id: 722,
        tipo_id: 3,
      },
      {
        trabajador_id: 723,
        tipo_id: 3,
      },
      {
        trabajador_id: 724,
        tipo_id: 3,
      },
      {
        trabajador_id: 727,
        tipo_id: 3,
      },
      {
        trabajador_id: 728,
        tipo_id: 3,
      },
      {
        trabajador_id: 730,
        tipo_id: 3,
      },
      {
        trabajador_id: 731,
        tipo_id: 3,
      },
      {
        trabajador_id: 733,
        tipo_id: 3,
      },
      {
        trabajador_id: 734,
        tipo_id: 3,
      },
      {
        trabajador_id: 735,
        tipo_id: 3,
      },
      {
        trabajador_id: 736,
        tipo_id: 3,
      },
      {
        trabajador_id: 737,
        tipo_id: 3,
      },
      {
        trabajador_id: 738,
        tipo_id: 3,
      },
      {
        trabajador_id: 739,
        tipo_id: 3,
      },
      {
        trabajador_id: 740,
        tipo_id: 3,
      },
      {
        trabajador_id: 742,
        tipo_id: 3,
      },
      {
        trabajador_id: 743,
        tipo_id: 3,
      },
      {
        trabajador_id: 744,
        tipo_id: 3,
      },
      {
        trabajador_id: 746,
        tipo_id: 3,
      },
      {
        trabajador_id: 748,
        tipo_id: 3,
      },
      {
        trabajador_id: 749,
        tipo_id: 3,
      },
      {
        trabajador_id: 750,
        tipo_id: 3,
      },
      {
        trabajador_id: 751,
        tipo_id: 3,
      },
      {
        trabajador_id: 752,
        tipo_id: 3,
      },
      {
        trabajador_id: 753,
        tipo_id: 3,
      },
      {
        trabajador_id: 754,
        tipo_id: 3,
      },
      {
        trabajador_id: 755,
        tipo_id: 3,
      },
      {
        trabajador_id: 757,
        tipo_id: 3,
      },
      {
        trabajador_id: 760,
        tipo_id: 3,
      },
      {
        trabajador_id: 762,
        tipo_id: 3,
      },
      {
        trabajador_id: 763,
        tipo_id: 3,
      },
      {
        trabajador_id: 764,
        tipo_id: 3,
      },
      {
        trabajador_id: 768,
        tipo_id: 3,
      },
      {
        trabajador_id: 770,
        tipo_id: 3,
      },
      {
        trabajador_id: 772,
        tipo_id: 3,
      },
      {
        trabajador_id: 773,
        tipo_id: 3,
      },
      {
        trabajador_id: 774,
        tipo_id: 3,
      },
      {
        trabajador_id: 775,
        tipo_id: 3,
      },
      {
        trabajador_id: 777,
        tipo_id: 3,
      },
      {
        trabajador_id: 779,
        tipo_id: 3,
      },
      {
        trabajador_id: 781,
        tipo_id: 3,
      },
      {
        trabajador_id: 783,
        tipo_id: 3,
      },
      {
        trabajador_id: 784,
        tipo_id: 3,
      },
      {
        trabajador_id: 786,
        tipo_id: 3,
      },
      {
        trabajador_id: 787,
        tipo_id: 3,
      },
      {
        trabajador_id: 788,
        tipo_id: 3,
      },
      {
        trabajador_id: 791,
        tipo_id: 3,
      },
      {
        trabajador_id: 792,
        tipo_id: 3,
      },
      {
        trabajador_id: 796,
        tipo_id: 3,
      },
      {
        trabajador_id: 799,
        tipo_id: 3,
      },
      {
        trabajador_id: 800,
        tipo_id: 3,
      },
      {
        trabajador_id: 802,
        tipo_id: 3,
      },
      {
        trabajador_id: 803,
        tipo_id: 3,
      },
      {
        trabajador_id: 804,
        tipo_id: 3,
      },
      {
        trabajador_id: 805,
        tipo_id: 3,
      },
      {
        trabajador_id: 810,
        tipo_id: 3,
      },
      {
        trabajador_id: 814,
        tipo_id: 3,
      },
      {
        trabajador_id: 815,
        tipo_id: 3,
      },
      {
        trabajador_id: 816,
        tipo_id: 3,
      },
      {
        trabajador_id: 817,
        tipo_id: 3,
      },
      {
        trabajador_id: 819,
        tipo_id: 3,
      },
      {
        trabajador_id: 821,
        tipo_id: 3,
      },
      {
        trabajador_id: 822,
        tipo_id: 3,
      },
      {
        trabajador_id: 823,
        tipo_id: 3,
      },
      {
        trabajador_id: 824,
        tipo_id: 3,
      },
      {
        trabajador_id: 826,
        tipo_id: 3,
      },
      {
        trabajador_id: 827,
        tipo_id: 3,
      },
      {
        trabajador_id: 829,
        tipo_id: 3,
      },
      {
        trabajador_id: 830,
        tipo_id: 3,
      },
      {
        trabajador_id: 832,
        tipo_id: 3,
      },
      {
        trabajador_id: 833,
        tipo_id: 3,
      },
      {
        trabajador_id: 834,
        tipo_id: 3,
      },
      {
        trabajador_id: 836,
        tipo_id: 3,
      },
      {
        trabajador_id: 837,
        tipo_id: 3,
      },
      {
        trabajador_id: 838,
        tipo_id: 3,
      },
      {
        trabajador_id: 840,
        tipo_id: 3,
      },
      {
        trabajador_id: 841,
        tipo_id: 3,
      },
      {
        trabajador_id: 842,
        tipo_id: 3,
      },
      {
        trabajador_id: 844,
        tipo_id: 3,
      },
      {
        trabajador_id: 845,
        tipo_id: 3,
      },
      {
        trabajador_id: 846,
        tipo_id: 3,
      },
      {
        trabajador_id: 847,
        tipo_id: 3,
      },
      {
        trabajador_id: 848,
        tipo_id: 3,
      },
      {
        trabajador_id: 849,
        tipo_id: 3,
      },
      {
        trabajador_id: 850,
        tipo_id: 3,
      },
      {
        trabajador_id: 851,
        tipo_id: 3,
      },
      {
        trabajador_id: 852,
        tipo_id: 3,
      },
      {
        trabajador_id: 853,
        tipo_id: 3,
      },
      {
        trabajador_id: 854,
        tipo_id: 3,
      },
      {
        trabajador_id: 855,
        tipo_id: 3,
      },
      {
        trabajador_id: 856,
        tipo_id: 3,
      },
      {
        trabajador_id: 857,
        tipo_id: 3,
      },
      {
        trabajador_id: 858,
        tipo_id: 3,
      },
      {
        trabajador_id: 859,
        tipo_id: 3,
      },
      {
        trabajador_id: 860,
        tipo_id: 3,
      },
      {
        trabajador_id: 861,
        tipo_id: 3,
      },
      {
        trabajador_id: 863,
        tipo_id: 3,
      },
      {
        trabajador_id: 864,
        tipo_id: 3,
      },
      {
        trabajador_id: 865,
        tipo_id: 3,
      },
      {
        trabajador_id: 866,
        tipo_id: 3,
      },
      {
        trabajador_id: 867,
        tipo_id: 3,
      },
      {
        trabajador_id: 869,
        tipo_id: 3,
      },
      {
        trabajador_id: 870,
        tipo_id: 3,
      },
      {
        trabajador_id: 871,
        tipo_id: 3,
      },
      {
        trabajador_id: 872,
        tipo_id: 3,
      },
      {
        trabajador_id: 873,
        tipo_id: 3,
      },
      {
        trabajador_id: 874,
        tipo_id: 3,
      },
      {
        trabajador_id: 875,
        tipo_id: 3,
      },
      {
        trabajador_id: 876,
        tipo_id: 3,
      },
      {
        trabajador_id: 877,
        tipo_id: 3,
      },
      {
        trabajador_id: 878,
        tipo_id: 3,
      },
      {
        trabajador_id: 879,
        tipo_id: 3,
      },
      {
        trabajador_id: 880,
        tipo_id: 3,
      },
      {
        trabajador_id: 881,
        tipo_id: 3,
      },
      {
        trabajador_id: 882,
        tipo_id: 3,
      },
      {
        trabajador_id: 884,
        tipo_id: 3,
      },
      {
        trabajador_id: 885,
        tipo_id: 3,
      },
      {
        trabajador_id: 886,
        tipo_id: 3,
      },
      {
        trabajador_id: 887,
        tipo_id: 3,
      },
      {
        trabajador_id: 888,
        tipo_id: 3,
      },
      {
        trabajador_id: 889,
        tipo_id: 3,
      },
      {
        trabajador_id: 890,
        tipo_id: 3,
      },
      {
        trabajador_id: 891,
        tipo_id: 3,
      },
      {
        trabajador_id: 892,
        tipo_id: 3,
      },
      {
        trabajador_id: 893,
        tipo_id: 3,
      },
      {
        trabajador_id: 894,
        tipo_id: 3,
      },
      {
        trabajador_id: 895,
        tipo_id: 3,
      },
      {
        trabajador_id: 896,
        tipo_id: 3,
      },
      {
        trabajador_id: 897,
        tipo_id: 3,
      },
      {
        trabajador_id: 898,
        tipo_id: 3,
      },
      {
        trabajador_id: 899,
        tipo_id: 3,
      },
      {
        trabajador_id: 900,
        tipo_id: 3,
      },
      {
        trabajador_id: 901,
        tipo_id: 3,
      },
      {
        trabajador_id: 902,
        tipo_id: 3,
      },
      {
        trabajador_id: 903,
        tipo_id: 3,
      },
      {
        trabajador_id: 904,
        tipo_id: 3,
      },
      {
        trabajador_id: 905,
        tipo_id: 3,
      },
      {
        trabajador_id: 907,
        tipo_id: 3,
      },
      {
        trabajador_id: 910,
        tipo_id: 3,
      },
      {
        trabajador_id: 911,
        tipo_id: 3,
      },
      {
        trabajador_id: 912,
        tipo_id: 3,
      },
      {
        trabajador_id: 913,
        tipo_id: 3,
      },
      {
        trabajador_id: 915,
        tipo_id: 3,
      },
      {
        trabajador_id: 916,
        tipo_id: 3,
      },
      {
        trabajador_id: 917,
        tipo_id: 3,
      },
      {
        trabajador_id: 918,
        tipo_id: 3,
      },
      {
        trabajador_id: 919,
        tipo_id: 3,
      },
      {
        trabajador_id: 920,
        tipo_id: 3,
      },
      {
        trabajador_id: 921,
        tipo_id: 3,
      },
      {
        trabajador_id: 922,
        tipo_id: 3,
      },
      {
        trabajador_id: 923,
        tipo_id: 3,
      },
      {
        trabajador_id: 924,
        tipo_id: 3,
      },
      {
        trabajador_id: 925,
        tipo_id: 3,
      },
      {
        trabajador_id: 926,
        tipo_id: 3,
      },
      {
        trabajador_id: 927,
        tipo_id: 3,
      },
      {
        trabajador_id: 928,
        tipo_id: 3,
      },
      {
        trabajador_id: 929,
        tipo_id: 3,
      },
      {
        trabajador_id: 930,
        tipo_id: 3,
      },
      {
        trabajador_id: 931,
        tipo_id: 3,
      },
      {
        trabajador_id: 1030,
        tipo_id: 3,
      },
      {
        trabajador_id: 1031,
        tipo_id: 3,
      },
      {
        trabajador_id: 1032,
        tipo_id: 3,
      },
      {
        trabajador_id: 1033,
        tipo_id: 3,
      },
      {
        trabajador_id: 1034,
        tipo_id: 3,
      },
      {
        trabajador_id: 1035,
        tipo_id: 3,
      },
      {
        trabajador_id: 1036,
        tipo_id: 3,
      },
      {
        trabajador_id: 1037,
        tipo_id: 3,
      },
      {
        trabajador_id: 1038,
        tipo_id: 3,
      },
      {
        trabajador_id: 1039,
        tipo_id: 3,
      },
      {
        trabajador_id: 1042,
        tipo_id: 3,
      },
      {
        trabajador_id: 1051,
        tipo_id: 3,
      },
      {
        trabajador_id: 1052,
        tipo_id: 3,
      },
      {
        trabajador_id: 1053,
        tipo_id: 3,
      },
      {
        trabajador_id: 1054,
        tipo_id: 3,
      },
      {
        trabajador_id: 1055,
        tipo_id: 3,
      },
      {
        trabajador_id: 1056,
        tipo_id: 3,
      },
      {
        trabajador_id: 1057,
        tipo_id: 3,
      },
      {
        trabajador_id: 1058,
        tipo_id: 3,
      },
      {
        trabajador_id: 1060,
        tipo_id: 3,
      },
      {
        trabajador_id: 1061,
        tipo_id: 3,
      },
      {
        trabajador_id: 1062,
        tipo_id: 3,
      },
      {
        trabajador_id: 1063,
        tipo_id: 3,
      },
      {
        trabajador_id: 1064,
        tipo_id: 3,
      },
      {
        trabajador_id: 1065,
        tipo_id: 3,
      },
      {
        trabajador_id: 1066,
        tipo_id: 3,
      },
      {
        trabajador_id: 1067,
        tipo_id: 3,
      },
      {
        trabajador_id: 1069,
        tipo_id: 3,
      },
      {
        trabajador_id: 1070,
        tipo_id: 3,
      },
      {
        trabajador_id: 1071,
        tipo_id: 3,
      },
      {
        trabajador_id: 1072,
        tipo_id: 3,
      },
      {
        trabajador_id: 1073,
        tipo_id: 3,
      },
      {
        trabajador_id: 1074,
        tipo_id: 3,
      },
      {
        trabajador_id: 1075,
        tipo_id: 3,
      },
      {
        trabajador_id: 1076,
        tipo_id: 3,
      },
      {
        trabajador_id: 1077,
        tipo_id: 3,
      },
      {
        trabajador_id: 1078,
        tipo_id: 3,
      },
      {
        trabajador_id: 1079,
        tipo_id: 3,
      },
      {
        trabajador_id: 1080,
        tipo_id: 3,
      },
      {
        trabajador_id: 1081,
        tipo_id: 3,
      },
      {
        trabajador_id: 1082,
        tipo_id: 3,
      },
      {
        trabajador_id: 1083,
        tipo_id: 3,
      },
      {
        trabajador_id: 1084,
        tipo_id: 3,
      },
      {
        trabajador_id: 1085,
        tipo_id: 3,
      },
      {
        trabajador_id: 1086,
        tipo_id: 3,
      },
      {
        trabajador_id: 1087,
        tipo_id: 3,
      },
      {
        trabajador_id: 1088,
        tipo_id: 3,
      },
      {
        trabajador_id: 1089,
        tipo_id: 3,
      },
      {
        trabajador_id: 1090,
        tipo_id: 3,
      },
      {
        trabajador_id: 1091,
        tipo_id: 3,
      },
      {
        trabajador_id: 1092,
        tipo_id: 3,
      },
      {
        trabajador_id: 1093,
        tipo_id: 3,
      },
      {
        trabajador_id: 1094,
        tipo_id: 3,
      },
      {
        trabajador_id: 1095,
        tipo_id: 3,
      },
      {
        trabajador_id: 1096,
        tipo_id: 3,
      },
      {
        trabajador_id: 1097,
        tipo_id: 3,
      },
      {
        trabajador_id: 1098,
        tipo_id: 3,
      },
      {
        trabajador_id: 1099,
        tipo_id: 3,
      },
      {
        trabajador_id: 1100,
        tipo_id: 3,
      },
      {
        trabajador_id: 1101,
        tipo_id: 3,
      },
      {
        trabajador_id: 1102,
        tipo_id: 3,
      },
      {
        trabajador_id: 1103,
        tipo_id: 3,
      },
      {
        trabajador_id: 1104,
        tipo_id: 3,
      },
      {
        trabajador_id: 1105,
        tipo_id: 3,
      },
      {
        trabajador_id: 1106,
        tipo_id: 3,
      },
      {
        trabajador_id: 1107,
        tipo_id: 3,
      },
      {
        trabajador_id: 1108,
        tipo_id: 3,
      },
      {
        trabajador_id: 1109,
        tipo_id: 3,
      },
      {
        trabajador_id: 1110,
        tipo_id: 3,
      },
      {
        trabajador_id: 1111,
        tipo_id: 3,
      },
      {
        trabajador_id: 1112,
        tipo_id: 3,
      },
      {
        trabajador_id: 1113,
        tipo_id: 3,
      },
      {
        trabajador_id: 1114,
        tipo_id: 3,
      },
      {
        trabajador_id: 1115,
        tipo_id: 3,
      },
      {
        trabajador_id: 1116,
        tipo_id: 3,
      },
      {
        trabajador_id: 1117,
        tipo_id: 3,
      },
      {
        trabajador_id: 1118,
        tipo_id: 3,
      },
      {
        trabajador_id: 1119,
        tipo_id: 3,
      },
      {
        trabajador_id: 1120,
        tipo_id: 3,
      },
      {
        trabajador_id: 1121,
        tipo_id: 3,
      },
      {
        trabajador_id: 1123,
        tipo_id: 3,
      },
      {
        trabajador_id: 1124,
        tipo_id: 3,
      },
      {
        trabajador_id: 1125,
        tipo_id: 3,
      },
      {
        trabajador_id: 1126,
        tipo_id: 3,
      },
      {
        trabajador_id: 1127,
        tipo_id: 3,
      },
      {
        trabajador_id: 1128,
        tipo_id: 3,
      },
      {
        trabajador_id: 1129,
        tipo_id: 3,
      },
      {
        trabajador_id: 1130,
        tipo_id: 3,
      },
      {
        trabajador_id: 1131,
        tipo_id: 3,
      },
      {
        trabajador_id: 1132,
        tipo_id: 3,
      },
      {
        trabajador_id: 1133,
        tipo_id: 3,
      },
      {
        trabajador_id: 1134,
        tipo_id: 3,
      },
      {
        trabajador_id: 1135,
        tipo_id: 3,
      },
      {
        trabajador_id: 1136,
        tipo_id: 3,
      },
      {
        trabajador_id: 1138,
        tipo_id: 3,
      },
      {
        trabajador_id: 1139,
        tipo_id: 3,
      },
      {
        trabajador_id: 1140,
        tipo_id: 3,
      },
      {
        trabajador_id: 1141,
        tipo_id: 3,
      },
      {
        trabajador_id: 1142,
        tipo_id: 3,
      },
      {
        trabajador_id: 1171,
        tipo_id: 3,
      },
      {
        trabajador_id: 1172,
        tipo_id: 3,
      },
      {
        trabajador_id: 1173,
        tipo_id: 3,
      },
      {
        trabajador_id: 1203,
        tipo_id: 3,
      },
      {
        trabajador_id: 1237,
        tipo_id: 3,
      },
      {
        trabajador_id: 1238,
        tipo_id: 3,
      },
      {
        trabajador_id: 1239,
        tipo_id: 3,
      },
      {
        trabajador_id: 1240,
        tipo_id: 3,
      },
      {
        trabajador_id: 1241,
        tipo_id: 3,
      },
      {
        trabajador_id: 1242,
        tipo_id: 3,
      },
      {
        trabajador_id: 1243,
        tipo_id: 3,
      },
      {
        trabajador_id: 1244,
        tipo_id: 3,
      },
      {
        trabajador_id: 1245,
        tipo_id: 3,
      },
      {
        trabajador_id: 1246,
        tipo_id: 3,
      },
      {
        trabajador_id: 1247,
        tipo_id: 3,
      },
      {
        trabajador_id: 1248,
        tipo_id: 3,
      },
      {
        trabajador_id: 1249,
        tipo_id: 3,
      },
      {
        trabajador_id: 1250,
        tipo_id: 3,
      },
      {
        trabajador_id: 1251,
        tipo_id: 3,
      },
      {
        trabajador_id: 1252,
        tipo_id: 3,
      },
      {
        trabajador_id: 1253,
        tipo_id: 3,
      },
      {
        trabajador_id: 1254,
        tipo_id: 3,
      },
      {
        trabajador_id: 1255,
        tipo_id: 3,
      },
      {
        trabajador_id: 1256,
        tipo_id: 3,
      },
      {
        trabajador_id: 1257,
        tipo_id: 3,
      },
      {
        trabajador_id: 1258,
        tipo_id: 3,
      },
      {
        trabajador_id: 1259,
        tipo_id: 3,
      },
      {
        trabajador_id: 1260,
        tipo_id: 3,
      },
      {
        trabajador_id: 1261,
        tipo_id: 3,
      },
      {
        trabajador_id: 1262,
        tipo_id: 3,
      },
      {
        trabajador_id: 1263,
        tipo_id: 3,
      },
      {
        trabajador_id: 1264,
        tipo_id: 3,
      },
      {
        trabajador_id: 1265,
        tipo_id: 3,
      },
      {
        trabajador_id: 1266,
        tipo_id: 3,
      },
      {
        trabajador_id: 1267,
        tipo_id: 3,
      },
      {
        trabajador_id: 1268,
        tipo_id: 3,
      },
      {
        trabajador_id: 1269,
        tipo_id: 3,
      },
      {
        trabajador_id: 1270,
        tipo_id: 3,
      },
      {
        trabajador_id: 1273,
        tipo_id: 3,
      },
      {
        trabajador_id: 1274,
        tipo_id: 3,
      },
      {
        trabajador_id: 1275,
        tipo_id: 3,
      },
      {
        trabajador_id: 1276,
        tipo_id: 3,
      },
      {
        trabajador_id: 1277,
        tipo_id: 3,
      },
      {
        trabajador_id: 1278,
        tipo_id: 3,
      },
      {
        trabajador_id: 1279,
        tipo_id: 3,
      },
      {
        trabajador_id: 1280,
        tipo_id: 3,
      },
      {
        trabajador_id: 1281,
        tipo_id: 3,
      },
      {
        trabajador_id: 1282,
        tipo_id: 3,
      },
      {
        trabajador_id: 1283,
        tipo_id: 3,
      },
      {
        trabajador_id: 1284,
        tipo_id: 3,
      },
      {
        trabajador_id: 1285,
        tipo_id: 3,
      },
      {
        trabajador_id: 1286,
        tipo_id: 3,
      },
      {
        trabajador_id: 1287,
        tipo_id: 3,
      },
      {
        trabajador_id: 1288,
        tipo_id: 3,
      },
      {
        trabajador_id: 1289,
        tipo_id: 3,
      },
      {
        trabajador_id: 1290,
        tipo_id: 3,
      },
      {
        trabajador_id: 1291,
        tipo_id: 3,
      },
      {
        trabajador_id: 1292,
        tipo_id: 3,
      },
      {
        trabajador_id: 1293,
        tipo_id: 3,
      },
      {
        trabajador_id: 1294,
        tipo_id: 3,
      },
      {
        trabajador_id: 1295,
        tipo_id: 3,
      },
      {
        trabajador_id: 1296,
        tipo_id: 3,
      },
      {
        trabajador_id: 1297,
        tipo_id: 3,
      },
      {
        trabajador_id: 1298,
        tipo_id: 3,
      },
      {
        trabajador_id: 1310,
        tipo_id: 3,
      },
      {
        trabajador_id: 1311,
        tipo_id: 3,
      },
      {
        trabajador_id: 1312,
        tipo_id: 3,
      },
      {
        trabajador_id: 1313,
        tipo_id: 3,
      },
      {
        trabajador_id: 1314,
        tipo_id: 3,
      },
      {
        trabajador_id: 1315,
        tipo_id: 3,
      },
      {
        trabajador_id: 1317,
        tipo_id: 3,
      },
      {
        trabajador_id: 1318,
        tipo_id: 3,
      },
      {
        trabajador_id: 1319,
        tipo_id: 3,
      },
      {
        trabajador_id: 1320,
        tipo_id: 3,
      },
      {
        trabajador_id: 1321,
        tipo_id: 3,
      },
      {
        trabajador_id: 1322,
        tipo_id: 3,
      },
      {
        trabajador_id: 1323,
        tipo_id: 3,
      },
      {
        trabajador_id: 1324,
        tipo_id: 3,
      },
      {
        trabajador_id: 1325,
        tipo_id: 3,
      },
      {
        trabajador_id: 1326,
        tipo_id: 3,
      },
      {
        trabajador_id: 1327,
        tipo_id: 3,
      },
      {
        trabajador_id: 1328,
        tipo_id: 3,
      },
      {
        trabajador_id: 1329,
        tipo_id: 3,
      },
      {
        trabajador_id: 1330,
        tipo_id: 3,
      },
      {
        trabajador_id: 1331,
        tipo_id: 3,
      },
      {
        trabajador_id: 1332,
        tipo_id: 3,
      },
      {
        trabajador_id: 1333,
        tipo_id: 3,
      },
      {
        trabajador_id: 1334,
        tipo_id: 3,
      },
      {
        trabajador_id: 1335,
        tipo_id: 3,
      },
      {
        trabajador_id: 1336,
        tipo_id: 3,
      },
      {
        trabajador_id: 1337,
        tipo_id: 3,
      },
      {
        trabajador_id: 1339,
        tipo_id: 3,
      },
      {
        trabajador_id: 1340,
        tipo_id: 3,
      },
      {
        trabajador_id: 1341,
        tipo_id: 3,
      },
      {
        trabajador_id: 1342,
        tipo_id: 3,
      },
      {
        trabajador_id: 1343,
        tipo_id: 3,
      },
      {
        trabajador_id: 1344,
        tipo_id: 3,
      },
      {
        trabajador_id: 1345,
        tipo_id: 3,
      },
      {
        trabajador_id: 1346,
        tipo_id: 3,
      },
      {
        trabajador_id: 1347,
        tipo_id: 3,
      },
      {
        trabajador_id: 1348,
        tipo_id: 3,
      },
      {
        trabajador_id: 1349,
        tipo_id: 3,
      },
      {
        trabajador_id: 1350,
        tipo_id: 3,
      },
      {
        trabajador_id: 1351,
        tipo_id: 3,
      },
      {
        trabajador_id: 1352,
        tipo_id: 3,
      },
      {
        trabajador_id: 1353,
        tipo_id: 3,
      },
      {
        trabajador_id: 1354,
        tipo_id: 3,
      },
      {
        trabajador_id: 1355,
        tipo_id: 3,
      },
      {
        trabajador_id: 1356,
        tipo_id: 3,
      },
      {
        trabajador_id: 1357,
        tipo_id: 3,
      },
      {
        trabajador_id: 1358,
        tipo_id: 3,
      },
      {
        trabajador_id: 1360,
        tipo_id: 3,
      },
      {
        trabajador_id: 1361,
        tipo_id: 3,
      },
      {
        trabajador_id: 1362,
        tipo_id: 3,
      },
      {
        trabajador_id: 1363,
        tipo_id: 3,
      },
      {
        trabajador_id: 1365,
        tipo_id: 3,
      },
      {
        trabajador_id: 1366,
        tipo_id: 3,
      },
      {
        trabajador_id: 1367,
        tipo_id: 3,
      },
      {
        trabajador_id: 1368,
        tipo_id: 3,
      },
      {
        trabajador_id: 1369,
        tipo_id: 3,
      },
      {
        trabajador_id: 1370,
        tipo_id: 3,
      },
      {
        trabajador_id: 1371,
        tipo_id: 3,
      },
      {
        trabajador_id: 1374,
        tipo_id: 3,
      },
      {
        trabajador_id: 1375,
        tipo_id: 3,
      },
      {
        trabajador_id: 1377,
        tipo_id: 3,
      },
      {
        trabajador_id: 1378,
        tipo_id: 3,
      },
      {
        trabajador_id: 1380,
        tipo_id: 3,
      },
      {
        trabajador_id: 1381,
        tipo_id: 3,
      },
      {
        trabajador_id: 1382,
        tipo_id: 3,
      },
      {
        trabajador_id: 1383,
        tipo_id: 3,
      },
      {
        trabajador_id: 1384,
        tipo_id: 3,
      },
      {
        trabajador_id: 1385,
        tipo_id: 3,
      },
      {
        trabajador_id: 1386,
        tipo_id: 3,
      },
      {
        trabajador_id: 1387,
        tipo_id: 3,
      },
      {
        trabajador_id: 1388,
        tipo_id: 3,
      },
      {
        trabajador_id: 1389,
        tipo_id: 3,
      },
      {
        trabajador_id: 1390,
        tipo_id: 3,
      },
      {
        trabajador_id: 1392,
        tipo_id: 3,
      },
      {
        trabajador_id: 1394,
        tipo_id: 3,
      },
      {
        trabajador_id: 1395,
        tipo_id: 3,
      },
      {
        trabajador_id: 1396,
        tipo_id: 3,
      },
      {
        trabajador_id: 1397,
        tipo_id: 3,
      },
      {
        trabajador_id: 1399,
        tipo_id: 3,
      },
      {
        trabajador_id: 1401,
        tipo_id: 3,
      },
      {
        trabajador_id: 1403,
        tipo_id: 3,
      },
      {
        trabajador_id: 1404,
        tipo_id: 3,
      },
      {
        trabajador_id: 1407,
        tipo_id: 3,
      },
      {
        trabajador_id: 1408,
        tipo_id: 3,
      },
      {
        trabajador_id: 1409,
        tipo_id: 3,
      },
      {
        trabajador_id: 1410,
        tipo_id: 3,
      },
      {
        trabajador_id: 1411,
        tipo_id: 3,
      },
      {
        trabajador_id: 1412,
        tipo_id: 3,
      },
      {
        trabajador_id: 1413,
        tipo_id: 3,
      },
      {
        trabajador_id: 1414,
        tipo_id: 3,
      },
      {
        trabajador_id: 1415,
        tipo_id: 3,
      },
      {
        trabajador_id: 1416,
        tipo_id: 3,
      },
      {
        trabajador_id: 1417,
        tipo_id: 3,
      },
      {
        trabajador_id: 1418,
        tipo_id: 3,
      },
      {
        trabajador_id: 1420,
        tipo_id: 3,
      },
      {
        trabajador_id: 1422,
        tipo_id: 3,
      },
      {
        trabajador_id: 1423,
        tipo_id: 3,
      },
      {
        trabajador_id: 1424,
        tipo_id: 3,
      },
      {
        trabajador_id: 1425,
        tipo_id: 3,
      },
      {
        trabajador_id: 1427,
        tipo_id: 3,
      },
      {
        trabajador_id: 1428,
        tipo_id: 3,
      },
      {
        trabajador_id: 1430,
        tipo_id: 3,
      },
      {
        trabajador_id: 1431,
        tipo_id: 3,
      },
      {
        trabajador_id: 1432,
        tipo_id: 3,
      },
      {
        trabajador_id: 1433,
        tipo_id: 3,
      },
      {
        trabajador_id: 1434,
        tipo_id: 3,
      },
      {
        trabajador_id: 1435,
        tipo_id: 3,
      },
      {
        trabajador_id: 1436,
        tipo_id: 3,
      },
      {
        trabajador_id: 1437,
        tipo_id: 3,
      },
      {
        trabajador_id: 1439,
        tipo_id: 3,
      },
      {
        trabajador_id: 1440,
        tipo_id: 3,
      },
      {
        trabajador_id: 1441,
        tipo_id: 3,
      },
      {
        trabajador_id: 1442,
        tipo_id: 3,
      },
      {
        trabajador_id: 1443,
        tipo_id: 3,
      },
      {
        trabajador_id: 1446,
        tipo_id: 3,
      },
      {
        trabajador_id: 1447,
        tipo_id: 3,
      },
      {
        trabajador_id: 1449,
        tipo_id: 3,
      },
      {
        trabajador_id: 1450,
        tipo_id: 3,
      },
      {
        trabajador_id: 1451,
        tipo_id: 3,
      },
      {
        trabajador_id: 1452,
        tipo_id: 3,
      },
      {
        trabajador_id: 1453,
        tipo_id: 3,
      },
      {
        trabajador_id: 1454,
        tipo_id: 3,
      },
      {
        trabajador_id: 1455,
        tipo_id: 3,
      },
      {
        trabajador_id: 1456,
        tipo_id: 3,
      },
      {
        trabajador_id: 1457,
        tipo_id: 3,
      },
      {
        trabajador_id: 1458,
        tipo_id: 3,
      },
      {
        trabajador_id: 1460,
        tipo_id: 3,
      },
      {
        trabajador_id: 1462,
        tipo_id: 3,
      },
      {
        trabajador_id: 1463,
        tipo_id: 3,
      },
      {
        trabajador_id: 1464,
        tipo_id: 3,
      },
      {
        trabajador_id: 1465,
        tipo_id: 3,
      },
      {
        trabajador_id: 1466,
        tipo_id: 3,
      },
      {
        trabajador_id: 1467,
        tipo_id: 3,
      },
      {
        trabajador_id: 1468,
        tipo_id: 3,
      },
      {
        trabajador_id: 1469,
        tipo_id: 3,
      },
      {
        trabajador_id: 1471,
        tipo_id: 3,
      },
      {
        trabajador_id: 1472,
        tipo_id: 3,
      },
      {
        trabajador_id: 1474,
        tipo_id: 3,
      },
      {
        trabajador_id: 1475,
        tipo_id: 3,
      },
      {
        trabajador_id: 1477,
        tipo_id: 3,
      },
      {
        trabajador_id: 1479,
        tipo_id: 3,
      },
      {
        trabajador_id: 1482,
        tipo_id: 3,
      },
      {
        trabajador_id: 1483,
        tipo_id: 3,
      },
      {
        trabajador_id: 1484,
        tipo_id: 3,
      },
      {
        trabajador_id: 1485,
        tipo_id: 3,
      },
      {
        trabajador_id: 1486,
        tipo_id: 3,
      },
      {
        trabajador_id: 1490,
        tipo_id: 3,
      },
      {
        trabajador_id: 1493,
        tipo_id: 3,
      },
      {
        trabajador_id: 1494,
        tipo_id: 3,
      },
      {
        trabajador_id: 1495,
        tipo_id: 3,
      },
      {
        trabajador_id: 1496,
        tipo_id: 3,
      },
      {
        trabajador_id: 1497,
        tipo_id: 3,
      },
      {
        trabajador_id: 1498,
        tipo_id: 3,
      },
      {
        trabajador_id: 1499,
        tipo_id: 3,
      },
      {
        trabajador_id: 1500,
        tipo_id: 3,
      },
      {
        trabajador_id: 1501,
        tipo_id: 3,
      },
      {
        trabajador_id: 1502,
        tipo_id: 3,
      },
      {
        trabajador_id: 1503,
        tipo_id: 3,
      },
      {
        trabajador_id: 1504,
        tipo_id: 3,
      },
      {
        trabajador_id: 1506,
        tipo_id: 3,
      },
      {
        trabajador_id: 1507,
        tipo_id: 3,
      },
      {
        trabajador_id: 1508,
        tipo_id: 3,
      },
      {
        trabajador_id: 1509,
        tipo_id: 3,
      },
      {
        trabajador_id: 1510,
        tipo_id: 3,
      },
      {
        trabajador_id: 1511,
        tipo_id: 3,
      },
      {
        trabajador_id: 1512,
        tipo_id: 3,
      },
      {
        trabajador_id: 1513,
        tipo_id: 3,
      },
      {
        trabajador_id: 1514,
        tipo_id: 3,
      },
      {
        trabajador_id: 1515,
        tipo_id: 3,
      },
      {
        trabajador_id: 1516,
        tipo_id: 3,
      },
      {
        trabajador_id: 1517,
        tipo_id: 3,
      },
      {
        trabajador_id: 1519,
        tipo_id: 3,
      },
      {
        trabajador_id: 1525,
        tipo_id: 3,
      },
      {
        trabajador_id: 1526,
        tipo_id: 3,
      },
      {
        trabajador_id: 1527,
        tipo_id: 3,
      },
      {
        trabajador_id: 1528,
        tipo_id: 3,
      },
      {
        trabajador_id: 1529,
        tipo_id: 3,
      },
      {
        trabajador_id: 1534,
        tipo_id: 3,
      },
      {
        trabajador_id: 1535,
        tipo_id: 3,
      },
      {
        trabajador_id: 1536,
        tipo_id: 3,
      },
      {
        trabajador_id: 1537,
        tipo_id: 3,
      },
      {
        trabajador_id: 1538,
        tipo_id: 3,
      },
      {
        trabajador_id: 1540,
        tipo_id: 3,
      },
      {
        trabajador_id: 1541,
        tipo_id: 3,
      },
      {
        trabajador_id: 1542,
        tipo_id: 3,
      },
      {
        trabajador_id: 1544,
        tipo_id: 3,
      },
      {
        trabajador_id: 1545,
        tipo_id: 3,
      },
      {
        trabajador_id: 1546,
        tipo_id: 3,
      },
      {
        trabajador_id: 1548,
        tipo_id: 3,
      },
      {
        trabajador_id: 1549,
        tipo_id: 3,
      },
      {
        trabajador_id: 1550,
        tipo_id: 3,
      },
      {
        trabajador_id: 1551,
        tipo_id: 3,
      },
      {
        trabajador_id: 1552,
        tipo_id: 3,
      },
      {
        trabajador_id: 1555,
        tipo_id: 3,
      },
      {
        trabajador_id: 1556,
        tipo_id: 3,
      },
      {
        trabajador_id: 1557,
        tipo_id: 3,
      },
      {
        trabajador_id: 1558,
        tipo_id: 3,
      },
      {
        trabajador_id: 1559,
        tipo_id: 3,
      },
      {
        trabajador_id: 1560,
        tipo_id: 3,
      },
      {
        trabajador_id: 1561,
        tipo_id: 3,
      },
      {
        trabajador_id: 1562,
        tipo_id: 3,
      },
      {
        trabajador_id: 1563,
        tipo_id: 3,
      },
      {
        trabajador_id: 1564,
        tipo_id: 3,
      },
      {
        trabajador_id: 1605,
        tipo_id: 3,
      },
      {
        trabajador_id: 1606,
        tipo_id: 3,
      },
      {
        trabajador_id: 1607,
        tipo_id: 3,
      },
      {
        trabajador_id: 1608,
        tipo_id: 3,
      },
      {
        trabajador_id: 1609,
        tipo_id: 3,
      },
      {
        trabajador_id: 1610,
        tipo_id: 3,
      },
      {
        trabajador_id: 1628,
        tipo_id: 3,
      },
      {
        trabajador_id: 1629,
        tipo_id: 3,
      },
      {
        trabajador_id: 1630,
        tipo_id: 3,
      },
      {
        trabajador_id: 1631,
        tipo_id: 3,
      },
      {
        trabajador_id: 1632,
        tipo_id: 3,
      },
      {
        trabajador_id: 1633,
        tipo_id: 3,
      },
      {
        trabajador_id: 1634,
        tipo_id: 3,
      },
      {
        trabajador_id: 1635,
        tipo_id: 3,
      },
      {
        trabajador_id: 1636,
        tipo_id: 3,
      },
      {
        trabajador_id: 1637,
        tipo_id: 3,
      },
      {
        trabajador_id: 1638,
        tipo_id: 3,
      },
      {
        trabajador_id: 1639,
        tipo_id: 3,
      },
      {
        trabajador_id: 1640,
        tipo_id: 3,
      },
      {
        trabajador_id: 1641,
        tipo_id: 3,
      },
      {
        trabajador_id: 1642,
        tipo_id: 3,
      },
      {
        trabajador_id: 1643,
        tipo_id: 3,
      },
      {
        trabajador_id: 1645,
        tipo_id: 3,
      },
      {
        trabajador_id: 1646,
        tipo_id: 3,
      },
      {
        trabajador_id: 1648,
        tipo_id: 3,
      },
      {
        trabajador_id: 1649,
        tipo_id: 3,
      },
      {
        trabajador_id: 1651,
        tipo_id: 3,
      },
      {
        trabajador_id: 1652,
        tipo_id: 3,
      },
      {
        trabajador_id: 1653,
        tipo_id: 3,
      },
      {
        trabajador_id: 1654,
        tipo_id: 3,
      },
      {
        trabajador_id: 1655,
        tipo_id: 3,
      },
      {
        trabajador_id: 1656,
        tipo_id: 3,
      },
      {
        trabajador_id: 1657,
        tipo_id: 3,
      },
      {
        trabajador_id: 1659,
        tipo_id: 3,
      },
      {
        trabajador_id: 1660,
        tipo_id: 3,
      },
      {
        trabajador_id: 1661,
        tipo_id: 3,
      },
      {
        trabajador_id: 1662,
        tipo_id: 3,
      },
      {
        trabajador_id: 1663,
        tipo_id: 3,
      },
      {
        trabajador_id: 1664,
        tipo_id: 3,
      },
      {
        trabajador_id: 1665,
        tipo_id: 3,
      },
      {
        trabajador_id: 1666,
        tipo_id: 3,
      },
      {
        trabajador_id: 1667,
        tipo_id: 3,
      },
      {
        trabajador_id: 1668,
        tipo_id: 3,
      },
      {
        trabajador_id: 1669,
        tipo_id: 3,
      },
      {
        trabajador_id: 1670,
        tipo_id: 3,
      },
      {
        trabajador_id: 1671,
        tipo_id: 3,
      },
      {
        trabajador_id: 1673,
        tipo_id: 3,
      },
      {
        trabajador_id: 1674,
        tipo_id: 3,
      },
      {
        trabajador_id: 1676,
        tipo_id: 3,
      },
      {
        trabajador_id: 1677,
        tipo_id: 3,
      },
      {
        trabajador_id: 1679,
        tipo_id: 3,
      },
      {
        trabajador_id: 1680,
        tipo_id: 3,
      },
      {
        trabajador_id: 1681,
        tipo_id: 3,
      },
      {
        trabajador_id: 1682,
        tipo_id: 3,
      },
      {
        trabajador_id: 1684,
        tipo_id: 3,
      },
      {
        trabajador_id: 1700,
        tipo_id: 3,
      },
      {
        trabajador_id: 1701,
        tipo_id: 3,
      },
    ];

    const renacyt = [
      {
        trabajador_id: 470,
        tipo_id: 2,
      },
      {
        trabajador_id: 578,
        tipo_id: 2,
      },
      {
        trabajador_id: 603,
        tipo_id: 2,
      },
      {
        trabajador_id: 617,
        tipo_id: 2,
      },
      {
        trabajador_id: 654,
        tipo_id: 2,
      },
      {
        trabajador_id: 760,
        tipo_id: 2,
      },
      {
        trabajador_id: 770,
        tipo_id: 2,
      },
      {
        trabajador_id: 813,
        tipo_id: 2,
      },
      {
        trabajador_id: 841,
        tipo_id: 2,
      },
      {
        trabajador_id: 848,
        tipo_id: 2,
      },
      {
        trabajador_id: 856,
        tipo_id: 2,
      },
      {
        trabajador_id: 922,
        tipo_id: 2,
      },
      {
        trabajador_id: 1250,
        tipo_id: 2,
      },
      {
        trabajador_id: 1251,
        tipo_id: 2,
      },
      {
        trabajador_id: 1291,
        tipo_id: 2,
      },
      {
        trabajador_id: 1294,
        tipo_id: 2,
      },
      {
        trabajador_id: 1297,
        tipo_id: 2,
      },
      {
        trabajador_id: 1311,
        tipo_id: 2,
      },
      {
        trabajador_id: 1334,
        tipo_id: 2,
      },
      {
        trabajador_id: 1362,
        tipo_id: 2,
      },
      {
        trabajador_id: 1403,
        tipo_id: 2,
      },
      {
        trabajador_id: 1407,
        tipo_id: 2,
      },
      {
        trabajador_id: 1410,
        tipo_id: 2,
      },
      {
        trabajador_id: 1414,
        tipo_id: 2,
      },
      {
        trabajador_id: 1420,
        tipo_id: 2,
      },
      {
        trabajador_id: 1529,
        tipo_id: 2,
      },
    ];

    await queryInterface.bulkInsert(
      { schema, tableName: 'boletas_pago' },
      [...cafae, ...investigacion, ...renacyt],
      {},
    );
  },

  async down(queryInterface) {
    const schema = 'boletaspago';

    await queryInterface.bulkDelete(
      { schema, tableName: 'boletas_pago' },
      null,
      {},
    );

    await queryInterface.sequelize.query(
      'ALTER SEQUENCE boletaspago.boletas_pago_id_seq RESTART WITH 1;',
    );
  },
};
