import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

var result="a";
pb.collection('estudiante').getList(1, 50).then((result) =>{
    console.log('Result:', result.items[0]);
  }).catch((error)=> {
    console.log('Error:', error);
  });

export default result;


// const result = await pb.collection("estudiante").getList(1, 20, {});

// const userData = await pb
//   .collection("estudiante")
//   .authWithPassword("kevin.monjardin193@tectijuana.edu.mx", "12345678");

