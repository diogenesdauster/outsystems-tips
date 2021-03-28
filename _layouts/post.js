import DefaultLayout from '@layouts/default'
import Head from 'next/head'
import Link from 'next/link'


export default function PostLayout(props) {

	return (
		<DefaultLayout>
			<Head>
				<title>{props.title}
			</Head>
			<article>
				<h1>{props.title}</h1>
<div dangerousslySetInnerHTML = {{__html: props.content}} />
<div><Link href='/'><a>Home</a></Link></div>
			</article>
		</DefaultLayout>
			
		
	)
}
