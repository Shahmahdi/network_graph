// interface TreeNode {
//   name: string;
//   children: []
// }

export const boxType = {
  box: "box",
  tg: "tg",
  tgBoxWithSplitter: "tgBoxWithSplitter"
};

export const rawData = {
  name: "root",
  children: [
    {
      name: "A",
      cableType: "fiber",
      boxType: boxType.tg,
      children: [
        { name: "a1"},
        { name: "a2"},
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
                { name: "d3", cableType: "fiber", boxType: boxType.tg }
              ]
            },
            {}
          ]
        }
      ]
    },
    { name: "Z" },
    { name: "B", boxType: boxType.tgBoxWithSplitter, children:[{name: "b1"}, {name: "b2"}, {name: "b3"}, {}] }
  ]
};
