import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

export default function Edit( { attributes, setAttributes } ) {
	const { title, description } = attributes;
	return (
		<div { ...useBlockProps() }>
			<RichText
				tagName="h2"
				value={ title }
				allowedFormats={ [] }
				placeholder={ __( 'Your Title', 'myblocks' ) }
				onChange={ ( value ) => setAttributes( { title: value } ) }
			/>
			<RichText
				tagName="p"
				value={ description }
				allowedFormats={ [] }
				placeholder={ __( 'Your Description', 'myblocks' ) }
				onChange={ ( value ) =>
					setAttributes( { description: value } )
				}
			/>
		</div>
	);
}
