// const directory = [
// {
//     id: 1,
//     name: "Parent 1",
//     children: [
//       {
//         id: 2,
//         name: "Parent 2",
//         children: [
//           {
//             id: 3,
//             name: "Child 1",
//           },
//           {
//             id: 4,
//             name: "Child 2",
//           },
//           {
//             id: 5,
//             name: "Child 3",
//             children: [
//               {
//                 id: 6,
//                 name: "Child 4",
//               },
//               {
//                 id: 7,
//                 name: "Child 5",
//               },
//             ],
//           },
//         ],
//       },
//       {
//         id: 8,
//         name: "Parent 3",
//       },
//       {
//         id: 9,
//         name: "Parent 4",
//       },
//     ],
//   },
// ];
  
//   export default directory;
  

const directory = [
  {
    id:1,
    name:"Fruits",
    children:[
      {
        id:2,
        name:"Citrus",
        children:[
          {
            id:3,
            name:"Orange",
          },
          {
            id:4,
            name:"Lemon"
          }
        ],
      },
      {
        id:5,
        name:"Berries",
        children:[
          {
            id:6,
            name:"Strawberry",
          },
          {
            id:7,
            name:"Blueberry"
          }
        ]
      }
    ]
  },
  {
    id:8,
    name:"Tropical",
    children:[
      {
        id:9,
        name:"Mango"
      },
      {
        id:10,
        name:"Banana"
      }
    ]
  },
  {
    id:11,
    name:"Apple"
  }
]


export default directory;