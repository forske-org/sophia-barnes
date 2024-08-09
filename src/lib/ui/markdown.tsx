import { MDXRemote } from 'next-mdx-remote/rsc'

export function RemoteMdx ({
    value
}: {
    value: string
}) {
    return <MDXRemote source={value} />
}

export default RemoteMdx
