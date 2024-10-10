import { useEffect, useState, useContext } from "react";
import { AppContext } from "../context/Appcontext";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false); // Local loading state
  const { setError, accessToken } = useContext(AppContext);

  useEffect(() => {
    let isMounted = true; // Flag to check if the component is still mounted

    const fetchData = async () => {
      setLoading(true); // Set global loading state
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        if (isMounted) {
          setData(result); // Set data only if component is still mounted
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false); // Set global loading state to false
        }
      }
    };

    if (url) {
      fetchData(); // Only fetch data if url is provided
    }

    return () => {
      isMounted = false; // Cleanup function to prevent setting state on unmounted component
    };
  }, [url, accessToken, setLoading, setError]);

  return { data, loading }; // Return local loading state
};

export default useFetchData;
