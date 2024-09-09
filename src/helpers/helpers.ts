// export const generateId = () => {
//     const random = Math.random().toString(36).substring(2)
//     const date = Date.now().toString
//     return date + random
// }
// // // helpers.ts
export const generateId = () => Date.now() + Math.floor(Math.random()* 1000);


