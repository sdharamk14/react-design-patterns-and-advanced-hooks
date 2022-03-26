import React, { useEffect, useState } from "react";

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

const WithFetch = (WrappedComponent, url) => {
  function ComponentWithFetch(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
      const getData = async () => {
        const data = await fetchData(url);
        setData([...data]);
      };

      getData();
    }, [data]);

    return <WrappedComponent {...props} data={data} />;
  }

  return ComponentWithFetch;
};

export default WithFetch;
