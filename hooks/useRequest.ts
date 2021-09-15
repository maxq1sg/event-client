// import { useEffect, useState } from "react";

// export default function useRequest(request) {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string>("");

//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       request()
//         .then((response) => setData(response.data))
//         .catch((error) => setError(error))
//         .finally(() => setLoading(false));
//     }, 1000);
//   }, []);

//   return [data, loading, error];
// }
export {}