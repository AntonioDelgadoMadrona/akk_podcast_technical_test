const get = async ({ endpoint }: { endpoint: string }) => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`;
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

const post = async ({ endpoint, params }: { endpoint: string; params: Object }) => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...params }),
  });
  return await response.json();
};

const put = async ({ endpoint, params }: { endpoint: string; params: Object }) => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...params }),
  });
  return await response.json();
};

const remove = async ({ endpoint }: { endpoint: string }) => {
  const url = `https://api.allorigins.win/get?url=${encodeURIComponent(endpoint)}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

const apiUtils = {
  get,
  post,
  put,
  delete: remove,
};

export default apiUtils;
