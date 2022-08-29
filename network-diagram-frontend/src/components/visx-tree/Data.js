// interface TreeNode {
//   name: string;
//   children: []
// }

// box color
// tg box color
// splitter color
// direct fiber connection user color
// normal user color

// cable distance amount color - black (fiber)
// cable distance amount color - red (cat5)

export const boxType = {
  box: "box",
  tg: "tg",
  tgBoxWithSplitter: "tgBoxWithSplitter",
  userHome: "userHome",
  none: "none"
};

export const boxTypeColor = {
  box: "#d3a23680",
  tg: "#58cae9",
  tgBoxWithSplitter: "#61dafb66",
  userHome: "#bd80c973",
  none: "#00dd586e"
};

export const cableTypes = {
  fiber: "fiber",
  cat5: "cat5",
  cat4: "cat4",
  originalCat6: "originalCat6"
};

export const fiberConnectionUpMediums = {
  mc: "mc",
  onu: "onu",
  cat5: "cat5"
};

export const fiberConnectionUpMediumColors = {
  mc: "blue",
  onu: "black"
};

export const rawData = {
  name: "root",
  children: [
    {
      name: "A",
      cableType: cableTypes.fiber,
      boxType: boxType.tg,
      children: [
        { name: "a1" },
        { name: "a2" },
        { name: "a3" },
        {
          name: "C",
          boxType: boxType.tg,
          children: [
            { name: "c1" },
            {
              name: "D",
              children: [
                { name: "d1" },
                { name: "d2" },
                {
                  name: "d3",
                  cableType: cableTypes.fiber,
                  boxType: boxType.tg
                }
              ]
            },
            {}
          ]
        }
      ]
    },
    { name: "Z" },
    {
      name: "B",
      boxType: boxType.tgBoxWithSplitter,
      children: [{ name: "b1" }, { name: "b2" }, { name: "b3" }, {}]
    }
  ]
};

export const CafeDataTree = [
  {
    id: "Router (Green Road Branch (NOC))",
    name: "Router (Green Road Branch (NOC))",
    parent: null
  },
  {
    id: "143_mim_monjil_Inside_Office",
    name: "143 mim monjil (Inside Office)",
    cableType: cableTypes.cat5,
    boxType: boxType.box,
    routerPort: 5,
    parent: "Router (Green Road Branch (NOC))"
  },
  {
    id: "BWDB_Haor",
    name: "BWDB Haor",
    cableType: cableTypes.fiber,
    fiberCores: 4,
    fiberConnectionUpMedium: fiberConnectionUpMediums.mc,
    boxType: boxType.box,
    routerPort: 1,
    parent: "Router (Green Road Branch (NOC))"
  },
  {
    id: "Ambagan",
    name: "Ambagan",
    cableType: cableTypes.fiber,
    fiberCores: 4,
    fiberConnectionUpMedium: fiberConnectionUpMediums.mc,
    boxType: boxType.box,
    routerPort: 4,
    parent: "BWDB_Haor"
  }
];

export const cafeData = {
  id: "Router (Green Road Branch (NOC))",
  name: "Router (Green Road Branch (NOC))",
  children: [
    {
      id: "143_mim_monjil_Inside_Office",
      name: "143 mim monjil (Inside Office)",
      cableType: cableTypes.cat5,
      boxType: boxType.box,
      routerPort: 5
    },
    {
      id: "BWDB_Haor",
      name: "BWDB Haor",
      cableType: cableTypes.fiber,
      fiberCores: 4,
      fiberConnectionUpMedium: fiberConnectionUpMediums.mc,
      boxType: boxType.box,
      routerPort: 1,
      children: []
    },
    {
      id: "Ambagan",
      name: "Ambagan",
      cableType: cableTypes.fiber,
      fiberCores: 4,
      fiberConnectionUpMedium: fiberConnectionUpMediums.mc,
      boxType: boxType.box,
      routerPort: 4
    },
    {
      id: "44/I_East_Raza_Bazar",
      name: "44/I East Raza Bazar",
      cableType: cableTypes.fiber,
      fiberCores: 4,
      fiberConnectionUpMedium: fiberConnectionUpMediums.mc,
      boxType: boxType.box,
      routerPort: 2,
      children: [
        {
          id: "120/2_East_Raza_Bazar",
          name: "120/2 East Raza Bazar",
          cableType: cableTypes.fiber,
          fiberCores: 4,
          fiberConnectionUpMedium: fiberConnectionUpMediums.mc,
          boxType: boxType.box
        }
      ]
    },
    {
      id: "OLT",
      name: "OLT",
      cableType: cableTypes.originalCat6,
      children: [
        {
          id: "143_mim_monjil_outside_on_sunset_splitter",
          name: "143 mim monjil (outside on sunset) splitter",
          cableType: cableTypes.fiber,
          fiberCores: 12,
          boxType: boxType.tgBoxWithSplitter,
          children: [
            {
              id: "52/7_East_Raza_Bazar",
              name: "52/7 East Raza Bazar",
              cableType: cableTypes.fiber,
              fiberCores: 4,
              fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
              boxType: boxType.box
            },
            {
              id: "moin_home_wifi",
              name: "moin_home_wifi",
              cableType: cableTypes.fiber,
              fiberCores: 4,
              fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
              boxType: boxType.userHome
            },
            {
              id: "Urban_point_1",
              name: "Urban point-1",
              cableType: cableTypes.fiber,
              fiberCores: 4,
              fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
              boxType: boxType.box,
              children: [
                {
                  id: "Urban_point_2",
                  name: "Urban point-2",
                  cableType: cableTypes.cat5,
                  boxType: boxType.box
                }
              ]
            },
            {
              id: "143_Green_Road",
              name: "143 Green Road",
              cableType: cableTypes.fiber,
              fiberCores: 4,
              fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
              boxType: boxType.box,
              children: [
                {
                  id: "144/A_green_road",
                  name: "144/A green road",
                  cableType: cableTypes.cat5,
                  boxType: boxType.box
                },
                {
                  id: "50_East_Raza_Bazar",
                  name: "50 East Raza Bazar",
                  cableType: cableTypes.cat5,
                  boxType: boxType.box
                }
              ]
            },
            {
              id: "Estern_housing_1",
              name: "Estern housing-1",
              cableType: cableTypes.fiber,
              fiberCores: 4,
              fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
              boxType: boxType.box,
              children: [
                {
                  id: "BWDB_1",
                  name: "BWDB-1",
                  cableType: cableTypes.cat5,
                  boxType: boxType.box,
                  children: [
                    {
                      id: "BWDB_2",
                      name: "BWDB-2",
                      cableType: cableTypes.cat5,
                      boxType: boxType.box
                    }
                  ]
                }
              ]
            },
            {
              id: "Eastern_housing_2_splitter",
              name: "Eastern housing-2_splitter",
              cableType: cableTypes.fiber,
              fiberCores: 4,
              boxType: boxType.tgBoxWithSplitter,
              children: [
                {
                  id: "Eastern_housing_2",
                  name: "Eastern housing-2",
                  cableType: cableTypes.fiber,
                  fiberCores: 4,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.box
                },
                {
                  id: "jamiluddin16_2",
                  name: "jamiluddin16/2",
                  cableType: cableTypes.fiber,
                  fiberCores: 2,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.userHome
                },
                {
                  id: "parama29",
                  name: "Parama29",
                  cableType: cableTypes.fiber,
                  fiberCores: 4,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.userHome
                },
                {
                  id: "masum",
                  name: "masum",
                  cableType: cableTypes.fiber,
                  fiberCores: 2,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.userHome
                },
                {
                  id: "shahidul16_1",
                  name: "shahidul16/1",
                  cableType: cableTypes.fiber,
                  fiberCores: 2,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.userHome
                },
                {},
                {},
                {}
              ]
            },
            {
              id: "52_4_east_raza_bazar_splitter",
              name: "52/4 east raza bazar_splitter",
              cableType: cableTypes.fiber,
              fiberCores: 4,
              boxType: boxType.tgBoxWithSplitter,
              children: [
                {
                  id: "52_4_east_raza_bazar",
                  name: "52/4 east raza bazar",
                  cableType: cableTypes.fiber,
                  fiberCores: 4,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.box
                },
                {
                  id: "salam",
                  name: "salam",
                  cableType: cableTypes.fiber,
                  fiberCores: 2,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.userHome
                },
                {
                  id: "sohel52_4",
                  name: "sohel52/4",
                  cableType: cableTypes.fiber,
                  fiberCores: 4,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.userHome
                },
                {
                  id: "jabir52_9",
                  name: "jabir52/9",
                  cableType: cableTypes.fiber,
                  fiberCores: 2,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.userHome
                },
                {
                  id: "93_1_east_raza_bazar",
                  name: "93/1 east raza bazar",
                  cableType: cableTypes.fiber,
                  fiberCores: 4,
                  fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                  boxType: boxType.box,
                  children: [
                    {
                      id: "91_east_raza_bazar_metro",
                      name: "91 east raza bazar (Metro)",
                      cableType: cableTypes.cat5,
                      boxType: boxType.box,
                    }
                  ]
                },
                {
                  id: "MCT_splitter",
                  name: "MCT_splitter",
                  cableType: cableTypes.fiber,
                  fiberCores: 4,
                  boxType: boxType.tgBoxWithSplitter,
                  children: [
                    {
                      id: "Dot_Computer",
                      name: "Dot Computer",
                      cableType: cableTypes.fiber,
                      fiberCores: 4,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.box,
                      children: [
                        {
                          id: "147_shelteck",
                          name: "147 shelteck",
                          cableType: cableTypes.cat5,
                          boxType: boxType.box,
                        }
                      ]
                    },
                    {
                      id: "mahbub147",
                      name: "mahbub147",
                      cableType: cableTypes.fiber,
                      fiberCores: 2,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.userHome
                    },
                    {
                      id: "dr_kabir_e3",
                      name: "dr.kabir.e3",
                      cableType: cableTypes.fiber,
                      fiberCores: 4,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.userHome
                    },
                    {
                      id: "reza",
                      name: "reza",
                      cableType: cableTypes.fiber,
                      fiberCores: 2,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.userHome
                    },
                    {
                      id: "mct",
                      name: "MCT",
                      cableType: cableTypes.fiber,
                      fiberCores: 4,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.box,
                      children: [
                        {
                          id: "147_I_green_road",
                          name: "147/I Green Road",
                          cableType: cableTypes.cat5,
                          boxType: boxType.box,
                        },
                        {
                          id: "57_1_green_road",
                          name: "57/1 Green Road",
                          cableType: cableTypes.cat5,
                          boxType: boxType.box,
                        }
                      ]
                    },
                    {},
                    {},
                    {}
                  ]
                },
                {
                  id: "84_east_raza_bazar_splitter",
                  name: "84 east raza bazar splitter",
                  cableType: cableTypes.fiber,
                  fiberCores: 4,
                  boxType: boxType.tgBoxWithSplitter,
                  children: [
                    {
                      id: "34_b_east_raza_bazar",
                      name: "34/b east raza bazar",
                      cableType: cableTypes.fiber,
                      fiberCores: 4,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.box
                    },
                    {
                      id: "azad",
                      name: "azad",
                      cableType: cableTypes.fiber,
                      fiberCores: 2,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.userHome
                    },
                    {
                      id: "62_east_raza_bazar",
                      name: "62 east raza bazar",
                      cableType: cableTypes.fiber,
                      fiberCores: 4,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.box,
                      children: [
                        {
                          id: "71_east_raza_bazar_city_hostel",
                          name: "71 east raza bazar (City hostel)",
                          cableType: cableTypes.fiber,
                          fiberCores: 4,
                          fiberConnectionUpMedium: fiberConnectionUpMediums.mc,
                          boxType: boxType.box
                        }
                      ]
                    },
                    {
                      id: "84_east_raza_bazar",
                      name: "84 east raza bazar",
                      cableType: cableTypes.fiber,
                      fiberCores: 4,
                      fiberConnectionUpMedium: fiberConnectionUpMediums.onu,
                      boxType: boxType.box,
                      children: [
                        {
                          id: "117_east_raza_bazar",
                          name: "117 east raza bazar",
                          cableType: cableTypes.cat5,
                          boxType: boxType.box,
                          children: [
                            {
                              id: "148_east_raza_bazar",
                              name: "148 east raza bazar",
                              cableType: cableTypes.cat5,
                              boxType: boxType.box,
                            }
                          ]
                        }
                      ]
                    },
                    {},
                    {},
                    {},
                    {}
                  ]
                },
                {}
              ]
            },
            {}
          ]
        }
      ]
    }
  ]
};
