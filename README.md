# BD_FEED

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`Tailwind-Shadcn`].


## Getting Started

Run the development server:

```bash
yarn
# then
yarn build
# then
yarn start
```

## Architecture

* First I picked Nextjs as social media sites are heavily dependent on SEO. Next js sersite rendering, specially ISR is perfect for social media sites. 
* As UI library I picked Shadcn. With Shadcn I can easily customize component as per my design. Like other ui library Shad does not install all component, We can only import the required one. 
* For CSS I picked Tailwind. Tailwind perfectly go with Shad and has less dev time.
* For state I used redux tool kit. If I think about scalability redux is the best in the market. For big project I we should go down in the proven path and Redux show us that it has huge support form dev community.
*Here I followed repository pattern where all buisness logic is handled in state/different file. It much more dev friendly and We can move data from one component to another component efficiently.


