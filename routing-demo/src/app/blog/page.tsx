import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    absolute:'Blog',
    default:'Next.js',
    template:'%s| Pratik'
  },
}

function Blog() {
  return (
    <div>My Blog</div>
  )
}

export default Blog