import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
} from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { text, align } = attributes;
	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ align }
					onChange={ ( value ) => setAttributes( { align: value } ) }
				/>
			</BlockControls>
			<RichText
				{ ...useBlockProps( {
					className: `feltino-align-${ align }`,
				} ) }
				tagName="h1"
				value={ text }
				onChange={ ( value ) => setAttributes( { text: value } ) }
				placeholder="Enter title"
				allowedFormats={ [] }
			/>
		</>
	);
}
