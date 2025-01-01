export const trySubscribe = async (email: string) => {
  // use the sendy api to subscribe the user to the list
  // if the response is "true", the user was subscribed
  const response = await fetch(process.env.NEXT_PUBLIC_EMAILLIST_SUBSCRIBE_URL as string, {
    method: "POST",
    body: new URLSearchParams({
      email,
      list: process.env.NEXT_PUBLIC_EMAILLIST_ID as string,
      api_key: process.env.NEXT_PUBLIC_EMAILLIST_API_KEY as string,
      boolean: 'true',
    }),
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  const result = await response.text();

  return result === "1";
}