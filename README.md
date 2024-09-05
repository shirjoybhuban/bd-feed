# BD_FEED
Social Media feed where you can add post and see recent posts

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`Tailwind-Shadcn`].

#### Features

* View Feed with virtualization
* Add post with form validation

## Getting Started

Run the development server:

## Installation
1. Clone the repository:
```bash
 git clone https://github.com/shirjoybhuban/bd-feed.git
```
2. Install dependencies:
```bash
yarn
 ```
## Usage
To run the project, use the following command:
```bash
yarn build
# then
yarn start
```

## Architecture

* First I picked Nextjs as social media sites are heavily dependent on SEO. Next js sersite rendering, specially ISR is perfect for social media sites. 

* As UI library I picked Shadcn. With Shadcn I can easily customize component as per my design. Like other ui library Shad does not install all component, We can only import the required one. 

* For CSS I picked Tailwind. Tailwind perfectly go with Shad and has less dev time.

* For state I used redux tool kit. If I think about scalability redux is the best in the market. For big project I we should go down in the proven path and Redux show us that it has huge support form dev community.

*  Here I followed repository pattern where all business logic is handled in state/different file. It much more dev friendly and We can move data from one component to another component efficiently.


