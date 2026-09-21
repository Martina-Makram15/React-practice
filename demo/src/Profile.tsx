// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     const id = setInterval(() => {
//       console.log('Count is:', count);
//     }, 1000);
//     return () => clearInterval(id);
//   }, [count]);

//   // Web: <button onClick={...}>
//   // RN: <TouchableOpacity onPress={...}>
//   return <Button onPress={() => setCount(c => c + 1)} title={`Count: ${count}`} />;
// }

// interface User {
//   id: number;
//   name: string;
//   email: string;

// }

// async function getUser(id: number): Promise<User> {
//   const response = await fetch(`/api/users/${id}`);
//   return response.json();
// }

// type ApiResponseType =  {
// success : true  ;
// data : User
// } | {

// }

// interface ApiResponse<T> {
//   success: boolean;
//   data?: T;
//   error?: string;
// }

// function handleResponse(res: ApiResponseType) {
//   if (res.success) {
//    console.log(res.data?.name);
//   }

// }
