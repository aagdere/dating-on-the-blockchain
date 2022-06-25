# storage

## metamask

```
various flower admit kangaroo arm immune vapor evoke cheese nephew until rotate
```

## privy

https://docs.privy.io/guide/getting-started/privy-overview

NEXT_PUBLIC_PRIVY_API_KEY=2U0smUAuqYzXG-rYNJzNeJG9HQihzxNwUasB6FHtMuE=

```
// Initialize the Privy client.
const provider = typeof window !== "undefined" ? window.ethereum : null;
const session = new SiweSession(process.env.NEXT_PUBLIC_PRIVY_API_KEY, provider)
const client = new PrivyClient({
  session: session,
});



// get
const [firstName, favColor] = await client.put(state?.userId, [
    {
    field: "first-name",
    value: nameInput
    },
    {
    field: "fav-color",
    value: colorInput
    }
]);
```

## ipfs/filecoin

https://nft.storage

Satellite Address
12EayRS2V1kEsWESU9QMRseFhdxYxKicsiFmxrsLZHeLUtdps3S@us1.storj.io:7777
API Key
1ZRWNwD1tpGFQZrN93FisUXoeNf3sn1amx5r6jnNUHqzAiGPPTkGyJcpfNn83rBrnvcDFkWFj4Vc6AhMyZxHfzBf9oMtjwf3zMpDQNdsYVdYHhYYJ3zPgHTJbtx1EgQ8QcBu5w1a1Wycv6eBY2mqCjcgP78MR

https://nft.storage/docs/client/js/




## storj

https://docs.storj.io/dcs/getting-started/quickstart-uplink-cli/

```
uplink setup
uplink mb sj://cakes
uplink cp ~/Downloads/ape.jpeg sj://cakes
uplink ls sj://cakes
uplink cp sj://cakes/ape.jpeg ~/Downloads/cheesecake.jpg
uplink share --url sj://cakes/ape.jpeg

```

`storj` has an example from https://www.storj.io/ipfs

https://demo.storj-ipfs.com/ipfs/QmZYV89ivYv5uYyXHDjWmNAzzM7U45dCRcLCRDUoA7bHue