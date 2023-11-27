import { useBlockProps, RichText } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	const { text, align } = attributes;
	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: `feltino-align-${ align }`,
			} ) }
			tagName="h1"
			value={ text }
		/>
	);
}
