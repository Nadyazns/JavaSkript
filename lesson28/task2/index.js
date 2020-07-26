// const fav = ['id-6', 'id-17', ];

// const tree = {
//     id: 'id-1',
//     name: 'Products',
//     nodes: [{
//             id: 'id-2',
//             name: 'Products',
//             nodes: [{
//                 id: 'id-6',
//                 name: 'Products',
//                 nodes: []
//             }]
//         },
//         {
//             id: 'id-17',
//             name: 'Products',
//             nodes: []
//         }
//     ],
// };

export const markFavorites = (tree, favorites) => {
    const isFavorite = favorites.includes(tree.id);

    return {
        ...tree,
        isFavorite,
        nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),

    }
};

// const result = markFavorites(tree, favorites);

// console.log(result);